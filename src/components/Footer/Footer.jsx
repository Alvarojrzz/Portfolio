const Footer = () => (
    <footer className="bg-[#0a192f] text-white py-8 fixed bottom-0 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4"> 
          {/* Mobile: elementos en columna | Desktop: en fila */}
          <p className="text-center md:text-left">© 2024 Alvarojrzz. Casi todos los derechos reservados.</p>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8"> 
            {/* Mobile: enlaces en columna | Desktop: en fila */}
            <a href="#" className="hover:underline transition duration-300">Sobre mí</a>
            <a href="#" className="hover:underline transition duration-300">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;