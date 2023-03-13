import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FormaAcomodadores from "../../components/FormaAcomodadores/FormaAcomodadores";

const apiPoint = "http://localhost:8080/semanas/";

const RolSemanalAcomodadores = () => {
  const { rolId } = useParams();

  const [weekData, setWeekData] = useState(null);
  const [loaded, isLoaded] = useState(false);
  const [audioVideo, setAudioVideo] = useState("");
  const [mezcladora, setMezcladora] = useState("");
  const [acomodadorUno, setAcomodadorUno] = useState("");
  const [acomodadorDos, setAcomodadorDos] = useState("");
  const [accesosUno, setAccesosUno] = useState("");
  const [accesosDos, setAccesosDos] = useState("");
  const [lector, setLector] = useState("");
  const [preside, setPreside] = useState("");
  const [recibidorEntreSemana, setRecibidorEntreSemana] = useState("");
  const [recibidorFinSemana, setRecibidorFinSemana] = useState("");
  const [aseo, setAseo] = useState("");

  useEffect(() => {
    if (!loaded) {
      const data = {
        id: rolId,
      };
      const fetchWeeks = async () => {
        const response = await fetch(apiPoint + "getOneWeek", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = await response.json();
        setWeekData(json);
        console.log(json);
        isLoaded(true);
      };
      fetchWeeks();
    }
  }, [loaded, rolId]);

  const handleSubmit = async() => {
    const data = {
      acomodadores: {
        audioVideo: audioVideo,
        mezcladora: mezcladora,
        acomodadores: [acomodadorUno, acomodadorDos],
        accesos: [accesosUno, accesosDos],
        lector: lector,
        recibidorEntreSemana: recibidorEntreSemana,
        recibidorFinSemana: recibidorFinSemana,
        preside: preside,
        aseo: aseo
      }
    }
    
  }

  if (!loaded) {
    return <div className="mt-5">hola</div>;
  }
  return (
    <div className="mt-5">
      <h1 className="mx-5">Fecha: {weekData.semana}</h1>
      <div className="container">
        <div className="row my-3">
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Audio y Video</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setAudioVideo(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Mezcladora</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setMezcladora(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Acomodador 1</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setAcomodadorUno(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Acomodador 2</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setAcomodadorDos(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Accesos 1</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setAccesosUno(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Accesos 2</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setAccesosDos(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Lector</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setLector(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Preside</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setPreside(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Recibidor Entre Semana</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setRecibidorEntreSemana(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-group">
              <span className="input-group-text">Recibidor Fin de Semana</span>
              <input
                className="form-control"
                type="text"
                onInput={(event) => {
                  setRecibidorFinSemana(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="input-group">
            <span className="input-group-text">Aseo</span>
            <input
              className="form-control"
              type="text"
              onInput={(event) => {
                setAseo(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <button className="mx-5 btn btn-primary">Guardar</button>
    </div>
  );
};

export default RolSemanalAcomodadores;
