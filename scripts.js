function myFunction() {

alert("Fetching Results Please wait...");

const app = document.getElementById('root')
root.innerHTML="";
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)


var temp=document.getElementById("demo2").value;
document.getElementById("demo2").value=""
  var n = temp.length;
  var request = new XMLHttpRequest()
  if(n>1)
request.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?s='+temp,true)
else
request.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?f='+temp,true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
      console.log(data)

if(data.meals != null) {
  if (request.status >= 200 && request.status < 400) {


    data.meals.forEach(food => {

          var img = document.createElement('img')
    img.src = food.strMealThumb
        img.setAttribute('class', 'img3')

                      var move = document.createElement('a')
    move.setAttribute('name','movelink' )




              var ac = document.createElement('a')
    ac.setAttribute('href', food.strYoutube)


          var img2 = document.createElement('img')
          img2.setAttribute('class','ytube')
    img2.src = 'youtube.png'

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.setAttribute('class', 'hed1')

      const h2 = document.createElement('h2')
      h2.setAttribute('class', 'para1')

      const p = document.createElement('p')
      p.setAttribute('class', 'para1')

      h1.textContent = food.strMeal

      h2.textContent='Instructions:'

      
      p.textContent = food.strInstructions
      
      h1.appendChild(move)
      ac.appendChild(img2)
      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(img)
      card.appendChild(h2)

      
      card.appendChild(p)
      card.appendChild(ac)
    })
  }
  
  location.href='#movelink';
  } else{ alert('meal doesnt exist in the API')}

}

request.send()

}
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php',true)
request.onload = function() {
if(this.status==200 && this.readyState==4) {
var data = JSON.parse(this.response)
    console.log(data)

    data.meals.forEach(food => {
    var img = document.createElement('img')
    img.src = food.strMealThumb
        img.setAttribute('class', 'img3')



              var ac = document.createElement('a')
    ac.setAttribute('href', food.strYoutube)


          var img2 = document.createElement('img')
          img2.setAttribute('class','ytube')
    img2.src = 'youtube.png'

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.setAttribute('class', 'hed1')

      const h2 = document.createElement('h2')
      h2.setAttribute('class', 'para1')

      const p = document.createElement('p')
      p.setAttribute('class', 'para1')

      h1.textContent = food.strMeal

      h2.textContent='Instructions:'

      
      p.textContent = food.strInstructions
      
      ac.appendChild(img2)
      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(img)
      card.appendChild(h2)

      
      card.appendChild(p)
      card.appendChild(ac)
    })
}
}
request.send()