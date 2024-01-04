"use client";
import Postagem from "@/components/Postagem";
import Formulario from "@/components/Formulario";
import { useState } from "react";
import InterfaceGeral from "@/components/InterfaceGeral";

export default function Home() {
  const [postagens, setPostagens] = useState<InterfaceGeral[]>([
    {
      nome: "Vader",
      localizacao: " Tatooine ",
      url: "images/vader.jpg",
      likesInicial: 88,
      cor: false,
    },
    {
      nome: "Vader",
      localizacao: " Tatooine ",
      url: "images/vader.jpg",
      likesInicial: 88,
      cor: false,
    },
  ]);

  function aoNovoPostagem(postagem: InterfaceGeral) {
    setPostagens([...postagens, postagem]);
  }
  return (
    <main className="flex flex-col justify-center p-4 gap-2 bg-slate-500 ">
      <div className=" border-2 align-middle flex flex-col">
        <h1> ADICIONANDO NOVO CARD</h1>

        <Formulario aoPostagemCadastrada={aoNovoPostagem} />
      </div>
      <div className="flex flex-col items-center border-2">
        {postagens.map((item) => (
          <Postagem
            nome={item.nome}
            localizacao={item.localizacao}
            url={item.url}
            likesInicial={item.likesInicial}
            cor={item.cor}
          />
        ))}
      </div>
    </main>
  );
}
