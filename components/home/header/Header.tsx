import FontProvider from "@/app/FontProvider";
import Logo from "@/components/ui/logo";
import DarkMode from "./DarkMode";
import { Separator } from "@/components/ui/separator";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <div className="flex h-8 items-center gap-4 md:gap-6">
        <FontProvider />
        <Separator orientation="vertical" />
        <DarkMode />
      </div>
    </div>
  );
}

export default Header;
