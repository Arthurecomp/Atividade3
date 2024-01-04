interface PropsBotao {
  type: "submit" | "reset" | "button" | undefined;
  nome: string;
}

function Botao({ type, nome }: PropsBotao) {
  return (
    <button type={type} className=" border-3 bg-slate-600 hover:bg-black">
      {nome}
    </button>
  );
}

export default Botao;
