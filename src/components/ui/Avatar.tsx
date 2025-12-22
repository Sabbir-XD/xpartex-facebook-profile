import Image from "next/image";

export type AvatarSize = "sm" | "md" | "lg" | "xl";

type AvatarProps = {
  src: string;
  size?: AvatarSize;
};

const sizeMap = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 96,
};

const classMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-42 h-42",
};

export default function Avatar({ src, size = "md" }: AvatarProps) {
  const dimension = sizeMap[size];

  return (
    <Image
      src={src}
      alt="Avatar"
      width={dimension}
      height={dimension}
      className={`${classMap[size]} rounded-full object-cover border-4 border-white bg-gray-400  `}
      quality={90}
      loading="lazy"
    />
  );
}
