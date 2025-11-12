import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-12 lg:mt-24">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center font-semibold leading-tight max-w-5xl">
            Build tools
            <span className="text-white block mt-2">for Developers</span>
        </h1>
        <p className="mt-8 text-lg text-center text-neutral-400 max-w-2xl leading-relaxed">
          Build smarter, faster, and better with DevFlow. From effortless team collaboration to powerful tools at your fingertips.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 my-12">
            <a href="#" className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors text-center">
                Start for free
            </a>
            <a href="#" className="border border-neutral-700 px-6 py-3 rounded-lg font-medium hover:border-neutral-600 transition-colors text-center">
                Documentation
            </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-16 w-full max-w-6xl">
            <video autoPlay loop muted className="rounded-xl w-full lg:w-1/2 border border-neutral-800">
                <source src={video1} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-xl w-full lg:w-1/2 border border-neutral-800">
                <source src={video2} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
};

export default HeroSection;
