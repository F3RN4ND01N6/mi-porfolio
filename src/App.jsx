import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Contenido principal centrado */}
      <main className="pt-16 w-full max-w-6xl flex flex-col justify-center items-center gap-16">
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

