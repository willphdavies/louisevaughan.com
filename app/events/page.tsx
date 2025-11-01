import Header from "@/components/Header/Header";
import { Metadata } from "next";
import Events from "./Events";

export const metadata: Metadata = {
  title: "Events | Slak",
};
export default function EventsPage() {
  return (
    <>
      <Header />
      <Events />
    </>
  );
}
