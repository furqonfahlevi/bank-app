import SidebarSection from "./sidebar/section";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full flex">
      <SidebarSection />
      <main className="w-full pl-[312px] pr-8 pt-10 pb-8">{children}</main>
    </div>
  );
}
