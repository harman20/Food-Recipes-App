function myFunction() {

alert("Fetching Results Please wait...");

const app = document.getElementById('root')
root.innerHTML="";
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var temp=document.getElementById("demo2").value;
document.getElementById("demo2").value=""

  var request = new XMLHttpRequest()
  console.log(!Number.isNaN(Number(temp)))
  if(!Number.isNaN(Number(temp)))
request.open('GET', 'https://api.punkapi.com/v2/beers/'+temp,true)
else
request.open('GET', 'https://api.punkapi.com/v2/beers?beer_name='+temp,true)

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
    console.log(data)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {

          var img = document.createElement('img')
    img.src = beer.image_url
    img.setAttribute('class', 'img3')

                          var move = document.createElement('a')
    move.setAttribute('name','movelink' )


      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.setAttribute('class', 'hed1')

      const h2 = document.createElement('h2')
      h2.setAttribute('class', 'para1')

            const htag = document.createElement('h2')
      htag.setAttribute('class', 'para1')


            const hpair = document.createElement('h2')
      hpair.setAttribute('class', 'para1')

                  const hbrew = document.createElement('h2')
      hbrew.setAttribute('class', 'para1')



      const p = document.createElement('p')
      p.setAttribute('class', 'para1')

            const ptag = document.createElement('p')
      ptag.setAttribute('class', 'para1')

            const ppair = document.createElement('p')
      ppair.setAttribute('class', 'para1')

                  const pbrew = document.createElement('p')
      pbrew.setAttribute('class', 'para1')




      h1.textContent = beer.name
      
      htag.textContent='Tagline:'

      hpair.textContent='Food-pairing:'
      h2.textContent='Description:'

      hbrew.textContent='Brewers-tips:'

      ptag.textContent=beer.tagline

      p.textContent = beer.description
      
      ppair.textContent=beer.food_pairing

      pbrew.textContent=beer.brewers_tips
      /*ac.appendChild(img2)*/
      container.appendChild(card)

      h1.appendChild(move)
      card.appendChild(h1)
      card.appendChild(img)
      card.appendChild(htag)
      card.appendChild(ptag)
      card.appendChild(h2)
      card.appendChild(p)

      card.appendChild(hpair)
      card.appendChild(ppair)


      card.appendChild(hbrew)
      card.appendChild(pbrew)
     /* card.appendChild(ac)*/
    })
  }
   
  location.href='#movelink';

  }
request.send()
} 

const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.punkapi.com/v2/beers/random',true)
  request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
    console.log(data)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {

          var img = document.createElement('img')
    img.src = beer.image_url
    img.setAttribute('class', 'img3')


      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.setAttribute('class', 'hed1')

      const h2 = document.createElement('h2')
      h2.setAttribute('class', 'para1')

            const htag = document.createElement('h2')
      htag.setAttribute('class', 'para1')


            const hpair = document.createElement('h2')
      hpair.setAttribute('class', 'para1')

                  const hbrew = document.createElement('h2')
      hbrew.setAttribute('class', 'para1')



      const p = document.createElement('p')
      p.setAttribute('class', 'para1')

            const ptag = document.createElement('p')
      ptag.setAttribute('class', 'para1')

            const ppair = document.createElement('p')
      ppair.setAttribute('class', 'para1')

                  const pbrew = document.createElement('p')
      pbrew.setAttribute('class', 'para1')




      h1.textContent = beer.name
      
      htag.textContent='Tagline:'

      hpair.textContent='Food-pairing:'
      h2.textContent='Description:'

      hbrew.textContent='Brewers-tips:'

      ptag.textContent=beer.tagline

      p.textContent = beer.description
      
      ppair.textContent=beer.food_pairing

      pbrew.textContent=beer.brewers_tips
      
      container.appendChild(card)

      card.appendChild(h1)
      card.appendChild(img)
      card.appendChild(htag)
      card.appendChild(ptag)
      card.appendChild(h2)
      card.appendChild(p)

      card.appendChild(hpair)
      card.appendChild(ppair)


      card.appendChild(hbrew)
      card.appendChild(pbrew)
    })
  }

  }
request.send()