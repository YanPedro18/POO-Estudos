
// async function req() {

// const req = await fetch("./app.json")

// const jason = await req.json();



// }

// req()

// fetch("./app.json")
// .then((response) =>  response.json())
// .then((jaso) => {
//     let system = jaso;
//     alert(JSON.stringify(system));
// });



// const simpleFunc = async () => {
//     return 9999;
// };


//Filter

const precos = [
    "Credito",
    "R$200",
    "R$600",
    "Contas a Pagar",
    "R$200",
    "R$900",
    "Meu Dados"
];
       // console.log(preco.includes("R$"));                                    
const precoFiltro = precos.filter(preco => preco.includes("R$"));//retornando para função/variavel, que eu quero dentro do meu array apenas items que tenham R$

// document.querySelector(".container-flex").innerHTML += precoFiltro;
 // um novo array com apenas os valores R$



// 1*  //dessa forma passa o parametro ''var preco'' ela armazena o array, eu vejo todas as strings dentro do meu array

//2* //o incluide faz o filtro do filtro kkkkk preco.includes("algo especifico") retorna para voce aqueles valores especificos do array

//3*   //aqui estou falando, SE o meu var parametro ''preco''(meu array) tiver o R$200, ele vai me retorna true e mostrar os dados no console, senao retorna false

//4* //filtrei o array para me trazer somente os 200.

//---------------------------------------------------------------------------------------------------------------------------------
    //map cria uma array nova e mapea ele, conforme voce precisar, pode usar algo para substituir algo no array


const precoNun = precoFiltro.map(preco => +preco.replace("R$", ""));


//se eu tenho uma string que parece numero [e so colocar o '+'] atras da string que ele converterá para number
//replace serve para tirar algo 2*parametro serve para a substituição
console.log(precoNun);

//---------------------------------------------------------------------------------------------------------------------------------
//valor unico reduce                    //acumulador, item atual
const total = precoNun.reduce(function (anterior, atual) {
    console.log(anterior, atual)
    return anterior + atual; //reduce retorna numero unico, retorna a ultima interação dele(valor total)
})

console.log(total)


// 
// .then(response => response.json())
// .then(json => {
//     console.log(json[0].body[0].bodyjunin)    
// })

// let starWars = [];
// async function reqs() {
//     let req = await fetch('./app.json')
//     let res = await req.json();
//     starWars.push(res)
   
//     // for(let i in starWars[0]) {
//     // document.body.insertAdjacentHTML('beforeend', `olá ${starWars[i].title}`); 
//     // console.log(starWars[i])
//     // }

//     starWars.forEach(json => {
//         window.document.body.innerHTML += JSON.stringify(json[0].body)
//     })
//     // alert(res[0].body[0].bodyjunin)

// }


// reqs()

// const grupA = 200;
// const grupB = 500;

// const vencedor = grupA > grupB ? "grupo A ganhou" : "grupo B ganhooo!"; //condicional IF ternaria


// const grupAvenc = grupA > 50 && "Grupo A vencedor";

// const areaQuadrado = l => 1 * 2;

// console.log(areaQuadrado);


class Smoot {
    constructor(links) { //falando com o objeto
        this.linkElements = document.querySelectorAll(links);

        this.addClick();
    }

    handle(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        window.scrollTo({
            top: section.offsetTop - (window.innerHeight - section.clientHeight) /2,
            behavior: 'smooth'
        });
    }

    addClick() {
        this.linkElements.forEach(link => {
            link.addEventListener("click", this.handle);
        });
    }

}

class ActiveSmoot extends Smoot {
    constructor(links, sections) {
        super(links);

        this.sectEle = document.querySelectorAll(sections);
        this.handleScrol = this.handleScrol.bind
        this.activeNavScroll();
    }

    handleScrol() {
       
        this.sectEle.forEach(section => {
            console.log(section)
        });
    }
    activeNavScroll() {
        window.addEventListener('scroll', this.handleScrol)
    }

}

const scroll = new ActiveSmoot("a[href^='#']", "section");

