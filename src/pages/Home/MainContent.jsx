const skills = [
  { name: "Java", imageUrl: "/img/lenguajes/java.png" },
  { name: "Python", imageUrl: "/img/lenguajes/python.png" },
  { name: "C", imageUrl: "/img/lenguajes/c.png" },
  { name: "C#", imageUrl: "/img/lenguajes/csharp.png" },
  { name: "PHP", imageUrl: "/img/lenguajes/php.png" },
  { name: "JavaScript", imageUrl: "/img/lenguajes/javascript.png" },
  { name: "SQL", imageUrl: "/img/lenguajes/sql.jpeg" },
  { name: "MySQL", imageUrl: "/img/lenguajes/mysql.png" },
  { name: "PL/SQL", imageUrl: "/img/lenguajes/plsql.png" },
  { name: "React", imageUrl: "/img/lenguajes/react.png" },
  { name: "Angular", imageUrl: "/img/lenguajes/angular.png" },
  { name: "Astro", imageUrl: "/img/lenguajes/astro.png" },
  { name: "Tailwind CSS", imageUrl: "/img/lenguajes/tailwind.png" },
  { name: "Linux", imageUrl: "/img/lenguajes/linux.png" },
  { name: "RStudio", imageUrl: "/img/lenguajes/rstudio.png" },
  { name: "Matlab", imageUrl: "/img/lenguajes/matlab.png" }
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

        {/* Sección de Habilidades Técnicas (Versión Chips) */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Habilidades Técnicas
          </h2>
          <p className="text-xl leading-relaxed mb-4">
          </p>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-[#233554] p-4 rounded-full shadow-lg hover:scale-105 transition transform flex items-center justify-center"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="h-8 w-8"
                  title={skill.name}
                />
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
