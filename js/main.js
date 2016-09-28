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

function getMax () {
    $('#video19-container').hide();
    var container = $('#video19-output2');
    var values = $('#inputMax').val().split(",");
    container.html("El m&aacute;ximo es: " + math.max(values));
    $('#video19-container').show(500);
}

function getMin () {
    $('#video20-container').hide();
    var container = $('#video20-output2');
    var values = $('#inputMin').val().split(",");
    container.html("El m&iacute;nimo es: " + math.min(values));
    $('#video20-container').show(500);
}

function concat () {
    $('#video22-container').hide();
    var container = $('#video22-output2');
    var values = $('#inputConcat').val().split(",");
    container.html("Los valores concatenados son: " + values.join(' '));
    $('#video22-container').show(500);
}

//TODO: Contar Si

function repeat () {
    $('#video23-container').hide();
    var container = $('#video23-output2');
    var text = $('#inputRepeatText').val();
    var number = $('#inputRepeatNumber').val();
    var result = '';
    for (var c=0; c<number; c++){
        result +=text;
    }
    container.html("Los valores repetidos son: " + result);
    $('#video23-container').show(500);
}

function extract () {
    $('#video24-container').hide();
    var container = $('#video24-output2');
    var text = $('#inputExtractText').val();
    var position = $('#inputExtractPosition').val();
    var len = $('#inputExtractLen').val();

    container.html("La subcadena extraida es: " + text.substr(position,len));
    $('#video24-container').show(500);
}

function isText () {
    $('#video25-container').hide();
    var container = $('#video25-output2');
    var text = $('#inputIsText').val();
    var validation = (text.match(/[^a-zA-Z]/) )? 'No' : 'Si';
    container.html("La cadena es texto? " + validation );
    $('#video25-container').show(500);
}


function toggleContent(id) {
    $('#videos').hide();
    $('#home').hide(500);
    $('#techContainers').show();
    $('#' + id).toggle(500);
}

