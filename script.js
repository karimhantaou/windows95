var repair_button = document.getElementById('repair_button')
var repair_container = document.getElementById('gif_repair_container')
var crash_div = document.getElementById("crash_screen")
var gif_repair = document.getElementById("gif_repair")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    // Display the time in the element with id="current-time"
    document.getElementById("time").innerHTML = timeString;
}


function bin_click(){
  var body = document.getElementById('body')
  var screen = document.getElementById('screen')

  function reset_visibility(){
    screen.style.visibility = "visible"
  }


  screen.style.visibility = "hidden"

  setTimeout(reset_visibility, 5000)

}



function explorer_click(){
  var explorer_div = document.getElementById("explorer_div")
  var explorer = document.getElementById("explorer_gif")
  var icon = document.getElementById("explorer_icon")

  var x_position = 0
  var x_limit = 85
  var x_speed = 1

  explorer_div.style.visibility = "visible"
  icon.style.opacity = 0

  function move_explorer(){
    x_position+=x_speed
    if(x_position < x_limit)
    {
      explorer.style.left = x_position + "%"
      setTimeout(move_explorer, 0.5);
    }
    else{
        explorer_div.style.visibility = "hidden"
        explorer.style.left = "0%"
        x_position = 0
        icon.style.opacity = 1
    }


  }

  move_explorer()

}


function w_crash(){
  console.log("crash")

  var crash_div = document.getElementById("crash_screen")

  crash_div.style.visibility = "visible"

}

function w_crash_close(){
  console.log("crash close")

  var crash_div = document.getElementById("crash_screen")

  crash_div.style.visibility = "hidden"
}

function doom_play(){
  console.log("doom open")

  var doom_div = document.getElementById("doom_screen")

  doom_div.style.visibility = "visible"

  var audio = document.getElementById('doom_sound')
  audio.volume = 0.1;
  audio.play()

}

function doom_close(){
  console.log("doom close")

  var doom_div = document.getElementById("doom_screen")

  doom_div.style.visibility = "hidden"

  var audio = document.getElementById('doom_sound')
  audio.pause();
  audio.currentTime = 0;
}

function sound_click() {
  var audio = document.getElementById('w95_sound')
  audio.volume = 0.1;
  audio.play()
}

repair_button.addEventListener('click', function(){

  var repair_container = document.getElementById('gif_repair_container')

  repair_container.style.visibility = "visible";

  sleep(3000).then(() => {

    repair_container.style.visibility = "hidden";
    crash_div.style.visibility = "hidden"

  });

})

setInterval(updateTime, 1000);
