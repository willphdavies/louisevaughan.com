import { MastImg } from "@/components/MastImg/MastImg";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home-header relative bg-black text-white">
        {/* Image as background layer */}
        <MastImg src="/mast.jpg" alt="Home" />

        {/* Overlay text container */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-4 z-10">
          <h1
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ textShadow: "2px 2px 4px #000" }}
          >
            Louise Vaughan Massage
          </h1>
          <p
            className="text-md md:text-xl font-semibold text-white mt-4"
            style={{ textShadow: "2px 2px 4px #000" }}
          >
            Massage therapy for relaxation and well-being.
          </p>
        </div>
      </div>
    </>
  );
}
