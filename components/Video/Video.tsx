"use client";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

type VideoProps = {
  src: string;
  img: string;
  title: string;
};
export default function Video(props: VideoProps) {
  const { src, img, title } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="max-w-xl rounded-2xl overflow-hidden mt-3 mb-3">
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        {!clicked && (
          <div
            className="video-image relative w-full h-full cursor-pointer"
            onClick={() => setClicked(true)}
          >
            <Image
              width={600}
              height={600}
              src={img}
              alt={title}
              className="w-full h-full object-cover rounded-2xl"
            />
            <PlayIcon className="h-30 w-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg text-white" />
          </div>
        )}

        {clicked && (
          <>
            <button
              onClick={() => setClicked(false)}
              className="absolute top-2 right-2 z-50 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close video"
            >
              <XMarkIcon
                className="h-6 w-6"
                style={{ filter: "drop-shadow(0 0 2px rgba(0, 0, 0, 0.8))" }}
              />
            </button>

            <iframe
              src={src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              className="w-full aspect-square rounded-2xl border-0"
              style={{ border: "none" }}
              title={`Slak - ${title}`}
            />
          </>
        )}
      </div>
    </div>
  );
}
