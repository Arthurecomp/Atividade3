"use client";
import CampoTexto from "../Campotexto";
import Botao from "../Botao";
import { useState } from "react";
import InterfaceGeral from "../InterfaceGeral";

interface PropFormulario {
  aoPostagemCadastrada: (postagem: InterfaceGeral) => void;
}

function Formulario({ aoPostagemCadastrada }: PropFormulario) {
  const [nome, setNome] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [url, setUrl] = useState("");

  function pegarValores(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    aoPostagemCadastrada({
      nome: nome,
      localizacao: localizacao,
      url: url,
    });

    setNome(""), setLocalizacao(""), setUrl("");
  }

  return (
    <div className="container">
      <form onSubmit={pegarValores}>
        <div>
          <CampoTexto
            nome={"Usuário"}
            aoAlterado={(valor) => setNome(valor)}
            valor={nome}
          />
          <CampoTexto
            nome={"localização"}
            aoAlterado={(valor) => setLocalizacao(valor)}
            valor={localizacao}
          />
          <CampoTexto
            nome={"URL"}
            aoAlterado={(valor) => setUrl(valor)}
            valor={url}
          />
        </div>
        <div>
          <Botao type="submit" nome={"ADICIONAR"} />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
