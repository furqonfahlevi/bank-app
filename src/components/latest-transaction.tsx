import CustomerTransaction from "./customer-transaction";

export default function LatestTransaction() {
  return (
    <div className="py-6 border-b">
      <h1 className="text-base text-foreground font-medium">
        Latest Transaction
      </h1>
      <div className="flex justify-between items-center gap-3">
        <CustomerTransaction
          customerName="Madrani Andi"
          customerEmail="Madraniadi20@gmail.com"
        />
        <CustomerTransaction
          customerName="Madrani Andi"
          customerEmail="Madraniadi20@gmail.com"
        />
        <CustomerTransaction
          customerName="Madrani Andi"
          customerEmail="Madraniadi20@gmail.com"
        />
      </div>
    </div>
  );
}
