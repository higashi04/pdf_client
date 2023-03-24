import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//import FormaAcomodadores from "../../components/FormaAcomodadores/FormaAcomodadores";
import TextInput from "../../components/TextInput/TextInput";

const apiPoint = "http://localhost:8080/semanas/";

const RolSemanalAcomodadores = () => {
  const { rolId } = useParams();

  const [weekData, setWeekData] = useState(null);
  const [loaded, isLoaded] = useState(false);
  const [btnSubmitDisabled, setBtnSubmitDisabled] = useState(false);
  const [values, setValues] = useState({
    audioVideo: "",
    mezcladora: "",
    acomodadorUno: "",
    acomodadorDos: "",
    accesosUno: "",
    accesosDos: "",
    lector: "",
    preside: "",
    recibidorEntreSemana: "",
    recibidorFinSemana: "",
    aseo: "",
  });

  const dataAcomodadores = [
    {
      id: 1,
      Name: "audioVideo",
      Text: "Audio y Video",
      Default: values.audioVideo
    },
    {
      id: 2,
      Name: "mezcladora",
      Text: "Mezcladora",
      Default: values.mezcladora
    },
    {
      id: 3,
      Name: "acomodadorUno",
      Text: "Acomodador Uno",
      Default: values.acomodadorUno
    },
    {
      id: 4,
      Name: "acomodadorDos",
      Text: "Acomodador Dos",
      Default: values.acomodadorDos
    },
    {
      id: 5,
      Name: "accesosUno",
      Text: "Accesos Uno",
      Default: values.accesosUno
    },
    {
      id: 6,
      Name: "accesosDos",
      Text: "Accesos Dos",
      Default: values.accesosDos
    },
    {
      id: 7,
      Name: "lector",
      Text: "Lector",
      Default: values.lector
    },
    {
      id: 8,
      Name: "preside",
      Text: "Preside",
      Default: values.lector
    },
    {
      id: 9,
      Name: "recibidorEntreSemana",
      Text: "Recibidor Entre Semana",
      Default: values.recibidorEntreSemana
    },
    {
      id: 10,
      Name: "recibidorFinSemana",
      Text: "Recibidor Fin de Semana",
      Default: values.recibidorFinSemana
    },
    {
      id: 11,
      Name: "aseo",
      Text: "Aseo",
      Default: values.aseo
    },
  ];

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
        setValues(
          {
            audioVideo: json.audioVideo,
            mezcladora: json.mezcladora,
            acomodadorUno: json.acomodadores[0],
            acomodadorDos: json.acomodadores[1],
            accesosUno: json.accesos[0],
            accesosDos: json.accesos[1],
            lector: json.lector,
            preside: json.preside,
            recibidorEntreSemana: json.recibidorEntreSemana,
            recibidorFinSemana: json.recibidorFinDeSemana,
            aseo: json.aseo,
          }
        ) 
        isLoaded(true);
      };
      fetchWeeks();
      console.log(loaded)
    }
  }, [loaded, rolId, setValues]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };
  
  // const [audioVideo, setAudioVideo] = useState("");
  // const [mezcladora, setMezcladora] = useState("");
  // const [acomodadorUno, setAcomodadorUno] = useState("");
  // const [acomodadorDos, setAcomodadorDos] = useState("");
  // const [accesosUno, setAccesosUno] = useState("");
  // const [accesosDos, setAccesosDos] = useState("");
  // const [lector, setLector] = useState("");
  // const [preside, setPreside] = useState("");
  // const [recibidorEntreSemana, setRecibidorEntreSemana] = useState("");
  // const [recibidorFinSemana, setRecibidorFinSemana] = useState("");
  // const [aseo, setAseo] = useState("");


  const handleSubmit = async () => {
    const data = {
      acomodadores: {
        audioVideo: values.audioVideo,
        mezcladora: values.mezcladora,
        acomodadores: [values.acomodadorUno, values.acomodadorDos],
        accesos: [values.accesosUno, values.accesosDos],
        lector: values.lector,
        recibidorEntreSemana: values.recibidorEntreSemana,
        recibidorFinSemana: values.recibidorFinSemana,
        preside: values.preside,
        aseo: values.aseo,
        _id: rolId,
      },
    };
    try {
      setBtnSubmitDisabled(true);
      const response = await fetch(apiPoint + "save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("success");
      } else {
        throw response;
      }
    } catch (error) {
      const jsonErr = await error.json();
      console.error(jsonErr);
    } finally {
      setBtnSubmitDisabled(false);
    }
  };

  if (!loaded) {
    return <div className="mt-5">cargando...</div>;
  }
  return (
    <div className="mt-5">
      <h1 className="mx-5">Fecha: {weekData.semana}</h1>
      <div className="container">
        <div className="row my-3">
          {dataAcomodadores.map((data) => (
            <div key={data.id} className="col-6">
              <TextInput key={data.id} data={data} onInputChange={handleInputChange} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="mx-5 btn btn-primary"
        onClick={handleSubmit}
        disabled={btnSubmitDisabled}
      >
        Guardar
      </button>
      {values.audioVideo}
    </div>
  );
};

export default RolSemanalAcomodadores;
