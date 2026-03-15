import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean; // إضافة خاصية fill
  sizes?: string;  // إضافة خاصية sizes للتحكم في الجودة المتجاوبة
}
export default function Images({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  fill = false,
  sizes,
}: Props) {
  const baseClasses = "w-full  flex justify-center items-center";
  return (
    <div className={cn(baseClasses)}>
      <Image
        src={src}
        alt={alt}
        quality={100}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        fill={fill}
        className={cn(className)}
      />
    </div>
  );
}
