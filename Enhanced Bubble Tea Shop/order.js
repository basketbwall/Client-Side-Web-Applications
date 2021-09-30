class Item {

    constructor(image, title, description, price, category) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
        this.category = category;
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

    getCategory() {
        return this.category;
    }
}

class Order {
    constructor(items, id) {
        this.items = items; // the array
        this.id = id;
    }
    getTotal() {
        return this.total;
    }
}




$(document).ready(function () {

    if (sessionStorage.getItem("checkout") === null) {
        var checkoutList = new Array();
    } else {
        var checkoutList = JSON.parse(sessionStorage.getItem("checkout"));
    }
    //need a way to check if localstorage has order info, if so create new array based on localstorage otherwise create new array
    if (localStorage.getItem("orders") === null) {
        var completedOrders = new Array();
    } else {
        var completedOrders = JSON.parse(localStorage.getItem("orders"));
    }

    var newDiv = $("<div></div>");
    $("body").append(newDiv);
    newDiv.attr("id", "checkoutBox");
    var total = 0;
    for (var i = 0; i < checkoutList.length; i++) {
        var lineItemRow = $("<div></div>");
        lineItemRow.addClass("itemBox");
        lineItemRow.attr("id", "lineFor"+i)
        var lineItem = "<p>" + checkoutList[i].title + "... $" + checkoutList[i].price + "</p>";
        var imgItem = $("<img/>");
        imgItem.attr("src", checkoutList[i].image);
        imgItem.attr("width", "175px");
        imgItem.attr("height", "200px");
        lineItemRow.append(imgItem);
        var removeButton = $("<button>");
        removeButton.html("Remove");
        removeButton.attr("id", i);
        total += parseFloat(checkoutList[i].price);
        lineItemRow.append(lineItem);
        lineItemRow.append(removeButton);
        //attach something to the remove button so that it can remove the said item from checkout array
        //need to update the price :o
        removeButton.on("click", function () {
            var indexToRemove = this.id;
            //alert(indexToRemove);
            //var priceToRemove = checkoutList[indexToRemove].price;
            checkoutList.splice(indexToRemove, 1);
            sessionStorage.setItem("checkout", JSON.stringify(checkoutList));
            $("#" + indexToRemove).hide();
            $("#lineFor" + indexToRemove).hide();
            window.location.reload();

        });
        $("#checkoutBox").append(lineItemRow);
    }
    total += total * .06;
    var totalLine = "<p>Total: $" + total.toFixed(2) + "</p>";
    $("#checkoutBox").append(totalLine);
    $("#checkoutBox").attr("value", total.toFixed(2));

    var submitBtn = $("<button/>");
    submitBtn.attr("id", "submit");
    submitBtn.attr("value", "Submit an Order");
    $("body").append(submitBtn);

    var confirmedMessage = $("<p></p>");
    confirmedMessage.attr("id", "message");
    $("body").append(confirmedMessage);

    submitBtn.on("click", function () {

        //check if order is in sessionstorage, or an error with the web app will occur
        if (checkoutList === null || checkoutList.length == 0) {
            alert("We can't process your order because you don't have anything in your cart! lol so silly.");
            return;
        }

        var missing = false;
        //check for input validation before running below code
        $("input").each(function () {
            if (this.value == "") {
                missing = true;
            }
        });

        //check for variable entered
        var cardNumber = $("#cardNumber").val().replace(" ", "");
        if (cardNumber.length < 16 || cardNumber.length > 19) {
            alert("credit card number is either too short < 16 or too long 19 <  . Double check your card information");
            return;
        }
        var expiryDate = $("#expireDate").val();
        if (expiryDate.includes("/") == false) {
            alert("your expiry date is not in proper format");
            return;
        }
        expiryDate = expiryDate.replace("/", "")
        if (Number.isNaN(parseInt(expiryDate))) {
            alert("Your expiry date is not correct");
            return;
        }

        var securityCode = $("#securityCode").val();
        if (Number.isNaN(parseInt(securityCode))) {
            alert("Your security code is not correct");
            return;
        }





        //grab everything through id and check for value = "";


        if (missing == false) {
            //alert("hey pressed");
            //we have access to checkoutlist, what can we do with that? we can store all of them into a order object
            var order = new Order(checkoutList, completedOrders.length);
            //add this order in the array of completed orders, then put then array into localstorage
            completedOrders.push(order);
            localStorage.setItem("orders", JSON.stringify(completedOrders));
            sessionStorage.removeItem("checkout");
            $("#message").html("Order Submitted");
            submitBtn.attr("disabled", true);
            $(":button").attr("disabled", true);
        } else {
            alert("Please Fill out the payment form it its entirety");
        }

    });



});