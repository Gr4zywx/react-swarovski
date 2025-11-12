export interface Joias {
    id: string | undefined;
    nome: string;
    descricao: string;
    preco: number;
    peso: number | null;
    categorias: string[];
    imagen: string[];
}