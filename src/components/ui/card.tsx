import { cn } from "@/lib/utils";
import { Label } from "./label";

type CardProps = {
  className?: string;
  title: string;
  extra?: React.ReactNode;
  children?: React.ReactNode;
};

export function CardHeader({ title, extra, className }: CardProps) {
  return (
    <div
      className={cn("flex justify-between items-center h-12 mb-4", className)}
    >
      <h1 className="text-xl text-foreground font-semibold basis-full">
        {title}
      </h1>
      <div className="flex-none">{extra}</div>
    </div>
  );
}

export default function Card({ className, title, extra, children }: CardProps) {
  return (
    <div className={cn("w-full p-5 bg-white rounded-xl", className)}>
      <CardHeader title={title} extra={extra} />
      {children}
    </div>
  );
}
