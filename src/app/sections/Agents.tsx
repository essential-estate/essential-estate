import Image from "next/image";

const Agents = (): JSX.Element => {
  return (
    <div className=" flex min-h-full w-full flex-col items-center justify-start">
      <h2 className="my-20 text-5xl font-light text-white">AGENCI</h2>
      <div className="flex flex-wrap ">
        {content.map((block, idx) => (
          <>
            <div key={idx} className={`my-6 flex w-full flex-col md:w-1/2 `}>
              <Image
                src={block.imageUrl}
                width={400}
                height={600}
                alt={block.name}
                priority
                className="mx-auto rounded-sm md:mx-0 md:p-6"
              ></Image>

              <div className="flex w-full flex-col justify-center px-6 py-2 ">
                <h3 className="text-left text-2xl font-extrabold text-white">
                  {block.name}
                </h3>
                <p className="mt-2 text-left text-lg font-extralight  text-gray-300">
                  {block.paragraph}
                </p>
                <span className="mt-4 border-l-2 border-white pl-2 text-lg text-gray-500">
                  <span>{block.phone}</span>, <span>{block.email}</span>
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export { Agents };

const content = [
  {
    name: "Rabau Andrzej",
    paragraph:
      "Andrzej to młody agent nieruchomości, który pomaga ludziom w poszukiwaniu domów i mieszkań. Zawsze jest gotów wysłuchać życzeń swoich klientów i pomóc im znaleźć idealne miejsce do zamieszkania. Andrzej posiada dobre umiejętności komunikacyjne, które pozwalają mu łatwo nawiązywać kontakt z potencjalnymi klientami i zapewnić im profesjonalną obsługę.",
    imageUrl: "/agents/andrew.png",
    phone: "+48 536 101 711",
    email: "viacheslavkhrushch@gmail.com",
  },
  {
    name: "Wiacheslav Khrushch",
    paragraph:
      "Młody agent nieruchomości, Wiaczesław, uważa, że odpowiednio dobrane mieszkanie powinno odpowiadać stylowi życia klienta i zapewniać komfortowe mieszkanie. Poświęca należytą uwagę każdemu klientowi, gromadząc informacje o ich preferencjach i budżecie, a także udziela konsultacji we wszystkich sprawach. Wiaczesław oferuje również dodatkowe usługi w zakresie dekoracji i aranżacji wnętrz.",
    imageUrl: "/agents/viacheslav.png",
    phone: "+48 536 101 711",
    email: "viacheslavkhrushch@gmail.com",
  },
  {
    name: "Liudmyla Sulima",
    paragraph:
      "Posiadam szeroką bazę mieszkań do wynajęcia w różnych lokalizacjach, od modnych centrum miasta po spokojne przedmieścia. Dzięki mojej wiedzy i doświadczeniu w branży nieruchomości mogę znaleźć dla Ciebie idealne mieszkanie, dopasowane do Twojego stylu życia, preferencji estetycznych i budżetu. Moje usługi obejmują nie tylko wyszukiwanie dostępnych ofert, ale także organizację osobistych prezentacji, negocjacje warunków umowy najmu oraz pomoc w załatwianiu wszelkich formalności. Dzięki mojej pomocy proces wynajmu mieszkania będzie prostszy i bardziej efektywny.",
    imageUrl: "/agents/polina.png",
    phone: "+48 536 101 711",
    email: "viacheslavkhrushch@gmail.com",
  },
  {
    name: "Elizaweta Skrypachenko",
    paragraph:
      "doświadczona agentka nieruchomości, która uważnie śledzi trendy rynkowe i posiada dobre umiejętności negocjacyjne, które pomagają jej w zawieraniu udanych transakcji.Elizaweta dba o to, aby każdy klient otrzymał obiektywną informację o kosztach obiektów oraz informacje o wszystkich kwestiach prawnych, technicznych i finansowych. Elizaweta jest nastawiona na sukces swoich klientów, dlatego zawsze pracuje, dopóki nie znajdzie odpowiedniej nieruchomości dla swoich klientów.",
    imageUrl: "/agents/eli.png",
    phone: "+48 536 101 711",
    email: "viacheslavkhrushch@gmail.com",
  },
];
