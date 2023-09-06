import Link from "next/link";
import Category from "./icons/category";

export default function Menu() {
  return (
    <div>
      <Link href={"/"}>
        <div className="w-full h-20 pl-7 pr-5 py-5 bg-white flex-col justify-center items-center gap-5 inline-flex hover:cursor-pointer hover:bg-accent border-r-[3.27px] border-primary">
          <div className="w-full h-6 justify-between items-center gap-4 inline-flex">
            <div className="flex gap-4">
              <div className="w-6 h-6 justify-center items-center flex">
                <Category />
              </div>
              <div className="text-primary text-base font-bold">Dashboard</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
