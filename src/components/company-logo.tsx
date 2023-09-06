import { cn } from "@/lib/utils";
import Gallery from "./icons/gallery";

type CompanyLogoProps = {
  className?: string;
};

export default function CompanyLogo({ className }: CompanyLogoProps) {
  return (
    <div
      className={cn(
        "w-48 h-14 mx-auto bg-stone-300 flex justify-center items-center",
        className
      )}
    >
      <Gallery />
    </div>
  );
}
