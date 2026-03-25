import { motion } from 'framer-motion';


const stats = [
  { number: '5+', label: 'Projects' },
  { number: '50+', label: 'Problems Solved' },
  { number: '8.56', label: 'CGPA' },
  { number: '10+', label: 'Technologies' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-8 max-w-[1200px] mx-auto">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 relative section-title-line"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="grid gap-12 items-start md:grid-cols-[350px_1fr] grid-cols-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Profile Card */}
        <div
          className="rounded-[20px] p-8 text-center sticky top-[100px] max-w-[350px] mx-auto"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div
            className="w-[200px] h-[200px] rounded-full mx-auto mb-4 flex items-center justify-center text-6xl font-bold"
            style={{ background: 'linear-gradient(135deg, #667eea, #f093fb)', color: 'white' }}
          >
            VJ
          </div>
          <h3 className="text-xl font-semibold mb-2">V Jaya Sai Kumar Reddy</h3>
          <p className="mb-6 font-medium" style={{ color: '#f1f5f9' }}>AI/ML Developer</p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map(s => (
              <div
                key={s.label}
                className="text-center p-4 rounded-[10px]"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <div className="text-3xl font-bold" style={{ color: '#f093fb' }}>{s.number}</div>
                <div className="text-sm" style={{ color: '#f1f5f9' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* About Text */}
        <div className="text-lg leading-relaxed" style={{ color: '#f1f5f9', maxWidth: 800, lineHeight: 1.8 }}>
          <p className="mb-6">
            Welcome to my digital portfolio! I'm <strong style={{ color: '#f093fb' }}>V Jaya Sai Kumar Reddy</strong>, a passionate AI/ML developer
            with a deep fascination for artificial intelligence and its potential to transform industries.
          </p>
          <p className="mb-6">
            Currently pursuing my <strong style={{ color: '#f093fb' }}>Bachelor's Degree in Computer Science and Engineering</strong> with a specialization
            in Artificial Intelligence and Machine Learning, I've maintained an excellent academic record while
            actively working on cutting-edge projects.
          </p>
          <p className="mb-6">
            My expertise spans across <strong style={{ color: '#f093fb' }}>machine learning algorithms</strong>, <strong style={{ color: '#f093fb' }}>deep learning frameworks</strong>,{' '}
            <strong style={{ color: '#f093fb' }}>Web development</strong>, <strong style={{ color: '#f093fb' }}>Programming languages</strong> and <strong style={{ color: '#f093fb' }}>AI</strong>. I enjoy tackling complex
            problems and building innovative solutions that bridge the gap between theoretical concepts and real-world applications.
          </p>
          <p className="mb-6">
            When I'm not coding or doing projects, I'll spend time exploring the latest research papers,
            contributing to open-source projects, or experimenting with emerging AI technologies.
            I believe in continuous learning and staying at the forefront of technological advancement.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
