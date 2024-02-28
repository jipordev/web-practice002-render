import { userCard } from "../components/userCard.js";
import { productCard } from "../components/productCard.js";
import { data } from "../fetch/fetchData.js";

let renderProduct = document.getElementById('product-renderArea');
let renderUser = document.getElementById('user-renderArea');

let proData = await data('product')
let proUser = await data('user')

proData.map(product => {
    renderProduct.innerHTML += productCard(product);
})
proUser.map(user => {
    renderUser.innerHTML += userCard(user);
})

