import React from 'react'

export const Acerca = () => {
  
    return (
        <>
            {/* el div centrado */}
            <div className="flex justify-center items-center h-screen -my-16">
                <div className='w-3/4 p-5 text-white bg-sky-700 '>
                    <h1 className='text-center  text-6xl'>Acerca de mi</h1>
                    {/* div de la linea tipo subrayado */}
                  <div className='w-80 h-1 bg-sky-900 block mt-2 ml-auto mb-10 mr-auto '></div>
                    <div className='gap-10 pb-3 flex'>
                        {/* para dar 50 y 50 a cada columna pongo w-1/2 a cada elemento */}
                        <h2 className='text-right text-4xl w-1/2 font-bold'>Hola. Soy Rene Larios, encantado de conocerte. Echa un vistazo a tu alrededor</h2>
                        <h4 className='w-1/2 flex items-center'>Soy alguien que se especializa en crear aplicaciones web que se adaptan a diferentes dispositivos y crecen fácilmente con el tiempo. Tengo un buen entendimiento de cómo hacer que las aplicaciones se vean y funcionen de manera amigable para el usuario.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
