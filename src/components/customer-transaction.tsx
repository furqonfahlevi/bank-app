import CustomerAvatar from "./icons/customer-avatar";

type CustomerDataProps = {
  customerName: string;
  customerEmail: string;
};

export default function CustomerTransaction({
  customerName,
  customerEmail,
}: CustomerDataProps) {
  return (
    <div>
      <div className="w-56 h-16 p-3 bg-neutral-50 rounded-lg justify-start items-center gap-3 inline-flex">
        <div className="w-12 h-12">
          <CustomerAvatar />
        </div>
        <div className="w-36 flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="text-foreground text-base font-semibold">
            {customerName}
          </div>
          <div className="text-neutral-400 text-xs font-normal">
            {customerEmail}
          </div>
        </div>
      </div>
    </div>
  );
}
