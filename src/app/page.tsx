const getAfricaCairo = async () => {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Africa/Cairo"
  );
  return (await response.json()) as {
    datetime: string;
  };
};

const getBuenosAires = async () => {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires"
  );
  return (await response.json()) as {
    datetime: string;
  };
};

export default async function Test() {
  const africaCairo = await getAfricaCairo();
  const buenosAires = await getBuenosAires();

  return (
    <div className="space-y-4 p-4">
      <p className="font-bold">BuenosAires</p> {buenosAires.datetime}
      <p className="font-bold">AfricaCairo</p> {africaCairo.datetime}
    </div>
  );
}
