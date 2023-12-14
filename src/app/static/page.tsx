import React from "react";
import Client from "./_components/client";
import { unstable_noStore } from "next/cache";

export default async function Static() {
  //? { cache: "no-store" } here makes this route dynamic!
  const result = await fetch(
    "http://worldtimeapi.org/api/timezone/Africa/Cairo"
  );
  const awaited = await result.json();
  const africaCairo = awaited.datetime;

  const result2 = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires"
  );
  const awaited2 = await result2.json();
  const buenosAires = awaited2.datetime;

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <h1>This is a static page</h1>
      <p>The below times are</p>
      <p className="font-bold">BuenosAires</p> {buenosAires}
      <p className="font-bold">AfricaCairo</p> {africaCairo}
      <Client />
    </div>
  );
}
