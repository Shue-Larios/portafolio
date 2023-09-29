import React from 'react'

export const Navbar = () => {
    return (
        <>
            <div className='text-white flex py-2 pr-10 justify-end'>
                <a href="/" className='px-4 py-2 hover:bg-gray-700 hover:rounded-full'>Home</a>
                <a href="acerca" className='px-4 py-2 hover:bg-gray-700 hover:rounded-full'>Acerca de</a>
                <a href="habilidades" className='px-4 py-2 hover:bg-gray-700 hover:rounded-full'>Habilidad</a>
                <a href="trabajos" className='px-4 py-2 hover:bg-gray-700 hover:rounded-full'>Trabajos</a>
                <a href="contacto" className='px-4 py-2 hover:bg-gray-700 hover:rounded-full'>Contacto</a>
            </div>


        </>
    )
}
