// Page Header

"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@mantine/core";
import "@mantine/core/styles.css";
import { navigationItems } from "./navigation";

// Navbar (Expanded)

function BigScreenNavBar() {
  const NavButtons = navigationItems.map((item) => {
    return item.submenu ? (
      <Menu trigger="hover" classNames={{ item: "p-0" }} key={item.id}>
        <Menu.Target>
          <div className="ml-auto flex-1 text-center content-center h-full hover:cursor-pointer hover:bg-vega-blue hover:text-white max-w-[150px]">
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
      className="flex-1 text-center content-center h-full hover:bg-vega-blue hover:text-white border-l-[1px] border-black max-w-[150px]"
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
      <div className="flex justify-center px-5 sm:px-10 py-5 gap-10 w-full">
        <div className="flex-1 sm:hidden"></div>
        <Link className="flex-32 sm:block justify-center" href="/">
          <Image
            src="/vega-colour.png"
            width={120}
            height={0}
            alt="Vega Logo"
            priority={true}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <div className="flex-1 flex sm:hidden">
          <SmallScreenDropdownNav />
        </div>
        <div className="hidden sm:flex grow font-semibold h-auto">
          <BigScreenNavBar />
        </div>
      </div>
    </>
  );
}
