var h =0;
var m =0;
var s =0;
var stoptime = true;

h = (h<10)? "0"+h: h;
m = (m<10)? "0"+m: m;
s = (s<10)? "0"+s: s;

var time = h + ":" + m + ":" + s;

document.getElementById("stpwch").innerHTML = time;


document.getElementById("btn1").addEventListener('click', function(){
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
})
document.getElementById("btn2").addEventListener('click', function(){
    if (stoptime == false) {
        stoptime = true;
    }
})

function timerCycle(){
    if(stoptime == false){
        h = parseInt(h);
        m = parseInt(m);
        s = parseInt(s);

        s+= 1;}

        if(s==60){
            m+= 1;
            s =0;
        }
        if(m==60){
            h+= 1;
            m = 0;
            s = 0;
        }   
        
        setTimeout('timerCycle()', 1000);
    }




