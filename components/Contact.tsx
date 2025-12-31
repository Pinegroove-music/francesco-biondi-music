
import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const WEB3FORMS_ACCESS_KEY = '7550bbd7-883d-46b7-aed5-7c3c94cbbf12';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Francesco Biondi Portfolio',
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Web3forms Error:', err);
      setStatus('error');
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-8 tracking-wide uppercase">Contact Me</h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Ready to discuss your next project? Whether you need an original score or want to license existing music, feel free to reach out using the form or the email below.
          </p>
          <div className="flex items-center space-x-4 text-zinc-100 mb-4 group">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-amber-500 transition-colors">
              <Mail className="text-amber-500" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email Directly</p>
              <a href="mailto:info@pinegroove.net" className="text-lg hover:text-amber-500 transition-colors">
                info@pinegroove.net
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name"
                className="bg-zinc-900 border border-zinc-800 p-4 w-full focus:outline-none focus:border-amber-500 transition-colors text-zinc-100"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Email"
                className="bg-zinc-900 border border-zinc-800 p-4 w-full focus:outline-none focus:border-amber-500 transition-colors text-zinc-100"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject"
              className="bg-zinc-900 border border-zinc-800 p-4 w-full focus:outline-none focus:border-amber-500 transition-colors text-zinc-100"
              required
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
            <textarea 
              placeholder="Your Message"
              rows={5}
              className="bg-zinc-900 border border-zinc-800 p-4 w-full focus:outline-none focus:border-amber-500 transition-colors text-zinc-100 resize-none"
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            
            <button 
              type="submit"
              disabled={status === 'loading'}
              className={`w-full bg-amber-500 text-zinc-950 py-4 font-bold uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-amber-400 transition-all ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/50 rounded flex items-center space-x-3 text-emerald-400">
              <CheckCircle2 size={20} />
              <p className="text-sm font-medium">{statusMessage}</p>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-6 p-4 bg-rose-500/10 border border-rose-500/50 rounded flex items-center space-x-3 text-rose-400">
              <AlertCircle size={20} />
              <p className="text-sm font-medium">{statusMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
