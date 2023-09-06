import CompanyLogo from "@/components/company-logo";
import CustomerLatestTransaction from "@/components/customer-transaction";
import ExpensesCard from "@/components/expenses-card";
import Menu from "@/components/menu";
import MyCard from "@/components/my-card";
import TransactionHistory from "@/components/transaction-history";
import { Button } from "@/components/ui/button";
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
    <div>
      {/* <Button variant={"ghost"}>ini tombol 1</Button>
      <Button>ini tombol 2</Button> */}
      {/* <Select defaultValue="monthly">
        <SelectTrigger>
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="daily">Daily</SelectItem>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
          <SelectItem value="yearly">Yearly</SelectItem>
        </SelectContent>
      </Select> */}
      {/* <div>
        <Label htmlFor="name">Customer name</Label>
        <Input type="name" id="name" placeholder="Type customer name"></Input>
        <Label htmlFor="name">Customer email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Type customer email"
        ></Input>
        <Label htmlFor="name">Item name</Label>
        <Input
          type="item"
          id="item"
          placeholder="Type customer item name"
        ></Input>
        <Label htmlFor="name">Item mount</Label>
        <Input type="mount" id="mount"></Input>
      </div> */}
      {/* <ExpensesCard /> */}
      {/* <MyCard /> */}
      {/* <TransactionHistory /> */}
      {/* <CustomerTransaction
        customerName={"Levi"}
        customerEmail={"levi@gmail.com"}
      /> */}
      {/* <User userName={"Demo"} userEmail={"demoaccount@gmail.com"} /> */}
      {/* <Menu /> */}
      <CompanyLogo />
    </div>
  );
}
