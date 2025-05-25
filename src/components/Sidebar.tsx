export const Sidebar = () => {
  return (
    <div className="w-1/4 h-full flex bg-[url(../public/images/bg-sidebar-desktop.svg)] bg-cover rounded-2xl">
      <div className="w-full h-full flex items-start px-4 py-12">
        <div className="flex flex-row gap-x-4">
          <button className="border border-primaryTealBlue rounded-full font-medium px-4 ">
            1
          </button>
          <div className="flex flex-col">
            <p className="text-base text-neutralGray">STEP 1</p>
            <p className="font-medium text-neutralWhite">YOUR INFO</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
