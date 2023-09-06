import ExpensesCard from "@/components/expenses-card";
import Add from "@/components/icons/add";
import CardReceive from "@/components/icons/card-receive";
import CardSend from "@/components/icons/card-send";
import Moneys from "@/components/icons/moneys";
import LatestTransaction from "@/components/latest-transaction";
import Layout from "@/components/layout";
import MyCardSection from "@/components/mycard-section";
import TransactionForm from "@/components/transaction-form";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function Home() {
  const { data, error, isLoading } = useSWR("/expenses", fetcher);
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
                cardDate={data?.balance?.date}
                cardBalance={data?.balance?.amount}
                loading={isLoading}
                icon={<Moneys />}
              />
              <ExpensesCard
                cardName="Income"
                cardDate={data?.income?.date}
                cardBalance={data?.income?.amount}
                loading={isLoading}
                icon={<CardReceive />}
                type="ghost"
              />
              <ExpensesCard
                cardName="Expenses"
                cardDate={data?.expenses?.date}
                cardBalance={data?.expenses?.amount}
                loading={isLoading}
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
            <div>
              <LatestTransaction />
            </div>
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
