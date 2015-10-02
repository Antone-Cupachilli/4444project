var username;

$(document).ready(function() {
    $("#login-button").click(function() {
        username = $("input[name=username]").val();
        if(username == "customer")
        {
            location.href = "place_order.html";
        }
        else if(username == "manager")
        {
            location.href = "orders.html";
        }
        else if(username == "staff")
        {
            location.href = "orders.html"
        }
    });
});