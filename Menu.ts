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
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\nCriar Conta\n",colors.reset, colors.reset);

                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\nListar todas as Contas\n",colors.reset,colors.reset);

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
    console.log("\n*,colors.reset****************************************************");
    console.log("Projeto Desenvolvido por: João Pedro ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/Pedro-gomes2/conta_bancaria");
    console.log("*****************************************************");
}

main();