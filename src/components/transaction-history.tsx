export default function TransactionHistory() {
  return (
    <div>
      <div className="w-96 h-20 p-4 bg-neutral-50 rounded-xl flex-col justify-center items-center gap-6 inline-flex">
        <div className="self-stretch justify-between items-center gap-8 inline-flex">
          <div className="flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="text-foreground text-base font-semibold">
              Cash Withdrawal
            </div>
            <div className="text-neutral-400 text-base font-normal">
              13 Apr, 2022{" "}
            </div>
          </div>
          <div className="flex-col justify-center items-end gap-3 inline-flex">
            <div className="text-red-400 text-xl font-semibold">$20,129</div>
          </div>
        </div>
      </div>
    </div>
  );
}
