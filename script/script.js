var addComma = function(x) {
    x = x.toString();
    var parts = x.split(".");
    var intPart = parts[0];
    var commaArray = [];

    for (let i = intPart.length - 1; i >= 0; i--) {
        commaArray.push(intPart[i]);

        if (!((intPart.length - i) % 3) && i) {
            commaArray.push(",")
        }

        
    }

    commaArray.reverse();
    
    var commaString = "";
    for (let i = 0; i < commaArray.length; i++) {
        commaString += commaArray[i];
    }

    if (parts.length > 1) {
        return commaString + "." + parts[1];
    }
    else {
        return commaString
    }
}

var clock = function() {
    var now = Date.now();
    var birth = Date.parse("December 10, 2008");
    var twenty = Date.parse("December 10, 2028");

    var timeLeftS = Math.round((twenty - now) / 1000);
    var year = Math.floor(timeLeftS / 31536000);
    var day = Math.floor((timeLeftS - year * 31536000) / 86400)
    var hour = Math.floor((timeLeftS - year * 31536000 - day * 86400) / 3600)
    var min = Math.floor((timeLeftS - year * 31536000 - day * 86400 - hour * 3600) / 60)
    var sec = Math.floor(timeLeftS - year * 31536000 - day * 86400 - hour * 3600 - min * 60)

    var progress = (now - birth) / (twenty - birth) * 100;

    $("#timeLeft").html(`${year} y, ${day} d, ${hour} hr, ${min} min, ${sec} s`)
    $("#progress").html(progress.toFixed(2) + " %");
    $("#progress").css("width", progress + "%");
}

clock();
var tick = setInterval(clock, 1000)