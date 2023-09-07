import Gallery from "../icons/gallery";

type MyCardProps = {
  cardName: string;
  cardNumber: string;
  cardDate: string;
  cvv: number;
};

export default function MyCardItem({
  cardName,
  cardNumber,
  cardDate,
  cvv,
}: MyCardProps) {
  return (
    <>
      <div className="w-full h-[215px] flex flex-col justify-between pt-5 pl-8 pb-7 pr-6 bg-primary bg-[url('/assets/mycard-bg.png')] bg-cover bg-no-repeat rounded-xl relative cursor-pointer">
        <div className="flex items-center">
          <div className="w-full h-12 flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-white text-base font-normal">Name card</div>
            <div className="text-white text-xl font-medium">{cardName}</div>
          </div>
          <div className="w-6 h-6 mr-[25px] justify-center items-center inline-flex">
            <Gallery />
          </div>
        </div>
        <div className="w-full h-16 flex-col justify-center items-end gap-3 inline-flex">
          <div className="text-white text-2xl font-semibold">{cardNumber}</div>
          <div className="justify-start items-start gap-1.5 inline-flex">
            <div className="text-white text-base font-normal">{cardDate}</div>
            <div className="text-white text-base font-normal">-</div>
            <div className="text-white text-base font-normal">{cvv}</div>
          </div>
        </div>
      </div>
    </>
  );
}
