import leia = require("readline-sync");
import { colors }  from './src/util/Colors';
import { Conta } from "./src/model/conta";

function main() {

    let opcao: number;

    //instannciar objetos da classe conta 

    const c1 = new Conta(1,1234,"Joao",1,100000.00);

    c1.visualizar();
    // Testando Metodo Sacar 
    console.log("Sacar 100:",c1.sacar(100));
    console.log("Sacar 2000000:",c1.sacar(1000000.00));
    console.log("Sacar 0:",c1.sacar(0));

    //Teste metodo Depositar
    console.log(" Depositar 0");
    c1.depositar(-10);
    
    console.log(" Depositar 500");
    c1.depositar(500);

    c1.visualizar();



    //console.log("O titular da conta : ", c1.titular);
  
    //c1.sacar(500);
    //console.log(`Seu novo saldo`,c1.saldo);




    while (true) {

        console.log(colors.bg.green, colors.fg.yellow,
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
        console.log("            9 - Sair                                 ");
        //console.log("                                                     ");
        console.log("*****************************************************"), colors.reset;
        //console.log("                                                     ",
        

        console.log(colors.bg.green, colors.fg.yellow,"Entre com a opção desejada: ",colors.reset);
        opcao = leia.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\nCriar Conta\n",colors.reset);

                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\nListar todas as Contas\n",colors.reset);

                break;
            case 3:
                console.log(colors.fg.whitestrong,"\nConsultar dados da Conta - por número\n",colors.reset);

                break;
            case 4:
                console.log(colors.fg.whitestrong,"\nAtualizar dados da Conta\n",colors.reset);

                break;
            case 5:
                console.log(colors.fg.whitestrong,"\nApagar uma Conta\n",colors.reset);

                break;
            case 6:
                console.log(colors.fg.whitestrong,"\nSaque\n",colors.reset);

                break;
            case 7:
                console.log(colors.fg.whitestrong,"\nDepósito\n",colors.reset);

                break;
            case 8:
                console.log(colors.fg.whitestrong,"\nTransferência entre Contas\n",colors.reset);

                break;
            default:
                console.log(colors.fg.whitestrong,"\nOpção Inválida!\n",colors.reset);

                break;
        }
    }

}


export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: João Pedro ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/Pedro-gomes2/conta_bancaria");
    console.log("*****************************************************");
}

main();