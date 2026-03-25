import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Student Team Leader – EcoLink (Recyclable Waste Collection Platform)',
    company: 'Kalasalingam University, Tamil Nadu, India',
    duration: 'Oct 2025 – Dec 2025',
    points: [
      'Led a team of 4 in developing a full-stack platform for recyclable waste collection and management',
      'Designed a zone-based threshold system that reduced unnecessary collection trips by ~30%',
      'Implemented backend logic for scheduling, user requests, and real-time status tracking using PHP and MySQL',
      'Coordinated team tasks, resolved technical issues, and ensured smooth project development and deployment',
    ],
  },
  {
    title: 'Student Team Leader – Digital Twin-Based Bus Transportation System',
    company: 'Kalasalingam University, Tamil Nadu, India',
    duration: 'Jan 2026 – Mar 2026',
    points: [
      'Led a team of 4 in designing a Digital Twin architecture to simulate buses, routes, and booking systems',
      'Implemented backend validation to handle concurrent booking requests and prevent seat over-allocation',
      'Executed 25+ test scenarios to validate system reliability across booking and trip workflows',
      'Ensured synchronization between system components to maintain consistent real-time data representation',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-8 max-w-[1200px] mx-auto">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 relative section-title-line"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8 max-w-[900px] mx-auto"
      >
        {experiences.map(exp => (
          <div
            key={exp.title}
            className="rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#f093fb')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
          >
            <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="font-medium" style={{ color: '#f093fb' }}>{exp.company}</p>
              </div>
              <span
                className="px-4 py-2 rounded-[20px] text-sm font-medium"
                style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}
              >
                {exp.duration}
              </span>
            </div>

            <ul className="list-none p-0">
              {exp.points.map((point, i) => (
                <li
                  key={i}
                  className="relative pl-6 mb-3"
                  style={{ color: '#f1f5f9' }}
                >
                  <span className="absolute left-0 font-bold" style={{ color: '#f093fb' }}>▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}