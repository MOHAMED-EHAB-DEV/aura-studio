import React, { useEffect, useState, useRef } from "react";
import X from "./svgs/X";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useFocusTrap(modalRef, animate);
  useScrollLock(animate);
  useEscapeKey(onClose, animate);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={modalRef}
        className={`relative z-10 w-full max-w-lg rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-2xl transition-all duration-300 transform ${
          animate ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-brand-text transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};
