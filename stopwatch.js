
var h =0;
var m =0;
var s =0;
var interval = null;
var timer;

var time = "0"+ h + ":" + "0"+ m + ":" + "0"+ s;
document.getElementById("stpwch").innerHTML = time;
var disblStart=document.getElementById("btn1");
var disblStop=document.getElementById("btn2");
disblStop.disabled=false;
disblStart.disabled=false;

function stopwatch(){

    h = parseInt(h);
    m = parseInt(m);
    s = parseInt(s);

    s++;

    if(s/60==1){
        m++;
        s =0;
    }
    if(m/60==1){
        h++;
        m = 0;
        s = 0;
    }  

    h = (h<10) ? "0"+ h : h;
    m = (m<10) ? "0"+ m : m;
    s = (s<10) ? "0"+ s : s;

var time = h + ":" + m + ":" + s;

document.getElementById("stpwch").innerHTML = time;
}

    document.getElementById("btn1").addEventListener('click', () =>{
           
            disblStop.disabled=false;
            disblStart.disabled=true;
            interval= setInterval('stopwatch()', 1000);
        
    })


    document.getElementById("btn2").addEventListener('click', () =>{

        disblStop.disabled=true;
        disblStart.disabled=false;
        clearInterval(interval);
        
    })
    document.getElementById("btn3").addEventListener('click', () =>{
        clearInterval(interval);
         h =0; m =0; s =0;
        time = "0"+ h + ":" + "0"+ m + ":" + "0"+ s;
        
        document.getElementById("stpwch").innerHTML = time; 
        disblStop.disabled=false;
        disblStart.disabled=false;

    })

    