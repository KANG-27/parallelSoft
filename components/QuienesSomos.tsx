import React from "react";

export const QuienesSomos = () => {
  return (
    <div className="container my-20 flex">
      <div className="w-[30%] flex justify-center items-center">
        <div className="flex items-end ">
          <span className="text-7xl">2 </span>
        </div>
        <div className="flex items-end">
          <span className="text-xl">años</span>
        </div>
      </div>
      <div className="w-[70%]">
        <span>
          De creatividad aplicada para crear soluciones basadas en procesos,
          negocios y oportunidades tanto propias como de nuestros clientes{" "}
          <br />
          Contamos con un equipo que cuenta con más de 10 años de experiencia en
          análisis y desarrollo de software, tanto en el sector publico como en
          el privado
        </span>
      </div>
    </div>
  );
};
