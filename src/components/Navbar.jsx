import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <header className="fixed w-full top-0px  bg-neutral-900 text-rose-200 body-font shadow-lg z-40">
        <div className="container mx-auto flex flex-wrap p-3 flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/dumbell.png" // Path to the image in the public directory
              alt="Description of the image"
              width={70} // Desired width of the image
              height={70} // Desired height of the image
            />
            <span className="ml-4 text-3xl text-rose-300">Yeah Buddeh!</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-rose-300">Home</a>
            <a className="mr-5 hover:text-rose-300">Exercises</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
