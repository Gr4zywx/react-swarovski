import axios from "axios";
import type { Joias } from "../types/joias";

export const getJoias = async (): Promise<Joias[]> => {
try {
    const reesposta = await axios.get("http//localhost:3000/produtos");
    return reesposta.data
} catch (error) {
    console.error("Erro ao buscar os dados: ", error);
    throw error;
}
}