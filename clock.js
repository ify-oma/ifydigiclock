 

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "Am"
   

if (h > 12) {
    h = h - 12
    ampm = "PM"
}
h = h < 10 ? "0"+ h :h ;
m = m < 10 ? "0"+ m : m;
s = s < 10 ? "0"+ s : s;
document.getElementById("hour").innerText = h;
document.getElementById("minutes").innerText = m;
document.getElementById("second").innerText = s;  
document.getElementById("ampm").innerText = ampm;

setTimeout(()=>{
    updateClock()
},1000)

}
updateClock()
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday' ,'Thursday' ,'Friday', 'Saturday'
]
let date = new Date();
let dayOfWeek = daysOfWeek[date.getDay()]
document.getElementById("day").innerHTML = "Today is " + dayOfWeek + " " + new Date().getDate()