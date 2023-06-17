import Navbar from "./Navbar";
import background from "../../public/images/background-header.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative">
        <Image src={background} className="absolute w-full -z-10 h-screen opacity-[0.025]"  />
      <div className="max-w-7xl m-auto">
        <Navbar />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Header;
