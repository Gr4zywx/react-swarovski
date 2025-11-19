import pingente_3flores from '../../assets/PINGENTE IDYLLIA 3 FLORES.png';
import pingente_borboleta from '../../assets/PINGENTE IDYLLIA BORBOLETA.png';
import anel_azul from '../../assets/ANEL IDYLLIA-AZUL.png';
import colar_1 from '../../assets/COLAR IDYLLIA 1.png';
import pingente_florido from '../../assets/PINGENTE IDYLLIA FLORIDO.png';
import bracelete from '../../assets/BACELETE IDYLLIA.png';
import anel_flor from '../../assets/ANEL IDYLLIA FLOR G.png';
import anel_verde from '../../assets/ANEL IDYLLIA-VERDE.png';
import colar_2 from '../../assets/COLAR IDYLLIA 2.png';
import '/Produtos.css';

import { useEffect, useState } from 'react';
import { getJoias } from '../../services/joiasService';
import type { Joias } from '../../types/joias';
import CardProduto from '../../Components/CardProduto/CardProduto';


export default function Produtos() {

    const [joias, setJoias] = useState<Joias[]>([]);

    const fetchJoias = async () => {
        try {
            const dados = await getJoias();
            console.log("Lista de joias vinda da API: ", dados);
            setJoias(dados);
        } catch (error) {
            console.error("Erro ao executar getJoias: ", error);
        }
    }

    useEffect(() => {
        fetchJoias();
    }, [])

    return (
        <main>


            <img className="Ariana " src="../assests/transferir (1) (1) (1).png" alt="" />





            <section className="cards">

                <div className="card">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7 0 0c-19-26.3-49.5-41.9-81.9-41.9-55.9 0-101.1 45.3-101.1 101.1 0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 6.2 4.8 14.4 7.5 23.7 7.5s17.4-2.7 23.7-7.5c35.1-26.8 86.4-71.7 128.5-122.9 37.3-45.4 71.8-97.5 71.8-152.5 0-55.9-45.3-101.1-101.1-101.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 67.4-41.6 127.3-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.4 0 232.5 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" /></svg>

                    <h2>Pingente idyllia</h2>

                    <img src={pingente_3flores} alt="Píngente idyllia" />
                    <p>Pingente Idyllia, combinação de lapidações, flor, multicor, revestido em dourado</p>
                    <span className="preco">R$ 2.000,00</span>
                    <small>ou 10x de R$200,00 sem juros</small>


                </div>


                <div className="card">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7 0 0c-19-26.3-49.5-41.9-81.9-41.9-55.9 0-101.1 45.3-101.1 101.1 0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 6.2 4.8 14.4 7.5 23.7 7.5s17.4-2.7 23.7-7.5c35.1-26.8 86.4-71.7 128.5-122.9 37.3-45.4 71.8-97.5 71.8-152.5 0-55.9-45.3-101.1-101.1-101.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 67.4-41.6 127.3-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.4 0 232.5 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" /></svg>

                    <h2>Pingente idyllia</h2>

                    <img src={pingente_borboleta} alt="Píngente idyllia" />
                    <p>Pingente e pregadeira Idyllia, Combinação de lapidações, Pavé, Borboleta, Multicores, Acabamento de combinação
                        de metais</p>
                    <span className="preco">R$ 2.000,00</span>
                    <small>ou 10x de R$200,00 sem juros</small>


                </div>


                <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7 0 0c-19-26.3-49.5-41.9-81.9-41.9-55.9 0-101.1 45.3-101.1 101.1 0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 6.2 4.8 14.4 7.5 23.7 7.5s17.4-2.7 23.7-7.5c35.1-26.8 86.4-71.7 128.5-122.9 37.3-45.4 71.8-97.5 71.8-152.5 0-55.9-45.3-101.1-101.1-101.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 67.4-41.6 127.3-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.4 0 232.5 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" /></svg>

                    <h2>Anel Idyllia</h2>

                    <img src={anel_azul} alt="Anel idyllia" />
                    <p>Anel Idyllia, Combinação de lapidações, Flor, Azul, Revestido em dourado</p>
                    <span className="preco">R$ 1.000,00</span>
                    <small>ou 10x de R$100,00 sem juros</small>


                </div>


                <div className="card">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7 0 0c-19-26.3-49.5-41.9-81.9-41.9-55.9 0-101.1 45.3-101.1 101.1 0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 6.2 4.8 14.4 7.5 23.7 7.5s17.4-2.7 23.7-7.5c35.1-26.8 86.4-71.7 128.5-122.9 37.3-45.4 71.8-97.5 71.8-152.5 0-55.9-45.3-101.1-101.1-101.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 67.4-41.6 127.3-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.4 0 232.5 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" /></svg>

                    <h2>Colar idyllia</h2>

                    <img src={colar_1} alt="Colar idyllia" />
                    <p>Colar Idyllia, Combinação de lapidações, Flor, Multicor, Revestido em dourado</p>
                    <span className="preco">R$ 4.000,00</span>
                    <small>ou 10x de R$400,00 sem juros</small>
                </div>

                <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7 0 0c-19-26.3-49.5-41.9-81.9-41.9-55.9 0-101.1 45.3-101.1 101.1 0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 6.2 4.8 14.4 7.5 23.7 7.5s17.4-2.7 23.7-7.5c35.1-26.8 86.4-71.7 128.5-122.9 37.3-45.4 71.8-97.5 71.8-152.5 0-55.9-45.3-101.1-101.1-101.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 67.4-41.6 127.3-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.4 0 232.5 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" /></svg>

                    <h2>Pingente idyllia</h2>

                    <img src={pingente_florido} alt="Píngente idyllia" />
                    <p>Pingente e pregadeira Idyllia, Combinação de lapidações, Pavé, Flor, Multicores, Acabamento de combinação de
                        metais </p>
                    <span className="preco">R$ 3,700,00</span>
                    <small>ou 10x de R$370,00 sem juros</small>
                </div>


                <div className="card">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7 0 0c-19-26.3-49.5-41.9-81.9-41.9-55.9 0-101.1 45.3-101.1 101.1 0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 6.2 4.8 14.4 7.5 23.7 7.5s17.4-2.7 23.7-7.5c35.1-26.8 86.4-71.7 128.5-122.9 37.3-45.4 71.8-97.5 71.8-152.5 0-55.9-45.3-101.1-101.1-101.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 67.4-41.6 127.3-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.4 0 232.5 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" /></svg>

                    <h2>Bracelete idyllia</h2>

                    <img src={bracelete} alt="Bracelete idyllia" />
                    <p>Bracelete Idyllia, Combinação de lapidações, Flor, Multicor, Revestido em dourado</p>
                    <span className="preco">R$ 1.790,00</span>
                    <small>ou 10x de R$179,00 sem juros</small>


                </div>


                <div className="card">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7 0 0c-19-26.3-49.5-41.9-81.9-41.9-55.9 0-101.1 45.3-101.1 101.1 0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 6.2 4.8 14.4 7.5 23.7 7.5s17.4-2.7 23.7-7.5c35.1-26.8 86.4-71.7 128.5-122.9 37.3-45.4 71.8-97.5 71.8-152.5 0-55.9-45.3-101.1-101.1-101.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 67.4-41.6 127.3-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.4 0 232.5 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" /></svg>

                    <h2>Anel idyllia</h2>

                    <img src={anel_flor} alt="Anel idyllia" />
                    <p>Anel Idyllia, Combinação de lapidações, Pavé, Flor, Multicor, Banhado a dourado </p>
                    <span className="preco">R$ 2.400,00</span>
                    <small>ou 10x de R$240,00 sem juros</small>


                </div>


                <div className="card">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7 0 0c-19-26.3-49.5-41.9-81.9-41.9-55.9 0-101.1 45.3-101.1 101.1 0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 6.2 4.8 14.4 7.5 23.7 7.5s17.4-2.7 23.7-7.5c35.1-26.8 86.4-71.7 128.5-122.9 37.3-45.4 71.8-97.5 71.8-152.5 0-55.9-45.3-101.1-101.1-101.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 67.4-41.6 127.3-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.4 0 232.5 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" /></svg>

                    <h2>Anel idyllia</h2>

                    <img src={anel_verde} alt="Anel idyllia" />
                    <p>Anel Idyllia, Combinação de lapidações, Flor, Verde, Revestido em dourado </p>
                    <span className="preco">R$ 1.980,00</span>
                    <small>ou 10x de R$108,88 sem juros</small>


                </div>


                <div className="card">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7 0 0c-19-26.3-49.5-41.9-81.9-41.9-55.9 0-101.1 45.3-101.1 101.1 0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 6.2 4.8 14.4 7.5 23.7 7.5s17.4-2.7 23.7-7.5c35.1-26.8 86.4-71.7 128.5-122.9 37.3-45.4 71.8-97.5 71.8-152.5 0-55.9-45.3-101.1-101.1-101.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 67.4-41.6 127.3-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.4 0 232.5 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z" /></svg>

                    <h2>Colar idyllia</h2>

                    <img src={colar_2} alt="Colar idyliia" />
                    <p>Colar Idyllia, Combinação de lapidações, Pavé, Flor, Multicor, Revestido em dourado </p>
                    <span className="preco">R$ 6.500,00</span>
                    <small>ou 10x de R$650,00 sem juros</small>


                </div>
                {
                    joias.map((j: Joias) => (
               <CardProduto
               key={j.id}
               nome={j.nome}
               descricao={j.descricao}
               preco={j.preco}
               imagem={j.imagen[0] ?? ""}
               peso={j.peso}
               />
                    ))
                }


            </section>
        </main>
    )
}