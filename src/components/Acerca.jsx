import React from 'react'

export const Acerca = () => {

    return (
        <>
            {/* el div centrado */}
            <div className="flex justify-center items-center md:h-screen md:-my-16 m-2">
                <div className='w-3/4 p-5
                 text-white
                  bg-sky-700 rounded-xl'>
                    <h1 className='text-center  text-6xl'>Acerca de mí</h1>
                    {/* div de la linea tipo subrayado */}
                    <div className='md:w-80 h-1 bg-sky-900 block mt-2 ml-auto mb-10 mr-auto'></div>
                    <div className='md:gap-10 pb-3 md:flex '>
                        {/* para dar 50 y 50 a cada columna pongo w-1/2 a cada elemento */}
                        <h2 className='md:text-right text-2xl md:text-4xl md:w-1/2 font-bold mb-5 md:mb-0'>Hola. Soy Rene Larios, encantado de conocerte. Echa un vistazo a tu alrededor</h2>
                        <h4 className='md:w-1/2 flex items-center'>Soy alguien que se especializa en crear aplicaciones web que se adaptan a diferentes dispositivos y crecen fácilmente con el tiempo. Tengo un buen entendimiento de cómo hacer que las aplicaciones se vean y funcionen de manera amigable para el usuario.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
