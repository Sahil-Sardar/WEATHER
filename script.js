const weatherchecker = async (city1) => {
  jagha.innerHTML = city1
  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+ city1, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e7d588c2afmsh507d763f8f1b095p19b3a2jsn0c72070f1bae',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      numberoftemp.innerHTML = Math.floor(response.current.temp_c)
      jagha.innerHTML = (response.location.name).toUpperCase()
      imgW.src = response.current.condition.icon
    }).catch(err => {
      console.log(err)
    })
}

btn.addEventListener("click", (e)=>{
  e.preventDefault()
  weatherchecker(chand.value)
  chand.value = '';
})

chand.addEventListener("keypress", (e)=>{
  if (e.key === "Enter"){ 
  e.preventDefault()
  weatherchecker(chand.value)
  chand.value = '';
  }
})

weatherchecker("kerla")
