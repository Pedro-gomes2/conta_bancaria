import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository{
   
    
    private listaContas = new Array<Conta>();
   
    public numero:number = 0;


   
    //Metodo do CRUD
    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar();
        else
            console.log(colors.fg.red,"\nConta nao encontrada! ", colors.reset);
      
        
    }



    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }

    procurarPorTitular(titular: string): void {
        //filtragem
        const buscaPorTitular = this.listaContas.filter( conta => conta.titular.toLocaleUpperCase().includes(titular.toLocaleUpperCase()));
    
        //listagem dos dados filtrados
        if(buscaPorTitular.length>0){
            buscaPorTitular.forEach(conta => conta.visualizar());
        }else{
            console.log(colors.fg.red,"\nNenhuma Conta nao encontrada! ", colors.reset);
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green,`\nA conta Numero: ${conta.numero} foi Cadastrada com sucesso`,colors.reset);
    }


    atualizar(conta: Conta): void {

        const buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;//array[1]= valor
            console.log(colors.fg.green,`\nA conta numero ${conta.numero} foi atualizada com Sucesso`, colors.reset);
        }else{
            console.log(colors.fg.red,"\nConta Nao Encontrada! ", colors.reset);
        }
           
    }
    


    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta),1);
            console.log(colors.fg.green,`\nA conta numero ${numero} foi deletada com Sucesso`, colors.reset);
        }else{
            console.log(colors.fg.red,"\nConta Nao Encontrada! ", colors.reset);
        }
            
    } 

    // Metodos Bancarios
    sacar(numero: number, valor: number): void {

        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            if(buscaConta.sacar(valor)=== true)
                console.log(colors.fg.green,`\nO saque do ${valor} na conta ${numero} foi um Sucesso`, colors.reset);
        }else
            console.log(colors.fg.red,`\nConta ${numero} Nao Encontrada!`, colors.reset);
    }


    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            buscaConta.depositar(valor)
            console.log(colors.fg.green,`\nO deposito do ${valor} na conta ${numero} foi um Sucesso`, colors.reset);
        }else
            console.log(colors.fg.red,`\nConta ${numero} Nao Encontrada!`, colors.reset);
    }


    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        const buscaContaDestino = this.buscarNoArray(numeroDestino);

        if(buscaContaOrigem !== null && buscaContaDestino !== null){
            if(buscaContaOrigem.sacar(valor)=== true){
                buscaContaDestino.depositar(valor);
                console.log(colors.fg.green,`\nA transferencia no valor de ${valor} da conta ${numeroOrigem}  para a conta numero ${numeroDestino} foi um Sucesso`, colors.reset);

            }
                
        }else
            console.log(colors.fg.red,`\nConta de origem e/ou  Nao Encontrada!`, colors.reset);
    }

    // metodos auxiliares

    public gerarNumero():number{
        return ++ this.numero;
    }


    public buscarNoArray(numero:number):Conta  | null{
        for (let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;
        }
        return null;
        
    }


}