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
request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+temp,true)
else
request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+temp,true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
    console.log(data)

  if(data.drinks != null) {
  if (request.status >= 200 && request.status < 400) {
    data.drinks.forEach(wine => {

          var img = document.createElement('img')
    img.src = wine.strDrinkThumb
            img.setAttribute('class', 'img3')


                      var move = document.createElement('a')
    move.setAttribute('name','movelink' )


              /*var ac = document.createElement('a')
    ac.setAttribute('href', wine.strYoutube)*/


          /*var img2 = document.createElement('img')
          img2.setAttribute('class','ytube')
    img2.src = 'youtube.png'*/

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.setAttribute('class', 'hed1')

      const h2 = document.createElement('h2')
      h2.setAttribute('class', 'para1')

      const p = document.createElement('p')
      p.setAttribute('class', 'para1')

      h1.textContent = wine.strDrink

      h2.textContent='Instructions:'

      
      p.textContent = wine.strInstructions
      
      /*ac.appendChild(img2)*/
      container.appendChild(card)
      
      h1.appendChild(move)
      card.appendChild(h1)
      card.appendChild(img)
      card.appendChild(h2)

      
      card.appendChild(p)
     /* card.appendChild(ac)*/
    })
  }

  location.href='#movelink';
  } else{ alert('drink doesnt exist in the API')}

}

request.send()

}
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php',true)
request.onload = function() {

if(this.status==200 && this.readyState==4) {

var data = JSON.parse(this.response)
    console.log(data)

    data.drinks.forEach(wine => {

          var img = document.createElement('img')
    img.src = wine.strDrinkThumb
            img.setAttribute('class', 'img3')


      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.setAttribute('class', 'hed1')

      const h2 = document.createElement('h2')
      h2.setAttribute('class', 'para1')

      const p = document.createElement('p')
      p.setAttribute('class', 'para1')

      h1.textContent = wine.strDrink

      h2.textContent='Instructions:'

      
      p.textContent = wine.strInstructions
      
      container.appendChild(card)
      
      card.appendChild(h1)
      card.appendChild(img)
      card.appendChild(h2)

      
      card.appendChild(p)
    })
  }


}
request.send()
