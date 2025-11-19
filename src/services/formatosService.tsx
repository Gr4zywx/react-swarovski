export const formatosService = {
PrecoBR: (preco: number): string => {
    return `${preco.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })}`
},
PesoEmKg: (valorPeso: number): string => {
    return `${valorPeso.toLocaleString('pt-br', {minimumFractionDigits: 3})} Kg`
}

}