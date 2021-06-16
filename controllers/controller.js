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
var inputCar;
var inputWheels;
var plate;
var brand;
var color;
var car;
var marca;
var diametro;
var wheel;
var table;
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
                window.alert("Aquest cotxe ja existeix");
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
    inputCar = document.querySelector('#inputCar');
    inputWheels = document.querySelector('#inputWheels');
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
            document.getElementById("errorDiametro" + a).textContent = "Has de introducir un valor entre 0.4 y el 4.";
            acumErrores++;
        }
    }
    if (acumErrores == 0) {
        for (var i = 1; i <= 4; i++) {
            marca = document.querySelector('#marca' + i);
            diametro = document.querySelector('#diametro' + i);
            wheel = new Wheel(diametro.value, marca.value);
            arrayCars[arrayCars.length]; //donar-hi més voltes
            car.addWheel(wheel);
        }
        inputWheels.classList.add("d-none");
    }
}
function validar_plate(plate) {
    var regex = /^([0-9]{4})([a-z]{3})$/i;
    return regex.test(plate) ? true : false;
}
createTable();
function createTable() {
    table = "<thead><tr><th>Matrícula</th><td>Marca</th><td>Color</th><th>Marca Rueda 1</th><th>Diametro rueda 1</th></th><th>Marca Rueda 2</th><th>Diametro rueda 2</th><th>Marca Rueda 3</th><th>Diametro rueda 3</th><th>Marca Rueda 4</th><th>Diametro rueda 4</th><thead>";
    document.querySelector("#table").innerHTML = table;
}
