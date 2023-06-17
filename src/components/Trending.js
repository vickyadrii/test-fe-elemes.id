"use client";

import { useState } from "react";
import Image from "next/image";

import { trending } from "@/utils/data";
import Title from "./Title";
import background from "../../public/images/background-header.png";
import stars from "../../public/images/stars.svg";

const Trending = () => {
  const [isHover, setIsHover] = useState(false);
  const [index, setIndex] = useState(null);

  return (
    <div className="flex flex-col gap-10 p-5">
      <Title title="Browser Our Trending" desc="Receipt" />
      <div className="grid grid-cols-4 gap-x-2 gap-y-6">
        {trending.map(({ id, icon_url, name, category, color }) => (
          <div
            key={id}
            className={`w-[288px] h-[306px] px-4 py-8 relative bg-cover backdrop-blur-lg shadow-xl shadow-slate-600/10 flex flex-col gap-4 rounded-[17px] cursor-pointer transition-all duration-200 ease-out`}
            style={{
              backgroundColor: color,
            }}
            onMouseOver={() => {
              setIndex(id);
              setIsHover(true);
            }}
            onMouseLeave={() => setIsHover(false)}
          >
            <Image src={icon_url} alt="icons" />
            {isHover && id === index && (
              <Image
                src={background}
                alt="background"
                className="absolute top-0 object-cover left-0 bg-cover opacity-5 h-full"
              />
            )}
            <div className="flex flex-col gap-2">
              <h3 className="text-dark font-medium text-[26px]">{name}</h3>
              <p className="text-primary font-medium text-lg">{category}</p>
            </div>
            <Image src={stars} alt="stars" className=" object-cover" />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-white text-sm bg-primary px-10 py-3 rounded-full font-medium outline-none hover:bg-[#84a538] transition-all duration-100 active:ring active:ring-lime-200">
          All Receipt
        </button>
      </div>
    </div>
  );
};

export default Trending;
