import SidebarItemCompanyLogo from "./item/company-logo";
import SidebarNavItem from "./nav/item";
import SidebarItemUserCard from "./item/user-card";

export default function SidebarSection() {
  return (
    <div className="w-[280px] h-full fixed bg-white pr-5 pl-7 flex flex-col gap-2 z-50">
      <SidebarItemCompanyLogo className="mt-[50px]" />
      <SidebarItemUserCard userName="Levi" userEmail="levi@mail.com" />
      <SidebarNavItem />
    </div>
  );
}
