import { colors } from "../util/Colors";
import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{
    
    private _nasc:string;


	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number, nasc: string) {
		super(numero,agencia,titular,tipo,saldo);
        
        this._nasc =  nasc;


	}

    
	public get nasc(): string {
		return this._nasc;
	}

    
	public set nasc(Data: string) {
		this._nasc = Data;
	}

    public sacar(valor:number): boolean{
        if(valor <=  0){
                    console.log(colors.fg.red, "O valor deve ser positivo", colors.reset);
                    return false;
                }
        
                
                if(valor > this.saldo){
                    console.log(colors.fg.red, "Saldo Insuficiente", colors.reset);
                    return false;
                }
        
                this.saldo -= valor;
                return true;
        

    }
    public visualizar(): void{
        //chamando o metodo visualizar 
        super.visualizar();
        console.log(`Data de Nascimento: ${this.nasc}`);
    }
        
                
                
        
            

























}