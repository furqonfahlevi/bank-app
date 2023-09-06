import Gallery from "./icons/gallery";

export default function MyCard() {
  return (
    <div>
      <div className="w-full h-[215px] bg-sky-400 bg-[url('/assets/mycard-bg.png')] bg-no-repeat rounded-xl relative" />
      <div className="w-[114px] h-12 left-[31px] top-[20px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-white text-base font-normal">Name card</div>
        <div className="text-white text-xl font-medium">Syah Bandi</div>
      </div>
      <div className="w-6 h-6 left-[351px] top-[34px] absolute justify-center items-center inline-flex">
        <Gallery />
      </div>
      <div className="w-[247px] h-16 left-[149px] top-[127px] absolute flex-col justify-center items-end gap-3 inline-flex">
        <div className="text-white text-2xl font-semibold">
          0918 8124 0042 8129
        </div>
        <div className="justify-start items-start gap-1.5 inline-flex">
          <div className="text-white text-base font-normal">12/20</div>
          <div className="text-white text-base font-normal">-</div>
          <div className="text-white text-base font-normal">124</div>
        </div>
      </div>
    </div>
  );
}
