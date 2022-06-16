let container = document.getElementsByClassName("container")[0]

let products = [
    {
        title: "с фуа-гра",
        prize: '10 порций <br> мышь в подарок',
        flavor: "Печень утки разварная с артишоками.",
        weight: 0.5,
        isActive: true,
        isChosen: false
    },
    {
        title: "с рыбой",
        prize: '40 порций <br> 2 мыши в подарок',
        flavor: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        weight: 2,
        isActive: true,
        isChosen: false
    },
    {
        title: "с курой",
        prize: '100 порций <br> 5 мышей в подарок <br> заказчик доволен',
        flavor: "Филе из цыплят с трюфелями в бульоне.",
        weight: 5,
        isActive: false,
        isChosen: false
    }
]

for(let i = 0; i < products.length; i++){
    container.innerHTML += `
    <div class="prod_container">
            <div class="product_border">
                <div class="product">
                    <div class="discription">
                        <p class="motto">Сказочное заморское яство</p>
                        <h1 class="title">Нямушка</h1>
                        <p class="flavor_text">${products[i].title}</p>
                        <p class="prize_text">${products[i].prize}</p>
                    </div>
                    <div class="cat_img">
                        <div class="kg_block">
                            <h1>${products[i].weight}</h1>
                            <p>кг</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="buy">
                <span class="buy_text">Чего сидишь? Порадуй котэ, </span> <span class="buy_link">купи.</span>
            </div>
        </div>
`
}

let prodConts = document.getElementsByClassName("product_border")
let buyButton = document.getElementsByClassName("buy_link")
let kgBlock = document.getElementsByClassName("kg_block")

function setChosen (i) {
    prodConts[i].style.background = `linear-gradient(135deg, transparent 35px, #D91667 0)`;
    kgBlock[i].style.backgroundColor = "#D91667";
    console.log(i);
    products[i].isChosen = !products[i].isChosen
    document.getElementsByClassName("buy")[i].innerHTML = `<span class="buy_text">${products[i].flavor}</span>`;
}

function setDischosen (i) {
    prodConts[i].style.background = `linear-gradient(135deg, transparent 35px, #1698d9 0)`;
    kgBlock[i].style.backgroundColor = "#1698d9";
    console.log(i);
    products[i].isChosen = !products[i].isChosen
    document.getElementsByClassName("buy")[i].innerHTML = `<span class="buy_text">Чего сидишь? Порадуй котэ, </span> <span class="buy_link">купи.</span>`;
    buyButton = document.getElementsByClassName("buy_link")
}

function setOff (i) {
    prodConts[i].style.background = `linear-gradient(135deg, transparent 35px, #B3B3B3 0)`;
    kgBlock[i].style.backgroundColor = "#B3B3B3";
    console.log(i);
    document.getElementsByClassName("buy")[i].innerHTML = `<span class="buy_text" style="color: #FFFF66">Печалька, ${products[i].title} закончился.</span>`;
    document.getElementsByClassName("product_border")[i].innerHTML += `<div class="overflow"><div>`;
}

function hover (i){
    if(products[i].isChosen){
        prodConts[i].style.background = `linear-gradient(135deg, transparent 35px, #E52E7A 0)`;
        kgBlock[i].style.backgroundColor = "#E52E7A";
    }
    else{
        prodConts[i].style.background = `linear-gradient(135deg, transparent 35px, #2EA8E6 0)`;
        kgBlock[i].style.backgroundColor = "#2EA8E6";
    }
}

for(let i = 0; i < prodConts.length; i++){
    if(products[i].isActive){   
        prodConts[i].addEventListener("click", () => products[i].isChosen ? setDischosen(i) : setChosen(i))
        prodConts[i].addEventListener("mouseout", () => hover(i))
        buyButton[i].addEventListener("click", () => products[i].isChosen ? setDischosen(i) : setChosen(i))
    }
    else{
        setOff(i)
    }
}



