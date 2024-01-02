import {VscAccount, VscEllipsis} from "react-icons/vsc"

interface PropsTopo{
    nome?: string
    localizacao?: string
}

function Topo ({nome = "username",localizacao= "location"}: PropsTopo){

    return (
        <section className=" flex flex-row justify-between w-full">
            <div className=" flex flex-row items-center ml-2 mt-2">
                <div>
                    <VscAccount/>
                </div>
                <div className=" px-1">
                    <p className=" text-[8px]"> {nome}</p>
                    <p className=" text-[6px]"> {localizacao}</p>
                </div>
            </div>
            <div className=" mr-2 mt-2" >
                <VscEllipsis />
            </div>
        </section>
        

    )
}

export default Topo