document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX + window.scrollX + "px"
  );
  document.documentElement.style.setProperty(
    "--y",
    e.clientY + window.scrollY + "px"
  );
};

var blob = document.getElementById("blob");
var glass = document.getElementById("glass");

document.body.onmousemove = function (e) {
  //   blob.style.left = e.clientX + window.scrollX + "px";
  //   blob.style.top = e.clientY + window.scrollY + "px";

  blob.style.left = e.pageX + "px";
  blob.style.top = e.pageY + "px";
};

var bodyEl = document.getElementById("bodyElement");
var blobpicker = document.getElementById("blobpicker");
var glasspicker = document.getElementById("glasspicker");
var transparency = document.getElementById("transparency");
var hideCursor = document.getElementById("hideCursor");
var glassBlur = document.getElementById("blur");
var transparencyOutput = document.getElementById("transparencyOutput");
var blurOutput = document.getElementById("blurOutput");

function hideCursorFunction() {
  if (hideCursor.checked) {
    bodyEl.style.cursor = "none";
  } else {
    bodyEl.style.cursor = "unset";
  }
}

function showCursor() {
  bodyEl.style.cursor = "unset";
}

function rehideCursor() {
  if (hideCursor.checked) {
    bodyEl.style.cursor = "none";
  }
}

glassBlur.addEventListener("input", function () {
  var blurRad = glassBlur.value;
  glass.style.backdropFilter = "blur(" + blurRad + "px)";
  blurOutput.innerHTML = blurRad + "px";
});

blobpicker.addEventListener("input", function () {
  var blobcolor = blobpicker.value;
  blob.style.backgroundColor = blobcolor;
});

glasscolor = "#5143a3";

transparency.addEventListener("input", function () {
  var transparencyValue = transparency.value;
  var argbValue = transparencyValue / 100;

  a = Math.round(argbValue * 255).toString(16);
  console.log(transparencyValue);
  transparencyOutput.innerHTML = transparencyValue + "%";
  glass.style.backgroundColor = glasscolor + a;
});

glasspicker.addEventListener("input", function () {
  var glasscolor = glasspicker.value;
  glass.style.backgroundColor = glasscolor + a;

  transparency.addEventListener("input", function () {
    var transparencyValue = transparency.value;
    transparencyValue /= 100;

    a = Math.round(transparencyValue * 255).toString(16);

    console.log(transparencyValue);
    glass.style.backgroundColor = glasscolor + a;
  });
});
