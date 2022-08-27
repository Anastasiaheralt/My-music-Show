import React from "react";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { ProviderData } from "../component/ProviderData";
import "./providerProfile.css";

const cardP = {
  Title: "Name",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitabus neque.",
  ButtonC: "Actualizar",
};

export const ProviderPage = () => {
  return (
    <div>
      <div className="container-fluid bgdeg p-1">
        <br />
        <br />
        <br />
        <Navbar />
      </div>
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-3">
            <div className="container">
              <div className="card" /*style="width: 18rem"*/>
                <img
                  className="card-img-top"
                  src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{cardP.Title}</h5>
                  <p className="card-text">{cardP.Description}</p>
                </div>
                <div className="card-footer">
                  <br />
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-dark w-50 boton">
                      {cardP.ButtonC}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <ProviderData />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};