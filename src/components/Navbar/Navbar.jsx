

const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-4xl mx-auto px-4 pt-2">
          {/* Contenedor centrado con todo el contenido */}
          <div className="flex justify-center">
            {/* Menú completo centrado */}
            <div className="flex space-x-4 bg-[#112240] px-4 py-2 rounded-full shadow-md items-center">
                {/*Logo*/}
              <a href="/" className="pr-4">
                <img 
                    src="/img/logo.png"
                    alt="Logo"
                    className="h-8 w-auto"
                />
              </a>
              
              {/* Enlaces alineados */}
              <div className="flex space-x-6">
                <a href="#" className="text-white hover:underline transition-all">
                  Experiencia
                </a>
                <a href="#" className="text-white hover:underline transition-all">
                  Proyectos
                </a>
                <a href="#" className="text-white hover:underline transition-all">
                  Sobre mí
                </a>
                <a href="#" className="text-white hover:underline transition-all">
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;