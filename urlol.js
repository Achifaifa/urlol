step=0
beat=0

starttime=Date.now()

function updateclock(){

  deltat=Date.now()-starttime
  step=Math.floor(deltat/33)
  beat=Math.floor(deltat/344.8276)
}

function main(){

  updateclock()

  str=["WOO","HOO"][beat%2]
  window.location.replace('#'+str)
}

function start(){

  setInterval(main,1000/60);
}

start()