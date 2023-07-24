export const Card = () => {
  return (
    <div className=" tablet:grid tablet:grid-cols-2 tablet:gap-x-4 tablet:mx-4 tablet:gap-y-4 laptop:grid laptop:grid-cols-3 laptop:mx-20">
      <div className=" w-full h-32 rounded-lg bg-white mx-3 flex px-2 font-poppins shadow-lg">
        <div className="flex my-auto">
          <div className=" w-14 h-14 bg-slate-400 rounded-full flex items-center justify-center">
            1
          </div>
          <div className="flex flex-col ml-4 my-auto">
            <div>Al-fatihah</div>
            <div>Makiyah</div>
          </div>
        </div>
        <div className=" ml-auto my-auto">الفاتحة</div>
      </div>
      <div className=" w-full h-32 rounded-lg bg-white mx-3 flex px-2 font-poppins shadow-lg">
        <div className="flex my-auto">
          <div className=" w-14 h-14 bg-slate-400 rounded-full flex items-center justify-center">
            1
          </div>
          <div className="flex flex-col ml-4 my-auto">
            <div>Al-fatihah</div>
            <div>Makiyah</div>
          </div>
        </div>
        <div className=" ml-auto my-auto">الفاتحة</div>
      </div>
      <div className=" w-full h-32 rounded-lg bg-white mx-3 flex px-2 font-poppins shadow-lg">
        <div className="flex my-auto">
          <div className=" w-14 h-14 bg-slate-400 rounded-full flex items-center justify-center">
            1
          </div>
          <div className="flex flex-col ml-4 my-auto">
            <div>Al-fatihah</div>
            <div>Makiyah</div>
          </div>
        </div>
        <div className=" ml-auto my-auto">الفاتحة</div>
      </div>
    </div>
  );
};
