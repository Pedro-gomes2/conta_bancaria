import leia = require("readline-sync");
import { colors }  from './src/util/Colors';


function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
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
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nCriar Conta\n");

                break;
            case 2:
                console.log("\nListar todas as Contas\n");

                break;
            case 3:
                console.log("\nConsultar dados da Conta - por número\n");

                break;
            case 4:
                console.log("\nAtualizar dados da Conta\n");

                break;
            case 5:
                console.log("\nApagar uma Conta\n");

                break;
            case 6:
                console.log("\nSaque\n");

                break;
            case 7:
                console.log("\nDepósito\n");

                break;
            case 8:
                console.log("\nTransferência entre Contas\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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