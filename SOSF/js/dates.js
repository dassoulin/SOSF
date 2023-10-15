
dates();

function dates(){
    var oldDate = new Date(2022, 11, 20);
    document.getElementById("dateCreated").innerHTML = oldDate.toLocaleDateString();
    var curDate = new Date();
    document.getElementById("currentDate").innerHTML = curDate.toLocaleDateString();
    var diff = ( curDate.getTime() - oldDate.getTime() ) / (24 * 60 * 60 * 1000);
    document.getElementById("dateDifference").innerHTML = Math.floor(diff);
}