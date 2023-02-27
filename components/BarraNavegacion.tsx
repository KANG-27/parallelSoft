
import React, { Dispatch, FC, SetStateAction } from "react";
type IBarraNavegacion = {
  setPaginaPrincipal: Dispatch<SetStateAction<string>>;
};

export const BarraNavegacion: FC<IBarraNavegacion> = ({ setPaginaPrincipal }) => {
  return (
    <div className="flex justify-between container mt-5 ">
      <span className="cursor-pointer barra-navegacion" onClick={() => { setPaginaPrincipal("Quienes somos");}}>Quienes somos</span>
      <span className="cursor-pointer" onClick={() => {setPaginaPrincipal("Metodologia")}}>Metodologia</span>
      <span className="cursor-pointer" onClick={()=>{setPaginaPrincipal("Nuestros Productos")}}>Nuestros productos</span>
      <span className="cursor-pointer" onClick={()=>{setPaginaPrincipal("Confian en nosotros")}}>Confian en nosotros</span>
    </div>
  );
};
