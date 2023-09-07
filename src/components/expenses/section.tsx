import useSWR from "swr";
import ExpensesCard from "./card";
import CardReceive from "../icons/card-receive";
import CardSend from "../icons/card-send";
import Moneys from "../icons/moneys";
import Card from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { fetcher } from "@/lib/fetcher";

export default function ExpensesSection() {
  const { data, isLoading } = useSWR("/expenses", fetcher);
  return (
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
  );
}
