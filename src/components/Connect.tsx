import { motion } from 'framer-motion';

import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const items = [
  { icon: Phone, title: 'Mobile Number', info: '+91 8686854434', href: 'tel:+918686854434' },
  { icon: Mail, title: 'Email', info: 'jayasaikumar890@gmail.com', href: 'mailto:jayasaikumar890@gmail.com' },
  { icon: Linkedin, title: 'LinkedIn', info: 'vjayasaikumarreddy', href: 'https://www.linkedin.com/in/vjayasaikumarreddy' },
  { icon: Github, title: 'GitHub', info: 'VJAYASAIKUMARREDDY06', href: 'https://github.com/VJAYASAIKUMARREDDY06' },
];

export default function Connect() {
  return (
    <section id="connect" className="py-20 px-8 max-w-[1200px] mx-auto">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 relative section-title-line"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        Connect With Me
      </motion.h2>
      <motion.div
        className="grid gap-8 mt-8"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {items.map(item => (
          <a
            key={item.title}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="card-shimmer rounded-[20px] p-8 text-center cursor-pointer transition-all duration-400 relative overflow-hidden block no-underline text-inherit"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
              e.currentTarget.style.borderColor = '#f093fb';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(102,126,234,0.3)';
              const icon = e.currentTarget.querySelector('.connect-icon-el') as HTMLElement;
              if (icon) icon.style.transform = 'rotate(360deg) scale(1.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.boxShadow = 'none';
              const icon = e.currentTarget.querySelector('.connect-icon-el') as HTMLElement;
              if (icon) icon.style.transform = '';
            }}
          >
            <div
              className="connect-icon-el w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #667eea, #f093fb)' }}
            >
              <item.icon size={28} color="white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <span
              className="text-sm break-all block transition-all duration-300"
              style={{ color: '#f093fb' }}
            >
              {item.info}
            </span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
