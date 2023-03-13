import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { startOfWeek, endOfWeek, addWeeks, format } from "date-fns";
import { es } from "date-fns/locale";
import SemanaBox from "../../components/SemanaBox/SemanaBox";

const Acomodadores = () => {
  const today = new Date();
  const startDate = startOfWeek(addWeeks(today, -2)); //get two previous weeks
  const endDate = endOfWeek(addWeeks(today, 15)); // up to fifteen weeks

  const weeksArray = [];
  let currentDate = new Date(startDate.getTime());
  while (currentDate <= endDate) {
    const start = startOfWeek(new Date(currentDate.getTime()));
    const end = endOfWeek(new Date(currentDate.getTime()));
    weeksArray.push({ start, end });
    currentDate.setDate(currentDate.getDate() + 7); //moves to next week
  }

  // const [isLoaded, setIsloaded] = useState(false);
  // const [weeks, setWeeks] = useState([]);
  const { user } = useSelector((state) => state.auth);
  // const apiPoint = "http://localhost:8080/semanas/";
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  });

  // useEffect(() => {
  //   if(isLoaded === false)
  //   {
  //     const fetchWeeks = async() => {
  //       const response = await fetch(apiPoint + "getWeeks",
  //       {
  //         method: "GET",
  //         headers: {'Content-Type': 'application/json'},
  //       });
  //       const json = await response.json()
  //       setWeeks(json.allWeeks);
  //       setIsloaded(true)
  //     }
  //     fetchWeeks()
  //   }
  // }, [setWeeks, isLoaded, setIsloaded, weeks])

  return (
    <>
      <div className="mt-5">
        <h1 className="m-5">Crear Programa de Acomodadores</h1>
        {weeksArray.map((week, index) => (
          <SemanaBox
            key={index}
            Text={`Semana del ${format(week.start, "d \'de\' MMMM", {locale: es})} al ${format(week.end, "d \'de\' MMMM", {locale: es})}`}
          />
        ))}

        {/* {weeks.map(week => <SemanaBox key={week._id} data={week} />)} */}
      </div>
    </>
  );
};

export default Acomodadores;
