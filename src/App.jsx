
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Acerca } from './components/Acerca';
import { Habilidades } from './components/Habilidades';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Trabajos } from './components/Trabajos'
import { Contacto } from "./components/Contacto";

const proyectos = [
  // Agrega más proyectos aquí
  {
    id: 1,
    title: 'Control de Presupuesto',
    description: 'Control de Presupuesto en React con Vite y LocalStorage proyecto del curso React - La Guía Completa: Hooks Context Redux MERN +15 Apps de Juan Pablo De la torre Valdez ',
    url: 'https://resplendent-otter-9acca3.netlify.app/',

  },
  {
    id: 2,

    title: 'Administrador de Pacientes',
    description: 'Administrador de Pacientes en Vite, Tailwind CSS y LocalStorage proyecto del curso React - La Guía Completa: Hooks Context Redux MERN +15 Apps de Juan Pablo De la torre Valdez ',
    url: 'https://veteri-citas-react.netlify.app/',
  },
  {
    id: 3,

    title: 'Uptask',
    description: 'Proyecto MERN Stack con TailwindCSS Headless UI, Context API, Socket IO - MongoDB proyecto del curso React - La Guía Completa: Hooks Context Redux MERN +15 Apps de Juan Pablo De la torre Valdez ',
    url: 'https://uptask-mern-shue.netlify.app/',
  },
  {
    id: 4,

    title: 'Clima  React',
    description: 'Clima en React con Vite consumiendo DOS Apis',
    url: 'https://reactweb-shuelarios.netlify.app/',
  },
  {
    id: 5,

    title: 'CalendarApp',
    description: 'React con Vite Backend - Node, Express,Mong proyecto del curso React: De cero a experto ( Hooks y MERN ) de Fernando Herrera',
    url: 'https://fascinating-platypus-c3bc2a.netlify.app/',
  },

  {
    id: 6,

    title: 'FESTIVAL MÚSICA',
    description: 'Proyecto con SASS y Gulp',
    url: 'https://stupendous-kitten-3df228.netlify.app/',
  },
  {
    id: 7,

    title: 'Blog Cafe',
    description: 'Un proyecto con HTML y CSS',
    url: 'https://blog-cafe-shue.netlify.app/',
  },
  {
    id: 8,

    title: 'Buscador de Gif',
    description: 'React con Vite consumiendo una Api proyecto del curso React: De cero a experto ( Hooks y MERN ) de Fernando Herrera',
    url: 'https://gif-buscador-shue.netlify.app/',
  },
  {
    id: 9,
    title: 'Lugares y Puntos',
    description: 'React con Vite  utlizando la APi de Google Maps',
    url: 'https://lugares-puntos-rene1.netlify.app/#/auth/login',
  },
  {
    id: 10,
    title: 'Sitio Freelancer',
    description: 'un Proyecto con HTML y CSS',
    url: 'https://rene-larios-freelancer.netlify.app/',
  },
  {
    id: 11,
    title: 'Criptomonedas',
    description: 'Consulta de Precios de Criptomonedas mediante el API de Cryptocompare proyecto del curso React - La Guía Completa: Hooks Context Redux MERN +15 Apps de Juan Pablo De la torre Valdez ',
    url: 'https://wonderful-rugelach-bd9050.netlify.app/',
  }

];

function App() {


  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Sidebar />
        <Routes>
          <Route  >
            {/* asi se ponen las rutas si solamente quiero mostrarlas sin nada de seguridad */}
            <Route index element={<Home />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/trabajos" element={
              <div className=' w-3/4 px-5 mx-auto pb-3 m-5'>
                <h1 className='text-white text-4xl text-center pt-5 uppercase'>Trabajos</h1>
                <p className='text-white  text-center pb-5'>Mira Algunos De Mis Trabajos</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {proyectos.map((proyecto) => (
                    <Trabajos key={proyecto.id} {...proyecto} />
                  ))}
                </div>
              </div>
            } />
            <Route path="/contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
