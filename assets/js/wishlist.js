const qutu = document.getElementById('card')

function getProducts(){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    qutu.innerHTML =""

    wishlist.map((item, index) => {
        const box = document.createElement('div')
        box.className = "cardList"
        box.innerHTML =`
        <img src="${item.image}" alt="photo">
        <h1>${item.price} <i class="fa-solid fa-manat-sign"></i> <i class="fa-solid fa-heart" style="color: red;"></i></h1>
        <p>${item.title}</p>
        <button onclick="removeItemWishlist(${index})">urunu kaldir</button>
        `
        qutu.appendChild(box)
    });
}

function removeItemWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index,  1);
    localStorage.setItem('wishlist',JSON.stringify(wishlist));
    getProducts()
}
getProducts()