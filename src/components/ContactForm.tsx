'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate API call
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitSuccess ? (
        <div className="bg-gold/10 border border-gold/20 text-cream px-4 py-3 rounded mb-6">
          Thank you for your message! We'll get back to you as soon as possible.
        </div>
      ) : null}
      
      {submitError ? (
        <div className="bg-red-900/20 border border-red-500/20 text-red-300 px-4 py-3 rounded mb-6">
          {submitError}
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-cream font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-charcoal-light border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-cream"
            placeholder="Your name"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-cream font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-charcoal-light border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-cream"
            placeholder="Your email address"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-cream font-medium mb-2">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-charcoal-light border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-cream"
          >
            <option value="">Select a subject</option>
            <option value="Reservation">Reservation</option>
            <option value="Catering Request">Catering Request</option>
            <option value="Private Event">Private Event</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-cream font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 bg-charcoal-light border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-cream"
            placeholder="How can we help you?"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gold text-charcoal font-semibold px-6 py-3 rounded-lg hover:bg-gold-light transition-elegant disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
} 