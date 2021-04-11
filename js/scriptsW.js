//scriptsW.js

function inputCords() {
    var lat = document.getElementById("userInput1").value;
    var lon = document.getElementById("userInput2").value;
    if (lat >= -90 && lat <= 90 && lon >= -180 && lon <=180){
        var str1 = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
        var str2 = lat;
        var str3 = '&lon=';
        var str4 = lon;
        var str5 = '&exclude=hourly,daily&appid=';
        var apiStr = str1.concat(str2.concat(str3.concat(str4.concat(str5))))

        let request = new XMLHttpRequest();
        request.open('GET', apiStr, true);
        request.send();

        request.onload = function(){
            var data = JSON.parse(this.response);
            console.log(data);
            if(request.status >= 200 && request.status < 400){
                var temp = Math.round(((parseFloat(data.current.temp)-273.15)*(9/5))+32);
                var feels_like = Math.round(((parseFloat(data.current.feels_like)-273.15)*(9/5))+32);
                document.getElementById("temp").innerHTML +=
                    '<h1>Temperature: ' + temp + '\u00B0 Fahrenheit</h1>' +
                    '<h1>Feels Like: ' + feels_like + '\u00B0 Fahrenheit</h1>';
                if(feels_like <= 60){

                } else if (feels_like >= 80){

                } else if (feels_like > 60 && feels_like < 80){

                }
            } else {
                alert('Something Went Wrong')
            }  //end else
        } 
    } else {
        alert('Invalid Latitude and Longitude Values')
    }
}
