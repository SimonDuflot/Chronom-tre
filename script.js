//Les variables
let sp, btnStart, btnStop, t, ms, s, mn, h;

//fonction pour initialiser les variables quand la page se charge

window.onload = function () {
  sp = document.getElementsByTagName("span");
  btnStart = document.getElementById("start");
  btnStop = document.getElementById("stop");
  t;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
};

//mettre en place le compteur

function updateChrono() {
  ms += 1;
  if (ms == 10) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }
  //insertion des valeurs dans les spans
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "mn";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}

//fonction du bouton start
const start = () => {
  t = setInterval(updateChrono, 100);
  btnStart.disabled = true;
};

//fonction du bouton stop
const stop = () => {
  clearInterval(t);
  btnStart.disabled = false;
};

//fonction du bouton reset
function reset() {
  clearInterval(t);
  btnStart.disabled = false;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "mn";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
