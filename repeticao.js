const personagens = [
    {
        nome: "Steve Rogers",
        nomeHeroi: "Capitão América",
        arma1: "Escudo Emblemático",
        arma2: "",
        velocidade: "70",
        forca: "70",
        resistencia: "60",
        descricao: function(){
            return  "\n" +
                    "Nome do Personagem: " + this.nome + "\n" +
                    "Nome de Herói: " + this.nomeHeroi + "\n" + 
                    "Arma Principal: " + this.arma1 + "\n" + 
                    "Nome Secundária: " + this.arma2 + "\n" + 
                    "Velocidade: " + this.velocidade + "\n" + 
                    "Força: " + this.forca + "\n" + 
                    "Resistência: " + this.resistencia + "\n" +
                      "\n"
        }
    },
    
    {
        nome: "Tony Stark",
        nomeHeroi: "Homem de Ferro",
        arma1: "Armadura Stark",
        arma2: "Dinheiro",
        velocidade: "75",
        forca: "80",
        resistencia: "55",
        descricao: function(){
            return  "\n" +
                    "Nome do Personagem: " + this.nome + "\n" +
                    "Nome de Herói: " + this.nomeHeroi + "\n" + 
                    "Arma Principal: " + this.arma1 + "\n" + 
                    "Nome Secundária: " + this.arma2 + "\n" + 
                    "Velocidade: " + this.velocidade + "\n" + 
                    "Força: " + this.forca + "\n" + 
                    "Resistência: " + this.resistencia + "\n" +
                      "\n"
        }
    },
    
    {
        nome: "Peter Parker",
        nomeHeroi: "Homem Aranha",
        arma1: "Disparador de Teia",
        arma2: "Sentindo Aranha",
        velocidade: "80",
        forca: "55",
        resistencia: "65",
        descricao: function(){
            return  "\n" +
                    "Nome do Personagem: " + this.nome + "\n" +
                    "Nome de Herói: " + this.nomeHeroi + "\n" + 
                    "Arma Principal: " + this.arma1 + "\n" + 
                    "Nome Secundária: " + this.arma2 + "\n" + 
                    "Velocidade: " + this.velocidade + "\n" + 
                    "Força: " + this.forca + "\n" + 
                    "Resistência: " + this.resistencia + "\n" +
                      "\n"
        }
    },
    
    {
        nome: "Bruce Banner",
        nomeHeroi: "Hulk",
        arma1: "Raiva",
        arma2: "",
        velocidade: "50",
        forca: "95",
        resistencia: "85",
        descricao: function(){
            return  "\n" +
                    "Nome do Personagem: " + this.nome + "\n" +
                    "Nome de Herói: " + this.nomeHeroi + "\n" + 
                    "Arma Principal: " + this.arma1 + "\n" + 
                    "Nome Secundária: " + this.arma2 + "\n" + 
                    "Velocidade: " + this.velocidade + "\n" + 
                    "Força: " + this.forca + "\n" + 
                    "Resistência: " + this.resistencia + "\n" +
                      "\n"
        }
    },
    
    {
        nome: "Peter Quill",
        nomeHeroi: "Senhor das Estrelas",
        arma1: "Arminha Futurista",
        arma2: "",
        velocidade: "65",
        forca: "65",
        resistencia: "70",
        descricao: function(){
            return  "\n" +
                    "Nome do Personagem: " + this.nome + "\n" +
                    "Nome de Herói: " + this.nomeHeroi + "\n" + 
                    "Arma Principal: " + this.arma1 + "\n" + 
                    "Nome Secundária: " + this.arma2 + "\n" + 
                    "Velocidade: " + this.velocidade + "\n" + 
                    "Força: " + this.forca + "\n" + 
                    "Resistência: " + this.resistencia + "\n" +
                      "\n"
        }
    },
    
    {
        nome: "Thanos",
        nomeHeroi: "Thanos",
        arma1: "Manopla do Infinito",
        arma2: "Sabre",
        velocidade: "45",
        forca: "85",
        resistencia: "95",
        descricao: function(){
            return  "\n" +
                    "Nome do Personagem: " + this.nome + "\n" +
                    "Arma Principal: " + this.arma1 + "\n" + 
                    "Nome Secundária: " + this.arma2 + "\n" + 
                    "Velocidade: " + this.velocidade + "\n" + 
                    "Força: " + this.forca + "\n" + 
                    "Resistência: " + this.resistencia + "\n" +
                      "\n"
        }
    }
]

var maiorVel = 0
var maiorFor = 0
var maiorRes = 0
var maiorMed = 0

var maisVel = ""
var maisFor = ""
var maisRes = ""
var maisMed = ""

personagens.forEach((persona) => {
    let vel = Number(persona.velocidade)
    let forc = Number(persona.forca)
    let res = Number(persona.resistencia)
    let media = (vel + forc + res) / 3

    if(vel > maiorVel){
        maiorVel = vel
        maisVel = persona.nomeHeroi
    }

    if(forc > maiorFor){
        maiorFor = forc 
        maisFor = persona.nomeHeroi
    }

    if(res > maiorRes){
        maiorRes = res
        maisRes = persona.nomeHeroi
    }

    if(media > maiorMed){
        maiorMed = media
        maisMed = persona.nomeHeroi
    }

    console.log(persona.descricao())
})

console.log("De acordo com meus cálculos...")
console.log(`O personagem mais Veloz é: ${maisVel}`)
console.log(`O personagem mais Forte é: ${maisFor}`)
console.log(`O personagem mais Resistente é: ${maisRes}`)
console.log(`E o personagem com a maior Média de atributos é: ${maisMed}`)