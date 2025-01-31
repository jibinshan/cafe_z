// components/LoadingComponent.tsx

const Loader = () => {
  const text = "Cafe Z Bar";

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#dfd0c5] text-[#8A7056]">
      <div className="animate-fadeIn absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-center text-4xl font-bold lg:text-4xl">
        <p className="head-welcome non-italic animate-typewriter flex items-center justify-center gap-3 text-center font-jost text-xl font-[300] uppercase text-[#8A7056] md:text-6xl">
          {text.split("").map((char, index) => (
            <span key={index} className="key">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>

      <div className="animate-fadeIn absolute bottom-10 left-5 flex w-1/2 flex-row justify-between text-lg lg:w-1/4">
        <span className="font-jost text-lg uppercase">Loading...</span>
        <span className="font-jost text-lg uppercase">99%</span>
      </div>

      <div className="absolute bottom-5 left-5 h-1 w-1/2 bg-gray-700 lg:w-1/4">
        <div className="animate-progressBar h-full bg-[#8A7056]"></div>
      </div>
    </div>
  );
};

export default Loader;
