import React, { useState } from 'react'




export const Habilidades = () => {

   










  const logos = [
    {
      id: '1',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2Fhtml5.png?alt=media&token=2938a051-a9db-462e-8ebd-95763fc0b76c&_gl=1*yee04t*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3NTQ1Ni4zMy4wLjA.",
      alt: "Logo HTML",
      title:'HTML5'
    },
    {
      id: '2',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2Fcss3-logo-png-transparent.png?alt=media&token=e7d2f3f2-7c7a-4de2-99d6-94a49c41454c&_gl=1*16twae1*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3MzgxMS4yOS4wLjA.",
      alt:"Logo CSS3",
      title:'CSS3'
    }, {
      id: '3',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2Fsass.png?alt=media&token=10342398-780c-48f5-acf2-28b221a0f54d&_gl=1*ppr942*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3NTU4Ni41MS4wLjA.",
      alt:"Logo SASS",
      title:'SASS'
    }, {
      id: '4',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2FBootstrap_logo.svg.png?alt=media&token=b3a16a57-b80a-46c2-8f2c-bf61a8094515&_gl=1*1epn9tp*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3MzcxNi42MC4wLjA.",
      alt:"Logo Boostrap",
      title:'Boostrap'
    }, {
      id: '5',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2Ftailwind.png?alt=media&token=5370a8bb-aac7-4c92-a0fe-9a0a127c24ae&_gl=1*1jxftqv*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3NTYyOC45LjAuMA..",
      alt:"Logo TailwindCSS",
      title:'TailwindCSS'
    }, {
      id: '6',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2FJavaScript-logo.png?alt=media&token=a641f9ab-167a-428a-809b-e0ec0eb3b09c&_gl=1*1q74m7v*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3Mzc1MS4yNS4wLjA." ,
      alt:"Logo JavaScript",
      title:'JavaScript'
    }, {
      id: '7',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2FReact-icon.svg.png?alt=media&token=b84fa536-f54f-4039-bda2-f987f64d7a34&_gl=1*1rxcmdw*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3Mzc4MC42MC4wLjA.",
      alt:"Logo React",
      title:'ReactJS'
    }, {
      id: '8',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2Fnodejs.png?alt=media&token=216fd4dd-fe36-4167-9870-ac2ae8b4d996&_gl=1*137db8o*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3NTY2OC40NS4wLjA.",
      alt:"Logo NodeJS",
      title:'NodeJS'
    }, {
      id: '9',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2Fphp.png?alt=media&token=84c43166-52cc-4deb-9e78-772a04836a3d&_gl=1*vzco4e*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3NTcwOC41LjAuMA..",
      alt:"Logo PHP",
      title:'PHP'
    }, {
      id: '10',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2Fmysql.png?alt=media&token=ccaaf6e4-1ca9-4fda-a27a-2823224502d4&_gl=1*sccy1g*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3NTc0NS40Ny4wLjA.",
      alt:"Logo MySQL",
      title:'MySQL'
    }, {
      id: '11',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2Ffirebase.png?alt=media&token=e6ba5345-aa26-4a10-aae8-b541516c473e&_gl=1*1hdnqv8*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3NTc4My45LjAuMA..",
      alt:"Logo Firebase",
      title:'Firebase'
    }, {
      id: '12',
      src:"https://firebasestorage.googleapis.com/v0/b/restaurant-63fb0.appspot.com/o/imagenes%2Fpngwing.com.png?alt=media&token=700b0739-b7fc-45cc-8e6d-d8ccdc5e75ed&_gl=1*1y5g6z8*_ga*NjU3MzEyOTI1LjE2OTU3OTkyNzM.*_ga_CW55HF8NVT*MTY5NTk3MzY1Ni40LjEuMTY5NTk3NTA1MS4yNC4wLjA.",
      alt:"Logo MongoDB",
      title:'MongoDB'
    }
  ]



  return (
    <>



      {/*  */}

      <div className='flex items-center justify-center h-screen -mt-16 '>
        <div className='bg-sky-700 grid grid-cols-5 gap-5 w-6/12 items-center p-7 rounded-xl shadow-2xl '>

        {logos.map((logo) => (  
                  <div className='relative group '> 
                      <img
                        key={logo.id}
                        className='transition-transform transform group-hover:translate-x-2 group-hover:translate-y-2 hover:cursor-pointer'
                         src={logo.src}
                         alt={logo.alt} 
                         title={logo.title} 
                         />  
                  </div>
               
        ))} 
        </div>
      </div >
    </>
  )
}
