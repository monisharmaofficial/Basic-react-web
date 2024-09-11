import image from "../assets/images/image.png";

const Experts = () => {
  return (
    <div className="max-w-[1240px] my-10  md:grid grid-cols-2 mx-auto p-2">
      <div className=" col-span-1 md:w-[80%] text-center">
        <img src={image} alt="image" className="inline" />
      </div>

      <div className="col-span-1 flex flex-col justify-center">

        <h1 className="text-[#00df9a] font-bold my-2 text-xl">LEARN FROM EXPERTS</h1>
        <p className="my-4 font-semibold text-md text-justify">
          Get the best knowledge from our experts in the field. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Dolores, non? Officia
          illo fuga nesciunt dicta ut expedita assumenda consectetur
          consequuntur.
        </p>
        <button className="w-[30%] bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
};

export default Experts;
