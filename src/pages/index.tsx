import CompanyLogo from "@/components/company-logo";
import CustomerTransaction from "@/components/customer-transaction";
import ExpensesCard from "@/components/expenses-card";
import Add from "@/components/icons/add";
import CardReceive from "@/components/icons/card-receive";
import CardSend from "@/components/icons/card-send";
import Moneys from "@/components/icons/moneys";
import LatestTransaction from "@/components/latest-transaction";
import Layout from "@/components/layout";
import Menu from "@/components/menu";
import MyCard from "@/components/mycard";
import MyCardSection from "@/components/mycard-section";
import Sidebar from "@/components/sidebar";
import TransactionForm from "@/components/transaction-form";
import TransactionHistory from "@/components/transaction-history";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import User from "@/components/user";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6 flex-wrap w-full">
          <Card
            title="All Expenses"
            extra={
              <Select defaultValue="monthly">
                <SelectTrigger className="w-[134px]">
                  <SelectValue></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            }
          >
            <div className="w-full flex justify-between items-center gap-3">
              <ExpensesCard
                cardName="Balance"
                cardDate="April 2022"
                cardBalance="$20,129"
                icon={<Moneys />}
              />
              <ExpensesCard
                cardName="Balance"
                cardDate="April 2022"
                cardBalance="$20,129"
                icon={<CardReceive />}
                type="ghost"
              />
              <ExpensesCard
                cardName="Balance"
                cardDate="April 2022"
                cardBalance="$20,129"
                icon={<CardSend />}
                type="ghost"
              />
            </div>
          </Card>
          <Card
            title="Quick Invoice"
            extra={
              <Button
                variant="icon"
                size="icon"
                className="w-12 h-12 rounded-full"
              >
                <Add />
              </Button>
            }
          >
            <LatestTransaction />
            <TransactionForm />
            <div className="flex justify-between items-center gap-6">
              <Button className="basis-1/2" variant="ghost">
                Add more details
              </Button>
              <Button className="basis-1/2">Send Money</Button>
            </div>
          </Card>
        </div>
        <MyCardSection />
      </div>
    </Layout>
  );
}
