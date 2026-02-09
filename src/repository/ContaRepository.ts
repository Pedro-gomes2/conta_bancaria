import { Conta } from "../model/Conta";

export interface ContaRepository{
    // Metodo do CRUD(Creat, Read, Update, Delete)
    procurarPorNumero(numero:number):void;
    listarTodas():void;
    cadastrar(conta:Conta):void;
    atualizar(conta:Conta): void;
    deletar(numero:number):void;
    procurarPorTitular(titular:string):void;


    //metodos bancarios
    sacar(numero:number, valor:number):void;
    depositar(numero:number, valor:number):void;
    transferir(numeroOrigem:number, numeroDestino:number,valor:number):void;






}