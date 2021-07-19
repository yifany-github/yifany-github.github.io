function updateCatalogModel(){

    var skin =document.getElementById("skin/case");
    var index1 = skin.value
    var brand =document.getElementById("brand");
    var index2= brand.value;
    var str1;
    var str2;
    if(index1 == 1){
        str1 = "skin";
    }else if (index1 == 2){
        str1 = "case";
    }else{
        str1 = "all";
    }
    if(index2 == 1){
        str2 = "Apple";
    }else if (index2 == 2){
        str2 = "Samsung";
    }else if (index2 == 3){
        str2 = "Sony";
    }else if (index2 == 4){
        str2 = "Microsoft";
    }else if (index2 == 5){
        str2 = "all";
    }
    updateCatalog(str1,str2)
}
function updateCatalog(str1,str2){

    var list = document.getElementById("catalog");
    if(str1 == "all" && str2 == "Apple"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Apple items"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Apple"){
                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if(str1 == "all" && str2 == "Samsung"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Samsung items"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Samsung"){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if(str1 == "skin" && str2 == "Samsung"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Samsung skins"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Samsung" && products[i].skin== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }
    else if(str1 == "case" && str2 == "Samsung"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Samsung cases"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Samsung" && products[i].case== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if(str1 == "case" && str2 == "Apple"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Apple cases"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Apple" && products[i].case== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if(str1 == "skin" && str2 == "Apple"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Apple skins"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Apple" && products[i].skin== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if(str1 == "all" && str2 == "all"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all items"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
                str3= str3 +listCreat(products[i].name,products[i].price);
        }
        list.innerHTML= str3;
    }else if(str1 == "skin" && str2 == "all"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all skins"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].skin== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    } else if(str1 == "case" && str2 == "all"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all cases"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].case== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    } else if(str1 == "skin" && str2 == "Sony"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Sony skin"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Sony" && products[i].skin== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if(str1 == "skin" && str2 == "Microsoft"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Microsoft skin"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Microsoft" && products[i].skin== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if(str1 == "case" && str2 == "Sony"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Sony case"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Sony" && products[i].case== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if(str1 == "case" && str2 == "Microsoft"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Microsoft case"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Microsoft" && products[i].case== true){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }
    else if(str1 == "all" && str2 == "Sony"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Snoy"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Sony"){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }
    else if(str1 == "all" && str2 == "Microsoft"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all Microsoft"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "Microsoft"){

                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }
}



function listCreat(name,price){
    var str="<div class=\"col m3\">\n" +
        "            <div class=\"card\">\n" +
        "                <div class=\"card\">\n" +
        "                    <div class=\"card-image\">\n" +
        "                        <img src=\"images/"+name+".png\" height=\"300\">\n" +
        "                        <span class=\"card-title red\">$"+price+"</span>\n" +
        "                        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\" id=\""+name+"\"onclick=\"addToCart(this.id)\">add</i></a>\n" +
        "                    </div>\n" +
        "                    <div class=\"card-content\">\n" +
        "                        <p>"+name+"</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>";

    return str;
}
function setList(str){
    var list = document.getElementById("catalog");
    if(str == "special"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all specials"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].brand == "special"){
                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if(str == "skin"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all skins"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].skin==true){
                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }else if (str == "case"){
        var show=document.getElementById("show");
        show.innerHTML="<h2>"+"Showing all cases"+"</h2>";
        var str3="";
        for (let i = 0; i < products.length; i++) {
            if(products[i].case == true){
                str3= str3 +listCreat(products[i].name,products[i].price);
            }
        }
        list.innerHTML= str3;
    }
}

var products = [
    {
        name: "iPhone-12-Skin-1",
        skin: true,
        case: false,
        brand: "Apple",
        model: "iPhone 12",
        price: 12.00
    },
    {
        name: "iPhone-12-Skin-2",
        skin: true,
        case: false,
        brand: "Apple",
        model: "iPhone 12",
        price: 13.00
    },
    {
        name: "iPhone-12-Skin-3",
        skin: true,
        case: false,
        brand: "Apple",
        model: "iPhone 12",
        price: 14.00
    },
    {
        name: "iPhone-12-Skin-4",
        skin: true,
        case: false,
        brand: "Apple",
        model: "iPhone 12",
        price: 12.00
    },
    {
        name: "iPhone-12-Skin-5",
        skin: true,
        case: false,
        brand: "Apple",
        model: "iPhone 12",
        price: 12.00
    },
    {
        name: "iPhone-12-Skin-6",
        skin: true,
        case: false,
        brand: "Apple",
        model: "iPhone 12",
        price: 13.00
    },
    {
        name: "iPhone-12-Case-1",
        skin: false,
        case: true,
        brand: "Apple",
        model: "iPhone 12",
        price: 15.00
    },
    {
        name: "iPhone-12-Case-2",
        skin: false,
        case: true,
        brand: "Apple",
        model: "iPhone 12",
        price: 11.00
    },
    {
        name: "iPhone-12-Case-3",
        skin: false,
        case: true,
        brand: "Apple",
        model: "iPhone 12",
        price: 12.00
    },
    {
        name: "Samsung-S21-Skin-1",
        skin: true,
        case: false,
        brand: "Samsung",
        model: "S21",
        price: 13.00
    },
    {
        name: "Samsung-S21-Skin-2",
        skin: true,
        case: false,
        brand: "Samsung",
        model: "S21",
        price: 12.00
    },
    {
        name: "Samsung-S21-Skin-3",
        skin: true,
        case: false,
        brand: "Samsung",
        model: "S21",
        price: 12.00
    },
    {
        name: "Samsung-S21-Skin-4",
        skin: true,
        case: false,
        brand: "Samsung",
        model: "S21",
        price: 14.00
    },
    {
        name: "Samsung-S21-Skin-5",
        skin: true,
        case: false,
        brand: "Samsung",
        model: "S21",
        price: 21.00
    },
    {
        name: "Samsung-S21-Skin-6",
        skin: true,
        case: false,
        brand: "Samsung",
        model: "S21",
        price: 12.00
    },

    {
        name: "Samsung-S21-Case-1",
        skin: false,
        case: true,
        brand: "Samsung",
        model: "S21",
        price: 15.00
    },
    {
        name: "Samsung-S21-Case-2",
        skin: false,
        case: true,
        brand: "Samsung",
        model: "S21",
        price: 15.00
    },
    {
        name: "Sony-PS5-Case-1",
        skin: false,
        case: true,
        brand: "Sony",
        model: "PS5",
        price: 59.00
    },
    {
        name: "Sony-PS5-Skin-1",
        skin: true,
        case: false,
        brand: "Sony",
        model: "PS5",
        price: 59.00
    },
    {
        name: "Microsoft-XBOX-Skin-1",
        skin: true,
        case: false,
        brand: "Microsoft",
        model: "XBOX",
        price: 59.00
    },
    {
        name: "Microsoft-XBOX-Case-1",
        skin: false,
        case: true,
        brand: "Microsoft",
        model: "XBOX",
        price: 59.00
    },
    {
        name: "Special-1",
        skin: false,
        case: false,
        brand: "special",
        model: "",
        price: 30.00
    },
    {
        name: "Special-2",
        skin: false,
        case: false,
        brand: "special",
        model: "",
        price: 30.00
    },
    {
        name: "Special-3",
        skin: false,
        case: false,
        brand: "special",
        model: "",
        price: 30.00
    },
    {
        name: "Special-4",
        skin: false,
        case: false,
        brand: "special",
        model: "",
        price: 30.00
    },
    {
        name: "redIcons",
        skin: false,
        case: false,
        brand: "sale",
        model: "",
        price: 9.00
    },

    {
        name: "blackIcons",
        skin: false,
        case: false,
        brand: "sale",
        model: "",
        price: 9.00
    },

    {
        name: "robot",
        skin: false,
        case: false,
        brand: "sale",
        model: "",
        price: 23.00
    },

    {
        name: "12Special",
        skin: false,
        case: false,
        brand: "sale",
        model: "",
        price:17.00
    }
    ,

    {
        name: "cSkin",
        skin: false,
        case: false,
        brand: "sale",
        model: "",
        price:29.00
    }
    ,

    {
        name: "cCase",
        skin: false,
        case: false,
        brand: "sale",
        model: "",
        price:32.00
    }


];

var cartList=[];
function addToCart(str){

    for (let i = 0; i < products.length; i++) {
        if(products[i].name==str){
            cartList.push(products[i]);
        }
    }

    document.getElementById('tableProducts').innerHTML= creatList();
    total();
}
function creatList(){
    var str="";
    for (let i = 0; i < cartList.length; i++) {
        str= str +"<tr><th>" +
            i+"</th>" +
            "</th><td><button class=\"waves-effect waves-light btn red darken-4\" id=\""+"R"+cartList[i].name+"\" onclick=\"remove(this.id)\">X</button></td>" +
            "<td><img style=\"width: 5rem; height: 5rem;\" src=\"images/"+cartList[i].name+".png\"></td>" +
            "<td>"+cartList[i].name+"</td>" +
            "<td>$"+cartList[i].price+"</td></tr>"
    }

    return str;
}
function remove(str){
var temp=[];

    for (let i = 0; i < cartList.length; i++) {
        var name="R"+cartList[i].name;

        if (name != str){
            temp.push(cartList[i]);
        }else{
            for (let j = i+1; j < cartList.length; j++) {
                temp.push(cartList[j]);
                i=cartList.length-1;
            }
        }
    }
    cartList=temp;
    addToCart("");


}
function total() {
   var total=0;
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;

    }
    document.getElementById('total').innerHTML="<tr>\n    <th ></th>\n    <td></td>\n    <td></td>\n    <td></td>\n    \n    <td>\n       <h5>Total:</h5>\n    </td>\n    <td >\n $"+total+"\n    </td>\n    </tr>\n    <tr>\n    <th ></th>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td>\n    \n    </td>\n    </tr>"
}
function clean() {
    cartList=[];
}