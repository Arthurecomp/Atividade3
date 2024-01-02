import Imagem from "../Imagem";
import Likes from "../Likes";
import Topo from "../Topo";

interface PropsPostagem {
  nome: string;
  localização: string;
  url: string;
  likesInicial: number;
  cor: boolean;
}

function Postagem({
  nome,
  localização,
  url,
  likesInicial,
  cor,
}: PropsPostagem) {
  return (
    <section className="w-[250px] h-[360px] bg-slate-100 border-2 border-sky-950">
      <div>
        <Topo nome={nome} localizacao={localização} />
      </div>
      <div className=" flex items-center mt-6 mr-1 ml-1 h-56 bg-white">
        <Imagem url={url} />
      </div>
      <div>
        <Likes likesInicial={likesInicial} nome={nome} cor={cor} />
      </div>
    </section>
  );
}

export default Postagem;
