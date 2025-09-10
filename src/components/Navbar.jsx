export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-md z-50 flex justify-center">
      <div className="flex justify-between items-center w-full max-w-6xl px-4">
        {/* Espacio a la izquierda */}
        <div className="flex-5"></div>

        {/* Título centrado */}
        <div className="flex-1 flex justify-center" style={{ backgroundColor: "rgba(23, 41, 99, 1)" }}>
          <h1 className="text-2xl font-bold tracking-wide text-center ">FINGus</h1>
        </div>

        {/* Menú a la derecha */}
        <ul className="flex gap-6 flex-1 justify-end">
          <li><a href="#about" className="hover:text-blue-400">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
