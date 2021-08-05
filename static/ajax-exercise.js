"use strict";


// PART 1: SHOW A FORTUNE

// function showFortune(evt) {
//     $.get('/fortune', (res) => {
//         $("#fortune-text").html(res);
//     }); 


//     // TODO: get the fortune and show it in the #fortune-text div

// }

// $('#get-fortune-button').on('click', showFortune);

$('#get-fortune-button').on('click', (evt) => {
    $.get('/fortune', (res) => {
        $("#fortune-text").html(res);
    }); 

});





// PART 2: SHOW WEATHER

// function showWeather(evt) {
//     evt.preventDefault();

//     let url = "/weather.json";
//     let formData = {"zipcode": $("#zipcode-field").val()};

//     $.get(url, formData, (res) => {
//         console.log(res)
//         $("#weather-info").html(res.forecast);
//     });


//     // TODO: request weather with that URL and show the forecast in #weather-info
// }

// $("#weather-form").on('submit', showWeather);

$("#weather-form").on('submit', (evt) => {
    evt.preventDefault();
    const url = "/weather.json";
    const formData = $('#weather-form').serialize();

    $.get(url, formData, (res) => {
        $("#weather-info").html(res.forecast);
    });

});




// PART 3: ORDER MELONS

// function orderMelons(evt) {
//     evt.preventDefault();

//     // TODO: show the result message after your form
//     // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

//     const formInput = {
//         'qty': $("#qty-field").val(),
//         'melon_type':$("#melon-type-field").val()
//     };

//     $.post('/order-melons.json', formInput, (res) => {
//         const orderStatus = $("#order-status");
//         if (res.code === 'OK') {
//             orderStatus.removeClass('order-error').html(res.msg);
//         }
//         else {
//             orderStatus.addClass('order-error').html(res.msg);

//         };
//     });

// }

// $("#order-form").on('submit', orderMelons);

$("#order-form").on('submit', (evt) => {
    evt.preventDefault();
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    // const formInput = {
    //     'qty': $("#qty-field").val(),
    //     'melon_type':$("#melon-type-field").val()
    // };
    const formInput = $('#order-form').serialize();

    $.post('/order-melons.json', formInput, (res) => {
        const orderStatus = $("#order-status");
        if (res.code === 'OK') {
            orderStatus.removeClass('order-error').html(res.msg);
        }
        else {
            orderStatus.addClass('order-error').html(res.msg);

        };
    });

});



