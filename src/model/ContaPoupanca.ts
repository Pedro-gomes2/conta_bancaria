import { colors } from "../util/Colors";
import { Conta } from "./Conta";


export class ContaPoupanca extends Conta{
    
    private _aniversario:number;

	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number, aniversario: number) {
		super(numero,agencia,titular,tipo,saldo);
        
        this._aniversario =  aniversario;
	}  
	public get aniversario(): number {
		return this._aniversario;
	}
	public set aniversario(value: number) {
		this._aniversario = value;
	}
    public visualizar(): void{
        //chamando o metodo visualizar 
        super.visualizar();
        console.log(`Data de Aniversario: ${this._aniversario}`);
    }
        
                
                
        
            

























}