import './CardProduto.css';
import joia_default from "../../assets/Joia_default.svg";
import type { CardProdutoProps } from '../../types/CardProdutoProps';
import { formatosService } from '../../services/formatosService';

export default function CardProduto({nome, descricao, preco, imagem, id, peso }: CardProdutoProps) {
    return (
        <div key={id} className="card_produto">
            <img src={(imagem.length > 0)?`http://localhost:5173/static/${imagem}` : joia_default} alt={"Imagem do produto:" + descricao} />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao :"Descrição não informada"}</p>
            <div>
            <span>{formatosService.PrecoBR(preco)} / </span>
            <span>{ (peso != null)? formatosService.PesoEmKg(peso) : "qtde não informada"} </span>

            </div>
        </div>
    )
}
