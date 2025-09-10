export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
          <p className="text-gray-600">Descripción breve de tu proyecto.</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Proyecto 2</h3>
          <p className="text-gray-600">Descripción breve de tu proyecto.</p>
        </div>
      </div>
    </section>
  );
}
