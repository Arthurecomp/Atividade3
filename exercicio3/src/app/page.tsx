import Postagem from "@/components/Postagem";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 gap-2">
      <Postagem
        nome="Smegol"
        localização=" Mordor"
        url="images/smegol.jpg"
        likesInicial={15}
        cor={false}
      />
      <Postagem
        nome="Grogu"
        localização=" Arvala-7"
        url=" images/grogu.jpeg"
        likesInicial={43}
        cor={false}
      />
      <Postagem
        nome="Vader"
        localização=" Tatooine "
        url="images/vader.jpg"
        likesInicial={88}
        cor={false}
      />
    </main>
  );
}
