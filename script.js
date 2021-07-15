'use strict';

/*const goods = [
    {title: 'Shirt', description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', photo: "box-1.png", button: 'Add to card'},
    {title: 'Shirt', description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', photo: "box-2.png", button: 'Add to card'},
    {title: 'Shirt', description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', photo: "box-3.png", button: 'Add to card'},
    {title: 'Shirt', description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', photo: "box-4.png", button: 'Add to card'},
    {title: 'Shirt', description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', photo: "box-5.png", button: 'Add to card'},
    {title: 'Shirt', description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", price: '$52.00', photo: "box-6.png", button: 'Add to card'},
    
];

const $goodsList = document.querySelector(".products__info");

const renderGoodsItem = ({title,description,price,photo,button}) => {
    return `
    <div class="products__info">
    <div class="products__box box">
        <div class="product__item">
            <img src = img/${photo} alt="${title}" class="products__img">
            <div class="bascet__buttons">
                <a href="product.html" class="button-cleek">${button}</a>
            </div>
        </div>
        <h4 class="box__header">${title}</h4>
        <p class="box__text">${description}</p>
        <p class="box__price">${price}</p>
    </div>`;
};
const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
        ). join('');

    $goodsList.insertAdjacentHTML('beforeend',goodsList);
}
renderGoodsList();*/

class GoodsItem {
    constructor (title,description,price,photo,button) {
        this._title = title;
        this._description = description;
        this._price = price;
        this._photo = photo;
        this._button = button;
    }
    getPrice() {
        return this._price;
    }
    render() {
        return `
    <div class="products__info">
    <div class="products__box box">
        <div class="product__item">
            <img src = img/${this._photo} alt="${this._title}" class="products__img">
            <div class="bascet__buttons">
                <a href="product.html" class="button-cleek">${this._button}</a>
            </div>
        </div>
        <h4 class="box__header">${this._title}</h4>
        <p class="box__text">${this._description}</p>
        <p class="box__price">${this._price}</p>
    </div>`;
    };
}
class goodInCart extends GoodsItem {
    constructor (title,description,price,photo,collor,size,quantity = 1) {
        super(title,description,price,photo);
        this._collor = collor;
        this._size = size;
        this._quantity = quantity;
    }
    getPrice() {
        return this._price * this.quantity; 
    }
    render() {
        return`
        <div class="selection_cart">
                <div class="photo_cart"><img src= img/${this._photo} alt="${this._title}"></div>
                <div class="shopping_cart">
                    <div class="shopping_cart-text">
                        <span class="heading_cart">MANGO PEOPLE <br>${this._title}</span>
                        <button type="button" class="btn-close" aria-label="Close"></button>
                    </div>
                    <ul class="text_cart">
                        <li class="parameters_product">Price: <span class="parametrs_product_price">${this._price}</span></li>
                        <li class="parameters_product">Color: ${this._collor}</li>
                        <li class="parameters_product">Size: ${this._size}</li>
                        <li class="parameters_product">Quantity: <input class="counter_product" type="number"
                                placeholder="${this._quantity}"> </li>
                    </ul>
                </div>
            </div>`
    }
}


class GoodList {
    constructor (goods, container) {
        this._goods = goods;
        this._$goodsListContainer = container;

    }


    renderGoodsList() {
    let goodsList = this._goods.map(
        item => item.render()
        ).join('');
    this._$goodsListContainer.insertAdjacentHTML('beforeend',goodsList); 
    }
}
const list = new GoodList([
    new GoodsItem('Shirt', "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", '$52.00', "box-1.png", 'Add to card'),
    new GoodsItem('Shirt', "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", '$52.00', "box-2.png", 'Add to card'),
    new GoodsItem('Shirt', "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", '$52.00', "box-3.png", 'Add to card'),
    new GoodsItem('Shirt', "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", '$52.00', "box-4.png", 'Add to card'),
    new GoodsItem('Shirt', "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", '$52.00', "box-5.png", 'Add to card'),
    new GoodsItem('Shirt', "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", '$52.00', "box-6.png", 'Add to card') 
],document.querySelector(".products__info"))
const cartOfGoods = new GoodList([
    new goodInCart('Shirt', "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", '$52.00', "box-1.png","red", "Xl"),
    new goodInCart('Shirt', "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.", '$52.00', "box-1.png","red", "Xl"),
], document.querySelector(".selection_cart"))
list.renderGoodsList();