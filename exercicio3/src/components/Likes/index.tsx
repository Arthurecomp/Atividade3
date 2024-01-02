"use client";

import { VscBookmark } from "react-icons/vsc";
import { RxChatBubble } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface PropsLikes {
  likesInicial?: number;
  nome?: string;
  cor?: boolean;
}

function Likes({
  likesInicial = 11,
  nome = "username",
  cor = false,
}: PropsLikes) {
  const [color, setColor] = useState(cor);
  const [likes, setLikes] = useState(likesInicial);
  // true = red    false= black

  function handleClick() {
    let novaCor = !color;
    let novosLikes = 0;
    if (novaCor == false) {
      novosLikes = 0;
    } else {
      novosLikes = 1;
    }
    setColor(novaCor);
    setLikes(novosLikes + likesInicial);
  }

  let corCoracao;
  if (color) {
    corCoracao = "red";
  } else {
    corCoracao = "black";
  }

  return (
    <section>
      <div className=" flex flex-row justify-between">
        <div className=" flex flex-row w-1/3 justify-around mt-2">
          <button onClick={handleClick}>
            <FaHeart color={corCoracao} />
          </button>
          <RxChatBubble />
          <FiExternalLink />
        </div>
        <div className=" mr-1 mt-2">
          <VscBookmark />
        </div>
      </div>
      <div className=" mt-2 ml-2">
        <p className="text-[8px] font-bold">{likes} likes </p>
        <p className="text-[8px] mt-1">{nome}</p>
      </div>
    </section>
  );
}

export default Likes;
