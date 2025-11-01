import { MastImg } from "@/components/MastImg/MastImg";
import Subscribe from "@/components/Subscribe/Subscribe";
import "./contact.css";
export default function Contact() {
  return (
    <>
      <div className="contact-header relative bg-black text-white">
        <MastImg src="/contact.jpg" alt="Contact Us" />
        {/* Overlay text container */}
        <div className="md:absolute md:top-0 Md:left-0 w-full h-full flex flex-col justify-center items-center text-center p-4 z-10">
          <h1
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ textShadow: "2px 2px 4px #000" }}
          >
            Subscribe to our Newsletter
          </h1>
          <p
            className="text-md md:text-xl font-semibold text-white mt-4"
            style={{ textShadow: "2px 2px 4px #000" }}
          >
            Stay updated with the latest news and events.
          </p>
          <Subscribe />
        </div>
      </div>
    </>
  );
}
