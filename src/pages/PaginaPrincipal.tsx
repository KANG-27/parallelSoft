"use client";
import React, { useState } from "react";
import { BarraNavegacion } from "components/BarraNavegacion";
import { HeaderImage } from "../../components/HeaderImage";
import { QuienesSomos } from "components/QuienesSomos";
import { Metodologia } from "components/Metodologia";
import { NuestrosProductos } from "components/NuestrosProductos";
import { ConfianNosotros } from "components/ConfianNosotros";

export default function PaginaPrincipal() {
  const [navegacion, setNavegacion] = useState("Quienes somos");
  return (
    <>
      <HeaderImage />
      <BarraNavegacion setPaginaPrincipal={setNavegacion} />
      {navegacion == "Quienes somos" && <QuienesSomos />}
      {navegacion == "Metodologia" && <Metodologia />}
      {navegacion == "Nuestros Productos" && <NuestrosProductos />}
      {navegacion == "Confian en nosotros" && <ConfianNosotros />}
    </>
  );
}
