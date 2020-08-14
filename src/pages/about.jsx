import React from 'react'

const About = () => {
    const imgProfile = 'https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/102557338_1119234095107050_1040334001357421282_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=iDxAeMEKcFsAX_nWL_S&_nc_ht=scontent.fmex5-1.fna&oh=71cdbc24c0696b004433545679a5239e&oe=5F5CFBE1'
    return(
        <div className="container p-10  h-full w-full mx-auto text-white">
            <img className="sm:w-1/2 md:w-1/3 mx-auto align-top lg:mx-0 lg:inline-block rounded-lg" src={imgProfile}></img>
            <div className="lg:inline-block max-w-2xl xl:ml-10 text-justify">
                <h1 className="text-3xl my-4">José Miguel Gutiérrez Guevara</h1>
                <p className="text-md md:text-xl my-3">Soy originario de Ciudad de México.</p>
                <p className="text-md md:text-xl my-3">Tengo 24 años, nací el 5 de Julio de 1996.</p>
                <p className="text-md md:text-xl my-3">Actualmente estoy terminando mis estudios como Ingeniero en Sistemas Computacionales en la Escuela Superior de Cómputo del Instituto Politécnico Nacional.</p>
                <p className="text-md md:text-xl my-3">Como hobby me gusta cocinar, principalmente repostería.</p>
                <p className="text-md md:text-xl my-3">A lo largo de mi carrera profesional, que ya son 5 años de xperiencia en la industria, he aprendido diversos lengajes de programación al igual que frameworks de desarrollo y he esatdo a cargo de equipos de trabajo de hasta 6 integrantes.</p>
                <p className="text-md md:text-xl my-3">Dentro de algunos proyectos personales que he realizaso se encuentra la aplicación de <a className="text-blue-700" href="http://www.electchain.io/" target="_blanck">Electchain</a>, esta iniciactiva la desarrolle con algunos compañeros de escuela y fue pensada para revolucionar la forma de votar en México.</p>
                <p className="text-md md:text-xl my-3">De igualforma mi último trabajo fue en una empresa de la cual fui funcador <a className="text-green-500" href="https://itzamna.io" target="_blanck">Itzamná</a>, una empresa consultora de software, donde el principal target eran todos aquellos proyectos innovadores y retadores par ala industria, donde en convinación cn la tecnología Blockchain surgieran buenos proyectos.</p>
            </div>
        </div>
    )
}

export default About