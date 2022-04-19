$(function(){
    $(".bgmusic").click(function(){
        let path = "assests/mp3/"+$(this).val()+".mp3"
        let player = new Audio();
        player.src=path
        player.play();
        // var audioElement = document.createElement('audio');
        // audioElement.setAttribute('src', path);
        // audioElement.play();
        // alert("ji")
    })
    $(".songbtn").click(function(){
        let path = "assests/mp3/"+$(this).val()+".mp3"
        // alert(path)
        // $("#audioplayer").attr("src",$(this).val());
        let audioPlayer = $("#audioplayer");
        $("#mp3source").attr('src',path);
        audioPlayer[0].pause();
        audioPlayer[0].load();//suspends and restores all audio element
        audioPlayer[0].oncanplaythrough = audioPlayer[0].play();
        /*
            Source 
            https://stackoverflow.com/questions/9421505/switch-audio-source-with-jquery-and-html5-audio-tag
            https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked
            https://medium.com/@ericschwartz7/adding-audio-to-your-app-with-jquery-fa96b99dfa97s
        */
    })
    $("#playpause").click(function(){
        //https://stackoverflow.com/questions/9437228/html5-check-if-audio-is-playing
        let audioPlayer = $("#audioplayer");
        if(audioPlayer[0].duration > 0 && !audioPlayer[0].paused){
            audioPlayer[0].pause();
        }else{
            audioPlayer[0].play();
        }
    })
    $("#songstatus").click(function(){
        let audioPlayer = $("#audioplayer");
        console.log(audioPlayer[0].src)
        console.log(audioPlayer[0].duration)
         
        if($("#show").val()=="1"){
            let data = `<p>Total Duration:${ audioPlayer[0].duration } </p>`
            data += `<p>Src: ${$("#mp3source").attr('src')}</p>`            
            data += `<p id='currenttime'>Current : </p>`    
            audioPlayer[0].addEventListener("timeupdate",function(){
                $("#currenttime").text("Current second:" + audioPlayer[0].currentTime);
            }); 
            $("#songstatusdiv").html(data) 
            $("#songstatusdiv").slideDown(1000) 
            $("#show").val("0")
        }else{  
            $("#songstatusdiv").slideUp(200) 
            $("#show").val("1")
            $("#songstatusdiv").html('') 
        }
    })    
    
})