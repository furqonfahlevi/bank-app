import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        <Input type="name" id="name" placeholder="Type customer name"></Input>
        <Input
          type="email"
          id="email"
          placeholder="Type customer email"
        ></Input>
        <Input
          type="item"
          id="item"
          placeholder="Type customer item name"
        ></Input>
        <Input type="mount" id="mount"></Input>
      </div> */}
    </div>
  );
}
