import Layout from "@/components/layout";
import InvoiceSection from "@/components/invoice/section";
import ExpensesSection from "@/components/expenses/section";
import MyCardSection from "@/components/my-card/section";

export default function Home() {
  return (
    <Layout>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6 flex-wrap w-full">
          <ExpensesSection />
          <InvoiceSection />
        </div>
        <MyCardSection />
      </div>
    </Layout>
  );
}
