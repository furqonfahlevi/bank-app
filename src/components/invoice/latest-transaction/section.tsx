import { Swiper, SwiperSlide } from "swiper/react";
import LatestTransactionCustomer from "./customer";

export default function LatestTransactionSection() {
  return (
    <div className="py-6 border-b">
      <h1 className="text-base text-foreground font-medium">
        Latest Transaction
      </h1>
      <div className="relative">
        <Swiper
          breakpoints={{
            1440: {
              slidesPerView: 3,
              spaceBetween: 200,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 150,
            },
          }}
        >
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
          <SwiperSlide>
            <LatestTransactionCustomer
              customerName="Madrani Andi"
              customerEmail="Madraniadi20@gmail.com"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
