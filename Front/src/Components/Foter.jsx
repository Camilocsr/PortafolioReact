import React from "react";

const Foter = ()=>{
 return(
    <footer className="container-fluid color-pie-pagina">
    <div className="row">
      <div className="contenedor-pie-de-pagina col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <img className="animate__animated wow animate__heartBeat animate-delay-2s" src="images/csr-foo.png" alt="logo de la pagina, camilo solano rodriguez" width="100"/>
        <p>Este portafolio web fue creado utilizando elementos de boostrap-5, wow.js, animate.css, y componentes de (codigo web), (AlexCG Design), (Carlos Di Giacomo).</p>
      </div>
      <div className="contenedor-pie-de-pagina col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <h3 className="ziz wow animate__animated animate__wobble animate__delay-1s">Información <br/>de contacto</h3>
        <p className="wow animate__animated animate__jello animate__delay-1s">whatsapp: <span className="white-contacto">+57 311 702 2824</span><br/>
          Celular: <span className="white-contacto">+57 313 636 8783</span><br/>
          Correo: <span className="white-contacto">esmunred@gmail.com</span></p>
      </div>
      <div className="contenedor-pie-de-pagina wow animate__animated animate__bounceInUp animate-delay-4s col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <h3>Redes sociales</h3>
        <p>Me puedes encontrar en todas las redes sociales como @camilosolanorodriguez o dandole directamente click a los iconos.</p>
        <a href="https://api.whatsapp.com/send?phone=573117022824&text=Buenos%20dias%20o%20buenas%20tardes%2C%20le%20hablo%20por%20el%20motivo%20de%3A"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="https://www.facebook.com/camilosolanorodriguez"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://www.facebook.com/messages/t/100023768829242"><i className="fa-brands fa-facebook-messenger"></i></a>
        <a href="https://github.com/Camilocsr"><i className="fa-brands fa-github"></i></a>
      </div>
    </div>
  </footer>
 )
}

export default Foter;