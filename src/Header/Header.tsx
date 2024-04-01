import React from "react";

const Header = () => {
  return (
    <section className="flex pt-32 pl-[400px] w-full gap-[96px] relative">
      <div className="flex max-w-[456px]">
        <div className="flex flex-col gap-[115px]">
          <div className="flex gap-4 items-center">
            <img src="/imgs/paw.svg" />
            <h1 className="text-blue-20 font-pangolin text-[32px]">HelpDog</h1>
          </div>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[24px] ">
              <h1 className="font-pangolin text-wrap text-[48px]">
                Ajude quem realmente precisa da sua ajuda.
              </h1>
              <h2 className="font-roboto text-wrap text-[20px] ">
                Com apenas 1 real você pode me ajudar a alimentar cães de ruas.
              </h2>
            </div>
            <button className="px-[40px] py-[20px] bg-blue-20 text-white w-fit rounded-[5px] font-roboto ">
              AJUDAR AGORA
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-yellow w-[1200px] h-[500px] -rotate-[17deg] overflow-hidden rounded-full absolute p-5">
          <div className="relative ml-32 rotate-[17deg] w-fit h-[550px]">
            <img
              src="/imgs/food.svg"
              className=" absolute z-10 bottom-0 left-5"
            />
            <img src="/imgs/dog.svg" className=" ml-[150px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
