import { IconList } from "../Icons";

export default function Footer() {
  return (
    <footer className="page-footer bg-black text-white w-full">
      <div className="flex flex-col items-center justify-center p-4 space-y-2">
        <div className="flex justify-center">
          <IconList />
        </div>
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Slak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
