import Image from "next/image";
import Link from "next/link";
import { IconList } from "../Icons";
import "./header.css";
import { SideMenu } from "./SideMenu";

export type NavItem = {
  href: string;
  label: string;
};

const links: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];
type HeaderProps = {
  links?: NavItem[];
  transparent?: boolean;
};
export default async function Header(props: HeaderProps) {
  const { links: customLinks } = props;
  const linksToUse = customLinks || links;
  return (
    <nav className={`page-header bg-white fixed w-full z-20 top-0 start-0`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            alt="Slak Logo"
            unoptimized
            height={60}
            width={80}
            priority
            loading="eager"
            src="/img/slak-transparent.png"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <SideMenu items={linksToUse} />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {linksToUse.map((link: NavItem) => (
              <li key={link.href} className="bg-transparent">
                <Link
                  href={link.href}
                  className="block py-2 px-3 hover:bg-gray-300 text-gray-800 rounded-sm bg-transparent"
                  aria-current="page"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:order-2 md:flex">
          <IconList />
        </div>
      </div>
    </nav>
  );
}
