export default async function Test() {
  return (
    <div className="flex justify-center h-auto">
      <ExampleOne />
      <div className="border-l-2 h-auto"></div>
      <ExampleTwo />
      <div className="border-l-2 h-auto"></div>
      <ExampleThree />
    </div>
  );
}

async function ExampleOne() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires"
  );
  const buenosAires = (await response.json()) as {
    datetime: string;
  };  
  const response2 = await fetch(
    "http://worldtimeapi.org/api/timezone/Africa/Cairo"
  );
  const africaCairo = (await response2.json()) as {
    datetime: string;
  };
  const response3 = await fetch("https://randomuser.me/api/");
  const randomUser = (await response3.json()) as {
    results: [
      {
        name: {
          first: string;
        };
      }
    ];
  };
  return (
    <div className="space-y-4 p-4 text-center">
      <h1 className="text-2xl font-bold text-indigo-500">ExampleOne</h1>
      <p className="font-bold">BuenosAires</p> {buenosAires.datetime}
      <p className="font-bold">AfricaCairo</p> {africaCairo.datetime}
      <p className="font-bold">Random User</p>{" "}
      {randomUser.results[0].name.first}
    </div>
  );
}

async function ExampleTwo() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires",
  );
  const buenosAires = (await response.json()) as {
    datetime: string;
  };
  const response2 = await fetch(
    "http://worldtimeapi.org/api/timezone/Africa/Cairo",
  );
  const africaCairo = (await response2.json()) as {
    datetime: string;
  };
  const response3 = await fetch("https://randomuser.me/api/");
  const randomUser = (await response3.json()) as {
    results: [
      {
        name: {
          first: string;
        };
      }
    ];
  };
  return (
    <div className="space-y-4 p-4 text-center">
      <h1 className="text-2xl font-bold text-indigo-500">ExampleTwo</h1>
      <p className="font-bold">BuenosAires</p> {buenosAires.datetime}
      <p className="font-bold">AfricaCairo</p> {africaCairo.datetime}
      <p className="font-bold">Random User</p>{" "}
      {randomUser.results[0].name.first}
    </div>
  );
}

async function ExampleThree() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires"
  );
  const buenosAires = (await response.json()) as {
    datetime: string;
  };
  const response2 = await fetch(
    "http://worldtimeapi.org/api/timezone/Africa/Cairo"
  );
  const africaCairo = (await response2.json()) as {
    datetime: string;
  };
  const response3 = await fetch("https://randomuser.me/api/");
  const randomUser = (await response3.json()) as {
    results: [
      {
        name: {
          first: string;
        };
      }
    ];
  };
  return (
    <div className="space-y-4 p-4 text-center">
      <h1 className="text-2xl font-bold text-indigo-500">ExampleThree</h1>
      <p className="font-bold">BuenosAires</p> {buenosAires.datetime}
      <p className="font-bold">AfricaCairo</p> {africaCairo.datetime}
      <p className="font-bold">Random User</p>{" "}
      {randomUser.results[0].name.first}
    </div>
  );
}
