'use client';

import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThankYouMessage } from '@/components/ui/ThankYouMessage';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);

      // Store name before resetting form
      setSubmittedName(formData.name);
      
      // Show thank you message
      setShowThankYou(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Sorry, there was an error sending your message. Please try again or contact us directly at bethany@childarisetn.org');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'bethany@childarisetn.org',
      description: 'Send us an email and we will respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '(615) 490-1844',
      description: 'Monday - Friday, 9:00 AM - 5:00 PM CST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Nashville, Tennessee',
      description: 'Serving families across Tennessee'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Logo */}
      <section 
        ref={heroRef}
        className="relative py-24 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fern/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sunlit-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-earth-green/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <Image
                src="/images/logo.png"
                alt="Child Arise Tennessee Logo"
                width={300}
                height={90}
                className="mx-auto h-20 md:h-24 w-auto"
                priority
              />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-lato font-bold text-black mb-8">
              Get in{' '}
              <span className="text-fern">Touch</span>{' '}
              <span className="text-earth-green">Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-8">
              Ready to make a difference? Have questions about our programs? 
              We would love to hear from you and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  const formSection = document.getElementById('contact-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Send a Message
              </Button>
              <Button variant="outline" size="lg" href="mailto:bethany@childarisetn.org">
                Email Bethany
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-black/75 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-clay-beige to-earth-green/10 rounded-3xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-fern/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-fern" />
                </div>
                <h3 className="text-2xl font-lato font-bold text-black mb-3">{info.title}</h3>
                <div className="text-lg font-semibold text-fern mb-2">{info.details}</div>
                <p className="text-black/70">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section 
        ref={formRef}
        id="contact-form"
        className="py-20 bg-clay-beige"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-black/75 max-w-2xl mx-auto">
              Have questions about our programs or want to get involved? 
                             Fill out the form below and we&apos;ll get back to you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isFormInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-earth-green/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-moss-brown mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-moss-brown/50" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-earth-green/30 rounded-xl focus:ring-2 focus:ring-fern focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-moss-brown mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-moss-brown/50" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-earth-green/30 rounded-xl focus:ring-2 focus:ring-fern focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-moss-brown mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-moss-brown/50" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-earth-green/30 rounded-xl focus:ring-2 focus:ring-fern focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-moss-brown mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-earth-green/30 rounded-xl focus:ring-2 focus:ring-fern focus:border-transparent transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Questions</option>
                    <option value="services">Program Services</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-moss-brown mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-moss-brown/50" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 border border-earth-green/30 rounded-xl focus:ring-2 focus:ring-fern focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your inquiry, how you'd like to get involved, or any questions you have..."
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                >
                  {error}
                </motion.div>
              )}

              <div className="text-center">
                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-8 p-6 bg-fern/5 rounded-2xl border border-fern/20">
              <p className="text-sm text-moss-brown/80 text-center">
                <strong>Note:</strong> For immediate assistance or urgent matters, 
                please call us at{' '}
                <a href="tel:6154901844" className="text-fern font-semibold hover:underline">
                  (615) 490-1844
                </a>{' '}
                or email{' '}
                <a href="mailto:bethany@childarisetn.org" className="text-fern font-semibold hover:underline">
                  bethany@childarisetn.org
                </a>{' '}
                directly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-fern to-earth-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-lato font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in supporting children and families affected by parental incarceration. 
              Every connection, every contribution, every conversation matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/donate">
                Make a Donation
              </Button>
              <Button variant="outline" size="lg" href="/about" className="border-white text-white hover:bg-white hover:text-fern">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thank You Message Modal */}
      {showThankYou && (
        <ThankYouMessage 
          name={submittedName || 'Friend'} 
          onClose={handleCloseThankYou} 
        />
      )}
    </div>
  );
} 