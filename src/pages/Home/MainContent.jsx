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
    {/* Sección Inicio */}
    <section id="inicio" className="pt-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold text-teal-400 mb-6">
            Bienvenido a mi Portfolio
          </h1>
          <p className="text-2xl mb-8 text-teal-100">
            Soy <span className="text-pink-400 font-semibold">Álvaro</span>, estudiante de Ingeniería Informática en la UCAM.
          </p>
        </div>
      </div>
    </section>

    {/* Sección Sobre Mí */}
    <section id="sobre-mi" className="pt-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="bg-[#112240] p-8 rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-all">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Sobre mí
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-justify max-w-xl">
            Desde que comencé la formación en la carrera, he estado profundizando mis conocimientos 
            en el desarrollo web y la programación, con un enfoque en la creación de soluciones 
            eficientes y de calidad. Actualmente, sigo perfeccionando mis habilidades en Java y otros lenguajes.
          </p>
        </div>
      </div>
    </section>

    {/* Sección Habilidades */}
    <section id="habilidades" className="pt-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="bg-[#112240] p-8 rounded-2xl shadow-2xl">
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
      </div>
    </section>

    {/* Sección Proyectos */}
    <section id="proyectos" className="pt-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="bg-[#112240] p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Proyecto 1 */}
            <div className="bg-[#233554] p-6 rounded-xl shadow-md transform hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-teal-300">Gestor de Tareas</h3>
              <p className="text-gray-300 mt-2 text-justify">
                Una aplicación web para gestionar tareas diarias, permitiendo crear, editar y eliminar tareas. Desarrollada con React y Node.js para una experiencia rápida y responsiva.
              </p>
              {/* Lenguajes utilizados */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-gray-800 text-sm text-teal-300 px-2 py-1 rounded">React</span>
                <span className="bg-gray-800 text-sm text-teal-300 px-2 py-1 rounded">Node.js</span>
                <span className="bg-gray-800 text-sm text-teal-300 px-2 py-1 rounded">JavaScript</span>
              </div>
              <a href="#" className="mt-4 inline-block text-teal-400 hover:underline">
                Ver Proyecto
              </a>
            </div>
            {/* Proyecto 2 */}
            <div className="bg-[#233554] p-6 rounded-xl shadow-md transform hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-teal-300">E-commerce Minimalista</h3>
              <p className="text-gray-300 mt-2 text-justify">
                Una tienda en línea con un diseño limpio y funcional. Implementada con PHP y MySQL, ofrece una navegación sencilla y segura para los usuarios.
              </p>
              {/* Lenguajes utilizados */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-gray-800 text-sm text-teal-300 px-2 py-1 rounded">PHP</span>
                <span className="bg-gray-800 text-sm text-teal-300 px-2 py-1 rounded">MySQL</span>
                <span className="bg-gray-800 text-sm text-teal-300 px-2 py-1 rounded">HTML/CSS</span>
              </div>
              <a href="#" className="mt-4 inline-block text-teal-400 hover:underline">
                Ver Proyecto
              </a>
            </div>
            {/* Proyecto 3 */}
            <div className="bg-[#233554] p-6 rounded-xl shadow-md transform hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-teal-300">Dashboard Analítico</h3>
              <p className="text-gray-300 mt-2 text-justify">
                Un panel de control interactivo que visualiza datos en tiempo real. Construido con Angular y D3.js, ideal para la toma de decisiones basadas en datos precisos.
              </p>
              {/* Lenguajes utilizados */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-gray-800 text-sm text-teal-300 px-2 py-1 rounded">Angular</span>
                <span className="bg-gray-800 text-sm text-teal-300 px-2 py-1 rounded">D3.js</span>
                <span className="bg-gray-800 text-sm text-teal-300 px-2 py-1 rounded">TypeScript</span>
              </div>
              <a href="#" className="mt-4 inline-block text-teal-400 hover:underline">
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>



    {/* Sección Contacto */}
    <section id="contacto" className="pt-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="bg-[#112240] p-8 rounded-2xl shadow-2xl">
          <div className="space-y-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Contacto
          </h2>
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="text-2xl font-bold text-pink-300 mb-4">
                En Busca de Nuevos Proyectos
              </h4>
              <p className="text-xl mb-6">
                Siempre estoy abierto a colaborar en proyectos que me permitan crecer profesionalmente.
              </p>
              
              {/* Redes Sociales */}
              <div className="flex space-x-6 justify-center mt-8">
                <a 
                  href="https://www.linkedin.com/in/álvaro-juárez-garcía-894254303/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  title="LinkedIn"
                >
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a 
                  href="https://github.com/Alvarojrzz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  title="GitHub"
                >
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>

                {/* Opcional: Añadir más redes */}
                <a 
                  href="mailto:juarezgarciaalvaro@gmail.com" 
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  title="Email"
                >
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cita Final */}
        <blockquote className="text-center text-2xl italic text-pink-200 mt-16 border-t-2 border-teal-500 pt-8">
          "El aprendizaje de nuevas tecnologías es un proceso constante."
        </blockquote>
      </div>
    </section>
  </main>
);

export default MainContent;
