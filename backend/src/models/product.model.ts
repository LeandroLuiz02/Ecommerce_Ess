import fs from 'fs';

export default class ProductModel{
        nome: string;
        id: string
        quantidade: number;
        preco: number;
        Local: string;


    constructor( data : {
        nome: string, 
        id: string, 
        quantidade: number, 
        preco: number, 
        Local: string}) {

        this.nome = data.nome;
        this.id = data.id;
        this.quantidade = data.quantidade;
        this.preco = data.preco;
        this.Local = data.Local;
    }

    set setQuantidade(quantidade:number) {
        this.quantidade = quantidade;
    }

    public removeQuantidade(quantidade:number) {
        if (this.quantidade >= quantidade)
            this.quantidade -= quantidade;

        else
            throw new Error('Quantidade insuficiente');
    }

    get getNome() {
        return this.nome;
    }

    get getId() {
        return this.id;
    }

    get getQuantidade() {
        return this.quantidade;
    }

    get getPreco() {
        return this.preco;
    }

    get getLocal() {
        return this.Local;
    }
}