export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input type="text" placeholder="Tu nombre" className="p-3 rounded border border-gray-300" />
        <input type="email" placeholder="Tu correo" className="p-3 rounded border border-gray-300" />
        <textarea placeholder="Tu mensaje" rows="4" className="p-3 rounded border border-gray-300"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Enviar
        </button>
      </form>
    </section>
  );
}
