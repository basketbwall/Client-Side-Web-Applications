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


window.onload = function () {
    var existingItemsList = JSON.parse(localStorage.getItem('existingItems'));

    $('<option/>', {
        value: "Select an existing item",
        html: "Adding a New Item"
    }).appendTo('#existingItemList'); //appends to select if parent div has id dropdown
    for (var i = 0; i < existingItemsList.length; i++) {
        //creates option tag
        $('<option/>', {
            value: existingItemsList[i].title,
            html: existingItemsList[i].title
        }).appendTo('#existingItemList'); //appends to select if parent div has id dropdown
    }



    var itemList = $("#existingItemList");
    itemList.on("change", fill);
    $("#category").val("");
    $("#deleteCheckBox").css("display", "none");
    $("#deleteLabel").css("display", "none");

    function fill() {

        var value = this.value;
        if (value == "Select an existing item") {
            $("#category").val("");
            $("#description").val("");
            $("#title").val("");
            $("#price").val("");
            $("#url").val("");
            $("#deleteCheckBox").css("checked", false);
            $("#deleteCheckBox").css("display", "none");
            $("#deleteLabel").css("display", "none");
            return;
        }
        var existingItemsList = JSON.parse(localStorage.getItem('existingItems'));
        $("#deleteCheckBox").css("display", "inline");
        $("#deleteLabel").css("display", "inline");
        for (let i = 0; i < existingItemsList.length; i++) {
            if (existingItemsList[i].title == value) {
                //alert("found the item " + value);
                $("#category").val(existingItemsList[i].category);
                $("#description").val(existingItemsList[i].description);
                $("#title").val(existingItemsList[i].title);
                $("#price").val(existingItemsList[i].price);
                $("#url").val(existingItemsList[i].image);
            }
        }
    }

    //javascript to create new object based on results
    var submitBtn = $("#button");
    submitBtn.on("click", add);



    var pastOrders = $("<div></div>");
    var heading = $("<h1></h1>");
    heading.html("View Old Orders Here");
    pastOrders.append(heading);
    var select = $("<select></select>");
    select.attr("id", "pastOrders");
    pastOrders.append(select);
    $("body").append(pastOrders);
    $('<option/>', {
        value: "Select an Order",
        html: "Select an Order"
    }).appendTo('#pastOrders'); //appends to select if parent div has id dropdown
    var ordersArray = JSON.parse(localStorage.getItem("orders"));
    for (var i = 0; i < ordersArray.length; i++) {
        //creates option tag
        $('<option/>', {
            value: JSON.stringify(ordersArray[i].items),
            html: ordersArray[i].id
        }).appendTo('#pastOrders'); //appends to select if parent div has id dropdown
    }
    var displayListItems = $("<div></div>");
    displayListItems.addClass("itemBox");
    var oldOrderSelection = $("#pastOrders");
    oldOrderSelection.on("change", showPastOrder);
    function showPastOrder() {
        //alert("Showing: " + this.value);
        orderItemsArray = JSON.parse(this.value);
        displayListItems.empty();
        var total = 0
        for (var i = 0; i < orderItemsArray.length; i++) {
            var itemObject = orderItemsArray[i];
            var newParagraph = $("<p></p>");
            newParagraph.html(itemObject.title + "...$" + itemObject.price);
            var newImage = $("<img/>");
            newImage.attr("src", itemObject.image);
            newImage.attr("width", "175px");
            newImage.attr("height", "200px");
            displayListItems.append(newImage);
            total += parseFloat(itemObject.price);
            displayListItems.append(newParagraph);
        }
        total += total * .06;
        var totalPrice = $("<p></p>");
        totalPrice.html("Total Price: $" + total.toFixed(2));
        displayListItems.append(totalPrice);
        $("body").append(displayListItems);
    }


    function add() {
        //check for deletechecked
        var deleteMode = false;
        if ($("#deleteCheckBox").prop("checked")) { //prop differs from attr
            alert("deleting this item from catalog");
            deleteMode = true;
        }
        //check for input validation
        //grab inputs for the other fields before adding to array
        var category = $("#category").val();
        var description = $("#description").val();
        var title = $("#title").val();
        var price = $("#price").val();
        var url = $("#url").val();

        if (category == "") {
            return;
        } else if (description == "") {
            return;
        } else if (title == "") {
            return;
        } else if (price == "") {
            return;
        } else if (url == "") {
            return;
        }
        //check for bad values that we can't understand or it doesn't make sense in the specific context
        if (isNaN(parseFloat(price))) {
            alert("Please type a valid price");
            return;
        }
        price = parseFloat(price).toFixed(2);

        //if the title is already in our local storage database, update, otherwise add
        var title = $("#title").val();
        //alert("the title we received is: " + title);
        var existingItemsList = JSON.parse(localStorage.getItem('existingItems'));
        for (let i = 0; i < existingItemsList.length; i++) {
            if (existingItemsList[i].title === title) {
                existingItemsList.splice(i, 1); //remove current version on this item from array
                if (deleteMode) {
                    localStorage.setItem("existingItems", JSON.stringify(existingItemsList));

                    return;
                }
            }
        }

        //now create item and add that item to the array
        var newItem = new Item(url, title, description, price, category);

        existingItemsList.push(newItem);

        //set locastorage = to this new array :D we're done with the emplyee change form now!
        localStorage.setItem("existingItems", JSON.stringify(existingItemsList));

    }
};
