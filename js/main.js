var cantOfVideos = 27;
function selectVideo(videoId) {
    $('#home').hide();
    $('#techContainers').hide();
    $('#videos').show();
    for (var i = 1; i < cantOfVideos + 1; i++) {
        $('#video' + i).hide();
    }
    $('#video' + videoId).show(500);

}

function googleSearch() {
    var q = $("#query").val();
    var googleEndPoint = 'https://www.google.com.co/#q=';
    window.open(googleEndPoint + q);
}

function sendName() {
    $('#video8-container').hide();
    var container = $('#video8-output2');
    container.html("El nombre ingresado es: " + $('#name').val());
    $('#video8-container').show(500);
}

function sendNameAndAge() {
    $('#video13-container').hide();
    var container = $('#video13-output2');
    var estado = $('#age2').val() > 17 ? "mayor de edad" : "menor de edad";
    container.html("El nombre ingresado es: " + $('#name2').val() + "<br>" + "es " + estado);
    $('#video13-container').show(500);
}

function sendNameAndRadios() {
    $('#video14-container').hide();
    var container = $('#video14-output2');
    var valor = $('input[name=radioEstudios]:checked').val();
    var texto = "";
    if (valor == 1) {texto = 'no tiene estudios'}
    if (valor == 2) {texto = 'tiene Estudios Primarios'}
    if (valor == 3) {texto = 'tiene estudios secundarios'}
    container.html($('#name3').val() + " " + texto);
    $('#video14-container').show(500);
}

function sumNumbers() {
    $('#video15-container').hide();
    var container = $('#video15-output2');
    var operacion = $('input[name=radioSuma]:checked').val();
    var n1 = parseInt($('#idSumNumber1').val());
    var n2 = parseInt($('#idSumNumber2').val());
    var resultado = operacion == 'sumar' ? (n1 + n2) : (n1 - n2);
    container.html('Operacion: ' + operacion + " Resultado = " + resultado);
    $('#video15-container').show(500);
}

function sumNumbersCheckBoxes() {
    $('#video16-container').hide();
    var container = $('#video16-output2');
    var sumar = $('#idSumar10').is(':checked');
    var restar = $('#idRestar10').is(':checked');
    var n1 = parseInt($('#idSumNumber10_1').val());
    var n2 = parseInt($('#idSumNumber10_2').val());

    var sum = 0,sub = 0;
    var text = '';
    if (sumar) {
        sum = n1 + n2;
        text += ' la suma es : ' + sum ;
    }
    if (restar) {
        sub = n1 - n2;
        text += ' la resta es : ' + sub ;
    }

    container.html(text);
    $('#video16-container').show(500);

}

function getMedian () {
    $('#video17-container').hide();
    var container = $('#video17-output2');
    var values = $('#inputMedian').val().split(",");
    container.html("La mediana es: " + math.median(values));
    $('#video17-container').show(500);
}

function getMode () {
    $('#video18-container').hide();
    var container = $('#video18-output2');
    var values = $('#inputMode').val().split(",");
    container.html("La moda es: " + math.mode(values));
    $('#video18-container').show(500);
}



function toggleContent(id) {
    $('#videos').hide();
    $('#home').hide(500);
    $('#techContainers').show();
    $('#' + id).toggle(500);
}

$.ajax('videos/video1.php')
    .done(function (msg) {
        $('#video1-output').html(msg);
    });
$.ajax('videos/video2.php')
    .done(function (msg) {
        $('#video2-output').html(msg);
    });
$.ajax('videos/video3.php')
    .done(function (msg) {
        $('#video3-output').html(msg);
    });
$.ajax('videos/video4.php')
    .done(function (msg) {
        $('#video4-output').html(msg);
    });
$.ajax('videos/video5.php')
    .done(function (msg) {
        $('#video5-output').html(msg);
    });
$.ajax('videos/video6.php')
    .done(function (msg) {
        $('#video6-output').html(msg);
    });
$.ajax('videos/video7.php')
    .done(function (msg) {
        $('#video7-output').html(msg);
    });
$.ajax('videos/video8.php')
    .done(function (msg) {
        $('#video8-output').html(msg);
    });
$.ajax('videos/video3_1.php')
    .done(function (msg) {
        $('#video9-output').html(msg);
    });
$.ajax('videos/video6_1.php')
    .done(function (msg) {
        $('#video10-output').html(msg);
    });
$.ajax('videos/video7_1.php')
    .done(function (msg) {
        $('#video11-output').html(msg);
    });
$.ajax('videos/video7_2.php')
    .done(function (msg) {
        $('#video12-output').html(msg);
    });
$.ajax('videos/video8_1.php')
    .done(function (msg) {
        $('#video13-output').html(msg);
    });
$.ajax('videos/video9.php')
    .done(function (msg) {
        $('#video14-output').html(msg);
    });
$.ajax('videos/video9_1.php')
    .done(function (msg) {
        $('#video15-output').html(msg);
    });
$.ajax('videos/video10.php')
    .done(function (msg) {
        $('#video16-output').html(msg);
    });
/*TALLER*/
$.ajax('taller/median_form.php')
    .done(function (msg) {
        $('#video17-output').html(msg);
    });
$.ajax('taller/moda_form.php')
    .done(function (msg) {
        $('#video18-output').html(msg);
    });