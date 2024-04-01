import React from "react";

const Middle = () => {
  return (
    <section className="flex items-center justify-center mt-32 gap-[27px]">
      <div >
        <img src="./imgs/middleDog.svg" />
      </div>
      <div className="flex flex-col gap-12 w-[592px]">
        <div>
          <h1 className="font-pangolin text-[32px]">
            Os cães falam,mas apenas para quem sabe ouvir.
          </h1>
          <p className="font-roboto">
            Descubra histórias encantadoras, segredos reveladores e a profunda
            conexão entre humanos e seus leais companheiros. Prepare-se para uma
            jornada única, onde a linguagem dos cães ganha vida para aqueles que
            estão sintonizados com o inexplorado mundo canino.
          </p>
        </div>
        <button className="py-[20px] px-[40px] bg-blue-20 text-white font-roboto rounded-[5px] w-fit">SAIBA MAIS</button>
      </div>
    </section>
  );
};

export default Middle;
