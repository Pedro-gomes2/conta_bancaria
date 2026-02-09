import leia = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { Input } from "./src/util/Inputs";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
//Criar Objeto GLobal da Classe conta controller
const contas = new ContaController();
// Criar um array contendo os tipos de conta
const tipoContas = [`Conta Corrente`, `Conta Poupanca`];


function main() {

    let opcao: number;
    criarContasTeste();

    while (true) {

        console.log(colors.bg.white, colors.fg.blue,
            "*************************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Buscar conta Por nome do titular     ");
        console.log("            0 - Sair                                 ");
        //console.log("                                                     ");
        console.log("*****************************************************", colors.reset);
        //console.log("                                                     ",


        console.log(colors.bg.black, colors.fg.yellow, "Entre com a opção desejada: ", colors.reset);
        opcao = Input.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            //process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\nCriar Conta\n", colors.reset);
                criarConta();
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\nListar todas as Contas\n", colors.reset);
                contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nConsultar dados da Conta - por número\n", colors.reset);

                buscaContaPorNumero();

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar dados da Conta\n", colors.reset);
                atualizarConta();
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nApagar uma Conta\n", colors.reset);
                deletarContaPorNumero();
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\nSaque\n", colors.reset);
                sacar();
                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\nDepósito\n", colors.reset);
                depositar();
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\nTransferência entre Contas\n", colors.reset);
                transferir()
                keyPress()
                break;
            case 9:
                console.log(colors.fg.whitestrong, "\nProcurar conta por Titular\n", colors.reset);
                procurarPorTitular();
            break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
                keyPress()
                break;
        }
    }

}

/*Opção 1: Criar uma Nova conta*/
function criarConta() {
    console.log("Digite o numero da Agencia: ");
    const agencia = Input.questionInt("");

    console.log("Digite o nome do Titular: ");
    const titular = Input.question("")

    console.log("Selecione o tipo da Conta: ");
    const tipo = Input.keyInSelect(tipoContas, "", { cancel: false }) + 1;

    console.log("Digite o Saldo da Conta: ");
    const saldo = Input.questionFloat("");

    switch (tipo) {
        case 1:// conta corrente
            console.log("Digite o Limite da conta: ");
            const limite = Input.questionFloat("");
            contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
            break;
        case 2://conta poupança
            console.log("Digite o dia de aniversario da conta: ");
            const aniversario = Input.questionInt("");
            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));

            break;
    }

}

//Opçao 3 : procurar conta por numero
function buscaContaPorNumero(): void {

    console.log("Digite o numero da Conta: ");
    const numero = Input.questionInt("");
    contas.procurarPorNumero(numero);

}






//OPção 4 : Atualizar os dados
function atualizarConta(): void {


    // Solicita o número da conta
    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");

    // Verifica se a conta existe
    const conta = contas.buscarNoArray(numero);

    // Se a conta existir...
    if (conta !== null) {

        /**
         * Guarda os valores atuais da conta em variáveis
         * Exceto tipo que não será aramazenado em uma constante
         * porque não terá o seu valor modificado
         */
        let agencia: number = conta.agencia;
        let titular: string = conta.titular;
        const tipo: number = conta.tipo;
        let saldo: number = conta.saldo;

        /**
         * Atualização da Agência
         * 
         * 1. Exibe o valor atual da agência
         * 2. Se pressionar ENTER o valor atual será mantido
         * 3. Para o ENTER funcionar, passamos o parâmetro
         *    default input, que indica o valor padrão (solução mais simples)
         * 4. Caso contrário o valor atual será substituído
         * 5. Como estamos usando o  método questionInt, 
         *    a validação dos dados está garantida
         * 
         * Os demais atributos seguirão a mesma lógica, alterando
         * apenas a função de input, de acordo com o tipo.
         */
        console.log(`\nAgência atual: ${agencia}`);
        console.log("Digite o novo número da agência: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        agencia = Input.questionInt("", { defaultInput: agencia });

        // Atualização da Titular
        console.log(`\nTitular atual: ${titular}`);
        console.log("Digite o novo nome do titular: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        titular = Input.question("", { defaultInput: titular });

        // Atualização do Saldo
        console.log(`\nSaldo atual: ${formatarMoeda(saldo)}`);
        console.log("Digite o valor do novo saldo: ");
        console.log("(Pressione ENTER para manter o valor atual)");
        saldo = Input.questionFloat("", { defaultInput: saldo });

        // Atualização do Tipo
        switch (tipo) {
            case 1: // Conta Corrente

                /**
                 * Como o objeto 'conta' é do tipo genérico Conta, 
                 * precisamos converter o objeto (casting) para o tipo 
                 * ContaCorrente.
                 * Isso é necessário porque apenas a classe ContaCorrente 
                 * possui o atributo 'limite'.
                 * Após o casting, conseguimos acessar o atributo limite.
                 * O mesmo será feito com o atributo aniversario da classe
                 * ContPoupanca
                 */
                let limite: number = (conta as ContaCorrente).limite;

                // Atualização do Limite
                console.log(`\nLimite atual: ${formatarMoeda(limite)}`);
                console.log("Digite o valor do novo limite: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                limite = Input.questionFloat("", { defaultInput: limite });

                /**
                * Na atualização não utilizamos o método gerarNumero() no atributo 'numero'.
                * O número da conta já existe e identifica unicamente essa conta.
                * 
                * Se chamarmos o método 'gerarNumero()', um novo número seria criado e 
                * substituiria o antigo, o que impediria a atualização dos dados.
                * 
                * O mesmo vale para a classe ContaPoupanca
                */
                contas.atualizar(new ContaCorrente(numero, agencia, titular, tipo, saldo, limite));
                break;

            case 2: // Conta Poupança

                let aniversario: number = (conta as ContaPoupanca).aniversario;

                // Atualização do Aniversário
                console.log(`\nAniversário Atual: ${aniversario}`);
                console.log("Digite o novo dia do aniversário: ");
                console.log("(Pressione ENTER para manter o valor atual)");
                aniversario = Input.questionInt("", { defaultInput: aniversario });

                contas.atualizar(new ContaPoupanca(numero, agencia, titular, tipo, saldo, aniversario));

                break;
        }

    } else {
        console.log(colors.fg.red, `A conta número ${numero} não foi encontrada!`, colors.reset);
    }
}













//Opçao 5 : deletarr conta por numero
function deletarContaPorNumero(): void {

    console.log("Digite o numero da Conta: ");
    const numero = Input.questionInt("");
    contas.deletar(numero);

}


// Função sacar
function sacar():void{

    console.log("Digite o numero da Conta: ");
    const numero = Input.questionInt("");
    
    const conta = contas.buscarNoArray(numero);

    if (conta !==null){
        console.log("Digite o Valor do saque");
        const valor = Input.questionFloat("");

        contas.sacar(numero,valor);

    }else{
        console.log(colors.fg.red, `A conta número ${numero} não foi encontrada!`, colors.reset);
    }

}

// funçao depositar 
 function depositar():void{

    
    console.log("Digite o numero da Conta: ");
    const numero = Input.questionInt("");
    
    const conta = contas.buscarNoArray(numero);

    if (conta !==null){
        console.log("Digite o Valor do deposito");
        const valor = Input.questionFloat("");

        contas.depositar(numero,valor);

    }else{
        console.log(colors.fg.red, `A conta número ${numero} não foi encontrada!`, colors.reset);
    }

 }

function transferir():void{

    
    console.log("Digite o numero da Conta de Origem: ");
    const numeroOrigem = Input.questionInt("");

    console.log("Digite o numero da Conta de Destino: ");
    const numeroDestino = Input.questionInt("");

    const contaOrigem = contas.buscarNoArray(numeroOrigem);   
    const contaDestino = contas.buscarNoArray(numeroDestino);

    if (contaOrigem ===null){
        console.log(colors.fg.red, `A conta número ${numeroOrigem} não foi encontrada!`, colors.reset);
    }else if(contaDestino===null) {
        console.log(colors.fg.red, `A conta número ${numeroDestino} não foi encontrada!`, colors.reset);

    }else{
        console.log("Digite o Valor da Transferencia");
        const valor = Input.questionFloat("");
        contas.transferir(numeroOrigem,numeroDestino,valor);
    }

 }




function  procurarPorTitular():void{
    console.log("Digite o numero do titular: ");
    const nome = Input.question("");
    contas.procurarPorTitular(nome);


}








export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: João Pedro ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/Pedro-gomes2/conta_bancaria");
    console.log("*****************************************************");
}


function keyPress(): void {
    console.log("\n Pressione enter para continuar....")
    Input.prompt();


}
main();
//Contas Para Teste

function criarContasTeste(): void {

    // Instâncias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'João da Silva', 1, 1000.00, 100.00));

    // Instâncias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));

}

function formatarMoeda(saldo: number) {
    throw new Error("Function not implemented.");
}
