
// ######## Device Detection #######
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    console.log("This is a mobile device.");
    $(".container").remove();
    $(".msg-farewell").show().text("This App is currently not supported on mobile devices. Please use it on your PC, thanks.").css("font-size", 30);

} 


else {
//    ############## Desktop Device #####
    function drumSet(beats) {
        switch (beats) {
            case "w":var tom_1 = new Audio("./sounds/tom-1.mp3");
                  tom_1.play();
                break;
    
            case "a":var tom_2 = new Audio("./sounds/tom-2.mp3");
                  tom_2.play();
                break;
    
            case "s": var tom_3 = new Audio("./sounds/tom-3.mp3");
                     tom_3.play();
                break;
    
            case "d":
                var tom_4 = new Audio("./sounds/tom-4.mp3");
                tom_4.play();
                break;  
    
            case "j":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;  
    
            case "k":var crash = new Audio("./sounds/crash.mp3");
                  crash.play();
                break;  
    
            case "l":
                var kick_bass = new Audio("./sounds/kick-bass.mp3");
                kick_bass.play();
                break;
    
            default: console.log("error");
                break;
         }
     }
    
    
     //To detect click
     var btns = document.querySelectorAll(".drum");
     for (let i = 0; i < btns.length; i++) {
       
        btns[i].addEventListener("click", function (ev) {
        var drumKey = ev.target.className[0];
        // var drumKey = this.className[0];
         drumSet(drumKey);
         animateButtons(drumKey);
     })
     }
    
    
     //To detect Keyboard
     document.addEventListener("keydown", function (e) {
        var keyboard = e.key;
        drumSet(keyboard);
        animateButtons(keyboard);
     })
    
     //To animate pressed keys
     function animateButtons(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
    
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
        
     }

       //  ################ ALert ##########
   
 document.addEventListener("DOMContentLoaded", function() {
    var blankText = $(".msg-farewell");
    blankText.hide();
    $(".idleMsg").hide();

    var idleTimer;
    var idleTime = 5*60*1000; // 5 minutes in milliseconds
    var time = 5;

    function resetIdleTimer() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function() {
            // Display the idle message
            if (confirm("Inactivity for " +time+ " minutes, close app?")) {
                alert("The page will go blank");
                blankText.fadeIn(7000);
                $(".container").remove();
            } else {
                alert("Thanks for using DrumKit ❤️");
            }
        }, idleTime);
    }

    // Reset the timer on user activity
    document.addEventListener("click",function () {
        resetIdleTimer();
        //$(".idleMsg").hide()
    });
    document.addEventListener("keypress",function () {
        resetIdleTimer();
        //$(".idleMsg").hide()
    });

    // Initial start of the timer
    resetIdleTimer();
});
    
}


