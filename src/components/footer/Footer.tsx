import Image from "next/image";
import Link from "next/link";
const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto flex h-52 w-full items-center px-14 text-white">
      <div className="flex w-1/2 flex-col ">
        <span>@2022, ONO</span>
        <span>NIP 9452259818</span>
      </div>
      <ul className="flex w-full grow-0 list-none flex-row items-center justify-end text-lg font-extralight">
        <li className="pr-5 text-2xl">O nas</li>
        <li className="pr-5 text-2xl">Portfolio</li>
        <li className="pr-5 text-2xl">Agenci</li>
        <li className="pr-5 text-2xl">Kontakt</li>
      </ul>
    </footer>
  );
};

export { Footer };
