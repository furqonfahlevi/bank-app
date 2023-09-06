import CompanyLogo from "./company-logo";
import Menu from "./menu";
import User from "./user";

export default function Sidebar() {
  return (
    <div className="w-[280px] h-full fixed bg-white pr-5 pl-7 flex flex-col gap-2 z-50">
      <CompanyLogo className="mt-[50px]" />
      <User userName="Levi" userEmail="levi@mail.com" />
      <Menu />
    </div>
  );
}
