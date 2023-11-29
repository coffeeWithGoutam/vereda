import List from "../components/List.jsx";
import Hero from "../assets/hero.svg";
import Footer from "../components/Footer.jsx";
const Home = () => {
  return (
    <div className="container">
      <div className="section-1">
        <div className="flex justify-evenly items-center bg-indigo-950 h-50v w-screen">
          <div>
            <h1 className="text-white font-bold text-4xl">
              Best App Development Company
              <br />
              for Startups & Brands
            </h1>
            <List />
            <button
              onClick={() => console.log("Button clicked")}
              className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-9"
            >
              Talk to Our Expert
            </button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={Hero} alt="Logo" className="h-40v" />
          </div>
        </div>
      </div>
      <div className="bg-sky-500 h-30v w-screen flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl mb-2">
          Ready to Make an App and UX that stands out?
        </h1>
        <h2 className="text-sm">
          HASfit App rated 4.8/5 by more than 10 K reviewers while being used by
          4 million users.
        </h2>
        <button
              onClick={() => console.log("Button clicked")}
              className="bg-white text-black px-4 py-1.5 rounded hover:bg-blue-700 mt-9"
            >
              Talk to Our Expert
            </button>
      </div>

      {/* <Footer/> */}
      <Footer />
    </div>
  );
};

export default Home;
