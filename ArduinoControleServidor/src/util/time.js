exports.getHorario = function(){
    var data = new Date();

    var dia = 0;
    (parseInt(data.getDate()) < 10) ? (dia = ("0" + data.getDate())) : (dia = data.getDate());

    var mes = 0;
    (parseInt(data.getMonth()) < 9) ? (mes = ("0" + (data.getMonth()+1))) : (mes = data.getMonth()+1);

    var horas = 0;
    (parseInt(data.getHours()) < 10) ? (horas = ("0" + data.getHours())) : (horas = data.getHours());

    var minutos = 0;
    (parseInt(data.getMinutes()) < 10) ? (minutos = ("0" + data.getMinutes())) : (minutos = data.getMinutes());

    var segundos = 0;
    (parseInt(data.getSeconds()) < 10) ? (segundos = ("0" + data.getSeconds())) : (segundos = data.getSeconds());

    return(dia + "/" + mes +"/"+ data.getFullYear() + " - " + horas + ":" + minutos + ":" + segundos);
}

exports.getKey = function(){
    var data = new Date();

    var dia = 0;
    (parseInt(data.getDate()) < 10) ? (dia = ("0" + data.getDate())) : (dia = data.getDate());

    var mes = 0;
    (parseInt(data.getMonth()) < 9) ? (mes = ("0" + (data.getMonth()+1))) : (mes = data.getMonth()+1);

    var horas = 0;
    (parseInt(data.getHours()) < 10) ? (horas = ("0" + data.getHours())) : (horas = data.getHours());

    var minutos = 0;
    (parseInt(data.getMinutes()) < 10) ? (minutos = ("0" + data.getMinutes())) : (minutos = data.getMinutes());

    var segundos = 0;
    (parseInt(data.getSeconds()) < 10) ? (segundos = ("0" + data.getSeconds())) : (segundos = data.getSeconds());

    return(data.getFullYear() + mes + dia + horas + minutos + segundos);
}