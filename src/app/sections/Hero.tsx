import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
    <div className="relative flex h-screen min-h-full w-full items-center justify-center">
      <div
        className="absolute z-0 h-full w-full bg-cover bg-center bg-no-repeat md:relative md:w-1/2"
        style={{
          backgroundImage: `url('/hero/hero-image.jpg')`,
        }}
      ></div>
      <div className="m:p-24 z-10 flex h-3/5 w-9/12 flex-col items-center justify-center bg-slate-200 p-16 md:h-full">
        <h1 className="text-left text-4xl font-extrabold md:text-4xl lg:text-5xl">
          Gwarantujemy pełen zakres usług
        </h1>
        <p className="mt-6 text-right text-xl font-extralight md:text-2xl">
          Dzięki głębokiej analityce i badaniom rynku mamy jasne zrozumienie
          potrzeb klienta.
        </p>
      </div>
    </div>
  );
};

export { Hero };
