//THX to http://glench.com/hash/ for the idea and the better way to do this!
step=0
beat=0
starttime=Date.now()
width=60

sup={
  "a":"\u1D43",
  "b":"\u1D47",
  "c":"\u1D9C",
  "d":"\u1D48",
  "e":"\u1D49",
  "f":"\u1DA0",
  "g":"\u1D4D",
  "h":"\u02B0",
  "i":"\u2071",
  "j":"\u02B2",
  "k":"\u1D4F",
  "l":"\u02E1",
  "m":"\u1D50",
  "n":"\u207F",
  "o":"\u1D52",
  "p":"\u1D56",
  "r":"\u02B3",
  "s":"\u02E2",
  "t":"\u1D57",
  "u":"\u1D58",
  "v":"\u1D5B",
  "w":"\u02B7",
  "x":"\u02E3",
  "y":"\u02B8",
  "z":"\u1DBB",
}

function updateclock(){

  deltat=Date.now()-starttime
  step=Math.floor(deltat/33)
  beat=Math.floor(deltat/344.8276)
}

function repeat(pattern, count) {
  if (count < 1) return '';
  var result = '';
  while (count > 1) {
    if (count & 1) result += pattern;
    count >>= 1, pattern += pattern;
  }
  return result + pattern;
}

loadingframes = [
  '(\\\u00B0-\u00B0)\\ \u252C\u2500\u252C',
  '(\\\u00B0\u25A1\u00B0)\\  \u252C\u2500\u252C',
  '(-\u00B0\u25A1\u00B0)-  \u252C\u2500\u252C',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L ]',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L  \u253B\u2501\u253B',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A [',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A  \u252C\u2500\u252C',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E ]',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E  \u253B\u2501\u253B',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I [',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I  \u252C\u2500\u252C',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I N G ]',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I N G  \u253B\u2501\u253B',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I N G     [',
  '(\u256F\u00B0\u25A1\u00B0)\u256F     L O A D E R I N G      \u252C\u2500\u252C',
]
function loading(){

  return loadingframes[Math.floor(step/10)%15]
}

function startrail(){

  ;
}

function greets(){

  ;
}

function fire(){

  ;
}

function pong(){

  ;
}

function snake(){

  ;
}

function scroll(text){

  len=width-(Math.floor(step/3))
  string=""
  for (i=0; i<width; i++){
    if (i<len){string=string+" "}
    else {string=string+text[i-len]}
  }
  string=string.replace(/undefined/g, '')
  return string
}

function sinescroll(text){

  len=width-(Math.floor(step/5))
  string=""
  for (i=0; i<width; i++){
    if (i<len){string=string+" "}
    else if (typeof text[i-len] != 'undefined') {
      if (i%3==0) {tempadd=text[i-len].toUpperCase()}
      if (i%3==1) {tempadd=text[i-len]}
      if (i%3==2) {tempadd=sup[text[i-len]]}
      if (typeof tempadd=="undefined"){tempadd=text[i-len]}
      string=string+tempadd
    }

  }
  //string=string.replace(/undefined/g, '')
  return string
}

// DJ Ash will like this ;)
invadertypes=[
["\uD83D\uDC7E","\uD83D\uDC7E","\uD83D\uDC7E"],
["\uD83D\uDC7D","\uD83D\uDC7D","\uD83D\uDC7D"],
["\uD83D\uDC7B","\uD83D\uDC7B","\uD83D\uDC7B"],
["\uD83D\uDC80","\uD83D\uDC80","\uD83D\uDC80"]]

function invaders(){

  return scroll(invadertypes[beat%4])
}

function dunnolol(){

  return "         \u00AF\\_(\u30C4)_/\u00AF"
}

function gelogo(){

  logomsg="\uD83D\uDE4C\uD83D\uDE4C\uD83D\uDE4C Gipuzkoa Encounter 10"
  marg=(width-logomsg.length)*2
  stp=Math.abs((step%marg)-marg/2)
  return repeat(" ",stp)+logomsg
}

function kitt(){

  ;
}

function danceparty(){

  ;
}

function equalizer(){

  ;
}

function train(){

  return scroll(["\uD83D\uDE84","\uD83D\uDE9D","\uD83D\uDE9D","\uD83D\uDE9D","\uD83D\uDE9D","\uD83D\uDE9D","\uD83D\uDE9D","\uD83D\uDE9D",])
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//window.location.replace('#'+str)
//document.title=str

test=1

function main(){

  updateclock()

  //// TEST ZONE
  //str=scroll("test")
  str=sinescroll("test\uD83D\uDC7E")
  //str=loading()
  //str=dunnolol()
  //str=train()
  //str=invaders()
  //str=gelogo()

  //// SUPER SERIOUS ZONE
  if (test==0){

    ;
  }

  str=str+repeat(" ",width-str.length)+"|"
  window.location.replace('# |'+str)
}

function start(){

  setInterval(main,1000/60);
}

start()