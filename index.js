let vida = 3
let vidaAtual = vida
let inventario = []
let fase = 1
let descrição = [null]
let opcao
let n



function escolha(texto1, texto2, texto3 = null, texto4 = null) { //Função geral de escolhas
    if(texto3 !== null && texto4 !== null) {
        opcao = Number(prompt(`1- ${texto1}\n2- ${texto2}\n3- ${texto3}\n4- ${texto4}\n\nOpção 1, 2, 3 ou 4?`))

        if(opcao === 1){
            console.log(`Vida: ${vida}\n${texto1}\nInventário: ${inventario.length+"/3"}`)
            alert(`Vida: ${vida}\n${texto1}\nInventário: ${inventario.length+"/3"}`)


        } else if(opcao === 2){
            console.log(`Vida: ${vida}\n${texto2}\nInventário: ${inventario.length+"/3"}`)
            alert(`Vida: ${vida}\n${texto2}\nInventário: ${inventario.length+"/3"}`)


    } else if(opcao === 3){
        console.log(`Vida: ${vida}\n${texto3}\nInventário: ${inventario.length+"/3"}`)
        alert(`Vida: ${vida}\n${texto3}\nInventário: ${inventario.length+"/3"}`)


} else if(opcao === 4){
    console.log(`Vida: ${vida}\n${texto4}\nInventário: ${inventario.length+"/3"}`)
    alert(`Vida: ${vida}\n${texto4}\nInventário: ${inventario.length+"/3"}`)
}
}



 if(texto3 !== null && texto4 === null) {
        opcao = Number(prompt(`1- ${texto1}\n2- ${texto2}\n3- ${texto3}\n\nOpção 1, 2 ou 3?`))

        if(opcao === 1){
            console.log(`Vida: ${vida}\n${texto1}\nInventário: ${inventario.length+"/3"}`)
            alert(`Vida: ${vida}\n${texto1}\nInventário: ${inventario.length+"/3"}`)


        } else if(opcao === 2){
            console.log(`Vida: ${vida}\n${texto2}\nInventário: ${inventario.length+"/3"}`)
            alert(`Vida: ${vida}\n${texto2}\nInventário: ${inventario.length+"/3"}`)


        } else if(opcao === 3){
        console.log(`Vida: ${vida}\n${texto3}\nInventário: ${inventario.length+"/3"}`)
        alert(`Vida: ${vida}\n${texto3}\nInventário: ${inventario.length+"/3"}`)
    }
} 



if(texto3 === null && texto4 === null) {
    opcao = Number(prompt(`1- ${texto1}\n2- ${texto2}\n\nOpção 1 ou 2?`))

    if(opcao === 1){
        console.log(`Vida: ${vida}\n${texto1}\nInventário: ${inventario.length+"/3"}`)
        alert(`Vida: ${vida}\n${texto1}\nInventário: ${inventario.length+"/3"}`)


    } else if(opcao === 2){
        console.log(`Vida: ${vida}\n${texto2}\nInventário: ${inventario.length+"/3"}`)
        alert(`Vida: ${vida}\n${texto2}\nInventário: ${inventario.length+"/3"}`)
    }

if(vida === 0) {
    fase--
    console.log("Sua vida chegou a zero, junto com suas chances de chegar até as olimpíadas. Recomece do último ponto salvo.")
    alert("Sua vida chegou a zero, junto com suas chances de chegar até as olimpíadas. Recomece do último ponto salvo.")
}
}
}
function menu() {
    while(n !== 4) {
    n = Number(prompt(
    `
    1- Checar Inventário\n
    2- Explorar\n
    3- Usar Itens\n
    4- Prosseguir História
    `
    ))
    switch(n){
        case 1:
            escrevaInventario()
            break

        case 2:
            console.log(descrição[fase])
            alert(descrição[fase])
            break

        case 3:
            usarInventario()
        break

        case 4:
            break
    }
}
}
function escrevaInventario() {
    for(let i = 1 ; i < 4; i++){
        if(inventario[i] != undefined){
            console.log(`${i}- ${inventario[i]}`)
            alert(`${i}- ${inventario[i]}`)
        }
        else if(inventario[i] === undefined){
            console.log(`${i}- _______`)
            alert(`${i}- _______`)
        }
    }
}
function usarInventario() {
    if(inventario[0] !== undefined && inventario[1] !== undefined && inventario[2] !== undefined) {
        escolha("Inspiração", "Determinação", "Nostalgia", "Nenhum.")
    }
    if(inventario[0] !== undefined && inventario[1] !== undefined && inventario[2] === undefined) {
        escolha("Inspiração", "Determinação", "_______", "Nenhum.")
    }
    if(inventario[0] !== undefined && inventario[1] === undefined && inventario[2] === undefined) {
        escolha("Inspiração", "_______", "_______", "Nenhum.")
    }
    if(inventario[0] === undefined && inventario[1] === undefined && inventario[2] === undefined) {
        escolha("_______", "_______", "_______", "Nenhum.")
    }

        switch(opcao){
            
            case 1:
                console.log("Você usou sua Inspiração, e agora se tornou imparável. Você recebeu +1 de vida.")
                alert("Você usou sua Inspiração, e agora se tornou imparável. Você recebeu +1 de vida.")
                vida++
                inventario[0] = null
                break
            
            case 2:
                console.log("Você usou sua Determinação, e cumpriu om sucesso o desafio atual.")
                alert("Você usou sua Determinação, e cumpriu om sucesso o desafio atual.")
                fase++
                inventario[1] = null
                break
            
            case 3:
                console.log("Você usou sua Nostalgia, e lembrou de seu pai. Isso te enche de Determinação e te Inspira. Além de cumprir o desafio atual, você ganhou +1 de vida.")
                alert("Você usou sua Nostalgia, e lembrou de seu pai. Isso te enche de Determinação e te Inspira. Além de cumprir o desafio atual, você ganhou +1 de vida.")
                fase++
                vida++
                inventario[2] = null
                break

            case 4:
                break

        }







}



while(fase === 1) {
    descrição[1] = "Você está em sua casa. Seu quarto, apesar de pequeno, é bem decorado, com fotos de sua família e um poster da sua série de televisão favorita. Já a sala, tem um sofá em frente a televisão, onde passa o jornal local. Ao lado, fica a porta onde vcê vê seu pai entrando, depois de um longo dia de trabalho."
    
    console.log("Você nasceu no Irã, em 1992. Agora, em 2000, seu pai após chegar em casa, te chama. \nPai: Saied! Vem cá!\nO que você faz?")
    alert("Você nasceu no Irã, em 1992. Agora, em 2000, seu pai após chegar em casa, te chama. \nPai: Saied! Vem cá!\nO que você faz?")
    menu()
    escolha("Ir até seu pai.", "Ignorar.")
    
        if(opcao == 1) {
        console.log("Ao ir até seu pai, ele se abaixa até a sua altura e te fala com um sorriso no rosto.\nPai: Saied, nós vamos acampar no fim de semana. Tudo bem?")
        alert("Ao ir até seu pai, ele se abaixa até a sua altura e te fala com um sorriso no rosto.\nPai: Saied, nós vamos acampar no fim de semana. Tudo bem?")
        escolha("Sim.", "Não.")
    
            if(opcao == 1){
            console.log("Seu pai fica nitidamente feliz, abrindo um sorriso no rosto.\nPai: Que bom, filho. ")
            alert("Seu pai fica nitidamente feliz, abrindo um sorriso no rosto.\nPai: Que bom, filho. ")
            fase++
            }
    
                else if(opcao == 2){
                console.log("Seu pai toma um semblante entristecido, mas parece respeitar seus desejos.\nPai: Que pena, mas tudo bem. Outro dia talvez.")
                alert("Seu pai toma um semblante entristecido, mas parece respeitar seus desejos.\nPai: Que pena, mas tudo bem. Outro dia talvez.")
                vida--
                }   
    
        }
    
            else if(opcao == 2) {
            console.log("Você fica trancado em seu quarto, e seu pai abre a porta.\nPai: Olha Saied, nós vamos acampar em família na fim de semana.")
            alert("Você fica trancado em seu quarto, e seu pai abre a porta.\nPai: Olha Saied, nós vamos acampar em família na fim de semana.")
            vida--
            fase++
            }
}

while(fase === 2){
    descrição[2] = "Um calmo bosque, bem grande e islado. Você, junto de seus pais estabeleeram acampamento às margens de um rio, e agora, eles estão conversando, enquanto seu pai pesca."

    console.log("Ao chegar no acamapamento e estabelecer suas barracas, seu pai te chama. Ele parece animado com algo.\nPai: Saeid! Que tal um passeio?\nSeu pai diz isso segurando uma canoa.")
    alert("Ao chegar no acamapamento e estabelecer suas barracas, seu pai te chama. Ele parece animado com algo.\nPai: Saeid! Que tal um passeio?\nSeu pai diz isso segurando uma canoa.")
    menu()
    escolha("Ta, parece divertido.", "Melhor não.")

        if(opcao == 1) {
        console.log("Seu pai parece ter ficado bem animado. Ele te põe na canoa e inicia o passeio. Depois de um tempo, ele fala contigo.\nPai: Saied, quer pilotar um pouco?\nEle diz lhe dando o remo.")
        alert("Seu pai parece ter ficado bem animado. Ele te põe na canoa e inicia o passeio. Depois de um tempo, ele fala contigo.\nPai: Saied, quer pilotar um pouco?\nEle diz lhe dando o remo.")
        escolha("Quero sim , pai.", "Eu nunca pilotei antes. É melhor o remo ficar com você")

            if(opcao == 1) {
            console.log("Ao pegar o remo, e tentar pilotar, no início, sai meio desenginçado, mas é bem divertido. Ao longo do passeio, você vai pegando o jeito, e vê que é uma coisa muito legal. \nPai: Saied, você tem um talento natural nisso. Que tal praticar um pouco mais? Assim você pode até ir paras as olimpíadas, quem sabe?")
            alert("Ao pegar o remo, e tentar pilotar, no início, sai meio desenginçado, mas é bem divertido. Ao longo do passeio, você vai pegando o jeito, e vê que é uma coisa muito legal. \nPai: Saied, você tem um talento natural nisso. Que tal praticar um pouco mais? Assim você pode até ir paras as olimpíadas, quem sabe?")
            fase++
            inventario[0] = "Inspiração"
            }

                else if(opcao == 2) {
                    console.log("Seu pai te olha, meio triste, mas compreensivo.\nPai: Ta bom. Pode ser meio assustador mesmo.")
                    alert("Seu pai te olha, meio triste, mas compreensivo.\nPai: Ta bom. Pode ser meio assustador mesmo.")
                    vida-=3
                }
            else if(opcao == 2){
                console.log("Seu pai fica triste, mas entende que você tem medo. Ele diz que ta tudo bem, e sai sozinho. Depois que volta, ele passa alguns dias tentando te convencer a andar com ele, até que uma hora você aceita. Lá você descobre que tem um talento natural pra isso.")
                alert("Seu pai fica triste, mas entende que você tem medo. Ele diz que ta tudo bem, e sai sozinho. Depois que volta, ele passa alguns dias tentando te convencer a andar com ele, até que uma hora você aceita. Lá você descobre que tem um talento natural pra isso.")
                vida-=3
            }
                   
                







    }
}

while(fase === 3) {
    descrição[3] = " Um salão que, embora pequeno, é bem equipado, com remos e canoas de qualidade. Ao lado, há um rio, que os alunos usam para treinar juntos ao treinador."

    console.log("Depois de descobrir seu grande talento em canoagem, seu pai o inscreveu em um curso, para que suas habilidades fossem boas o suficiente para que um dia você fosse até as olimpíadas. \nTreinador: Bom dia alunos. Hoje teremos um novo aluno. Você gostaria de se apresentar? \nO treinador te olha esperando sua resposta.")
    alert("Depois de descobrir seu grande talento em canoagem, seu pai o inscreveu em um curso, para que suas habilidades fossem boas o suficiente para que um dia você fosse até as olimpíadas. \nTreinador: Bom dia alunos. Hoje teremos um novo aluno. Você gostaria de se apresentar? \nO treinador te olha esperando sua resposta.")
    menu()
    escolha("Tudo bem. Eu sou Saied Fazloula. Prazer em conhecê-los.", "Ficar quieto.")

        if(opcao == 1) {
        console.log("Treinador: Muito bem. Pegue a canoa e o remo Saied, e vá até a beira do rio.")
        alert("Treinador: Muito bem. Pegue a canoa e o remo Saied, e vá até a beira do rio.")
        escolha("Não sei se consigo, treinador.", "Ir sozinho.")

            if(opcao == 1){
            console.log("Treinador: Ta, as canoas podem ser pesadas mesmo. Vá até a beira do rio, e me espere lá. Eu vou levar a canoa.")
            alert("Treinador: Ta, as canoas podem ser pesadas mesmo. Vá até a beira do rio, e me espere lá. Eu vou levar a canoa.")
            fase++
            }

                else if(opcao == 2){
                console.log("Você vai até as canoas e tenta pegar a sua, porém ela é muito pesada, e você acaba caindo. \nTreinador: Saeid! \nO treinador corre até você e tira a canoa de cima de ti. Você machucou o braço, então não pôde participar do treinamento de hoje.")
                alert("Você vai até as canoas e tenta pegar a sua, porém ela é muito pesada, e você acaba caindo. \nTreinador: Saeid! \nO treinador corre até você e tira a canoa de cima de ti. Você machucou o braço, então não pôde participar do treinamento de hoje.")
                vida--
                fase+=2
                }   

        }

            else if(opcao == 2) {
            console.log("O treinamento entende que você gosta de ficar quieto, e respeita isso. Ele te apresenta aos demais alunos e te leva até a beira do rio, onde ele o põe na canoa e inicia a aula.")
            alert("O treinamento entende que você gosta de ficar quieto, e respeita isso. Ele te apresenta aos demais alunos e te leva até a beira do rio, onde ele o põe na canoa e inicia a aula.")
            vida--
            fase++
            }
}

while(fase === 4) {
    descrição[4]

    console.log("Um grande rio, que, apesar de calmo, precisa de atenção para que possa ser atravessado de maneira segura.")
    alert("Um grande rio, que, apesar de calmo, precisa de atenção para que possa ser atravessado de maneira segura.")
    menu()
    escolha("Seguir as instruções.", "Tentar sozinho.")

        if(opcao == 1) {
        console.log("Ao seguir as instruções corretamente, você faz toda a viagem de maneira segura, e a acaba rapidamente.")
        alert("Ao seguir as instruções corretamente, você faz toda a viagem de maneira segura, e a acaba rapidamente.")
        fase++
        }

            else if(opcao == 2) {
            console.log("Ao tentar sozinho, você consegue completar o percurso, porém enfrenta dificuldades. Mas isso foi bom, pois agora, você aprimorou muito mais suas habilidades de canoagem do que teria se seguisse as instruções normalmente.")
            alert("Ao tentar sozinho, você consegue completar o percurso, porém enfrenta dificuldades. Mas isso foi bom, pois agora, você aprimorou muito mais suas habilidades de canoagem do que teria se seguisse as instruções normalmente.")
            fase++
            inventario[1] = "Determinação"
            }
}

while(fase === 5) {
    descrição[5] = "Uma rua mal movimentada, com poucas pessoas fora a essa hora. O sol já está se pondo."

    console.log("Após o término da sua primeira aula, você volta pra casa a pé. Mas, no caminho, é abordado por 2 homens. \nHomem 1: Tu que é o Saied? Fala pro teu pai pra pagar logo. Senão ó, tu some. \nVocê percebe que eles estão falando sério, e estão até armados e corre pra casa.")
    alert("Após o término da sua primeira aula, você volta pra casa a pé. Mas, no caminho, é abordado por 2 homens. \nHomem 1: Tu que é o Saied? Fala pro teu pai pra pagar logo. Senão ó, tu some. \nVocê percebe que eles estão falando sério, e estão até armados e corre pra casa.")
    menu()
    escolha("Contar a seu pai.", "Chorar.")

        if(opcao == 1) {
        console.log("Seu pai fica muito preocupado, mas fica sério. Ele organiza malas para você e sua mãe e os leva até o aeroporto. Seus amigos e treinador, vão com você. Seu não falou nada. Você nunca mais viu seu pai")
        alert("Seu pai fica muito preocupado, mas fica sério. Ele organiza malas para você e sua mãe e os leva até o aeroporto. Seus amigos e treinador, vão com você. Seu não falou nada. Você nunca mais viu seu pai")
        fase++
        inventario[2] = "Nostalgia."
        }

            else if(opcao == 2) {
            console.log("Mesmo chorando, seu pai entende você balbuciando algumas palavras. Ele o que você quer dizer, e te leva até seu treinador e amigos, que, juntos de sua mãe, vão para a Alemanha.")
            alert("Mesmo chorando, seu pai entende você balbuciando algumas palavras. Ele o que você quer dizer, e te leva até seu treinador e amigos, que, juntos de sua mãe, vão para a Alemanha.")
            fase++
            }
}

while(fase === 6) {
    descrição[6] = "Um confortável bairro, onde você passou os últimos 6 anos, depois de fugir do Irã."

    console.log("Com ajuda do seu treinador e seus colegas, você e sua mãe consiguiram se sustentar. Você participou de alguns torneios, o que lhe rendeu um dinheiro extra, para o aluguel. Mas o principal, você foi convocado para participar das olimpíadas de 2020, em Tóquio.")
    alert("Com ajuda do seu treinador e seus colegas, você e sua mãe consiguiram se sustentar. Você participou de alguns torneios, o que lhe rendeu um dinheiro extra, para o aluguel. Mas o principal, você foi convocado para participar das olimpíadas de 2020, em Tóquio.")
    menu()
    escolha("Ir.", "Ficar.")

        if(opcao == 1) {
        console.log("Você vai para as olimpíadas, o seu sonho. Você estava muito animado e deu tudo de si. Foi muito divertido, e você até que foi bem, terminando em nono lugar na principal prova de canoagem. Mas, você decidiu que na próxima, iria melhor.")
        alert("Você vai para as olimpíadas, o seu sonho. Você estava muito animado e deu tudo de si. Foi muito divertido, e você até que foi bem, terminando em nono lugar na principal prova de canoagem. Mas, você decidiu que na próxima, iria melhor.")
        fase++
        }

            else if(opcao == 2) {
            console.log("Você não vai, tinha receio de ir mal, e isso te impediu de tomar coragem o suficiente para isso.")
            alert("Você não vai, tinha receio de ir mal, e isso te impediu de tomar coragem o suficiente para isso.")
            vida-=3
            }
}

console.log("Finalmente, depois de muitos anos de espera, você realiza seu sonho, e vai para as olimpíadas. Mesmo que já tenho ido outra vez, dessa vez é diferente. Você se sente ,ais determinado, e focado. Você está pronto pra tudo. Está mirando alto, no ouro. Ele é uma possibilidade, e se depender de você, uma futura realidade.")
alert("Finalmente, depois de muitos anos de espera, você realiza seu sonho, e vai para as olimpíadas. Mesmo que já tenho ido outra vez, dessa vez é diferente. Você se sente ,ais determinado, e focado. Você está pronto pra tudo. Está mirando alto, no ouro. Ele é uma possibilidade, e se depender de você, uma futura realidade.")