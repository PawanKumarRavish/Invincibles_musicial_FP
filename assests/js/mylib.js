$(function(){
    userplaylist = []
    userplaylist = localStorage.getItem("userplaylist");
    // localStorage.setItem("userplaylist",null)
    $(".clearplay").click(function(){
        localStorage.setItem("userplaylist",null)
        $(".myplaylist").html("<br/><h2> Playlist Cleared</h2>")
        setTimeout(()=>{
            $(".myplaylist").html("<br/><h2> You dont have PlayList</h2>")
        },2000)
    })
    $(".playlistbtn").click(function(){ 
        songvalue = $(this).val();
        let sogplay = {"path":songvalue,"name":songvalue}
        // console.log(userplaylist)
        let newarrya=[]
    if(userplaylist!="null" && userplaylist!=null && userplaylist.length!=0)
            newarrya = userplaylist
        let mat = newarrya.filter(e=>{
            return e.path==sogplay.path
        })
        if(mat.length>0)
            alert("Song Already in you playlist")
        else{
            newarrya.push(sogplay);
            // console.log("NEW ARRAY",newarrya)
            // $(`#${songvalue}`).hide();
            localStorage.setItem("userplaylist",JSON.stringify(newarrya))
            checkplaylist();
        }
        
    })
    
    function checkplaylist(){ 
        userdetail = (localStorage.getItem("isLoged"))
        if(userdetail==null || userdetail=="false"){
            alert("You are not Allowed to Open the Page Please Login First")
            window.location.assign("login.html")
        }else{
            userplaylist = (localStorage.getItem("userplaylist"));
            // console.log("USERLIST",(userplaylist))
            if(userplaylist==null ||userplaylist=="null" || JSON.parse(userplaylist).length==0){
                $(".myplaylist").html("<br/><h2> You dont have PlayList</h2>")
            }else{
                userplaylist = JSON.parse(userplaylist)
                // console.log("Element Is"+userplaylist[0])
                btns = "<h2>My Playlist</h2><table style='width:100%'>"

                for(i=0;i<(userplaylist).length;i++){
                    btns += `<tr><td><button value="${userplaylist[i].path}" class="btn songbtn">
                        ${userplaylist[i].name}
                    </button></td><td></tr>`;
                }
                btns +="</table>";
                $(".myplaylist").html(btns)
            }
        }
    }
    
    checkplaylist();
})