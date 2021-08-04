"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get('/fortune', (res) => {
        $("#fortune-text").html(res);
    }); 


    // TODO: get the fortune and show it in the #fortune-text div

}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
        console.log(res)
        $("#weather-info").html(res.forecast);
    });


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    const formInput = {
        'qty': $("#qty-field").val(),
        'melon_type':$("#melon-type-field").val()
    };

    $.post('/order-melons.json', formInput, (res) => {
        if (res.code === 'OK') {
            $("#order-status").removeClass('order-error').html(res.msg);
        }
        else {
            $("#order-status").addClass('order-error').html(res.msg);

        };
    });

}

$("#order-form").on('submit', orderMelons);


