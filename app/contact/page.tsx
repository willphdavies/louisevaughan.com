import Header from "@/components/Header/Header";
import { Metadata } from "next";
import Contact from "./Contact";
export const metadata: Metadata = {
  title: "Contact | Slak",
};
export default function ContactPage() {
  return (
    <>
      <Header transparent />
      <Contact />
    </>
  );
}
