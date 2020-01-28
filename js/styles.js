function Ticket(name, run, rating, price){
    this.name = name,
    this.run = run,
    this.rating = rating,
    this.price = price
}

Ticket.prototype.priceChange = function(priceAdjust){
    this.price += priceAdjust;
}



// front end 
$(document).ready(function(){
    var StarWars = new Ticket("StarWars", "first", "pg13", 14)
    var Kids = new Ticket("Kids", "second", "pg", 12)
    var Nosferatu = new Ticket("Nosferatu", "old", "r", 10)
    var Movies = {
        tickets: [Nosferatu, StarWars, Kids]
        };
    $("form").submit(function(event){
        var age = parseInt($("input").val());
        var time = $("input:radio[name=time]:checked").val();
        event.preventDefault();
    if (time === "evening"){
        Movies.tickets.forEach(function(ticket){
        ticket.priceChange(2);
    });
    console.log(StarWars.price);
    }
    if (age >= 65){
        Movies.tickets.forEach(function(ticket){
            ticket.priceChange(-2);
        });
        $("#movie1").show();
        $("#movie2").show();
        $("#movie3").show();
    } else if (age > 18 && age < 65){
        $("#movie1").show();
        $("#movie2").show();
        $("#movie3").hide();
    } else if(age < 18){
        Movies.tickets.forEach(function(ticket){
            ticket.priceChange(-5);
        });
        $("#movie1").hide();
        $("#movie2").hide();
        $("#movie3").show(); 
        console.log(Kids.price);
    } else {
        alert("Please complete form")
    }
    });
});