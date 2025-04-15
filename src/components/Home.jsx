import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export const Home = () => {




    return (
        <div className='flex items-center justify-center lg:h-full'>

            <div className='w-3/4 flex items-center justify-center flex-col-reverse sm:flex-row gap-10         '>
                <div className="flex flex-col justify-center mt-16 max-sm:mt-0">
                    <h1 className='text-white md:text-4xl  lg:text-6xl max-md:text-4xl  mb-5 '>
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


                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md mt-5">
                            {/* link de router dom para mandar a otra pantalla  */}
                            <Link to="acerca">Acerca de mí</Link>
                        </button>



                    </div>
                </div>
                {/* imagen */}
                <div>

                    <img
                        className='max-sm:max-w-xs lg:max-w-sm'
                        src="https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2FIMG_6165ov%20webp.webp?alt=media&token=ce3ff800-99b4-4107-9aa9-140bf3336e69&_gl=1*1681ncp*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NjU0NDQxMy43LjEuMTY5NjU0NTIwOS4zOS4wLjA." alt="imagen profesional" />
                </div>
            </div>
        </div>
    )
}
