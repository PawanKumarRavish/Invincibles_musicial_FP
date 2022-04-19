$(function(){
    userdetail = (localStorage.getItem("isLoged"))
    if(userdetail==null || userdetail=="false"){
        $("#regbtn").html(`<a href="register.html">Register</a>`);     
        $("#logbtn").html(`<a href="login.html">Login</a>`);     
    }else{
        $("#regbtn").html(`<a href=""class="logout">Logout</a>`);
        $("#logbtn").html(`<a href=""class="logout">Logout</a>`);
    }
    $(".logout").click(function(e){ 
        e.preventDefault();
        localStorage.setItem("isLoged",false);
        window.location.assign("register.html")
    })
})

$(document).ready(function(){
    $('#nav_menu').slicknav({prependTo:"#mobile_menu"});    
});