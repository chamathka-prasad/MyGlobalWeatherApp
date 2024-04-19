<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>View</title>
    <link rel="icon" href="resources/img/sun.png" />
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>

<body class="back" onload="fullView(<?php echo $_GET['id'] ?>)">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mt-5">
                <div class="row">
                    <div class="col-8 offset-2 text-center fw-bold text-light">
                        <img src="resources/img/sun.png" style="width: auto; height: 60px" />
                        Weather App
                    </div>
                </div>
            </div>
        </div>
        <div class="row">


            <div class="col-sm-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3 mt-3  mt-5">




                <div class="card carr ">


                    <div class="card-img-overlay">
                        <div class="row text-start" style="position: absolute;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi cs bi-arrow-left" viewBox="0 0 16 16" onclick="back()">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                            </svg>
                        </div>
                        <div class="row text-light ">
                            <div class="col-12 text-center">
                                <h5 class="card-title" id="country">Country</h5>
                                <h6 class="h6" id="time">Date and time</h6>
                            </div>
                            <div class="col-6 text-end p-3" style="font-size: medium;vertical-align:middle;">


                                <h6 class="h6 m-4" id="desc">Image</h6>
                            </div>
                            <div class="col-6 text-start p-3">
                                <h1 class="h1" id="tem">Celcius</h1>
                                <h6 class="card-title" style="font-size: small;" id="tem_min">Temp min</h5>
                                    <h6 class="h6" style="font-size: small;" id="tem_max">temp max</h6>

                            </div>
                        </div>


                    </div>
                    <img src="resources/img/img1.png" class="card-img-top" height="200" width="100%" alt="...">
                    <div class="card-body ">
                        <div class="row cardTextcolor">
                            <div class="col-4 gutter-auto borderSet">
                                <div class="row ">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-12 " style="font-size:small; "><span class="fw-bold">Pressure :</span><span id="press"></span></div>
                                                            <div class="col-12 " style="font-size:small;"><span class="fw-bold">Humidity :</span><span id="hum"></span></div>
                                                            <div class="col-12" style="font-size:small;"><span class="fw-bold">Visibiliy :</span><span id="vis"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>




                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div class="col-4 gutter-auto borderSet">
                                <div class="row ">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="row text-center">
                                                            <div class="col-12 ">
                                                                <h1 class="h1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                                                                    </svg>


                                                                </h1>
                                                            </div>
                                                            <div class="col-12 " style="font-size:small; "><span id="win"></span></div>

                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>




                                    </div>
                                </div>

                            </div>



                            <div class="col-4 gutter-auto">
                                <div class="row ">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="row">
                                                            <div class="col-12 " style="font-size:small; "><span class="fw-bold">SunRise :</span><span id="sr"></span></div>
                                                            <div class="col-12 " style="font-size:small;"><span class="fw-bold">SunSet :</span><span id="ss"></span></div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>




                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="row mt-5" style="margin-bottom: 250px;">
        <div class="col-12 text-center">
            <table class="table table-striped table-hover">
                <thead class="bg-body-secondary">
                    <th>Time</th>
                    <th>Pressure/Humidity/Visibility</th>
                    <th>Temp</th>
                    <th>Description</th>

                </thead>
                <tbody id="tableLoad">


                </tbody>
            </table>
        </div>

    </div>
    </div>

    <script src="js/script.js"></script>
</body>

</html>