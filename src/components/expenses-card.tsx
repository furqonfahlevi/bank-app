import { VariantProps, cva } from "class-variance-authority";
import ArrowRight from "./icons/arrow-right";
import Moneys from "./icons/moneys";
import { cn } from "@/lib/utils";
import CardReceive from "./icons/card-receive";

const expensesCardVariants = cva(
  "w-full h-52 px-5 py-4 rounded-xl flex-col justify-center items-start gap-8 inline-flex",
  {
    variants: {
      type: {
        default: "bg-primary text-white",
        ghost: "bg-white text-primary border",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

type ExpensesCardProps = VariantProps<typeof expensesCardVariants> & {
  cardName: string;
  cardDate: string;
  cardBalance: string;
  icon?: React.ReactNode;
};

export default function ExpensesCard({
  type,
  icon,
  cardName,
  cardBalance,
  cardDate,
}: ExpensesCardProps) {
  return (
    <div className={cn(expensesCardVariants({ type }))}>
      <div className="justify-between w-full items-center flex">
        <div
          className={cn(
            "w-14 h-14 relative flex items-center justify-center rounded-full",
            type === "ghost" ? "bg-neutral-50" : "bg-white bg-opacity-10"
          )}
        >
          {icon}
        </div>
        <div className="w-6 h-6 justify-center items-center flex">
          <ArrowRight />
        </div>
      </div>
      <div className="self-stretch h-24 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-11 flex-col justify-start items-start gap-2 flex">
          <div className="text-base font-semibold">{cardName}</div>
          <div
            className={cn(
              "text-sm font-normal",
              type === "ghost" ? "text-neutral-400" : "text-neutral-50"
            )}
          >
            {cardDate}
          </div>
        </div>
        <div className="self-stretch h-7 flex-col justify-center items-start gap-3 flex">
          <div className="text-2xl font-semibold">{cardBalance}</div>
        </div>
      </div>
    </div>
  );
}
