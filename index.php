<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Weather monitor</title>
    <link rel="icon" href="resources/img/sun.png">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body class="back" onload="turnOn()">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mt-5">
                <div class="row">

                    <div class="col-8 offset-2 text-center fw-bold text-light"> <img src="resources/img/sun.png"
                            style="width: auto; height: 60px;" /> Weather App</div>
                    <div class="col-lg-6 offset-lg-3 col-10 offset-1 text-center">
                        <div class="input-group mt-5 mb-3">
                            <input type="text" class="form-control" placeholder="Enter a City"
                                aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary btnColorChange" type="button"
                                id="button-addon2">Add City</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" id="weatherSet">




        </div>

    </div>

    <script src="js/script.js"></script>
</body>

</html>