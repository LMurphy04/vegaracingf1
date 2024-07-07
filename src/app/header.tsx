// Page Header

"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@mantine/core";
import "@mantine/core/styles.css";
import { navigationItems } from "./navigation";

// Page Logo

function VegaLogoHeader() {
  return (
    <Link className="flex-32 justify-center" href="/">
      <Image
        src="/vega-colour.png"
        width={180}
        height={0}
        alt="Vega Logo"
        priority={true}
        style={{ width: "100%", height: "auto" }}
      />
    </Link>
  );
}

// Navbar (Expanded)

function BigScreenNavBar() {
  const NavButtons = navigationItems.map((item) => {
    return item.submenu ? (
      <Menu trigger="hover" classNames={{ item: "p-0" }} key={item.id}>
        <Menu.Target>
          <div className="flex-1 text-center content-center h-10 hover:cursor-pointer hover:bg-vega-blue hover:text-white">
            {item.title}
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          {item.submenu.map((item) => {
            return (
              <DropdownButton title={item.title} url={item.url} key={item.id} />
            );
          })}
        </Menu.Dropdown>
      </Menu>
    ) : (
      <NavButton title={item.title} url={item.url} key={item.id} />
    );
  });

  return <>{NavButtons}</>;
}

function NavButton({ title, url }: { title: string; url: string }) {
  return (
    <Link
      className="flex-1 text-center content-center h-10 hover:bg-vega-blue hover:text-white"
      href={url}
    >
      {title}
    </Link>
  );
}

// Navbar (Collapsed)

function SmallScreenDropdownNav() {
  const DropdownNavButtons = navigationItems.map((item) => {
    return item.submenu ? (
      item.submenu.map((item) => {
        return (
          <DropdownButton title={item.title} url={item.url} key={item.id} />
        );
      })
    ) : (
      <DropdownButton title={item.title} url={item.url} key={item.id} />
    );
  });

  return (
    <Menu classNames={{ item: "p-0" }}>
      <Menu.Target>
        <div className="float-right my-auto ml-auto text-2xl border-2 border-black font-semibold bg-[#E6E6E6] px-3 py-1 hover:cursor-pointer hover:bg-vega-blue hover:text-white">
          ≡
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <Link
            className="justify-center text-center flex px-3 py-2"
            href={`/`}
          >
            Home
          </Link>
        </Menu.Item>
        {DropdownNavButtons}
      </Menu.Dropdown>
    </Menu>
  );
}

function DropdownButton({ title, url }: { title: string; url: string }) {
  return (
    <Menu.Item>
      <Link className="justify-center text-center flex px-3 py-2" href={url}>
        {title}
      </Link>
    </Menu.Item>
  );
}

// Main Render

export default function Header() {
  return (
    <>
      <div className="flex justify-center mx-5 sm:mx-10 my-5">
        <div className="flex-1 sm:hidden"></div>
        <VegaLogoHeader />
        <div className="flex-1 flex sm:hidden">
          <SmallScreenDropdownNav />
        </div>
      </div>
      <div className="hidden sm:flex mx-10 border-2 border-black font-semibold bg-[#E6E6E6]">
        <BigScreenNavBar />
      </div>
    </>
  );
}
