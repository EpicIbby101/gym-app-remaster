import backgroundImage from "../../public/herobg01.png";

const HeroSection = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="container mx-auto px-4 pt-40 sm:pt-30 flex flex-col-reverse sm:flex-row items-center justify-between">
          <div
            className="text-center sm:text-left font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-300 px-4 sm:px-10 py-10 sm:py-0 rounded-md"
            style={{ marginTop: "5rem" }} // Adjust the margin-top as needed
          >
            <h1>Yeah Buddeh, Lightweight!</h1>
            <div
              className="text-center sm:text-left font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-200 py-6 sm:py-6 rounded-md mb-2"
              style={{ marginTop: "1rem" }} // Adjust the margin-top as needed
            >
              <h2>Sweat, Grind, Grow and Repeat!</h2>
            </div>

            <button
              type="button"
              className="focus:outline-none text-black bg-gradient-to-r from-rose-300 to-amber-200 shadow-lg shadow-neutral-900 font-medium rounded-lg text-sm sm:text-base px-4 sm:px-5 py-2.5 mx-2.5 hover:from-amber-300 hover:to-rose-400 hover:scale-95 transition-all duration-200"
            >
              Explore Exercises
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
