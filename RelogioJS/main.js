const r_Digital = () => {
  const clock = document.getElementsByClassName('clock')[0]
  
  const date = new Date()
  const horas = date.getHours()
  const minutos = date.getMinutes()
  const segundos = date.getSeconds()
  const hour = horas < 10 ? `0${horas}` : horas
  const minute = minutos < 10 ? `0${minutos}` : minutos
  const second = segundos < 10 ? `0${segundos}` : segundos
  clock.innerHTML = `${hour}:${minute}:${second}`

  second % 2 == 0 ? clock.style.border = "thick solid red" : clock.style.border = "10px solid blue"
  
}

//update 1s
setInterval(() => {
  r_Digital()
  
}, 1000)