const qutu = document.getElementById('card')

let limit = 4;
let page = 1;

async function getProducts(){
    const response = await axios.get(`https://65685e799927836bd974a707.mockapi.io/products?limit=${limit}&page=${page}`)
    const data = await response.data
    db=data

    db.map(item =>{
        const box =document.createElement('div')
        box.className = "cardList"
        box.innerHTML =`
        <img src="${item.image}" alt="photo">
        <h1>${item.price} <i class="fa-solid fa-manat-sign"></i> </h1>
        <p>${item.title}</p>
        <div class = "btnnnn">
            <button class="cardBtn" onclick="addToCard(${item.id})">sepete ekle</button>
            <button class ="wishlistBtn" onclick="addToWishlist(${item.id})">wishliste ekle</button>
        </div>
        
        `
        qutu.appendChild(box)
    })
    page++
}
document.getElementById("load").addEventListener('click', getProducts)

function addToCard(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}
function addToWishlist(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.push(db.find(item => item.id == id))
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

getProducts()




const inp = document.getElementById('inp')
const btn = document.getElementById('searchBtn')
const searchDiv = document.getElementById('card')


function getSearch(){
    searchDiv.innerHTML = ""
    axios.get("https://65685e799927836bd974a707.mockapi.io/products")
    .then(response => {
        db = response.data
        const filterData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item => {
            const box = document.createElement('div')
            box.className = "cardList"
            box.innerHTML = `
            <img src="${item.image}" alt="photo">
            <h1>${item.title}</h1>
            <p>$ ${item.price}</p>
                `
                searchDiv.appendChild(box)
        })
    })
}
btn.addEventListener('click',getSearch)


const form = document.getElementById('form')
const passwordd = document.getElementById('password')
const emaill = document.getElementById('email')
const namee = document.getElementById('name')

form.addEventListener('submit', function(event){
    event.preventDefault()


    axios.post(`https://65685e799927836bd974a707.mockapi.io/form`, {
        email:emaill.value,
        password:passwordd.value,
        name:namee.value
    })
    .then(res => {
        console.log(res.data);
    })
})
