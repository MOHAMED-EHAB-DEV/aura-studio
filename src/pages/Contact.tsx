import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHero } from "../components/ui/PageHero";
import { Footer } from "../components/layout/Footer";
import { MagneticButton } from "../components/motion/MagneticButton";
import { ArrowUpRight, Check, CheckCircle2, Mail, MapPin, Send, MessageSquare } from "lucide-react";

// Strict Zod Form Schema validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  budget: z.string().min(1, { message: "Please select a projected budget range." }),
  message: z.string().min(10, { message: "Project notes must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API pipeline
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmittedData(data);
    setShowToast(true);
    reset();

    // Auto-hide toast after 4.5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      {/* Page Hero */}
      <PageHero
        category="GET_IN_TOUCH"
        title="SAY HELLO."
        subtitle="Let's build something exceptional. Reach out to discuss project guidelines, calendar availability, or technical consulting slots."
      />

      {/* Split Layout Section */}
      <section className="relative bg-brand-bg px-6 py-16 md:px-12 md:py-24 border-b border-brand-border/20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Intake Details (Col 5) */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full space-y-12">
            <div>
              <span className="font-mono text-xs tracking-wider text-brand-primary uppercase font-bold mb-3 block">
                // CONTACT_INFO
              </span>
              <h2 className="font-display text-4xl font-extrabold text-brand-text mb-8 uppercase leading-[0.95] tracking-tighter">
                ESTABLISH THE<br />CONNECTION.
              </h2>
              
              <p className="text-sm text-brand-muted leading-relaxed font-sans max-w-sm mb-10">
                Have a design document or an active project brief? Forward it directly or complete our intake grid to coordinate an initial technical scoping call.
              </p>
            </div>

            {/* Direct Channels list */}
            <div className="space-y-6">
              {/* Channel 1: Email */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-surface border border-brand-border text-brand-primary">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block font-mono text-[9px] tracking-wider text-brand-muted/40 uppercase">
                    GENERAL_ENQUIRIES
                  </span>
                  <a href="mailto:hello@aurastudio.com" className="font-display text-lg font-bold text-brand-text hover:text-brand-primary transition-colors">
                    hello@aurastudio.com
                  </a>
                </div>
              </div>

              {/* Channel 2: Offices */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-surface border border-brand-border text-brand-primary">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block font-mono text-[9px] tracking-wider text-brand-muted/40 uppercase">
                    OUR_BASES
                  </span>
                  <p className="font-sans text-sm text-brand-text">
                    Brooklyn, NY // Shoreditch, London
                  </p>
                </div>
              </div>
            </div>

            {/* Micro-brand watermark */}
            <div className="hidden lg:block font-mono text-[9px] text-brand-muted/30 uppercase tracking-widest pt-12">
              AURA_CHANNELS_EST_2023 // ALL_CONNECTIONS_SSL
            </div>
          </div>

          {/* Right Column: Project Intake Form (Col 7) */}
          <div className="lg:col-span-7 bg-brand-surface/35 border border-brand-border/40 p-8 md:p-10 rounded-3xl relative">
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
              
              {/* Field 1: Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-[10px] tracking-widest text-brand-muted uppercase font-bold mb-2">
                  01_YOUR_NAME / ENTITY *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. John Doe / Quantum Labs"
                  {...register("name")}
                  className={`w-full bg-brand-bg border rounded-xl px-4 py-3.5 font-sans text-sm text-brand-text placeholder-brand-muted/40 focus:outline-none focus:border-brand-primary transition-colors ${
                    errors.name ? "border-brand-primary/40" : "border-brand-border"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 font-mono text-[10px] text-brand-primary text-left">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Field 2: Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-[10px] tracking-widest text-brand-muted uppercase font-bold mb-2">
                  02_EMAIL_ADDRESS *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. name@domain.com"
                  {...register("email")}
                  className={`w-full bg-brand-bg border rounded-xl px-4 py-3.5 font-sans text-sm text-brand-text placeholder-brand-muted/40 focus:outline-none focus:border-brand-primary transition-colors ${
                    errors.email ? "border-brand-primary/40" : "border-brand-border"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 font-mono text-[10px] text-brand-primary text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Field 3: Budget Range Dropdown */}
              <div>
                <label htmlFor="budget" className="block font-mono text-[10px] tracking-widest text-brand-muted uppercase font-bold mb-2">
                  03_PROJECTED_BUDGET *
                </label>
                <select
                  id="budget"
                  {...register("budget")}
                  className={`w-full bg-brand-bg border rounded-xl px-4 py-3.5 font-sans text-sm text-brand-text focus:outline-none focus:border-brand-primary transition-colors ${
                    errors.budget ? "border-brand-primary/40" : "border-brand-border"
                  }`}
                >
                  <option value="" className="text-brand-muted/40 bg-brand-surface">Select projected budget range</option>
                  <option value="10k-25k" className="bg-brand-surface">$10,000 – $25,000</option>
                  <option value="25k-50k" className="bg-brand-surface">$25,000 – $50,000</option>
                  <option value="50k-100k" className="bg-brand-surface">$50,000 – $100,000</option>
                  <option value="100k+" className="bg-brand-surface">$100,000+ (Enterprise)</option>
                </select>
                {errors.budget && (
                  <p className="mt-1 font-mono text-[10px] text-brand-primary text-left">
                    {errors.budget.message}
                  </p>
                )}
              </div>

              {/* Field 4: Message Project Notes */}
              <div>
                <label htmlFor="message" className="block font-mono text-[10px] tracking-widest text-brand-muted uppercase font-bold mb-2">
                  04_PROJECT_BRIEF_OR_NOTES *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Outline your project timeline, product scope, visual directives, and technical standards."
                  {...register("message")}
                  className={`w-full bg-brand-bg border rounded-xl px-4 py-3.5 font-sans text-sm text-brand-text placeholder-brand-muted/40 focus:outline-none focus:border-brand-primary transition-colors ${
                    errors.message ? "border-brand-primary/40" : "border-brand-border"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 font-mono text-[10px] text-brand-primary text-left">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 text-right">
                <MagneticButton
                  disabled={isSubmitting}
                  className="group flex w-full sm:w-auto items-center justify-center space-x-2 rounded-xl bg-brand-primary px-8 py-4 font-mono text-xs font-bold tracking-widest text-white hover:bg-brand-primary-dark transition-colors shadow-lg shadow-brand-primary/10 disabled:opacity-50"
                  id="submit-contact-form-btn"
                >
                  <Send size={12} className={isSubmitting ? "animate-pulse" : ""} />
                  <span>{isSubmitting ? "TRANSMITTING..." : "TRANSMIT_INTAKE"}</span>
                </MagneticButton>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* Interactive success toast message overlay */}
      <AnimatePresence>
        {showToast && submittedData && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 18, stiffness: 120 }}
            className="fixed bottom-8 right-6 md:right-12 z-50 flex max-w-md items-center space-x-4 rounded-2xl border border-brand-primary/30 bg-brand-surface p-5 shadow-2xl backdrop-blur-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary flex-shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div className="text-left font-sans">
              <p className="text-sm font-bold text-brand-text uppercase tracking-tight">
                Transmission Successful
              </p>
              <p className="text-xs text-brand-muted mt-1 leading-normal">
                Hello, <span className="font-semibold text-brand-primary">{submittedData.name}</span>. Your project brief has been securely transmitted. A partner will Scrutinize your notes and email you within 12 hours.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
export default Contact;
