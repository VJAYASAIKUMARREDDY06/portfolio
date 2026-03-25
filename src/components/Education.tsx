import { motion } from 'framer-motion';


const education = [
  {
    degree: 'B.Tech CSE(AIML)',
    school: 'Kalasalingam Academy of Research and Education',
    duration: '2023 - 2027',
    score: 'CGPA: 8.56',
    description: 'Specializing in Artificial Intelligence and Machine Learning with focus on deep learning, Machine Learning and other subjects such as Computer Networks, Operating Systems, Programming languages.',
  },
  {
    degree: 'Intermediate MPC',
    school: 'Ignite Junior College',
    duration: '2021 - 2023',
    score: '90.4%',
    description: 'Mathematics, Physics, Chemistry (MPC) with excellent performance in Calculus, Statistics, Algebra and logical reasoning, laying strong foundation for engineering studies.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-8 max-w-[1200px] mx-auto">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 relative section-title-line"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>
      <motion.div
        className="timeline-line relative pl-8 max-w-[800px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {education.map(ed => (
          <div
            key={ed.degree}
            className="timeline-node relative mb-12 ml-8 rounded-[15px] p-8 cursor-pointer transition-all duration-400 hover:translate-x-4 hover:scale-[1.02]"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#f093fb';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(102,126,234,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{ed.degree}</h3>
            <p className="font-medium mb-2" style={{ color: '#f093fb' }}>{ed.school}</p>
            <div className="flex justify-between items-center flex-wrap gap-4">
              <span style={{ color: '#f1f5f9' }}>{ed.duration}</span>
              <span
                className="px-4 py-2 rounded-full font-semibold"
                style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}
              >
                {ed.score}
              </span>
            </div>
            <p className="mt-4" style={{ color: '#f1f5f9' }}>{ed.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
