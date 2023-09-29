import { useState } from 'react'
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})



export const Contacto = () => {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombre,
      telefono,
      correo,
      mensaje].includes('')) {
      Toast.fire({
        icon: 'error',
        title: 'Por favor, complete todos los campos del formulario.'
      })
    }


  }

  return (
    <>
      <section className='flex items-center justify-center h-screen -mt-16'>
        <form className="bg-sky-700 p-8 rounded-3xl"
          onSubmit={handleSubmit}>
          <fieldset>
            <legend className='text-center text-white text-2xl uppercase font-bold mb-5'>Contactame llenando todos los campos</legend>
            <div className="">
              <div className='flex gap-10'>
                <div className="mb-2 w-1/2">
                  <label htmlFor="nombre" className='text-white font-bold mb-1 block'>Nombre</label>
                  <input id='nombre' className="w-full rounded p-1" type="text" placeholder="Tu Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="mb-2 w-1/2">
                  <label htmlFor="telefono" className='text-white font-bold mb-1 block'>Telefono</label>
                  <input id='telefono' className="w-full rounded p-1" type="tel" placeholder="Tu Telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="correo" className='text-white font-bold mb-1 block'>Correo</label>
                <input id='correo' className="w-full rounded p-1" type="email" placeholder="Tu Correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="mensaje" className='text-white font-bold mb-1 block'>Mensaje</label>
                <textarea id='mensaje' className="w-full h-40 rounded p-1"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="enviar">
              <div className='flex items-center justify-center '>
                <input className="bg-sky-800 p-2 text-xl no-underline uppercase font-bold rounded-xl w-11/12 hover:cursor-pointer hover:bg-sky-900 " type="submit" value="Enviar" />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  )
}
