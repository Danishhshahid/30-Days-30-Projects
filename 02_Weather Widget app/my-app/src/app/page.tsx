import Image from "next/image";
import React from "react";


import WeatherWidget from "@/components/weatherapp";

export default function home(){
  return(
    <div>
      <WeatherWidget/>
    </div>
  )
}