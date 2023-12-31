import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Card, { CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import MyCardItem from "./item";
import MyCardTransactionHistory from "./transaction/history";

type Card = {
  cardName: string;
  cardNumber: string;
  cardDate: string;
  cvv: number;
};

type Transaction = {
  name: string;
  timestamp: number;
  amount: number;
  type: "expenses" | "income";
};

type MyCardSectionProps = {
  props: Card | Transaction;
};

export default function MyCardSection() {
  const { data, isLoading } = useSWR("/mycards", fetcher);
  const { data: transactions, isLoading: isLoadingTransactions } = useSWR(
    "/transactions",
    fetcher
  );
  console.log(data);
  return (
    <Card title="My card" className="w-[468px] flex-none">
      {isLoading ? (
        <Skeleton className="h-[265px]"></Skeleton>
      ) : (
        <Swiper
          pagination={true}
          spaceBetween={20}
          modules={[Pagination]}
          className="swiper-card"
        >
          {data?.map((card: Card) => {
            return (
              <SwiperSlide>
                <MyCardItem
                  cardName={card.cardName}
                  cardNumber={card.cardNumber}
                  cardDate={card.cardDate}
                  cvv={card.cvv}
                ></MyCardItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <CardHeader
        className="border-t mt-5 pt-5"
        title="Transaction History"
        extra={
          <Link href={"/"} className="text-base text-primary font-medium">
            See all
          </Link>
        }
      />
      <div>
        {isLoadingTransactions ? (
          <>
            <Skeleton className="h-6 w-[128px]" />
            <Skeleton className="h-[80px] mt-4" />
          </>
        ) : (
          <>
            <p className="text-base text-neutral-300 font-medium">
              {transactions?.date}
            </p>
            <div className="flex flex-col mt-4 gap-3">
              {transactions?.history.map((transaction: Transaction) => {
                return (
                  <MyCardTransactionHistory
                    name={transaction.name}
                    timestamp={transaction.timestamp}
                    amount={transaction.amount}
                    type={transaction.type}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
