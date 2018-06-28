$(function(){
    //on click function for the add the burger
    $("#submit").on("click",function(event){
        event.preventDefault();
        console.log("sumbit");

        var newBurger = {
            burger_name: $("#name").val().trim(),
            devoured: 0
        };
        console.log(newBurger)
        console.log("TEST")
        $.ajax("/burger",{
            type:"POST",
            data: newBurger
        }).then(
            function(){
                 console.log("you added new burger" + newBurger);
                 location.reload();
            }
        )
    });
    
    $("#eatburger").on("click", function(event){
        event.preventDefault();
        console.log("burgerDevoured")
        var id = $(this).data("id");
        
        var newDevoured = $(this).data("newDevoured");
        console.log(newDevoured);
        var newDevouredState ={
            devoured : newDevoured
        }
        console.log(newDevouredState)
        console.log("clicked")

        $.ajax("/burger/"+id,{
            type:"PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("change devoured to",newDevoured)
                location.reload();

            }
        )
    })
});