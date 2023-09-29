
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import { Acerca } from './components/Acerca';
import { Habilidades } from './components/Habilidades';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Trabajos } from './components/Trabajos'
import viteLogo from '/vite.svg'
import { Contacto } from "./components/Contacto";

const projects = [
  // Agrega más proyectos aquí
  {
    title: 'Control de Presupuesto',
    description: 'Control de Presupuesto en React con Vite y LocalStorage',
    url: 'https://resplendent-otter-9acca3.netlify.app/',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F1.JPG?alt=media&token=20025a5e-b820-4d80-b447-30dc45e13215',
  },
  {
    title: 'Administrador de Pacientes',
    description: 'Administrador de Pacientes en Vite, Tailwind CSS y LocalStorage',
    url: 'https://veteri-citas-react.netlify.app/',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F2.JPG?alt=media&token=af8d8f67-7ccb-47eb-8b38-dbb57f3dba8d',
  },
  {
    title: 'Uptask',
    description: 'Proyecto MERN Stack con TailwindCSS Headless UI, Context API, Socket IO - MongoDB',
    url: 'https://uptask-mern-shue.netlify.app/',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F3.JPG?alt=media&token=a4503ade-7953-445d-b133-34aec1a9a1eb',
  },
  {
    title: 'Clima  React',
    description: 'Clima en React con Vite consumiendo DOS Apis',
    url: 'https://reactweb-shuelarios.netlify.app/',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F4.JPG?alt=media&token=e6469a67-16a9-4fe1-a6e7-73b746a28eb2',
  },
  {
    title: 'CalendarApp',
    description: 'React con Vite Backend - Node, Express,Mong',
    url: 'https://fascinating-platypus-c3bc2a.netlify.app/',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F5.JPG?alt=media&token=ecd76a54-a69e-477a-bc7c-5458de08e9ab',
  },

  {
    title: 'FESTIVAL MÚSICA',
    description: 'Proyecto con SASS y Gulp',
    url: 'https://stupendous-kitten-3df228.netlify.app/',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F7.JPG?alt=media&token=5a224426-a82e-4c4e-8cc6-6bba54413f59',
  },
  {
    title: 'Blog Cafe',
    description: 'Un proyecto con HTML y CSS',
    url: 'https://blog-cafe-shue.netlify.app/',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F8.JPG?alt=media&token=4702d109-b461-4c60-a3f5-7d3d23c34885',
  },
  {
    title: 'Buscador de Gif',
    description: 'React con Vite consumiendo una Api',
    url: 'https://gif-buscador-shue.netlify.app/',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F9.JPG?alt=media&token=b9c5ea8d-632b-4fc2-9cbd-91961380ca7f',
  },
  {
    title: 'Lugares y Puntos',
    description: 'React con Vite  utlizando la APi de Google Maps',
    url: 'https://lugares-puntos-rene1.netlify.app/#/auth/login',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F10.JPG?alt=media&token=650028f4-95b1-4313-8ce0-f1404bae572f',
  },
  {
    title: 'Sitio Freelancer',
    description: 'un Proyecto con HTML y CSS',
    url: 'https://rene-larios-freelancer.netlify.app/',
    img: 'https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2F11.JPG?alt=media&token=c483db86-ac6f-4dce-9adb-780014f56819',
  }
];

function App() {


  return (
    <>
      <Navbar />
      <Sidebar />
      {/*
      <section id='acerca'>
      <Acerca />

      </section>
      <section id='habilidades'>
        <Habilidades />
      </section>
 */}



      {/* <section id='trabajos'> */}

      {/* parte de trabajos */}




      <BrowserRouter > 
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
                  {projects.map((project, index) => (
                    <Trabajos key={index} {...project} />
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
