"use client";

import { useState } from "react";

import { category } from "@/utils/data";
import Image from "next/image";
import background from "../../public/images/background-header.png";
import prev from "../../public/icons/prev.svg";
import next from "../../public/icons/next.svg";
import Title from "./Title";

const Category = () => {
  const [isHover, setIsHover] = useState(false);
  const [index, setIndex] = useState(null);

  return (
    <div className="flex flex-col gap-5 p-5">
      <Title title="Browser Our Category Receipt" desc="Receipt" />
      <div className="flex justify-center gap-3 w-full min-h-[195px]">
        {category.map(({ id, desc, icon_url, name, color }) => (
          <div
            className={`w-[230px] h-[175px] hover:h-[195px] relative bg-cover flex justify-center flex-col items-center gap-6 rounded-md cursor-pointer transition-all duration-200 ease-out`}
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
                alt="icons"
                className="absolute top-0 object-cover h-full opacity-5"
              />
            )}
            <div className="flex flex-col items-center">
              <h3 className="text-dark font-medium">{name}</h3>
              <p className="text-dark text-sm font-light">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-5">
        <button className="text-white font-medium bg-primary flex items-center gap-3 px-4 py-2 rounded-full hover:bg-[#84a538] transition-all duration-100 active:ring active:ring-lime-200">
          <Image src={prev} alt="prev" />
          PREV
        </button>
        <button className="text-white font-medium bg-primary flex items-center gap-3 px-4 py-2 rounded-full hover:bg-[#84a538] transition-all duration-100 active:ring active:ring-lime-200">
          <Image src={next} alt="next" />
          Next
        </button>
      </div>
    </div>
  );
};

export default Category;
