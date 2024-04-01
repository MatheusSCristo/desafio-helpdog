import React from "react";

const Products = () => {
  const products = [
    {
      name: "Special Dog",
      description:
        "Oferece uma refeição completa rica em proteínas e vitaminas.",
      img: "/imgs/food1.svg",
    },
    {
      name: "Biscrok",
      description:
        "Biscoitos crocantes em formato de ossos com cálcio e ômega 6.",
      img: "/imgs/food2.svg",
    },
    {
      name: "Drools",
      description: "Pedaços reais de fígado de frango e frango em molho.",
      img: "/imgs/food3.svg",
    },
  ];
  return (
    <div className="flex justify-center w-full gap-8">
      {products.map((product) => (
        <div
          className="flex flex-col gap-[47px] h-[600px] w-[384px]"
          key={product.name}
        >
          <div className="w-full flex justify-center">
            <img src={product.img} alt="" className="w-[250px] h-[300px]" />
          </div>
          <div className="gap-[40px]">
            <div className="gap-[12px] w-[300px]">
              <h1 className="font-pangolin font-bold text-[32px]">
                {product.name}
              </h1>
              <p className="text-wrap w-fit font-roboto">
                {product.description}
              </p>
            </div>
            <button className="py-[20px] px-[40px] bg-blue-20 text-white font-roboto rounded-[5px] w-full">
              COMPRAR AGORA
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
