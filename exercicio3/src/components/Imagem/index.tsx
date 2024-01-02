
interface PropsImagem{
    url: string
}

function Imagem({url}: PropsImagem){
    return(
        <div className=" p-11">
            <img src={url} ></img>
        </div>
    )
}
export default Imagem