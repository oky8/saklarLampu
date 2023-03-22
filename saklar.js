function saklar(action, lamp) {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  let toggle4 = document.getElementById("default-toggle4");
  let toggle5 = document.getElementById("default-toggle5");
  let toggle6 = document.getElementById("default-toggle6");
  let toggle7 = document.getElementById("default-toggle7");
  let toggle8 = document.getElementById("default-toggle8");
  let toggle9 = document.getElementById("default-toggle9");
  let toggle10 = document.getElementById("default-toggle10");
  //   toggle lampu untuk ruang keluarga
  let togglekel = document.getElementById("default-togglekel");
  //  toggle lampu untuk makan
  let togglemakan = document.getElementById("default-togglemakan");
// toggle untuk lampu tidur
let toggletidur = document.getElementById("default-toggletidur")
// toggle untuk lampu tamu
let toggletamu = document.getElementById("default-toggletamu")


  let lompu1 = document.getElementById("lompu1");
  let lompu2 = document.getElementById("lompu2");
  let lompu3 = document.getElementById("lompu3");
  let lompu4 = document.getElementById("lompu4");
  let lompu5 = document.getElementById("lompu5");
  let lompu6 = document.getElementById("lompu6");
  let lompu7 = document.getElementById("lompu7");
  let lompu8 = document.getElementById("lompu8");
  let lompu9 = document.getElementById("lompu9");
  let lompu10 = document.getElementById("lompu10");
  // lampu keluarga
  let lampukel = document.getElementById("lampukel");
  //lampu makan
  let lampumakan = document.getElementById("lampumakan");
// lampu tidur
let lamputidur = document.getElementById("lamputidur")
// lampu tamu
let lamputamu = document.getElementsByName("lamputamu")

  if (toggle1.checked) {
    lompu1.src = "./assets/images/on.gif";
  } else {
    lompu1.src = "./assets/images/off.gif";
  }

  if (toggle2.checked) {
    lompu2.src = "./assets/images/on.gif";
  } else {
    lompu2.src = "./assets/images/off.gif";
  }

  if (toggle3.checked) {
    lompu3.src = "./assets/images/on.gif";
  } else {
    lompu3.src = "./assets/images/off.gif";
  }

  if (toggle4.checked) {
    lompu4.src = "./assets/images/on.gif";
  } else {
    lompu4.src = "./assets/images/off.gif";
  }

  if (toggle5.checked) {
    lompu5.src = "./assets/images/on.gif";
  } else {
    lompu5.src = "./assets/images/off.gif";
  }

  if (toggle6.checked) {
    lompu6.src = "./assets/images/on.gif";
  } else {
    lompu6.src = "./assets/images/off.gif";
  }

  if (toggle7.checked) {
    lompu7.src = "./assets/images/on.gif";
  } else {
    lompu7.src = "./assets/images/off.gif";
  }

  if (toggle8.checked) {
    lompu8.src = "./assets/images/on.gif";
  } else {
    lompu8.src = "./assets/images/off.gif";
  }

  if (toggle9.checked) {
    lompu9.src = "./assets/images/on.gif";
  } else {
    lompu9.src = "./assets/images/off.gif";
  }

  if (toggle10.checked) {
    lompu10.src = "./assets/images/on.gif";
  } else {
    lompu10.src = "./assets/images/off.gif";
  }

  if (togglekel.checked) {
    lampukel1.src = "./assets/images/on.gif";
    lampukel2.src = "./assets/images/on.gif";
    lampukel3.src = "./assets/images/on.gif";
  } else {
    lampukel1.src = "./assets/images/off.gif";
    lampukel2.src = "./assets/images/off.gif";
    lampukel3.src = "./assets/images/off.gif";
  }

  if (togglemakan.checked) {
    lampumakan.src = "./assets/images/on.gif";
  } else {
    lampumakan.src = "./assets/images/off.gif";
  }

  if (toggletidur.checked) {
    lamputidur1.src = "./assets/images/on.gif";
    lamputidur2.src = "./assets/images/on.gif";
  }else{
    lamputidur1.src = "./assets/images/off.gif";
    lamputidur2.src = "./assets/images/off.gif";
  }

  if (toggletamu.checked) {
    lamputamu1.src = "./assets/images/on.gif";
    lamputamu2.src = "./assets/images/on.gif";
    lamputamu3.src = "./assets/images/on.gif";
    lamputamu4.src = "./assets/images/on.gif";
  }else{
    lamputamu1.src = "./assets/images/off.gif";
    lamputamu2.src = "./assets/images/off.gif";
    lamputamu3.src = "./assets/images/off.gif";
    lamputamu4.src = "./assets/images/off.gif";
  }
}
