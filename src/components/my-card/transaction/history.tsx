import { cn } from "@/lib/utils";
import dayjs from "dayjs";

type TransactionHistoryProps = {
  name: string;
  timestamp: number;
  amount: number;
  type: "expenses" | "income";
};

export default function MyCardTransactionHistory({
  name,
  timestamp,
  amount,
  type,
}: TransactionHistoryProps) {
  const dateFormat = "DD MMM, YYYY";
  const dateTimeFormat = "DD MMM, YYYY [at] hh:mm A";
  const formatted = dayjs(timestamp * 1000).format(
    type === "expenses" ? dateFormat : dateTimeFormat
  );

  return (
    <div className="w-full h-20 p-4 bg-neutral-50 rounded-xl flex-col justify-center items-center gap-6 inline-flex">
      <div className="self-stretch justify-between items-center gap-8 inline-flex">
        <div className="flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="text-foreground text-base font-semibold">{name}</div>
          <div className="text-neutral-400 text-base font-normal">
            {formatted}
          </div>
        </div>
        <div className="flex-col justify-center items-end gap-3 inline-flex">
          <div
            className={cn(
              "text-xl font-semibold",
              type === "expenses" ? "text-red-amount" : "text-green-amount"
            )}
          >
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              currencyDisplay: "narrowSymbol",
              maximumFractionDigits: 0,
            }).format(amount)}
          </div>
        </div>
      </div>
    </div>
  );
}
