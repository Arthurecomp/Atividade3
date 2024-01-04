"use client";
import React, { ChangeEvent } from "react";

interface PropsCampoTexto {
  nome: string;
  aoAlterado: (arg0: string) => void;
  valor: string;
}

function CampoTexto({ nome, aoAlterado, valor }: PropsCampoTexto) {
  function aoDigitado(e: ChangeEvent<HTMLInputElement>) {
    aoAlterado(e.target.value);
  }

  return (
    <div>
      <label htmlFor="campo-texto" className=" font-bold">
        {nome}
      </label>
      <br />
      <input
        required
        type="text"
        id="campo-texto"
        className="border-2 bg-gray-500"
        placeholder={nome}
        onChange={aoDigitado}
        value={valor}
      />
      <br />
    </div>
  );
}

export default CampoTexto;
