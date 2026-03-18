import Link from "next/link";
import Images from "../Images";
import { Logo } from "../../../../public/assets/images/images";

interface Props {
  size?: "sm" | "lg";
}

export default function NavLogo({ size = "sm" }: Props) {
  return (
    <Link
      href="/"
      className={`text-light font-bold ${size === "lg" ? "text-4xl" : "text-2xl"}`}
    >
      <Images src={Logo} width={65} alt="Logo" />
    </Link>
  );
}
