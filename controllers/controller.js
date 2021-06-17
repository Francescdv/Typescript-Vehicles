"use strict";
/*
function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    document.body.innerText = "CAR: PLATE: " + car.plate
        + " COLOR: " + car.color + " BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}

*/
var arrayCars = [];
var inputCar = document.querySelector('#inputCar');
var inputWheels = document.querySelector('#inputWheels');
var plate;
var brand;
var color;
var car;
var marca;
var diametro;
var wheel;
var table;
var createTableV;
var btnNewCar;
function createCar() {
    plate = document.querySelector('#plate');
    brand = document.querySelector('#brand');
    color = document.querySelector('#color');
    inputCar = document.querySelector('#inputCar');
    inputWheels = document.querySelector('#inputWheels');
    var token = 1;
    var acumErrores = 0;
    if (plate.value == "") {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    else if (!validar_plate(plate.value)) {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "La matrícula no cumple el formato 0000ASD";
        acumErrores++;
    }
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        document.getElementById("errorBrand").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    if (color.value == "") {
        color.classList.add("is-invalid");
        document.getElementById("errorColor").textContent = "El campo es obligatorio";
        acumErrores++;
    }
    if (acumErrores == 0) {
        for (var i = 0; i < arrayCars.length; i++) {
            if (plate.value == arrayCars[i].plate) {
                plate.classList.add("is-invalid");
                document.getElementById("errorPlate").textContent = "La matrícula ya existe";
                token = 0;
            }
        }
        if (token == 1) {
            car = new Car(plate.value, brand.value, color.value);
            arrayCars.push(car);
            inputCar.classList.add("d-none");
            inputWheels.classList.remove("d-none");
        }
    }
}
function createWheels() {
    createTableV = document.querySelector('#table-container');
    var acumErrores = 0;
    for (var a = 1; a <= 4; a++) {
        marca = document.querySelector('#marca' + a);
        diametro = document.querySelector('#diametro' + a);
        if (marca.value == "") {
            marca.classList.add("is-invalid");
            document.getElementById("errorMarca" + a).textContent = "El campo es obligatorio";
            acumErrores++;
        }
        if (diametro.value == "") {
            diametro.classList.add("is-invalid");
            document.getElementById("errorDiametro" + a).textContent = "El campo es obligatorio";
            acumErrores++;
        }
        else if (diametro.value > 4 || diametro.value < 0.4) {
            diametro.classList.add("is-invalid");
            document.getElementById("errorDiametro" + a).textContent = "Introduce un valor entre 0.4 y el 4.";
            acumErrores++;
        }
    }
    if (acumErrores == 0) {
        for (var i = 1; i <= 4; i++) {
            marca = document.querySelector('#marca' + i);
            diametro = document.querySelector('#diametro' + i);
            wheel = new Wheel(diametro.value, marca.value);
            arrayCars[arrayCars.length];
            car.addWheel(wheel);
        }
        inputWheels.classList.add("d-none");
        createTable();
        createTableV.classList.remove("d-none");
    }
}
function validar_plate(plate) {
    var regex = /^([0-9]{4})([a-z]{3})$/i;
    return regex.test(plate) ? true : false;
}
function createTable() {
    var cotxeEspecific;
    table = "<table><thead><tr><th>Matrícula</th><th>Marca</th><th>Color</th><th>Marca Rueda 1</th><th>Diametro rueda 1</th></th><th>Marca Rueda 2</th><th>Diametro rueda 2</th><th>Marca Rueda 3</th><th>Diametro rueda 3</th><th>Marca Rueda 4</th><th>Diametro rueda 4</th></tr><thead>";
    for (var i = 0; i < arrayCars.length; i++) {
        cotxeEspecific = arrayCars[i];
        table += "<tr><td>" + cotxeEspecific.plate + "</td><td>" + cotxeEspecific.brand + "</td><td>" + cotxeEspecific.color + "</td><td>" + cotxeEspecific.wheels[0].brand + "</td><td>" + cotxeEspecific.wheels[0].diameter + "</td><td>" + cotxeEspecific.wheels[1].brand + "</td><td>" + cotxeEspecific.wheels[1].diameter + "</td><td>" + cotxeEspecific.wheels[2].brand + "</td><td>" + cotxeEspecific.wheels[2].diameter + "</td><td>" + cotxeEspecific.wheels[3].brand + "</td><td>" + cotxeEspecific.wheels[3].diameter + "</td></tr>";
    }
    table += "</table>";
    var resultat = document.getElementById("table");
    resultat.innerHTML = table;
}
function newCar() {
    createTableV = document.querySelector('#table-container');
    plate = document.querySelector('#plate');
    brand = document.querySelector('#brand');
    color = document.querySelector('#color');
    plate.value = "";
    brand.value = "";
    color.value = "";
    for (var a = 1; a <= 4; a++) {
        marca = document.querySelector('#marca' + a);
        diametro = document.querySelector('#diametro' + a);
        marca.value = "";
        diametro.value = "";
    }
    inputCar.classList.remove("d-none");
    createTableV.classList.add("d-none");
}
inputCar.addEventListener('blur', function (event) {
    console.log(event);
    if (event.target.value != '')
        event.target.classList.remove('is-invalid');
    createCar();
}, true);
inputWheels.addEventListener('blur', function (event) {
    console.log(event);
    if (event.target.value != '')
        event.target.classList.remove('is-invalid');
    createWheels();
}, true);
