
const Navbar = () => {
  // Función para scroll suave
  const scrollToSection = (sectionId) => {
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const section = document.getElementById(sectionId);
    
    if (section) {
      const offsetPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-4xl mx-auto px-4 pt-2">
        <div className="flex justify-center">
          <div className="flex space-x-4 bg-[#112240] px-4 py-2 rounded-full shadow-md items-center">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('inicio')}
              className="pr-4 cursor-pointer"
            >
              <img 
                src="/img/logo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </button>

            {/* Enlaces con scroll */}
            <div className="flex space-x-6">

            <button
                onClick={() => scrollToSection('sobre-mi')}
                className="text-white hover:underline transition-all cursor-pointer"
              >
                Sobre mí
              </button>

              <button
                onClick={() => scrollToSection('habilidades')}
                className="text-white hover:underline transition-all cursor-pointer"
              >
                Habilidades
              </button>

              
              <button
                onClick={() => scrollToSection('proyectos')}
                className="text-white hover:underline transition-all cursor-pointer"
              >
                Proyectos
              </button>
              
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:underline transition-all cursor-pointer"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;