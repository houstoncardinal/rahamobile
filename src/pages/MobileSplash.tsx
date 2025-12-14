import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Mic, FileText, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mobile-first splash / onboarding screen.
// Auth is handled on the existing /auth page.

type Slide = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export function MobileSplash() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      icon: <Mic className="h-16 w-16" />, 
      title: "Voice‑first documentation",
      description: "Dictate at the bedside and let Raha structure your clinical notes."
    },
    {
      icon: <Shield className="h-16 w-16" />, 
      title: "Built for HIPAA workflows",
      description: "Privacy‑first design with PHI‑safe flows for modern healthcare teams."
    },
    {
      icon: <FileText className="h-16 w-16" />, 
      title: "Professional note outputs",
      description: "SOAP, SBAR and more – ready to drop into your EHR in seconds."
    }
  ];

  // Auto‑advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleGetStarted = () => {
    // Route to full auth experience (sign up + sign in)
    navigate("/auth");
  };

  const handleSignIn = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      {/* Top brand header */}
      <header className="px-6 pt-10 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-xl shadow-primary/30">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight" style={{ color: "#60baa2" }}>
              Raha
            </span>
            <span className="text-xs text-muted-foreground">
              Clinical Documentation AI
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSignIn}
          className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Skip
          <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </header>

      {/* Center carousel */}
      <main className="flex-1 flex flex-col justify-center px-6 pb-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="mx-auto mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
              {slides[currentSlide].icon}
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="mx-auto max-w-xs text-base text-muted-foreground leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Primary actions */}
        <div className="mt-10 space-y-3">
          <Button
            size="lg"
            className="h-14 w-full rounded-2xl text-lg font-semibold shadow-lg shadow-primary/25"
            onClick={handleGetStarted}
          >
            Get started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="h-14 w-full rounded-2xl text-lg"
            onClick={handleSignIn}
          >
            I already have an account
          </Button>

          <p className="pt-2 text-center text-[11px] leading-relaxed text-muted-foreground">
            By continuing you agree to Raha&apos;s{" "}
            <Link to="/terms" className="underline hover:text-foreground transition-colors">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline hover:text-foreground transition-colors">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
