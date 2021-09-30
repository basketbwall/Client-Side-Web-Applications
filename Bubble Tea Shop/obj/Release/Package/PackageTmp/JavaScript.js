class Item {

    constructor(image, title, description, price) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    getImage() {
        return this.image;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getPrice() {
        return this.price;
    }
}
var teaArray = new Array(); //make arra of tea pictures to loop through
teaArray[0] = new Item("images/tea1.jpg", "MILK TEA", "Milk tea with bubbles", 7.90);
teaArray[1] = new Item("images/tea2.jpeg", "ROSEHIP MILK TEA", "Milk tea with bubbles", 5.90);
teaArray[2] = new Item("images/tea3.jpg", "COFFEE MILK TEA", "Milk tea with bubbles", 3.90);
teaArray[3] = new Item("images/tea4.jpeg", "TARO MILK TEA", "Milk tea with bubbles", 6.50);
teaArray[4] = new Item("images/tea5.jpeg", "HONEY MILK TEA", "Milk tea with bubbles", 7.90);
teaArray[5] = new Item("images/tea6.jpeg", "THAI MILK TEA", "Milk tea with bubbles", 4.50);
teaArray[6] = new Item("images/tea7.jpeg", "WINTER MELON MILK GREEN TEA", "Milk tea with bubbles", 5.60);
teaArray[7] = new Item("images/tea8.jpeg", "OOLONG MILK TEA", "Milk tea with bubbles", 6.10);
teaArray[8] = new Item("images/tea9.jpg", "COCONUT MILK TEA", "Milk tea with bubbles", 3.50);
teaArray[9] = new Item("images/tea8.jpeg", "ALMOND MILK TEA", "Milk tea with bubbles", 5.30);




var merchandiseArray = new Array();
merchandiseArray[0] = new Item("images/merch1.jpg", "Plaid Shirt", "A nice plaid shirt to impress the ladies with", 45.00);
merchandiseArray[1] = new Item("images/merch2.jpg", "Grey Hoodie", "Oversized is a great look", 50.00);
merchandiseArray[2] = new Item("images/merch3.jpg", "Blue Hoodie", "What a cute design", 60.00);
merchandiseArray[3] = new Item("images/merch4.jpg", "Sunflower Graphic T-Shirt", "With a shirt like this one, you will stand out", 30.00);
merchandiseArray[4] = new Item("images/merch5.jpg", "Teddy Bear Hoodie", "Who doesn't love teddy bears?", 40.00);
merchandiseArray[5] = new Item("images/merch6.jpg", "Frog Hoodies Couple Set", "Stylish and cute", 75.00);
merchandiseArray[6] = new Item("images/merch7.jpg", "Straight Pants Cropped", "Tailored for both comfort and style", 35.00);
merchandiseArray[7] = new Item("images/merch8.jpg", "Duck T-Shirt", "Ducks are great. Why not have a duck shirt?", 35.00);
merchandiseArray[8] = new Item("images/merch9.jpg", "Reflective Butterfly T-Shirt", "Butterfly print gives off an iridescent glow", 45.00);
merchandiseArray[9] = new Item("images/merch10.jpg", "Striped Socks", "Good quality striped socks", 5.00);







var pastriesArray = new Array();
pastriesArray[0] = new Item("images/pastry1.jpg", "Coconut Bun", "Delicious Coconut Bun", 2.00);
pastriesArray[1] = new Item("images/pastry2.jpg", "Hot Dog", "More Bread", 1.00);
pastriesArray[2] = new Item("images/pastry3.jpg", "Sponge Cake", "Don't let the apperance fool you. It's quite good", 3.00);
pastriesArray[3] = new Item("images/pastry4.jpg", "Egg Custard Tart", "Filling should be silky smooth", 1.00);
pastriesArray[4] = new Item("images/pastry5.jpg", "Swiss Rolls", "\"Swiss\" rolls, also called roll cakes, are close sponge cake relatives with some key differences. The cake is more dense, baked in a flat sheet then rolled around a sweet filling.", 1.00);
pastriesArray[5] = new Item("images/pastry6.jpg", "Sesame Balls", "They have a crispy exterior that tastes of sesame seeds (not fryer oil), a chewy layer of glutinous rice dough, and a well-filled core of red bean paste.", 1.00);
pastriesArray[6] = new Item("images/pastry7.jpg", "Mochi", "Soft sticky-rice dough filled with something sweet and usually rolled in coconut or finely crushed peanuts", 1.00);
pastriesArray[7] = new Item("images/pastry8.jpg", "Moon Cakes", "These cakes have a very thin layer of soft (read: fatty) pastry surrounding an inch-thick slab filling. The cakes are pressed into intricate molds for a beautiful patterned stamp topping.", 1.00);
pastriesArray[8] = new Item("images/pastry9.jpg", "Melon Cakes", "Light on sugar but big on chewy texture. This cookie-shaped cake is filled with a subtle, sticky-chewy winter melon filling that has a taste and texture reminiscent of mashed sticky rice with some notes of sweet summer squash. ", 1.00);
pastriesArray[9] = new Item("images/pastry10.jpg", "Steamed Buns", "Steamed buns are filled with all manner of meats and vegetables: pork, bean sprouts, cabbage, celery, and water chestnuts", 1.00);





var coffeeArray = new Array();
coffeeArray[0] = new Item("images/cof1.jpg", "Cappuccino", "Delicious Cappuccino", 3.50); //put coffee stuff here
coffeeArray[1] = new Item("images/cof2.png", "Espresso", "Espresso is by far the most popular coffee drink around the world, not just in the US.", 3.50); //put coffee stuff here
coffeeArray[2] = new Item("images/cof3.png", "Latté", "A latte is another espresso-based drink that’s incredibly popular in the US and around the world", 3.50); //put coffee stuff here
coffeeArray[3] = new Item("images/cof4.png", "Americano", "An Americano is a popular coffee shop drink made from water and espresso. It’s a great choice for those who find straight espresso to be too strong.", 3.50); //put coffee stuff here
coffeeArray[4] = new Item("images/cof5.png", "Cold Brew", "Cold brew coffee has become very popular in recent years. Cold brew is a method of preparing the coffee by soaking the grinds at room temperature or in the fridge for 12 hours or more. There’s no heat involved in this brewing process at all.", 3.50); //put coffee stuff here
coffeeArray[5] = new Item("images/cof6.png", "Frappuccino/Frappe", "The terms Frappuccino and frappe generally describe a popular frozen coffee shop drink that may or may not contain coffee. The difference is, the term Frappuccino is used exclusively by Starbucks, while the term frappe is universal across the globe.", 3.50); //put coffee stuff here
coffeeArray[6] = new Item("images/cof7.png", "Caffe Mocha", "The Caffe Mocha, sometimes called a café mocha or mocha latte, is a popular coffee shop drink that’s basically a latte with chocolate syrup or cocoa powder added to it.", 3.50); //put coffee stuff here
coffeeArray[7] = new Item("images/cof8.png", "Café au Lait", "A café au lait is a popular café drink that originated in France. A café au lait is made with equal parts French Press brewed coffee and steamed milk. There’s traditionally no milk foam on the top, but some coffee shops may serve it with a very thin layer.", 3.50); //put coffee stuff here
coffeeArray[8] = new Item("images/cof9.png", "Macchiato", "The traditional macchiato is an espresso-based drink that is made with one or two shots of espresso, a splash of steamed milk, and topped with just a slight bit of milk foam.", 3.50); //put coffee stuff here
coffeeArray[9] = new Item("images/cof10.png", "Affogato", "An affogato is a popular coffee shop and café drink made with espresso and vanilla ice cream. It’s a rich, sweet, and creamy Italian coffee and dessert in one cup.", 3.50); //put coffee stuff here


var checkoutArray = new Array();

window.onload = function () {
    showCategory(document.getElementById("storeItems").value);
    var categoryDropDown = document.getElementById("storeItems"); //create a reference to the dropdown
    categoryDropDown.addEventListener("change", btnCategory_Chosen); //dropdown menu will constantly listen to detect whether it's changed, if so, fire the function in the second parameter



    function btnCategory_Chosen() {
        var category = document.getElementById("storeItems").value; //read the value that the user selected
        //alert("You've changed the thing to: " + category);
        showCategory(category);
    }

    function btnAdded() {
        var index = this.id.replace("btn", "");
        var classifier = this.className;
        var price = this.value;
        var currentArray;
        if (classifier == "Tea") {
            currentArray = teaArray;
            
        } else if (classifier == "Coffee") {
            currentArray = coffeeArray;
        } else if (classifier == "Pastries") {
            currentArray = pastriesArray;
        } else {
            currentArray = merchandiseArray;
        }
        alert("You successfully added: " + currentArray[index].getTitle() + " to your shopping cart");
        //add to checkout array of Items
        checkoutArray.push(currentArray[index]);

        var checkoutList = document.getElementById("checkoutList"); //get access to checkout div
        var checkoutHeader = document.getElementById("checkoutHeader"); //get access to checkout header
        checkoutHeader.innerText = "Items in Your Cart"; // name that h2 element


        var checkoutItem = document.createElement("div");
        checkoutItem.className = "checkoutItem";
        checkoutList.appendChild(checkoutItem);

        var lineItem = document.createElement("p");
        checkoutItem.appendChild(lineItem);
        lineItem.innerText = currentArray[index].getTitle() + "----" + "$"+ price;

        //calculate total price and add to lineItem at the bottom
        var total = 0;
        for (var i = 0; i < checkoutArray.length; i++) {
            total += checkoutArray[i].getPrice();
        }
        var lineTotal = document.getElementById("lineTotal");
        checkoutItem.appendChild(lineTotal);
        lineTotal.innerText = "Total: $" + (total + (total *.06)).toFixed(2);




    }


    function showCategory(category) {
        //make a div with image, title, desc, price
        var div = document.getElementById("menuList");
        div.innerHTML = "";
        var currentArray;

        var box = document.createElement("div");
        box.className = "itemBox"; //this is a box template 
        div.appendChild(box); // append box to the menuList
        if (category == "Tea") {
            currentArray = teaArray;
            /*
            var newdiv = document.createElement("div");
            var size = document.createElement("select");
            newdiv.appendChild(size);
            size.appendChild(document.createElement("option"));*/

        } else if (category == "Coffee") {
            currentArray = coffeeArray;
        } else if (category == "Pastries") {
            currentArray = pastriesArray;
        } else {
            currentArray = merchandiseArray;
        }

        for (var i = 0; i < currentArray.length; i++) {


            var imageDescription = document.createElement("div");
            var title = document.createElement("h1"); //create h1 
            var titleText = document.createTextNode(currentArray[i].getTitle()); //create text 
            title.appendChild(titleText); //put text inside h1
            imageDescription.append(title); //put h1 inside the div
            var image = createImage(currentArray[i].getImage(), "300px", "350px");
            box.appendChild(image);
            imageDescription.append(document.createTextNode(currentArray[i].getDescription()));
            imageDescription.appendChild(document.createElement("br"));
            imageDescription.append(document.createTextNode("$" + currentArray[i].getPrice().toFixed(2)));
            imageDescription.appendChild(document.createElement("br"));

            /*
            imageDescription.appendChild(newdiv);
            imageDescription.appendChild(document.createElement("br")); */


            imageDescription.appendChild(document.createTextNode("Add to cart now! "));
            var btnAdd = document.createElement("button");
            btnAdd.value = currentArray[i].getPrice();
            btnAdd.id = "btn" + i;
            btnAdd.innerText = ""; //Add to Order
            btnAdd.className = category;
            btnAdd.addEventListener("click", btnAdded);

            imageDescription.appendChild(btnAdd);
            imageDescription.appendChild(document.createElement("br"));

            box.appendChild(imageDescription);
            box.appendChild(document.createElement("div"));
            div.appendChild(box); // append box to the menuList
            box = document.createElement("div"); // create a new div and call it box
            box.className = "itemBox"; //this is a box template 
        }

    }




    function createImage(name, width, height) {
        var image = document.createElement("img");
        if (image != null && image != undefined) {
            image.src = name;
            image.style.width = width;
            image.style.height = height;
        }
        return image;
    }

}







