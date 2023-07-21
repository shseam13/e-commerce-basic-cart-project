products = ['Gamepad (6000 Tk)', 'Keyboard (5000 Tk)', 'Mouse (1300 Tk)', 'Speaker (8000 Tk)', 'Console (70,000 Tk)', 'PS5 (1,50,000 Tk)', 'RGB Light (1200 Tk)', 'Headphones (15,000 Tk)', 'Ring Light (900 Tk)', 'Camera (1,57,000 Tk)', 'USB Cable (1000 Tk)', 'Doll (3000 Tk)', 'Notepad (200 Tk)', 'Glass (700 Tk)', 'Tripod (3500 Tk)', 'Pen (30 Tk)', 'Pencil (12 Tk)', 'Hat (400 Tk)', 'Helmet (25,000 Tk)', 'Shoes (8000 Tk)']

// collects random values between 1->10
const rndInt = Math.floor(Math.random() * products.length) + 1

// 

// define UI elements
let product_list = document.querySelector('#item_order_list');
let cart_item_list = document.querySelector('#cart_item_ol');
let delete_all_btn = document.querySelector('#delete_all');
let product_filter = document.querySelector('#filter_product');
let cart_item_filter = document.querySelector('#filter_cart');
// define event listener
delete_all_btn.addEventListener('click', clearAllItem);
product_filter.addEventListener('keyup', filterProduct);
cart_item_filter.addEventListener('keyup', filterCartItems);

// loop through products and add them to UI
function ProductsUI() {
    for (i = 0; i <= rndInt || i <= 6; i++) {
        let div = document.createElement('div');
        let li = document.createElement('li');
        let p = document.createElement('p');
        let div_crt_btn = document.createElement('div');
        let add_crt_btn = document.createElement('button');
        div.className = 'shadow-sm p-3 ps-5 mb-3 bg-body-tertiary rounded';
        div_crt_btn.className = 'd-grid gap-2 d-md-flex justify-content-md-end';
        add_crt_btn.className = 'btn btn-primary';
        add_crt_btn.setAttribute('onclick', 'addToCart(event)')
        add_crt_btn.appendChild(document.createTextNode('Add to cart'))
        div_crt_btn.appendChild(add_crt_btn);
        p.appendChild(document.createTextNode(`${products[i]}`)); // product from products array
        li.appendChild(p);
        li.appendChild(div_crt_btn);
        div.appendChild(li);
        product_list.appendChild(div);
    }
}

ProductsUI();




function addToCart(e) {
    let div = document.createElement('div');
        let li = document.createElement('li');
        let p = document.createElement('p');
        let div_crt_btn = document.createElement('div');
        let add_crt_btn = document.createElement('button');
        div.className = 'c shadow-sm p-3 ps-5 mb-3 bg-body-tertiary rounded';
        div_crt_btn.className = 'd-grid gap-2 d-md-flex justify-content-md-end';
        add_crt_btn.className = 'btn btn-danger';
        add_crt_btn.setAttribute('onclick', 'removeItem(event)')
        li.setAttribute('href', '#');
        add_crt_btn.appendChild(document.createTextNode('Remove'))
        div_crt_btn.appendChild(add_crt_btn);
        p.appendChild(document.createTextNode(`${e.target.parentElement.previousElementSibling.innerHTML}`)); // product from products array
        li.appendChild(p);
        li.appendChild(div_crt_btn);
        div.appendChild(li);
        cart_item_list.appendChild(div);

    // console.log(e.target.parentElement.previousElementSibling.innerHTML)
}

function removeItem(e){
    let cart_remove_item = e.target.parentElement.parentElement.parentElement;
    cart_remove_item.remove()
}

function clearAllItem(e){
    if(confirm("Clear All Items?")){
        cart_item_list.innerHTML = ''
    }

}

function filterProduct(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(item =>{
        let task = item.firstChild.textContent;
        if(task.toLowerCase().indexOf(text)!= -1 && !item.hasAttribute('href')){
            item.parentElement.style.display = 'block';
        }else if(!item.hasAttribute('href')){
            item.parentElement.style.display = 'none';
        }
    });
}


function filterCartItems(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(item =>{
        let task = item.firstChild.textContent;
        if(task.toLowerCase().indexOf(text)!= -1 && item.hasAttribute('href')){
            item.parentElement.style.display = 'block';
        }else if(item.hasAttribute('href')){
            item.parentElement.style.display = 'none';
        }
    });
}