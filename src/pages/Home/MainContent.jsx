const skills = [
  { name: "Java", level: 60 },
  { name: "Python", level: 30 },
  { name: "JavaScript", level: 50 },
  { name: "React", level: 0 },
  { name: "Angular", level: 0 },
  { name: "SQL", level: 75 },
  { name: "Tailwind CSS", level: 0 },
  { name: "Linux", level: 50 },
  { name: "C#", level: 50 },
  { name: "PHP", level: 60 },
  { name: "RStudio", level: 40 },
  { name: "MatLab", level: 40 },
];

const MainContent = () => (
  <main className="pt-20 pb-8 min-h-screen bg-[#0a192f] text-gray-300">
    <div className="max-w-6xl mx-auto px-4 space-y-12">
      {/* Sección de Bienvenida */}
      <div className="animate-fade-in">
        <h1 className="text-5xl font-bold text-teal-400 mb-6">
          Bienvenido a mi Portfolio
        </h1>
        <p className="text-2xl mb-8 text-teal-100">
          Soy <span className="text-pink-400 font-semibold">Álvaro</span>, estudiante de Ingeniería Informática en la UCAM.
        </p>
      </div>

      {/* Sección Sobre Mí */}
      <div className="bg-[#112240] p-8 rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-all">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Sobre mí
        </h2>
        <p className="text-lg leading-relaxed mb-8 text-justify">
          Desde que comencé la formación en la carrera, he estado profundizando mis conocimientos en el desarrollo web y la programación, con un enfoque en la creación de soluciones eficientes y de calidad. Actualmente, sigo perfeccionando mis habilidades en Java y otros lenguajes.
        </p>

        {/* Sección de Habilidades Técnicas (Versión gráfica) */}
        <div className="mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Habilidades Técnicas
        </h2>
        
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="group relative">
              <div className="flex items-center justify-between mb-1">
                <span className="text-teal-200 font-mono">{skill.name}</span>
                <span className="text-pink-300 text-sm">{skill.level}%</span>
              </div>
              
              <div className="h-4 bg-[#233554] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-400 to-pink-500 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Sección de Contacto */}
        <div className="space-y-8">
          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="text-2xl font-bold text-pink-300 mb-4">
              En Busca de Nuevos Proyectos
            </h4>
            <p className="text-xl">
              Siempre estoy abierto a colaborar en proyectos que me permitan crecer profesionalmente.
            </p>
          </div>
        </div>
      </div>

      {/* Cita Final */}
      <blockquote className="text-center text-2xl italic text-pink-200 mt-16 border-t-2 border-teal-500 pt-8">
        "El aprendizaje de nuevas tecnologías es un proceso constante."
      </blockquote>
    </div>
  </main>
);

export default MainContent;
