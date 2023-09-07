import Gallery from "@/components/icons/gallery";
import { cn } from "@/lib/utils";

type CompanyLogoProps = {
  className?: string;
};

export default function SidebarItemCompanyLogo({
  className,
}: CompanyLogoProps) {
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
