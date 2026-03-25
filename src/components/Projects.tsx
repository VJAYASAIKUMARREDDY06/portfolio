import { motion } from 'framer-motion';

import {
  PenTool,
  Car,
  Apple,
  Globe,
  Code,
  ExternalLink,
  Puzzle,
  Database
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface ProjectLink {
  label: string;
  icon: LucideIcon;
  href: string;
}

interface Project {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    icon: Globe,
    title: 'EcoLink – Recyclable Waste Collection Platform',
    description:
      'Built a <strong>full-stack web platform</strong> enabling users to schedule recyclable waste pickups with flexible reward options. Designed a <strong>zone-based threshold system</strong> reducing unnecessary trips by ~30% and improving operational efficiency. Implemented backend logic using <strong>PHP and MySQL</strong>.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    links: [
      {
        label: 'Code',
        icon: Code,
        href: 'https://github.com/VJAYASAIKUMARREDDY06/Eco-Link',
      },
    ],
  },
  {
    icon: Database,
    title: 'Digital Twin-Based Bus Transportation System',
    description:
      'Designed a <strong>Digital Twin architecture</strong> to model buses, routes, and bookings with real-time synchronization. Implemented backend validation to handle <strong>concurrent booking requests</strong> and prevent seat conflicts. Tested 25+ scenarios ensuring system reliability.',
    tags: ['Java', 'System Design', 'Backend', 'Simulation'],
    links: [
      {
        label: 'Code',
        icon: Code,
        href: 'https://github.com/VJAYASAIKUMARREDDY06/Digital-Twin-in-Transportation',
      },
    ],
  },
  {
    icon: PenTool,
    title: 'Handwritten Digit Recognition Using Deep Learning',
    description:
      'Implemented a <strong>CNN-based deep learning model</strong> trained on the <strong>MNIST dataset</strong> to accurately recognize handwritten digits (0–9). Gained hands-on experience with <strong>TensorFlow and Keras</strong> for model training and evaluation.',
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'MNIST'],
    links: [
      { label: 'Code', icon: Code, href: '#' },
    ],
  },
  {
    icon: Car,
    title: 'Vehicle Type Recognition',
    description:
      'Developed a deep learning model to classify images into <strong>Car, Motorcycle, Truck, and Bus</strong>. Implemented CNN-based feature extraction and preprocessing pipelines for improved classification accuracy.',
    tags: ['Python', 'TensorFlow', 'CNN', 'Flask'],
    links: [
      { label: 'Code', icon: Code, href: '#' },
    ],
  },
  {
    icon: Apple,
    title: 'Diet Prediction System',
    description:
      'Led a team of 4 students in building a machine learning model to predict personalized diet types based on user data using <strong>Decision Tree</strong> and <strong>Naive Bayes</strong> algorithms.',
    tags: ['Python', 'Scikit-learn', 'Decision Tree', 'Naive Bayes'],
    links: [
      { label: 'Code', icon: Code, href: '#' },
    ],
  },
  {
    icon: Globe,
    title: 'Interactive Portfolio Website',
    description:
      'Created a modern, responsive portfolio website featuring <strong>smooth animations</strong>, interactive UI, and project showcases with a unique engagement challenge.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Code', icon: Code, href: '#' },
      { label: 'Live Site', icon: ExternalLink, href: '#' },
      { label: 'Try Challenge', icon: Puzzle, href: '#riddle' },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-[1200px] mx-auto">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 relative section-title-line"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="grid gap-8 max-w-[900px] mx-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {projects.map(p => (
          <div
            key={p.title}
            className="card-shimmer ripple rounded-[20px] p-8 cursor-pointer transition-all duration-400"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
              e.currentTarget.style.borderColor = '#f093fb';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(102,126,234,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-[50px] h-[50px] rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #667eea, #f093fb)' }}
              >
                <p.icon size={24} color="white" />
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
            </div>

            <p
              className="mb-6 leading-relaxed"
              style={{ color: '#f1f5f9' }}
              dangerouslySetInnerHTML={{ __html: p.description }}
            />

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(102,126,234,0.2)', color: '#f093fb' }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {p.links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium flex items-center gap-1 transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#f093fb', textDecoration: 'none' }}
                  onClick={e => {
                    if (l.href.startsWith('#')) {
                      e.preventDefault();
                      document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <l.icon size={16} /> {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}