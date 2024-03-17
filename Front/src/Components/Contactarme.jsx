import React from "react";

const Contacto = ()=>{
    return(
        <section id="contacto" className="container-fluid color-pantalla-contactos">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 container-principal-agradesimiento">
        <div className="contenedor-texto-agradesimiento wow animate__animated animate__shakeY">
          <p><span className="letra-agradecimiento">«</span>Estoy muy contento de saber que viste toda mi pagina, quiero darte las gracias por haberte tomado el tiempo, espero poder ayudarte en lo que necesites, conocerte y trabajar contigo.<span className="letra-agradecimiento">»</span></p>
        </div>
      </div>
      <div className="contenedor-formulario col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <form className="wow animate__animated animate-delay-2s animate__rotateOut" action="" id="form">
          <div className="form">
            <h1 className="titulo-contacto">Contactar.</h1>
            <div className="grupo">
              <input type="text" name="" id="name"/><span className="barra"></span>
              <label className="">Nombre</label>
            </div>
        
            <div className="grupo">
              <input type="email" name="" id="email"/><span className="barra"></span>
              <label>Email</label>
            </div>

            <div className="grupo">
              <input type="number" name="" id="number-contac"/><span className="barra"></span>
              <label>Numero</label>
            </div>

            <div className="grupo">
              <input type="number" name="" id="whatsapp"/><span className="barra"></span>
              <label>Whatsapp</label>
            </div>
        
            <div className="grupo">
              <textarea type="text" name="" placeholder="Le escribo por el motivo de..." id="asunto" rows="4"></textarea><span className="barra"></span>
              <label>Asunto</label>
            </div>
            <button className="btn-contacto" type="submit">Contactar</button>
            <p className="parrafo-form" id="parrafo-formulario"></p>
          </div>
        </form>
      </div>
    </div>
  </section>
    )
}

export default Contacto;