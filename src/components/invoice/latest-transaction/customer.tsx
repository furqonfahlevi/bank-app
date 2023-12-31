import CustomerAvatar from "@/components/icons/customer-avatar";

type CustomerDataProps = {
  customerName: string;
  customerEmail: string;
};

export default function InvoiceLatestTransactionCustomer({
  customerName,
  customerEmail,
}: CustomerDataProps) {
  return (
    <div className="h-16 mt-4 p-3 bg-neutral-50 rounded-lg justify-start items-center gap-3 inline-flex">
      <div className="w-12 h-12">
        <CustomerAvatar />
      </div>
      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
        <div className="text-foreground text-base font-semibold">
          {customerName}
        </div>
        <div className="text-neutral-400 text-xs font-normal">
          {customerEmail}
        </div>
      </div>
    </div>
  );
}
