import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import ArrowRight from "../icons/arrow-right";
import { Skeleton } from "../ui/skeleton";

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
  cardBalance: number;
  icon?: React.ReactNode;
  loading?: boolean;
};

export default function ExpensesCard({
  type,
  icon,
  loading = false,
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
          {loading ? (
            <Skeleton className="w-[70px] h-[17px]"></Skeleton>
          ) : (
            <div
              className={cn(
                "text-sm font-normal",
                type === "ghost" ? "text-neutral-400" : "text-neutral-50"
              )}
            >
              {cardDate}
            </div>
          )}
        </div>
        <div className="self-stretch h-7 flex-col justify-center items-start gap-3 flex">
          {loading ? (
            <Skeleton className="w-[89px] h-[29px]"></Skeleton>
          ) : (
            <div className="text-2xl font-semibold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                currencyDisplay: "narrowSymbol",
                maximumFractionDigits: 0,
              }).format(cardBalance)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
