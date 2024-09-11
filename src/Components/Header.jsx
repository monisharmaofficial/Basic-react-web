import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="flex items-center justify-between mx-auto  py-[12px] max-w-[1240px]">
        <div className="text-3xl font-bold">W3Cube Tech</div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl block md:hidden"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl block md:hidden"
          />
        )}

        <ul className="hidden md:flex text-white gap-10 text-xl">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>contact</li>
        </ul>

        {/* Responsive Menu */}
        <ul
          className={`duration-300 text-xl md:hidden text-white fixed bg-black top-[92px] w-full h-screen ${
            toggle ? "left-[0]" : "left-[-100%]"
          }`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
