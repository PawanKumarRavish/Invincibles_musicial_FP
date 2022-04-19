$(function(){    
    $("#loginform").on('submit',function(e){
        e.preventDefault();
        let data = "";
        email = $("#email").val();
        password = $("#password").val();
        userdetail = JSON.parse(localStorage.getItem("userdetail"))
        if(userdetail==null || userdetail.password!=password ||userdetail.email!=email){
            //alert("Wrong Username Password");
            $("#usermsg").html("Wrong Username Password. Please Register").addClass('usermsg');
            setTimeout(()=>{
                $("#usermsg").html("").removeClass('usermsg');
            },2000);
        }else{
            localStorage.setItem("isLoged",true)
            $("#usermsg").html("You are Successfully Login").addClass('usermsg');
            setTimeout(()=>{
                $("#usermsg").html("").removeClass('usermsg');
                window.location.assign("audio.html")
            },1000);
            // alert("You are Successfully Login")
            
        }
    })
    $("#registerform").on('submit',function(e){
        e.preventDefault();
        let data = "";
        fullname = $("#fname").val()
        url=$("#url").val()
        email = $("#email").val();
        dob = $("#dob").val();
        password = $("#password").val();
        cpassword = $("#cpassword").val();
        comment = $("#comment").val();
        if(password!=cpassword){
            alert("Password and confirm Password should be same")
        }else{
            let userdetail = {
                "name":fullname,
                "email":email,
                "password":password
            }
            localStorage.setItem("userdetail",JSON.stringify(userdetail))
            $("#fname").val('');$("#url").val('');$("#email").val('');
            $("#dob").val('');$("#cpassword").val('');$("#comment").val('');$("#password").val('');
            $("#usermsg").html("You are Successfully Register").addClass('usermsg');
            setTimeout(()=>{
                $("#usermsg").html("").removeClass('usermsg');
            },2000);
        }
    })
})