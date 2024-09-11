// import { Typed } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[50px]">
      <div className="max-w-[1240px]  py-[100px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl md:P-[20px]">Learn With Us</div>

        <h2 className="text-white text-5xl md:text-[80px] md:p-[20px]">
          Grow with us
        </h2>

        <div className="text-[20px] md:text-[50px] text-white md:p-[20px]">
          Learn
          {/* <Typed
            className="pl-3"
            strings={["Web Devlopments", "Digital Marketing", "Ethical Hacking"]}
            typeSpeed={100}
            loop={true}
            backSpeed={1200}
          /> */}
        </div>
        <button className="w-[15%] bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
