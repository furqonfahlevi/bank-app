import ArrowRight from "./icons/arrow-right";
import Moneys from "./icons/moneys";

export default function ExpensesCard() {
  return (
    <div>
      <div className="w-full h-52 px-5 py-4 bg-sky-400 rounded-xl flex-col justify-center items-start gap-8 inline-flex">
        <div className="justify-between w-full items-center flex">
          <div className="w-14 h-14 relative flex items-center justify-center bg-white bg-opacity-10 rounded-full">
            <Moneys />
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <div className="w-6 h-6 relative">
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="self-stretch h-24 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-11 flex-col justify-start items-start gap-2 flex">
            <div className="text-white text-base font-semibold">Balance</div>
            <div className="text-neutral-50 text-sm font-normal">
              April 2022
            </div>
          </div>
          <div className="self-stretch h-7 flex-col justify-center items-start gap-3 flex">
            <div className="text-white text-2xl font-semibold">$20,129</div>
          </div>
        </div>
      </div>
    </div>
  );
}
