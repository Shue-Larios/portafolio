import { useState } from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // toggle es alternar el menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <>

      <div className='relative '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>

            {/* lado izquierdo */}
            <div className='flex items-center'>

              <Link
                to='/'
                className='text-white text-xl font-bold'>
                <img
                 //  {/* draggable="false" /* Deshabilitar el arrastre de la imagen  */}
                         draggable="false"
                  className='w-24 h-auto'
                  src="https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2FLogo%20Rene%20LArios.png?alt=media&token=40880050-efd0-47c0-916c-7b170ef92f1d&_gl=1*rud38e*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NjA1NDA1My41LjEuMTY5NjA1NDYwMy41Mi4wLjA." alt="Logo Personal"
                  title='Logo Rene Larios'
                />
              </Link>
            </div>

            {/* lado derecho */}
            <div className='hidden md:flex space-x-4'>

              <Link className='text-white hover:bg-gray-700 px-4 py-2 rounded-full' to='/'>Inicio</Link>

              <Link className='text-white hover:bg-gray-700 px-4 py-2 rounded-full'
                to='acerca'
              >Acerca de</Link>

              <Link className='text-white hover:bg-gray-700 px-4 py-2 rounded-full'
                to='habilidades'
              >
                Habilidad
              </Link>

              <Link className='text-white hover:bg-gray-700 px-4 py-2 rounded-full'
                to='trabajos'
              >
                Trabajos
              </Link>

              <Link className='text-white hover:bg-gray-700 px-4 py-2 rounded-full'
                to='contacto'
              >
                Contacto
              </Link>



            </div>
            <div className='md:hidden flex items-center'>
              <button onClick={toggleMenu} className='text-gray-300 hover:text-white focus:outline-none'>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menu movil */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-16 right-4 bg-gray-900 py-2 px-4 rounded-lg'>

            <Link 
              className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'
              to='/'
               // aca le digo que cierre el link o q oculte el menu
               onClick={closeMenu}
              >
              Home
              </Link>

              <Link
              className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'
              to='/acerca'
              onClick={closeMenu}
            >
              Acerca
            </Link>

              <Link 
              className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'
              to='habilidades'
              onClick={closeMenu}
              >
              Habilidad
              </Link>

              <Link 
              className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'
              to='trabajos'
              onClick={closeMenu}

              >
              Trabajos
              </Link>

              <Link 
              className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'
              to='contacto'
              onClick={closeMenu}
              >
              Contacto
              </Link>
 



          </div>
        )}
      </div>


    </>
  )
}
