import Add from "../icons/add";
import LatestTransactionSection from "./latest-transaction/section";
import InvoiceForm from "./form";
import { Button } from "../ui/button";
import Card from "../ui/card";

export default function InvoiceSection() {
  return (
    <Card
      title="Quick Invoice"
      extra={
        <Button variant="icon" size="icon" className="w-12 h-12 rounded-full">
          <Add />
        </Button>
      }
    >
      <div>
        <LatestTransactionSection />
      </div>
      <InvoiceForm />
      <div className="flex justify-between items-center gap-6">
        <Button className="basis-1/2" variant="ghost">
          Add more details
        </Button>
        <Button className="basis-1/2">Send Money</Button>
      </div>
    </Card>
  );
}
