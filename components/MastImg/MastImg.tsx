import Image from "next/image";

type MastImgProps = {
  src: string;
  alt: string;
};
export function MastImg(props: MastImgProps) {
  const { src, alt } = props;
  return (
    <div className="mast-img-container">
      <Image
        className="mast-img height-auto w-full object-cover opacity-60"
        alt={alt}
        unoptimized
        priority
        loading="eager"
        src={src}
        width={800}
        height={400}
      />
    </div>
  );
}
