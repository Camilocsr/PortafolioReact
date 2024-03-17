import React from "react";

const Servicios = ()=>{
    return(
        <section id="servicios" className="container-fluid separacion1">
    <div className="row">
      <div className="titulo-portafolio">
        <h1 className="text-ortafolio">Servicios de diseño y maquetación web</h1>
      </div>
      <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="container-html-tecnologias">
          <div className="html"><i className="fa-brands csscambio fa-html5"></i></div>
          <h1 className="centrar-h1-html">Html-5</h1>
          <hr className="hr4"/>
          <p><li className="desaparecer-punto">Desarrollo web</li></p>
          <p className="centrar-texto-html">Usando html puedo maquetar cualquier tipo de pagina, tengo una muy buena organización de todo mi codigo.</p>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="container-html-tecnologias">
          <div className="html"><i className="fa-brands csscambio fa-css3-alt"></i></div>
          <h1 className="centrar-h1-html">Css3</h1>
          <hr className="hr4"/>
          <p><li className="desaparecer-punto">Desarrollo web</li></p>
          <p className="centrar-texto-html">Gracias a Css3 puedo darle unos muy bonitos estilos y hacerla interactiva para los usuarios.</p>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="container-html-tecnologias">
          <div className="html"><i className="fa-brands csscambio fa-square-js"></i></div>
          <h1 className="centrar-h1-html">JavaScript</h1>
          <hr className="hr4"/>
          <p><li className="desaparecer-punto">Desarrollo web</li></p>
          <p className="centrar-texto-html">Puedo usarlo al nivel de front-end, tengo conocimiento de ES5 y ES6, esto me permite hacer lo que el cliente requiera.</p>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Servicios;