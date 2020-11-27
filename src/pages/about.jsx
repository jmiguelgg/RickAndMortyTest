import React from 'react'

const About = () => {
    const imgProfile1 = 'https://scontent-qro1-1.cdninstagram.com/v/t51.2885-15/e35/45585430_169803400644169_100704391583391784_n.jpg?_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=6Bf4iiviiWQAX-T6seH&tp=1&oh=64a9196049b50104dd381ac2df8f2be2&oe=5FE88B2E'
    const imgProfile = 'https://scontent-qro1-1.cdninstagram.com/v/t51.2885-15/e35/100937526_2378942159071874_1510845817763343057_n.jpg?_nc_ht=scontent-qro1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=0WHWdmYt-aEAX9RNKO8&tp=1&oh=24117a4bf3f837692b7bb29b3acc453f&oe=5FE85B3D'
    return(
        <div className="container p-10  h-full w-full mx-auto text-white">
            <img className="sm:w-1/2 md:w-1/3 mx-auto align-top lg:mx-0 lg:inline-block rounded-lg" src={imgProfile1}></img>
            <div className="lg:inline-block max-w-2xl xl:ml-10 text-justify">
                <h1 className="text-3xl my-4">David Garcia Valdominos</h1>
                <p className="text-md md:text-xl my-3">Soy originario de Ciudad de México.</p>
                <p className="text-md md:text-xl my-3">Estudio en la UNAM la carrera de Químico Farmacéutico Biológico.</p>
                <p className="text-md md:text-xl my-3">Tengo 24 años y estoy empezando mi negoció de venta de artículos de la caricatura.</p>
                <p className="text-md md:text-xl my-3">Rick and Morty.</p>
                <p className="text-md md:text-xl my-3">Primero quise que supieran todos los datos de los personajes que se encuentran en esta caricatura.</p>
                <p className="text-md md:text-xl my-3">Asi que con la ayuda de mi Primo le pedi una Página donde pudiera mostrar todos esos datos y en que capítulos salen.</p>
                <p className="text-md md:text-xl my-3">Para que mas gente pudiera conocer mas de esta gran caricatura y pueda en un futuro ya agregar a la página el apartado de productos y puedan encontar todo referente a esto.</p>
                <p className="text-md md:text-xl my-3">En un futuro espero poder agregar mas caricaturas que han sido importante para muchos chavos de mi edad.</p>
                <p className="text-md md:text-xl my-3">Y mi negoció vaya creciendo ya no solo con ventas de juguetes si no tambien de otros accesorios.</p>
            </div>
            <img className="sm:w-1/2 md:w-1/3 mx-auto align-top lg:mx-0 lg:inline-block rounded-lg" src={imgProfile}></img>
            <div className="lg:inline-block max-w-2xl xl:ml-10 text-justify">
                <h1 className="text-3xl my-4">Derian Alejandro Garcia Duran</h1>
                <p className="text-md md:text-xl my-3">Estudio en la UPVM en la carrera de Ingenieria en Informatica en el cuatrimestre noveno.</p>
                <p className="text-md md:text-xl my-3">Tengo 22 años y soy el desarrollador de esta Página Web.</p>
                <p className="text-md md:text-xl my-3">Rick and Morty.</p>
                <p className="text-md md:text-xl my-3">Estoy desarrolando esta página para ayudar a mi primo en su nuevo negocio que va iniciando al desarrollar su página para dar a conocer mas de esta caricatura y poder tener una mejor difusión de la página web.</p>
                <p className="text-md md:text-xl my-3">El desarrollo de esta página web ha sido implementado desde mi octavo cuatrimestre de la carrera con el fin de plamar mis conocimientos y ayudar a generar una página web.</p>
                <p className="text-md md:text-xl my-3">Contacto: 55-27-11-89-58.</p>
                <a className="w-full mx-auto" href="https://www.facebook.com/derianalejandro.garciaduran">
                    <img source="https://www.sistemaimpulsa.com/blog/wp-content/uploads/2019/12/facebook-logo-redondo-PNG.png"/>
                </a>
            </div>
        </div>
    )
}

export default About