import Image from "next/image";

const About = (): JSX.Element => {
  return (
    <div className="flex  min-h-fit w-full flex-1 flex-col items-center justify-start	">
      <h2 className="my-20 text-5xl font-light text-white">O NAS</h2>
      {content.map((block, idx) => (
        <>
          <div
            key={idx}
            className={`my-6 flex flex-col md:flex-row ${
              block.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div
              className="h-80 w-full rounded-[40px] bg-cover bg-center bg-no-repeat shadow-2xl shadow-white/20 md:w-1/2 lg:h-[440px] lg:w-9/12"
              style={{
                backgroundImage: `url('${block.imageUrl}')`,
              }}
            ></div>
            <div className="flex w-full flex-col justify-center p-6 md:w-1/2 md:p-12">
              <h3 className="text-left text-2xl font-extrabold text-white">
                {block.header}
              </h3>
              <p className="mt-2 text-left text-lg font-extralight text-white  md:mt-6">
                {block.paragraph}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export { About };

const content = [
  {
    header: "Oszczędność czasu",
    paragraph:
      "Łatwość przygotowania dokumentów: klienci nie mają problemów z przygotowaniem i realizacją transakcji, wiedzą z góry jakie dokumenty będą potrzebne na jakim etapie.",
    imageUrl: "/about/about-1.jpg",
    reverse: false,
    spacer: true,
  },
  {
    header: "Oszczędność czasu",
    paragraph:
      "Łatwość przygotowania dokumentów: klienci nie mają problemów z przygotowaniem i realizacją transakcji, wiedzą z góry jakie dokumenty będą potrzebne na jakim etapie.",
    imageUrl: "/about/about-2.jpg",
    reverse: true,
    spacer: true,
  },
  {
    header: "Oszczędność czasu",
    paragraph:
      "Łatwość przygotowania dokumentów: klienci nie mają problemów z przygotowaniem i realizacją transakcji, wiedzą z góry jakie dokumenty będą potrzebne na jakim etapie.",
    imageUrl: "/about/about-3.jpg",
    reverse: false,
    spacer: false,
  },
];
