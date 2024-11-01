
var productscontainer = [];
var currentIndex = null;

if (localStorage.getItem('products') != null)
{
    productscontainer = JSON.parse(
        localStorage.getItem('products')
    )

    displayProduct();

};

var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDescription');


function addProduct()
{
    var product = {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value,
    }
    
    if (document.getElementById("mainBtn").innerHTML === 'add product') {
        
        productscontainer.push(product);

       
    }
    else
    {
        productscontainer[currentIndex] = product;
        document.getElementById("mainBtn").innerHTML = 'add product'
        currentIndex = null;
    }

    localStorage.setItem('products' , JSON.stringify(productscontainer));

    clearForm();
    displayProduct();

};

function clearForm() {
    productNameInput.value = ""
    productPriceInput.value = ""
    productCategoryInput.value = ""
    productDescInput.value = ""
   
};


function displayProduct()
{

    var tableBody = ``

for (i=0 ; i<productscontainer.length ; i++)
{

    tableBody += `
    <tr>
                <td>${i}</td>
                <td>${productscontainer[i].name}</td>
                <td>${productscontainer[i].price}</td>
                <td>${productscontainer[i].category}</td>
                <td>${productscontainer[i].desc}</td>
                <td><button  onclick='updateProduct(${i})' class="btn btn-outline-warning">update</button></td>
                <td><button  onclick='deleteProduct(${i})' class="btn btn-outline-danger">delete</button></td>


    </tr>
    
    `
}

document.getElementById('tableInfo').innerHTML = tableBody;

};

function deleteProduct(index) {
    productscontainer.splice(index,1);

    localStorage.setItem('products' , JSON.stringify(productscontainer))

    displayProduct();


};
    
function searchProduct(term) {
    
     var tableBody = ``

     for(i=0; i<productscontainer.length; i++)
     {
        if (productscontainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            
            
    tableBody += `
    <tr>
                <td>${i}</td>
                <td>${productscontainer[i].name}</td>
                <td>${productscontainer[i].price}</td>
                <td>${productscontainer[i].category}</td>
                <td>${productscontainer[i].desc}</td>
                <td><button  onclick='updateProduct(${i})' class="btn btn-outline-warning">update</button></td>
                <td><button  onclick='deleteProduct(${i})' class="btn btn-outline-danger">delete</button></td>


    </tr>
    
    `
        }
     }

     document.getElementById('tableInfo').innerHTML = tableBody;
};



function updateProduct(index) 
{
   productNameInput.value = productscontainer[index].name;
   productPriceInput.value = productscontainer[index].price;
   productCategoryInput.value = productscontainer[index].category;
   productDescInput.value = productscontainer[index].desc;
   document.getElementById('mainBtn').innerHTML = "update";
   currentIndex = index;
   
};



