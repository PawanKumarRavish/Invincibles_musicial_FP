$(function(){
    $("#formsubmit").on('submit',function(e){
        e.preventDefault();
        let data = "";
        fullname = $("#fname").val()+$("#lname").val();
        email = $("#email").val();
        phone = $("#phone").val();
        msg = $("#msg").val();
        data = "\nName=> "+fullname+"\nEmail=> "+email+"\nPhone=> "+phone+"\nMessage=> "+msg;
        data = "Thanks for contacting verify you Information :\n"+data;
        alert(data);

        $("#fname").val('');$("#lname").val('');$("#email").val('');
        $("#phone").val('');$("#msg").val('');
        $("#usermsg").html("Your Request is Submitted Succesfully").addClass('usermsg');
        setTimeout(()=>{
            $("#usermsg").html("").removeClass('usermsg');
        },2500);
    })
})