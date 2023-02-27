import React from "react";

export const HeaderImage = () => {
  return (
    <>
      <div className="bg-[#214d72]">
        <div className="container flex justify-between py-36">
          <div className="w-[50%] flex items-center">
            <span className="">
              Generamos impatos positivos a su negocio, transformamos sus ideas
              en proyetos en un proeso continuo de mejoramiento y optimización.
              Alineamos nuestra experienia, servicios y metodologia de negoccios
              para generar valor a sus proceso operativos y administrativos
            </span>
          </div>
          <div className="flex flex-col w-[40%]">
            <span className="mb-2">Contactanos</span>
            <label htmlFor="">
              <input className="w-full rounded-lg" type="email" />
            </label>
            <div className="mt-5">
              <input className="w-full h-[100px] rounded-lg" type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
