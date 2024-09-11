const Plans = () => {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl h-[500px] hover:scale-105 duration-500">
          first
        </div>

        <div className="shadow-xl h-[500px] bg-gray-100 hover:scale-105 duration-500">
          second
        </div>

        <div className="shadow-xl h-[500px] hover:scale-105 duration-500">
          third
        </div>
      </div>
    </div>
  );
};

export default Plans;
