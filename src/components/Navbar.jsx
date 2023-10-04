import {  useState } from 'react'

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  

    return (
        <>

<div className='relative '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>

            {/* lado izquierdo */}
          <div className='flex items-center'>
            <a href='/' className='text-white text-xl font-bold'>
            <img
              className='w-24 h-auto'
              src="https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2FLogo%20Rene%20LArios.png?alt=media&token=40880050-efd0-47c0-916c-7b170ef92f1d&_gl=1*rud38e*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NjA1NDA1My41LjEuMTY5NjA1NDYwMy41Mi4wLjA." alt="Logo Personal"
              title='Logo Rene Larios'
              />
            </a>
          </div>

          {/* lado derecho */}
          <div className='hidden md:flex space-x-4'>
            <a href='/' className='text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
              Inicio
            </a>
            <a href='acerca' className='text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
              Acerca de
            </a>
            <a href='habilidades' className='text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
              Habilidad
            </a>
            <a href='trabajos' className='text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
              Trabajos
            </a>
            <a href='contacto' className='text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
              Contacto
            </a>
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
          <a href='/' className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
            Home
          </a>
          <a href='acerca' className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
            Acerca de
          </a>
          <a href='habilidades' className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
            Habilidad
          </a>
          <a href='trabajos' className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
            Trabajos
          </a>
          <a href='contacto' className='block text-white hover:bg-gray-700 px-4 py-2 rounded-full'>
            Contacto
          </a>
        </div>
      )}
    </div>
          

        </>
    )
}
