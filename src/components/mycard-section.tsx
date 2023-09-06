import { Swiper, SwiperSlide } from "swiper/react";
import MyCard from "./mycard";
import Card, { CardHeader } from "./ui/card";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import TransactionHistory from "./transaction-history";

export default function MyCardSection() {
  return (
    <Card title="My card" className="w-[468px] flex-none">
      <Swiper
        pagination={true}
        spaceBetween={20}
        modules={[Pagination]}
        className="swiper-card"
      >
        <SwiperSlide>
          <MyCard
            cardName="Syah Bandi"
            cardNumber="0918 8124 1111 1111"
            cardDate="12/20"
            cvv={142}
          ></MyCard>
        </SwiperSlide>
        <SwiperSlide>
          <MyCard
            cardName="Syah Bandi"
            cardNumber="0918 8124 1111 1111"
            cardDate="12/20"
            cvv={142}
          ></MyCard>
        </SwiperSlide>
        <SwiperSlide>
          <MyCard
            cardName="Syah Bandi"
            cardNumber="0918 8124 1111 1111"
            cardDate="12/20"
            cvv={142}
          ></MyCard>
        </SwiperSlide>
      </Swiper>
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
        <p className="text-base text-neutral-300 font-medium">13 April 2022</p>
        <div className="flex flex-col mt-4 gap-3">
          <TransactionHistory />
          <TransactionHistory />
          <TransactionHistory />
        </div>
      </div>
    </Card>
  );
}
