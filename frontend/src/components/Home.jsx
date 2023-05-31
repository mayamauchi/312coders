import About from "./About";
import Community from "./Community";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="bg-dark-blue flex flex-col md:flex-row md:space-x-3 py-10 border-4 border-t-red-500 max-w-4xl m-auto">
        <div className="flex items-center justify-center md:w-1/2">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <h1 className="text-3xl text-white">Welcome You</h1>
        </div>
      </div>
      <About />
      <Community />
      <Contact />
    </>
  );
}

export default Home;
