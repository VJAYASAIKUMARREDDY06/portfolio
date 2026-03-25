import { motion } from 'framer-motion';

import { Brain, Bot, Code, BarChart3, Cloud, Users, Languages, type LucideIcon } from 'lucide-react';

const categories: { icon: LucideIcon; title: string; tags: string[] }[] = [
  { icon: Brain, title: 'Machine Learning', tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { icon: Bot, title: 'Deep Learning', tags: ['TensorFlow', 'PyTorch', 'Keras', 'CNN', 'RNN', 'LSTM'] },
  { icon: Code, title: 'Programming', tags: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'R', 'HTML', 'CSS'] },
  { icon: BarChart3, title: 'Data Science', tags: ['Data Analysis', 'Statistical Modeling', 'Data Visualization', 'Feature Engineering'] },
  { icon: Cloud, title: 'Tools & Platforms', tags: ['Git', 'SQL', 'Google Colab', 'Jupyter', 'VS Code'] },
  { icon: Users, title: 'Non Technical', tags: ['Team Leadership', 'Collaboration', 'Problem Solving', 'Project Management'] },
  { icon: Languages, title: 'Languages Known', tags: ['English', 'Hindi', 'Telugu'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 max-w-[1200px] mx-auto">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 relative section-title-line"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        Skills & Expertise
      </motion.h2>
      <motion.div
        className="grid gap-8"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {categories.map(cat => (
          <div
            key={cat.title}
            className="rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#f093fb')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
          >
            <h3 className="flex items-center gap-3 mb-6 text-xl font-semibold">
              <cat.icon size={22} style={{ color: '#f093fb' }} /> {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.tags.map(tag => (
                <span
                  key={tag}
                  className="skill-tag-shimmer px-5 py-2.5 rounded-full font-medium text-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    boxShadow: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 10px 25px rgba(102,126,234,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
