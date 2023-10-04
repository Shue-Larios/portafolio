import React from 'react'

export const Trabajos = ({ title, description, url, img }) => {



    return (
        <>

            <div className="p-7 md:p-5 max-w-md rounded bg-white overflow-hidden shadow-lg ">
                <img className="w-full" src={img} alt={title} />
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="lg:px-6 lg:pt-4 lg:pb-2">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500
                         hover:bg-blue-700
                          text-white font-bold py-2 px-4 rounded-full"
                    >
                        Ver Proyecto
                    </a>
                </div>
            </div>



        </>

    )
}
