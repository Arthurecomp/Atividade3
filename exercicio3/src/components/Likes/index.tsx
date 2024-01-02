"use client"

import { VscBookmark} from "react-icons/vsc"
import { RxChatBubble } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

interface PropsLikes{
    likesInicial?: number
    nome?: string  
    cor?: string    
}

function Likes({likesInicial = 11, nome= "username"}: PropsLikes){   
    const[color,setColor] = useState("black")
    const[likes, setLikes] = useState(likesInicial)   

    function handleClick() {    
        let novaCor = ""
        let novosLikes = 0
        if (color == "black"){
            novaCor = "red"
            novosLikes +=1
        } else{
            novaCor = "black"
            novosLikes=0         
        }
        return (setColor(novaCor), setLikes(novosLikes + likesInicial)
        )
      }                
    
    return(
        <section>
            <div className=" flex flex-row justify-between">
                <div className=" flex flex-row w-1/3 justify-around mt-2">
                    <button onClick={handleClick}  >
                        <FaHeart color={color} />
                    </button>
                    <RxChatBubble />                  
                        <FiExternalLink cor={color} />                    
                </div>
                <div className=" mr-1 mt-2">                       
                    <VscBookmark cor={color}/>                             
                </div>
            </div>
            <div className=" mt-2 ml-2">
                <p className="text-[8px] font-bold">{likes} likes </p>
                <p className="text-[8px] mt-1">{nome}</p>
            </div>
        </section>

    )
}

export default Likes
