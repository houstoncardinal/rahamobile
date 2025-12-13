import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Mic, FileText, ArrowRight, Mail, Lock, User, Eye, EyeOff, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type AuthMode = 'splash' | 'signin' | 'signup';

export function MobileSplash() {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState<AuthMode>('splash');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/app');
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/app');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Auto-advance slides
  useEffect(() => {
    if (authMode === 'splash') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [authMode]);

  const slides = [
    {
      icon: <Mic className="h-16 w-16" />,
      title: 'Voice-First Documentation',
      description: 'Speak naturally and watch your clinical notes generate instantly'
    },
    {
      icon: <Shield className="h-16 w-16" />,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with automatic PHI protection'
    },
    {
      icon: <FileText className="h-16 w-16" />,
      title: 'Smart Templates',
      description: 'SOAP, SBAR, and 10+ professional formats ready to use'
    }
  ];

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast.error('Invalid email or password');
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success('Welcome back!');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !fullName) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/app`,
          data: {
            full_name: fullName
          }
        }
      });

      if (error) {
        if (error.message.includes('already registered')) {
          toast.error('This email is already registered. Please sign in.');
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success('Account created successfully!');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      <AnimatePresence mode="wait">
        {authMode === 'splash' && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col px-6 py-12 safe-area-inset"
          >
            {/* Logo */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/80 shadow-2xl shadow-primary/30 mb-4">
                <Shield className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold" style={{ color: '#60baa2' }}>Raha</h1>
              <p className="text-muted-foreground mt-1">Clinical Documentation AI</p>
            </motion.div>

            {/* Slides */}
            <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center px-4"
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-6">
                    {slides[currentSlide].icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{slides[currentSlide].title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xs mx-auto">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Slide indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTAs */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mt-8"
            >
              <Button 
                size="lg" 
                className="w-full h-14 text-lg font-semibold rounded-2xl shadow-lg shadow-primary/20"
                onClick={() => setAuthMode('signup')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="w-full h-14 text-lg rounded-2xl"
                onClick={() => setAuthMode('signin')}
              >
                Already have an account? Sign in
              </Button>
            </motion.div>
          </motion.div>
        )}

        {(authMode === 'signin' || authMode === 'signup') && (
          <motion.div
            key="auth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-1 flex flex-col px-6 py-8 safe-area-inset"
          >
            {/* Back button */}
            <button 
              onClick={() => setAuthMode('splash')}
              className="self-start mb-6 flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-5 w-5 rotate-180 mr-1" />
              Back
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-xl shadow-primary/20 mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-2">
                {authMode === 'signin' ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-muted-foreground">
                {authMode === 'signin' 
                  ? 'Sign in to continue documenting' 
                  : 'Start your clinical documentation journey'}
              </p>
            </div>

            {/* Form */}
            <form 
              onSubmit={authMode === 'signin' ? handleSignIn : handleSignUp}
              className="flex-1 flex flex-col"
            >
              <div className="space-y-4 flex-1">
                {authMode === 'signup' && (
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="h-14 pl-12 text-lg rounded-2xl bg-muted/50 border-0"
                      autoComplete="name"
                    />
                  </div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 pl-12 text-lg rounded-2xl bg-muted/50 border-0"
                    autoComplete="email"
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-14 pl-12 pr-12 text-lg rounded-2xl bg-muted/50 border-0"
                    autoComplete={authMode === 'signin' ? 'current-password' : 'new-password'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {authMode === 'signin' && (
                  <button 
                    type="button"
                    onClick={() => navigate('/reset-password')}
                    className="text-sm text-primary hover:underline self-end"
                  >
                    Forgot password?
                  </button>
                )}
              </div>

              {/* Submit */}
              <div className="space-y-4 mt-8">
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold rounded-2xl shadow-lg shadow-primary/20"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      {authMode === 'signin' ? 'Signing in...' : 'Creating account...'}
                    </div>
                  ) : (
                    <>
                      {authMode === 'signin' ? 'Sign In' : 'Create Account'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-muted-foreground">
                  {authMode === 'signin' ? (
                    <>
                      Don't have an account?{' '}
                      <button 
                        type="button"
                        onClick={() => setAuthMode('signup')}
                        className="text-primary font-medium hover:underline"
                      >
                        Sign up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <button 
                        type="button"
                        onClick={() => setAuthMode('signin')}
                        className="text-primary font-medium hover:underline"
                      >
                        Sign in
                      </button>
                    </>
                  )}
                </p>
              </div>
            </form>

            {/* Footer */}
            <p className="text-center text-xs text-muted-foreground mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
