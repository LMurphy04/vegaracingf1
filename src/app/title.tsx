"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, Button, Text, rem } from "@mantine/core";
import "@mantine/core/styles.css";
import { useState } from "react";

export default function Gallery() {
  const [dropDownText, setDropDownText] = useState("");
  return (
    <>
      <div className="flex justify-center mx-5 sm:mx-10 my-5">
        <div className="flex-1 sm:hidden"></div>
        <Link className="flex-32 justify-center" href="/">
          <Image
            src="/vega-colour.png"
            width={180}
            height={0}
            alt="Vega Logo"
          />
        </Link>
        <div className="flex-1 sm:hidden">
          {/* to make button vertically center make this a flex and make button my-auto and ml-auto */}
          <Menu classNames={{ item: "h-10" }}>
            <Menu.Target>
              <div className="float-right my-auto border-2 border-black font-semibold bg-[#E6E6E6] px-3 py-1 hover:cursor-pointer hover:bg-vega-blue hover:text-white">
                ≡
              </div>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <Link className="h-10" href={`/meet-the-team`}>
                  Meet the Team
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="h-10" href={`/sustainability`}>
                  Sustainability
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="h-10" href={`/vega-inspire`}>
                  Vega Inspire
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="h-10" href={`/car-museum`}>
                  Car Museum
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="h-10" href={`/our-journey`}>
                  Our Journey
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="h-10" href={`/partners`}>
                  Partners
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="h-10" href={`/blog`}>
                  Blog
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="h-10" href={`/contact-us`}>
                  Contact Us
                </Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
      <div className="hidden sm:flex mx-10 border-2 border-black font-semibold bg-[#E6E6E6]">
        <Menu trigger="hover" classNames={{ item: "h-10" }}>
          <Menu.Target>
            <div className="flex-1 text-center content-center h-10 hover:cursor-pointer hover:bg-vega-blue hover:text-white">
              About Us
            </div>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>
              <Link className="h-10" href={`/meet-the-team`}>
                Meet the Team
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className="h-10" href={`/sustainability`}>
                Sustainability
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className="h-10" href={`/vega-inspire`}>
                Vega Inspire
              </Link>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <NavButton title="Car Museum" link="car-museum" />
        <NavButton title="Our Journey" link="our-journey" />
        <NavButton title="Partners" link="partners" />
        <NavButton title="Blog" link="blog" />
        <NavButton title="Contact Us" link="contact-us" />
      </div>
    </>
  );
}

function NavButton({ title, link }: { title: string; link: string }) {
  return (
    <Link
      className="flex-1 text-center content-center h-10 hover:bg-vega-blue hover:text-white"
      href={`/${link}`}
    >
      {title}
    </Link>
  );
}
