import FontProvider from "@/app/FontProvider";
import Logo from "@/components/ui/logo";
import DarkMode from "./DarkMode";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function Header() {
  return (
    <nav className="flex items-center justify-between">
      <Link href={"/"} aria-label="back to home">
        <Logo />
      </Link>
      <div className="flex h-8 items-center gap-4 md:gap-6">
        <FontProvider />
        <Separator orientation="vertical" />
        <DarkMode />
      </div>
    </nav>
  );
}

export default Header;
