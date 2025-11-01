import Header from "@/components/Header/Header";
import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Home | Slak",
  description:
    "Official Website for Slak - check here for our latest updates, music, and more!",
};

export default function HomePage() {
  return (
    <>
      <Header transparent />
      <Home />
    </>
  );
}
