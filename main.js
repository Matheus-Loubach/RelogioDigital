const r_Digital = () => {

  day = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
  month = new Array ("Janeiro", "Fevereiro", "Março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")

  const horas = document.getElementById('horas')
  const minutos = document.getElementById('minutos')
  const segundos = document.getElementById('segundos')

  const dia = document.getElementById('dia')
  const mes = document.getElementById('mes')
  const ano = document.getElementById('ano')
  const semana = document.getElementById('semana')

  const dateToday = new Date()

  let diaa = dateToday.getDate()
  let mess = dateToday.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 etc
  let anoo = dateToday.getFullYear()
  let semm = dateToday.getDay()  // Dom = 0 | Seg = 1 | Ter = 2 

  const hrs = dateToday.getHours()
  const min = dateToday.getMinutes()
  const seg = dateToday.getSeconds()

  const hour = hrs < 10 ? `0${hrs}` : hrs
  const minute = min < 10 ? `0${min}` : min
  const second = seg < 10 ? `0${seg}` : seg


  dia.textContent = diaa;
  mes.textContent = `${month[mess]}`;
  ano.textContent = anoo;
  semana.textContent = `${day[semm]}`;

  horas.textContent = hour;
  minutos.textContent = minute;
  segundos.textContent = second;

}

//update 1s
setInterval(() => {
  r_Digital()
  
}, 1000)