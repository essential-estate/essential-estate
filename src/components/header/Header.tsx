import Image from "next/image";
import Link from "next/link";
const Header = (): JSX.Element => {
  return (
    <header className="mx-auto flex h-24 w-full bg-white px-14 ">
      <Link href={"/"}>
        <div className=" flex h-full items-center">
          <Image alt="" src="/logo.png" height="50" width="150" />
        </div>
      </Link>
      <ul className="flex w-full grow-0 list-none flex-row items-center justify-end text-lg font-extralight">
        <li className="pr-5 text-2xl">O nas</li>
        <li className="pr-5 text-2xl">Portfolio</li>
        <li className="pr-5 text-2xl">Agenci</li>
        <li className="pr-5 text-2xl">Kontakt</li>
      </ul>
    </header>
  );
};

export { Header };
