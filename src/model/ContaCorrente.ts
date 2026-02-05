import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    // Atributos Especificos de Conta Corrente
     private _limite:number; 

    // metodo construtur ===> buscar da superclasse
	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number,limite: number) {
		//metodo super()==> herda as informações da classe conta 
        super(numero,agencia,titular,tipo,saldo);
        this._limite = limite;
	}

    // metodo get e set especificos da classe ContaCorrente
	public get limite(): number {
		return this._limite;
	}

    
	public set limite(value: number) {
		this._limite = value;
	}

    //metodo sacar sobrescrito
    public sacar(valor:number): boolean{
            
            if(valor <=  0){
                console.log(colors.fg.red, "O valor deve ser positivo", colors.reset);
                return false;
            }
    
            
            if(valor > this.saldo + this._limite){
                console.log(colors.fg.red, "Saldo Insuficiente", colors.reset);
                return false;
            }
    
            this.saldo -= valor;
            return true;
    
    
        }



    //metodo visualizar sobrescrito(Polimorfismo)
     public visualizar(): void{
        //chamando o metodo visualizar 
        super.visualizar();
        console.log(`Limite da conta: ${this._limite.toFixed(2)}`);
    }











}