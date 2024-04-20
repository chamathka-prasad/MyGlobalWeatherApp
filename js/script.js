function exTractData(statBoolean) {

    console.log("extract data");
    fetch("cities.json")
        .then(response => response.json())
        .then(json => {


            var arr = new Array();
            json.List.forEach(element => {


                arr.push(element.CityCode);
            });
            getDataFromOpenWeather(arr, statBoolean);



        });


    // console.log(list);
}



const ret = setInterval(function () { exTractData(false) }, 60000 * 5);


function turnOn() {

    frontDat();
    function frontDat() {
        exTractData(true);
        document.getElementById("weatherSet").innerHTML = "";



        try {


            var cit = localStorage.getItem("city");

            if (cit != null) {

                // console.log("set data to front");
                setDataToFront(JSON.parse(cit), true);


            } else {
                exTractData(true);

            }



        } catch (error) {
            // console.log(error);
            exTractData(true);


        }
    }

    setInterval(frontDat, 60000 * 5);




}



function getDataFromOpenWeather(array, statBoolean) {





    // a519c23ab9c774d4fef9db570d1862e7
    var apiKey = "a519c23ab9c774d4fef9db570d1862e7";
    var promises = new Array();

    array.forEach(element => {
        promises.push(fetch("http://api.openweathermap.org/data/2.5/weather?id=" + element + "&units=metric&appid=" + apiKey));

    });


    async function filterData() {

        const resp = await Promise.allSettled(promises);
        const fulfilledArray = [];
        resp.map(objects => {
            if (objects.status === "fulfilled") {
                fulfilledArray.push(objects.value);
            }
        })

        const weather = await Promise.all(fulfilledArray.map((item) => {
            return item.json();
        }))





        var ar2 = new Array();
        try {

            // console.log(new Date(weather[0].dt * 1000).toLocaleTimeString() + " " + weather[0].name + "  weather array time");
            // var first = document.createElement("div");



            // console.log(new Date(JSON.parse(localStorage.getItem("city"))[0].dt * 1000).toLocaleTimeString() + "before add");

            localStorage.setItem("city", JSON.stringify(weather));

            // console.log(new Date(JSON.parse(localStorage.getItem("city"))[0].dt * 1000).toLocaleTimeString() + " after add");
            // console.log("wada........");


        } catch (error) {
            console.log(error);


        }




        if (statBoolean) {

            setDataToFront(weather);

            // console.log("data trueeeeeeeeeeeee");
            // setInterval(function () { setDataToFront(weather) }, 60000 * 5);
        }




    }
    filterData();





}


function setDataToFront(weathers) {




    var index = 1;
    var mainDiv = document.getElementById("weatherSet");

    mainDiv.innerHTML = "";

    // console.log(new Date((weathers[0].dt) * 1000).toLocaleTimeString() + " cit name " + weathers[0].name);

    weathers.forEach(element => {




        // console.log(new Date(element.dt * 1000).toLocaleTimeString() + " print date");
        var first = document.createElement("div");

        if (index == 0 || index % 2 != 0) {
            first.classList = "col-sm-12 col-md-6 col-xl-4 offset-xl-2 mt-5";
        } else {
            first.classList = "col-sm-12 col-md-6 col-xl-4  mt-5";
        }



        var sec = document.createElement("div");
        sec.classList = "card cardColor";
        sec.onclick = () => {
            window.location = "fullPageView.php?id=" + element.id;
        }


        first.appendChild(sec);

        var block1 = document.createElement("div");
        block1.classList = "card-img-overlay";
        sec.appendChild(block1);

        var block1_1 = document.createElement("div");
        block1_1.classList = "row text-light mt-3";

        block1.appendChild(block1_1);
        var block1_1_1 = document.createElement("div");
        block1_1_1.classList = "col-6 text-center";

        block1_1.appendChild(block1_1_1);
        var block1_1_1_child1 = document.createElement("h5");
        block1_1_1_child1.classList = "card-title";
        block1_1_1_child1.innerHTML = element.name + "," + element.sys.country;
        block1_1_1.appendChild(block1_1_1_child1);

        var block1_1_1_child2 = document.createElement("h6");
        var d = new Date(element.dt * 1000);

        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var stat = d.toLocaleTimeString().split(" ");
        block1_1_1_child2.innerHTML = d.getHours() + "." + d.getMinutes() + " " + stat[1] + " " + month[d.getMonth()] + " " + d.getDate();
        block1_1_1.appendChild(block1_1_1_child2);

        var block1_1_1_child3 = document.createElement("span");

        block1_1_1_child3.innerHTML = element.weather[0].description;
        block1_1_1.appendChild(block1_1_1_child3);


        var block1_1_2 = document.createElement("div");
        block1_1_2.classList = "col-6 text-center";

        block1_1.appendChild(block1_1_2);
        var block1_1_2_child1 = document.createElement("h1");
        block1_1_2_child1.classList = "h1";
        block1_1_2_child1.innerHTML = element.main.temp + " &#8451";
        block1_1_2.appendChild(block1_1_2_child1);

        var block1_1_2_child2 = document.createElement("h6");

        block1_1_2.appendChild(block1_1_2_child2);
        block1_1_2_child2.classList = "card-title";
        block1_1_2_child2.style = "font-size:small";
        var block1_1_2_child3 = document.createElement("h6");
        block1_1_2_child3.classList = "h6";
        block1_1_2_child3.style = "font-size:small";
        block1_1_2.appendChild(block1_1_2_child3);

        var sp1 = document.createElement("span");
        sp1.classList = "fw-bold";
        sp1.innerHTML = "Temp Min: ";
        block1_1_2_child2.appendChild(sp1);
        var sp11 = document.createElement("span");

        sp11.innerHTML = element.main.temp_min + " &#8451";
        block1_1_2_child2.appendChild(sp11);

        var sp2 = document.createElement("span");
        sp2.classList = "fw-bold";

        sp2.innerHTML = "Temp Max: ";
        block1_1_2_child3.appendChild(sp2);

        var sp22 = document.createElement("span");

        sp22.innerHTML = element.main.temp_max + " &#8451";
        block1_1_2_child3.appendChild(sp22);

        var cardImg = document.createElement("img");
        cardImg.classList = "card-img-top";
        cardImg.height = "150";
        cardImg.width = "100%";


        var id = index % 5;
        if (id == 0) {
            id = 5;
        }
        cardImg.src = "resources/img/img" + id + ".png";

        sec.appendChild(cardImg);




        var one = document.createElement("div");
        one.classList = "card-body";
        sec.appendChild(one);

        var one_two = document.createElement("div");
        one_two.classList = "row cardTextcolor";
        one.appendChild(one_two);


        var one_two_three = document.createElement("div");
        one_two_three.classList = "col-4 gutter-auto borderSet";

        one_two.appendChild(one_two_three);

        var one_two_three_four = document.createElement("div");
        one_two_three_four.classList = "row";
        one_two_three.appendChild(one_two_three_four);

        var one_two_three_four_five = document.createElement("div");
        one_two_three_four_five.classList = "col-12";
        one_two_three_four.appendChild(one_two_three_four_five);
        var one_two_three_four_five_six = document.createElement("div");
        one_two_three_four_five_six.classList = "row";

        one_two_three_four_five.appendChild(one_two_three_four_five_six);
        var one_two_three_four_five_six_sev = document.createElement("div");
        one_two_three_four_five_six_sev.classList = "col-12";
        one_two_three_four_five_six.appendChild(one_two_three_four_five_six_sev);
        var one_two_three_four_five_six_sev_eight = document.createElement("div");
        one_two_three_four_five_six_sev_eight.classList = "row";
        one_two_three_four_five_six_sev.appendChild(one_two_three_four_five_six_sev_eight);
        var one_two_three_four_five_six_sev_eight_nine = document.createElement("div");
        one_two_three_four_five_six_sev_eight_nine.classList = "col-12";
        one_two_three_four_five_six_sev_eight.appendChild(one_two_three_four_five_six_sev_eight_nine);
        var one_two_three_four_five_six_sev_eight_nine_ten = document.createElement("div");
        one_two_three_four_five_six_sev_eight_nine_ten.classList = "row";
        one_two_three_four_five_six_sev_eight_nine.appendChild(one_two_three_four_five_six_sev_eight_nine_ten);
        var one_two_three_four_five_six_sev_eight_nine_ten_1 = document.createElement("div");
        one_two_three_four_five_six_sev_eight_nine_ten_1.classList = "col-12";
        one_two_three_four_five_six_sev_eight_nine_ten_1.innerHTML = "<b>Pressure:</b> " + element.main.pressure + "hPa";
        one_two_three_four_five_six_sev_eight_nine_ten_1.style = "font-size:small";
        one_two_three_four_five_six_sev_eight_nine_ten.appendChild(one_two_three_four_five_six_sev_eight_nine_ten_1);


        var one_two_three_four_five_six_sev_eight_nine_ten_2 = document.createElement("div");
        one_two_three_four_five_six_sev_eight_nine_ten_2.classList = "col-12";
        one_two_three_four_five_six_sev_eight_nine_ten_2.innerHTML = "<b>Humidity:</b> " + element.main.humidity + "%";

        one_two_three_four_five_six_sev_eight_nine_ten_2.style = "font-size:small";
        one_two_three_four_five_six_sev_eight_nine_ten.appendChild(one_two_three_four_five_six_sev_eight_nine_ten_2);
        var one_two_three_four_five_six_sev_eight_nine_ten_3 = document.createElement("div");
        one_two_three_four_five_six_sev_eight_nine_ten_3.classList = "col-12";
        one_two_three_four_five_six_sev_eight_nine_ten_3.innerHTML = "<b>Visibility:</b> " + (element.visibility / 1000) + "km";
        one_two_three_four_five_six_sev_eight_nine_ten_3.style = "font-size:small";
        one_two_three_four_five_six_sev_eight_nine_ten.appendChild(one_two_three_four_five_six_sev_eight_nine_ten_3);



        // 
        var one_two_three_chi1 = document.createElement("div");
        one_two_three_chi1.classList = "col-4 gutter-auto borderSet";
        one_two.appendChild(one_two_three_chi1);


        var one_two_three_four_chi1 = document.createElement("div");
        one_two_three_four_chi1.classList = "row text-center";

        one_two_three_chi1.appendChild(one_two_three_four_chi1);

        var img = document.createElement("h1");

        img.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/></svg>';
        one_two_three_four_chi1.appendChild(img);


        var under = document.createElement("p");
        under.innerHTML = element.wind.speed + "m/s " + element.wind.deg + " Degree";
        under.style = " font-size: small";
        one_two_three_four_chi1.appendChild(under);

        // 

        var one_two_three_chi2 = document.createElement("div");
        one_two_three_chi2.classList = "col-4 gutter-auto ";
        one_two.appendChild(one_two_three_chi2);




        var one_two_three_four_chi2 = document.createElement("div");
        one_two_three_four_chi2.classList = "row";
        one_two_three_chi2.appendChild(one_two_three_four_chi2);

        var one_two_three_four_five_chi2 = document.createElement("div");
        one_two_three_four_five_chi2.classList = "col-12";
        one_two_three_four_chi2.appendChild(one_two_three_four_five_chi2);
        var one_two_three_four_five_six_chi2 = document.createElement("div");
        one_two_three_four_five_six_chi2.classList = "row";

        one_two_three_four_five_chi2.appendChild(one_two_three_four_five_six_chi2);
        var one_two_three_four_five_six_sev_chi2 = document.createElement("div");
        one_two_three_four_five_six_sev_chi2.classList = "col-12";
        one_two_three_four_five_six_chi2.appendChild(one_two_three_four_five_six_sev_chi2);
        var one_two_three_four_five_six_sev_eight_chi2 = document.createElement("div");
        one_two_three_four_five_six_sev_eight_chi2.classList = "row";
        one_two_three_four_five_six_sev_chi2.appendChild(one_two_three_four_five_six_sev_eight_chi2);
        var one_two_three_four_five_six_sev_eight_nine_chi2 = document.createElement("div");
        one_two_three_four_five_six_sev_eight_nine_chi2.classList = "col-12";
        one_two_three_four_five_six_sev_eight_chi2.appendChild(one_two_three_four_five_six_sev_eight_nine_chi2);
        var one_two_three_four_five_six_sev_eight_nine_ten_chi2 = document.createElement("div");
        one_two_three_four_five_six_sev_eight_nine_ten_chi2.classList = "row text-center mt-2";
        one_two_three_four_five_six_sev_eight_nine_chi2.appendChild(one_two_three_four_five_six_sev_eight_nine_ten_chi2);
        var one_two_three_four_five_six_sev_eight_nine_ten_1_chi2 = document.createElement("div");
        one_two_three_four_five_six_sev_eight_nine_ten_1_chi2.classList = "col-12 ";


        var sunR = new Date(element.sys.sunrise * 1000);

        one_two_three_four_five_six_sev_eight_nine_ten_1_chi2.innerHTML = "<b>Sunrise:</b> " + sunR.getHours() + "." + sunR.getMinutes() + " " + sunR.toLocaleTimeString().split(" ")[1];
        one_two_three_four_five_six_sev_eight_nine_ten_1_chi2.style = "font-size:small";
        one_two_three_four_five_six_sev_eight_nine_ten_chi2.appendChild(one_two_three_four_five_six_sev_eight_nine_ten_1_chi2);

        var sunS = new Date(element.sys.sunset * 1000);
        var one_two_three_four_five_six_sev_eight_nine_ten_2_chi2 = document.createElement("div");
        one_two_three_four_five_six_sev_eight_nine_ten_2_chi2.classList = "col-12";
        one_two_three_four_five_six_sev_eight_nine_ten_2_chi2.innerHTML = "<b>Sunset:</b> " + sunS.getHours() + "." + sunS.getMinutes() + " " + sunS.toLocaleTimeString().split(" ")[1];

        one_two_three_four_five_six_sev_eight_nine_ten_2_chi2.style = "font-size:small";
        one_two_three_four_five_six_sev_eight_nine_ten_chi2.appendChild(one_two_three_four_five_six_sev_eight_nine_ten_2_chi2);

        // 
        sec.appendChild(one);
        mainDiv.appendChild(first);


        index++;
    });

}

function fullView(cit_id) {
    looper(cit_id);
    setInterval(function () { looper(cit_id) }, 60000 * 5);


}

function looper(cit_id) {


    var arr = localStorage.getItem("city");
    var js = JSON.parse(arr);


    if (arr == null) {
        window.location = "index.php";
    }

    for (let i = 0; i < js.length; i++) {

        // console.log(js.length);
        // console.log(js[i]);


        if (js[i].id == cit_id) {


            document.getElementById("country").innerHTML = js[i].name + "," + js[i].sys.country;


            var d = new Date(js[i].dt * 1000);

            var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var stat = d.toLocaleTimeString().split(" ");


            document.getElementById("time").innerHTML = d.getHours() + "." + d.getMinutes() + " " + stat[1] + " " + month[d.getMonth()] + " " + d.getDate();



            document.getElementById("desc").innerHTML = js[i].weather[0].description;



            document.getElementById("tem").innerHTML = js[i].main.temp + " &#8451";
            document.getElementById("tem_min").innerHTML = js[i].main.temp_min + " &#8451";
            document.getElementById("tem_max").innerHTML = js[i].main.temp_max + " &#8451";

            document.getElementById("press").innerHTML = js[i].main.pressure + "hPa";
            document.getElementById("hum").innerHTML = js[i].main.humidity + "%";
            document.getElementById("vis").innerHTML = (js[i].visibility / 1000) + "km";



            var sunR = new Date(js[i].sys.sunrise * 1000);

            document.getElementById("sr").innerHTML = sunR.getHours() + "." + sunR.getMinutes() + " " + sunR.toLocaleTimeString().split(" ")[1];

            var sunS = new Date(js[i].sys.sunset * 1000);

            document.getElementById("ss").innerHTML = sunS.getHours() + "." + sunS.getMinutes() + " " + sunS.toLocaleTimeString().split(" ")[1];

            document.getElementById("win").innerHTML = js[i].wind.speed + "m/s " + js[i].wind.deg + " Degree";


            // var tr = document.createElement("tr");


            // var td1 = document.createElement("td");
            // var d = new Date(js[i].dt * 1000);
            // var stat = d.toLocaleTimeString().split(" ");

            // td1.innerHTML = d.getHours() + "." + d.getMinutes() + "." + " " + stat[1];
            // tr.appendChild(td1);

            // var td2 = document.createElement("td");
            // td2.innerHTML = js[i].main.pressure + "hPa" + "</br>" + js[i].main.humidity + "%" + "</br>" + (js[i].visibility / 1000) + "km";
            // tr.appendChild(td2);

            // var td3 = document.createElement("td");
            // td3.innerHTML = js[i].main.temp + " &#8451";
            // tr.appendChild(td3);

            // var td4 = document.createElement("td");
            // td4.innerHTML = js[i].weather[0].description;
            // tr.appendChild(td4);


            // tl.appendChild(tr);


        }

    }



}

function back() {
    history.back();
}

