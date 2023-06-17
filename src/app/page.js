import Image from "next/image";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Category from "@/components/Category";
import background from "../../public/images/background-header.png";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <>
      <Image
        src={background}
        className="absolute w-[100%] object-cover -z-10 h-screen opacity-[0.025]"
      />
      <div className="max-w-7xl m-auto">
        <Navbar />
        <Header />
        <Category />
        <Trending />
      </div>
      <div></div>
    </>
  );
}
