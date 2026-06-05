'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/ui/PageHero';
import { useState } from 'react';
import Script from 'next/script';
import { FadeInSection } from '@/components/ui/FadeIn';

// Type declaration for Google reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '' // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  // Load reCAPTCHA token (only if configured)
  const getRecaptchaToken = async (): Promise<string | null> => {
    // Skip if no site key is configured
    if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      return null;
    }

    if (!recaptchaLoaded || typeof window === 'undefined' || !window.grecaptcha) {
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: 'contact_form' }
      );
      return token;
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Honeypot check - if filled, it's a bot
    if (formData.website) {
      console.log('Bot detected via honeypot');
      setIsSubmitting(false);
      return;
    }

    try {
      // Get reCAPTCHA token (optional - only if configured)
      const recaptchaToken = await getRecaptchaToken();

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);

      // Show success message
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        website: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError(err instanceof Error ? err.message : 'Sorry, there was an error sending your message. Please try again or contact us directly at bethany@childarisetn.org');
    } finally {
      setIsSubmitting(false);
    }
  };



  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'bethany@childarisetn.org',
      href: 'mailto:bethany@childarisetn.org',
      description: 'We respond within one business day',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '(615) 490-1844',
      href: 'tel:+16154901844',
      description: 'Monday–Friday, 9:00 AM – 5:00 PM CST',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Nashville, Tennessee',
      description: 'Serving families across the state',
    },
  ];

  const formFieldClass =
    'w-full px-4 py-3 border border-border bg-paper font-sans text-[0.9375rem] text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors';

  // Check if reCAPTCHA is configured
  const hasRecaptcha = typeof process !== 'undefined' && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <article>
      {/* Google reCAPTCHA v3 Script - only load if configured */}
      {hasRecaptcha && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
          onLoad={() => {
            if (window.grecaptcha) {
              window.grecaptcha.ready(() => {
                setRecaptchaLoaded(true);
              });
            }
          }}
        />
      )}
      <PageHero
        title="Contact us"
        subtitle="Questions about our programs, partnerships, or how to get involved? We welcome correspondence and will respond within one business day."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
        image="/images/bethanyimages/IMG_1078.webp"
        imageAlt="Child Arise Tennessee team connecting with families and community partners"
        imageAspect="aspect-[4/5] lg:aspect-[3/4]"
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <button
            type="button"
            className="btn-primary"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Send a message
          </button>
          <Link href="/services" className="btn-ghost">
            View our services
          </Link>
        </div>
      </PageHero>

      <FadeInSection className="tone-sage section-divider">
        <div className="section-container py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="section-label">We&apos;re here</span>
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-soft mt-1">
                One business day response
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="pull-quote font-serif text-xl md:text-2xl leading-[1.45] text-ink">
                Reaching out is often the first step toward support — whether you are a caregiver,
                a partner organization, or someone who wants to help. We read every message.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="editorial-section tone-alt section-divider">
        <div className="section-container">
          <header className="mb-10 md:mb-12 max-w-3xl">
            <span className="section-label">Reach us directly</span>
            <h2 className="mb-4">Ways to connect</h2>
            <p className="prose-reading-lg">
              Prefer email or a phone call? Use any of the channels below — or send us a message
              using the form.
            </p>
          </header>

          <div className="border border-border bg-paper grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <article key={info.title} className="p-6 md:p-8 flex flex-col">
                  <Icon className="h-5 w-5 text-accent mb-4" strokeWidth={1.75} aria-hidden="true" />
                  <p className="font-sans text-xs font-bold tracking-[0.16em] text-accent uppercase mb-2">
                    {info.title}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-serif text-lg md:text-xl text-ink hover:text-accent transition-colors mb-2"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="font-serif text-lg md:text-xl text-ink mb-2">{info.details}</p>
                  )}
                  <p className="prose-reading text-[0.9375rem] mt-auto">{info.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="contact-form" className="editorial-section tone-warm section-divider">
        <div className="section-container">
          <div className="border border-border bg-paper">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
              <div className="lg:col-span-4 p-6 md:p-8 lg:p-10 bg-paper-deep/25">
                <span className="section-label">Correspondence</span>
                <h2 className="text-2xl md:text-3xl mb-5 leading-snug">Send a message</h2>
                <p className="prose-reading mb-8">
                  Complete the form and our team will reply to your email address. For urgent
                  matters, call us directly.
                </p>
                <ul className="space-y-3 font-sans text-[0.9375rem] text-ink-muted">
                  <li className="pl-4 border-l-2 border-accent/25">Program and service inquiries</li>
                  <li className="pl-4 border-l-2 border-accent/25">Volunteer and partnership interest</li>
                  <li className="pl-4 border-l-2 border-accent/25">Donation and media questions</li>
                </ul>
              </div>

              <div className="lg:col-span-8 p-6 md:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-sans text-sm font-medium text-ink mb-2">
                        Full name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={formFieldClass}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-sans text-sm font-medium text-ink mb-2">
                        Email address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={formFieldClass}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-sans text-sm font-medium text-ink mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={formFieldClass}
                        placeholder="(615) 490-1844"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block font-sans text-sm font-medium text-ink mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className={formFieldClass}
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General inquiry</option>
                        <option value="volunteer">Volunteer opportunities</option>
                        <option value="donation">Donation questions</option>
                        <option value="services">Program services</option>
                        <option value="partnership">Partnership opportunities</option>
                        <option value="media">Media inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans text-sm font-medium text-ink mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`${formFieldClass} resize-none`}
                      placeholder="Tell us how we can help…"
                    />
                  </div>

                  <div className="absolute left-[-9999px] opacity-0 pointer-events-none" aria-hidden="true">
                    <label htmlFor="website">Website (leave blank)</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {error && (
                    <div className="border border-red-300/80 bg-red-50 px-4 py-3 font-sans text-sm text-red-800">
                      {error}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending…' : 'Send message'}
                    </Button>
                    <p className="font-sans text-sm text-ink-soft">
                      Or call{' '}
                      <a href="tel:+16154901844" className="text-accent hover:underline">
                        (615) 490-1844
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="tone-accent section-divider">
        <div className="section-container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="section-label-light">While you&apos;re here</span>
              <h2 className="text-paper mb-4 max-w-[22ch]">
                Explore how Child Arise supports families
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl">
                From counseling referrals to family connection and caregiver support — learn about
                our programs or find ways to get involved across Tennessee.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/services" className="btn-primary-light text-center justify-center">
                Our services
              </Link>
              <Link href="/get-involved" className="btn-ghost-light text-center justify-center">
                Get involved
              </Link>
              <Link
                href="/donate"
                className="font-sans text-sm font-semibold text-white/70 hover:text-white transition-colors text-center py-2"
              >
                Make a donation →
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>

      {isSuccess && (
        <div
          className="fixed top-24 right-4 md:right-6 max-w-sm border border-accent-muted bg-paper px-5 py-4 shadow-sm z-50 animate-fade-in"
          role="status"
        >
          <p className="font-sans text-sm font-semibold text-accent mb-1">Message sent</p>
          <p className="font-sans text-sm text-ink-muted">
            Thank you — we&apos;ll be in touch soon. Check your inbox for confirmation.
          </p>
        </div>
      )}
    </article>
  );
} 