"use client";

import React from "react";

export default function Client() {
  //Get the lastest pokemon from a server
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone/Africa/Cairo", {
      cache: "no-store",
    }) //? The route is static, but fetch is not
      .then((res) => res.json())
      .then((data) => setTime(data.datetime));
  }, []);

  return (
    <div className="bg-red-500 flex flex-col justify-center items-center">
      <p>I am a client component, and I am still static!</p>
      <p className="text-red-200">{time}</p>
    </div>
  );
}
