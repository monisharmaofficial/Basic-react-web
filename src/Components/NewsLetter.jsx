const NewsLetter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className="m-2">
          <h1 className=" text-[20px] md:text-[40px] font-bold text-white">
            Want to learn latest I.T skills
          </h1>

          <span className="text-white text-md">
            Sign up to our news letter and stay up to date
          </span>
        </div>

        <div className="m-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 mr-3 text-slate-600 rounded mb-2 sm:w-full"
          />

          <button className="w-[30%] bg-black text-white p-3 rounded">
            Get Started
          </button>

          <br />
          <p className="text-white">
            {" "}
            We care about the protection of your data. Read our <br />{" "}
            <a href="" className="text-black font-semibold ">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
