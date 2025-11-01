import Link from "next/link";
import { SpotifyIcon } from ".";
import FacebookIcon from "./Facebook";
import InstagramIcon from "./Instagram";
import TikTokIcon from "./TikTok";
import YouTubeIcon from "./YouTube";

type IconListProps = {
  classNames?: string;
};
export default function IconList(props: IconListProps) {
  const { classNames = "text-white px-3" } = props;
  const iconClasses = `block py-2 ${classNames} hover:text-gray-100 rounded-sm hover:bg-gray-800`;
  return (
    <ul className="flex font-medium">
      <li>
        <Link
          href="https://open.spotify.com/artist/0njHP8ffNbW4oHHlZefc5p"
          target="_blank"
          rel="noopener noreferrer"
          className={iconClasses}
        >
          <SpotifyIcon />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.facebook.com/people/SLAK/100085627611433/"
          target="_blank"
          rel="noopener noreferrer"
          className={iconClasses}
        >
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/slak.band"
          target="_blank"
          rel="noopener noreferrer"
          className={iconClasses}
        >
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.tiktok.com/@slak.band"
          target="_blank"
          rel="noopener noreferrer"
          className={iconClasses}
        >
          <TikTokIcon />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.youtube.com/@slakband"
          target="_blank"
          rel="noopener noreferrer"
          className={iconClasses}
        >
          <YouTubeIcon />
        </Link>
      </li>
    </ul>
  );
}
