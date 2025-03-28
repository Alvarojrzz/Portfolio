const MainContent = () => (
    <main className="pt-20 pb-8 min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Sección Principal */}
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold text-teal-400 mb-6 font-mono">Bienvenido a mi cosmos digital</h1>
          <p className="text-2xl mb-8 text-teal-100">
            Hola, soy <span className="text-pink-400 font-semibold">Álvaro</span> 📍
            <span className="border-b-2 border-teal-500 ml-2">Ingeniero Informático en formación</span>
          </p>
        </div>
  
        {/* Tarjeta Presentación */}
        <div className="bg-[#112240] p-8 rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-all">
          <p className="text-lg leading-relaxed mb-8">
            <span className="text-teal-400 text-2xl">🚀</span> Ingeniero de Código en Formación | UCAM<br/>
            <em className="text-pink-300">"Donde los bucles while se entrelazan con sueños en compilación"</em>
          </p>
  
          {/* Sección Circuito Principal */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent mb-6">
              🧠 Mi Circuito Principal
            </h2>
            <p className="text-xl leading-relaxed">
              Veo el mundo en <span className="font-mono text-teal-400">{'{}'}</span> y sueño en 
              <span className="font-mono text-pink-400 ml-2">binary</span>. Transformando café ☕ en algoritmos 
              y domando <span className="underline decoration-pink-400">bugs</span> como dragones de código 🐉
            </p>
          </div>
  
          {/* Lenguajes */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-teal-300 mb-8">💻 Mis Aliados Digitales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ["Java", "⚙️ Arquitecto de lógica inquebrantable", "text-blue-400"],
                ["Python", "🎩 Mago del código minimalista", "text-yellow-400"],
                ["Astro", "🚀 Constructor de galaxias web", "text-orange-400"],
                ["React/Angular", "💃 Coreógrafos del DOM", "text-sky-400"],
                ["Tailwind", "🎨 Alquimista CSS", "text-cyan-400"]
              ].map(([lang, desc, color]) => (
                <div key={lang} className={`p-4 rounded-xl bg-[#233554] ${color} hover:bg-[#2a3b5f] transition-colors`}>
                  <span className="text-2xl mr-3">▹</span>
                  <span className="font-bold text-xl">{lang}</span>
                  <p className="ml-8 mt-2 text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Busqueda y Contacto */}
          <div className="space-y-8">
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="text-2xl font-bold text-pink-300 mb-4">🔭 En Busca de...</h4>
              <p className="text-xl">
                Colisiones cuánticas entre teoría universitaria 
                <span className="mx-2">🦉</span>y desafíos que hagan decir: 
                <span className="italic text-teal-300">"¿Cómo no se nos ocurrió antes?"</span>
              </p>
            </div>
  
            <div className="text-center py-6">
              <p className="text-2xl mb-4">📡 ¿Sintonizamos?</p>
              <button className="bg-gradient-to-r from-teal-400 to-pink-500 text-white px-8 py-3 rounded-full 
                              text-lg font-bold hover:scale-105 transition-transform shadow-lg">
                Ctrl + Click para colaborar
              </button>
            </div>
          </div>
        </div>
  
        {/* Cita Final */}
        <blockquote className="text-center text-2xl italic text-pink-200 mt-16 border-t-2 border-teal-500 pt-8">
          "No soy full-stack... aún. Pero mi stack de curiosidad está al 
          <span className="text-teal-400 not-italic"> 📚🔥MAX</span>"
        </blockquote>
      </div>
    </main>
  );
  
  export default MainContent;