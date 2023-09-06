import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function TransactionForm() {
  return (
    <div className="grid grid-cols-2 gap-6 py-6">
      <div className="flex flex-col gap-3">
        <Label htmlFor="name">Customer name</Label>
        <Input type="name" id="name" placeholder="Type customer name"></Input>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="name">Customer email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Type customer email"
        ></Input>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="name">Item name</Label>
        <Input
          type="item"
          id="item"
          placeholder="Type customer item name"
        ></Input>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="name">Item mount</Label>
        <div className="flex justify-center items-center">
          <Select defaultValue="usd">
            <SelectTrigger className="flex-none w-[90px] py-7 bg-background border-none rounded-tr-none rounded-br-none ring-0 focus:ring-0 focus:outline-none active:ring-none">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="idr">IDR</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="mount"
            id="mount"
            className="rounded-tl-none rounded-bl-none"
          ></Input>
        </div>
      </div>
    </div>
  );
}
