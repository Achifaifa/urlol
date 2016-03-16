//THX to http://glench.com/hash/ for the idea and the better way to do this!
step=0
beat=0
starttime=Date.now()

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

function loading(){

  ;
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

function scroll(){

  ;
}

function sinescroll(text){

  len=40-(Math.floor(step/3))
  string=""
  for (i=0; i<40; i++){
    if (i<len){string=string+" "}
    else {string=string+text[i-len]}
  }
  string=string.replace(/undefined/g, '')
  return string
}

function invaders(){

  ;
}

function dunnolol(){

  ;
}

function gelogo(){

  ;
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

  ;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//window.location.replace('#'+str)
//document.title=str

test=1

function main(){

  updateclock()

  //// TEST ZONE
  str=sinescroll("TEST")

  //// SUPER SERIOUS ZONE
  if (test==0){

    ;
  }

  console.log(str)
  window.location.replace('# '+str)
}

function start(){

  setInterval(main,1000/60);
}

start()