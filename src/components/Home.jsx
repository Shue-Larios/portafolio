import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export const Home = () => {




    return (
        <div className='flex items-center justify-center lg:h-screen lg:-mt-10 md:mt-24'>
            <div className='w-3/4 flex items-center justify-center flex-col-reverse sm:flex-row gap-10
             px-5 
             mx-auto 
             lg:pb-3 
             lg:columns-2 
             text-center 
             lg:flex 
             lg:justify-between'>
                <div className="flex flex-col justify-center mb-5">
                    <h1 className='text-white text-4xl sm:text-6xl text-left mb-5 '>
                        Soy un desarrollador web Full Stack
                    </h1>

                    <div className='text-left'>
                        <p className='text-white text-left'>
                            Tengo 1 año de experiencia en desarrollo web, enfocado principalmente en estudios y proyectos personales. Actualmente, disfruto trabajando en aplicaciones web utilizando tecnologías como React, Tailwind, Node.js y MongoDB
                        </p>

                        {/* letras de maquina de escribir */}
                        <div className='text-white my-5 text-2xl'>
                            <Typewriter
                                options={{
                                    strings: [
                                        'Rene Larios',
                                        'React',
                                        'Tailwind CSS',
                                        ' Node.js',
                                        'MongoDB'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>

                        {/* Boton */}
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-5">
                            {/* link de router dom para mandar a otra pantalla  */}
                            <Link to="acerca">Acerca de mí</Link>
                        </button>

                        

                        

                        
                    </div>
                </div>
                {/* imagen */}
                <div>
                    <img
                        className='lg:max-w-sm'                       
                        loading='lazy'
                        src="https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2FIMG_6165ov.png?alt=media&token=4e47e9a6-05d9-4ea3-92f0-e0ceab6c927e&_gl=1*rb9ma3*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTg3NTc0OC4zLjEuMTY5NTg3NjI5Mi41OC4wLjA." alt="imagen profesional" />
                </div>
            </div>
        </div>
    )
}
