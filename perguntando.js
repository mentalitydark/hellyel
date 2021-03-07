let pergunta;
let pontos = 0;

alert("Bem vindo ao Perguntando. Um jogo de perguntas e respostas. Para responder, basta digitar somente o número da resposta.");
pergunta = prompt("Qual a capital de Rio Grande do Sul?\n1 - Porto Alegre\n2 - Rio Grande\n3 - Rio de Janeiro\n4 - São Paulo\nSeus pontos: " + pontos);
if(pergunta === "1") {
    alert("Resposta Certa.");
    pontos++;
} else {
    alert("Resposta Errada.");
}
pergunta = prompt("Que linguagem é essa?\n1 - C#\n2 - JavaScript\n3 - PHP\n4 - C++\nSeus pontos: " + pontos);
if(pergunta === "2") {
    alert("Resposta Certa.");
    pontos++;
} else {
    alert("Resposta Errada.")
}
pergunta = prompt("Qual o dia de hoje?\n1 - Quarta\n2 - Quinta\n3 - Sábado\n4 - Domingo\nSeus pontos: " + pontos);
if(pergunta === "4") {
    alert("Resposta Certa.");
    pontos++;
} else {
    alert("Resposta Errada.");
}
pergunta = prompt("Qual o nome do mês 7?\n1 - Janeiro\n2 - Julho\n3 - Junho\n4 - Setembro\nSeus pontos: "+pontos);
if(pergunta === "2") {
    alert("Resposta Certa.");
    pontos++;
} else {
    alert("Resposta Errada.");
}
pergunta = prompt("Em que ano o COVID-19 foi descoberto?\n1 - 1919\n2 - 2020\n3 - 2019\n4 - 2018\nSeus pontos: "+pontos);
if(pergunta === "3") {
    alert("Resposta Certa.");
    pontos++;
} else {
    alert("Resposta Errada.");
}
alert("Fim de jogo!!\nSua Pontuação: "+pontos);
pergunta = prompt("Deseja jogar novamente?\n1 - Sim\n2 - Não");
if(pergunta === "1") {
    pontos = 0;
    pergunta = prompt("Primeiro caso de COVID-19\n1 - Brasil\n2 - China\n3 - Estados Unidos\n4 - Japão\nSeus pontos: " + pontos);
    if(pergunta === "2") {
        alert("Resposta Certa.");
        pontos++;
    } else {
        alert("Resposta Errada.");
    }
    pergunta = prompt("Qual o menor país do mundo?\n1 - Vaticano\n2 - Índia\n3 - Brasil\n4 - Portugal\nSeus pontos: " + pontos);
    if(pergunta === "1") {
        alert("Resposta Certa.");
        pontos++;
    } else {
        alert("Resposta Errada.")
    }
    pergunta = prompt("Quantas casas decimais tem o número PI?\n1 - Duas\n2 - Centenas\n3 - Infinitas\n4 - Milhares\nSeus pontos: " + pontos);
    if(pergunta === "3") {
        alert("Resposta Certa.");
        pontos++;
    } else {
        alert("Resposta Errada.");
    }
    pergunta = prompt("Qual a empresa que criou o League of Legends?\n1 - Riot Games\n2 - Tencent Games\n3 - ActiVision\n4 - RockStars Games\nSeus pontos: "+pontos);
    if(pergunta === "1") {
        alert("Resposta Certa.");
        pontos++;
    } else {
        alert("Resposta Errada.");
    }
    pergunta = prompt("Quanto tempo a luz do Sol demora para chegar à Terra?\n1 - 4 minutos\n2 - 30 segundos\n3 - 8 minutos\n4 - 2 minutos e 30 segundos\nSeus pontos: "+pontos);
    if(pergunta === "3") {
        alert("Resposta Certa.");
        pontos++;
    } else {
        alert("Resposta Errada.");
    }
    alert("Fim de Jogo!!\nSua Pontuação: "+pontos);
    alert("Fechando o jogo!\nAté mais.")
} else {
    alert("Fechando o jogo!\nAté mais.");
}