	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		nutFree: true,
		dairyFree: true,
		organic: true,
		vagetable: true,
		fruit: false,
		daily: false,
		price: 1.99
	},
	{
		name: "bread",
		nutFree: true,
		dairyFree: true,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: false,
		price: 2.35
	},
	{
		name: "salmon",
		nutFree: true,
		dairyFree: true,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: false,
		price: 10.00
	},
	{
		name: "pork",
		nutFree: true,
		dairyFree: true,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: false,
		price: 12.89
	},
	{
		name: "milk",
		nutFree: true,
		dairyFree: false,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: false,
		price: 8.99
	},
	{
		name: "icecream",
		nutFree: true,
		dairyFree: false,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: false,
		price: 3.59
	},
	{
		name: "coke",
		nutFree: true,
		dairyFree: true,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: false,
		price: 2.59
	},
	{
		name: "green onlion",
		nutFree: true,
		dairyFree: true,
		organic: true,
		vagetable: true,
		fruit: false,
		daily: false,
		price: 2.99
	},
	{
		name: "bean",
		nutFree: true,
		dairyFree: true,
		organic: false,
		vagetable: true,
		fruit: false,
		daily: false,
		price: 3.99
	},
	{
		name: "alond milk",
		nutFree: false,
		dairyFree: false,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: false,
		price: 7.99
	},
	{
		name: "pecan halves",
		nutFree: false,
		dairyFree: true,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: false,
		price: 3.00
	},

	{
		name: "apple",
		nutFree: true,
		dairyFree: true,
		organic: false,
		vagetable: false,
		fruit: true,
		daily: false,
		price: 5.00
	},

	{
		name: "banana",
		nutFree: true,
		dairyFree: true,
		organic: false,
		vagetable: false,
		fruit: true,
		daily: false,
		price: 2.00
	},

	{
		name: "watermelon",
		nutFree: true,
		dairyFree: true,
		organic: false,
		vagetable: false,
		fruit: true,
		daily: false,
		price: 26.00
	},

	{
		name: "toilet paper",
		nutFree: false,
		dairyFree: false,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: true,
		price: 100.00
	},
	{
		name: "sanitizer",
		nutFree: false,
		dairyFree: false,
		organic: false,
		vagetable: false,
		fruit: false,
		daily: true,
		price: 1000.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let product_price = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name+"---$"+prods[i].price);
			product_price.push(prods[i].price);
		}
		else if ((restriction == "DairyFree") && (prods[i].dairyFree == true)){
			product_names.push(prods[i].name+"---$"+prods[i].price);
			product_price.push(prods[i].price);
		}else if((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name+"---$"+prods[i].price);
			product_price.push(prods[i].price);
		}else if((restriction == "Vegetable") && (prods[i].vagetable == true)){
			product_names.push(prods[i].name+"---$"+prods[i].price);
			product_price.push(prods[i].price);
		}else if((restriction == "Fruit") && (prods[i].fruit == true)){
			product_names.push(prods[i].name+"---$"+prods[i].price);
			product_price.push(prods[i].price);
		}else if((restriction == "Daily") && (prods[i].daily == true)){
			product_names.push(prods[i].name+"---$"+prods[i].price);
			product_price.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name+"---$"+prods[i].price);
			product_price.push(prods[i].price);
		}
	}
	var sortedProducr = sortPrice(product_names,product_price);
	return sortedProducr;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}

function sortPrice(products, price){
	var aa=[];
	var bb=[];
	for(let i=0;i<price.length;i++){
		aa.push(price[i]);
	}
	aa.sort(function(a, b){return a - b});

	for(let j=0;j<price.length;j++){
		var a= price.indexOf(aa[j]);
		bb.push(products[a]);
	}
	return bb;
}