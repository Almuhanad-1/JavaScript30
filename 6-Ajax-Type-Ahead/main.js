const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

const formEl = document.querySelector('.search-form')
const inputEl = document.querySelector('.search')
const listEl = document.querySelector('.suggestions')

const listItems = Array.from(document.querySelectorAll('.suggestions li'))


function findCities(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayCities() {
  if (this.value.trim() === '') {
    listEl.replaceChildren(listItems[0], listItems[1])
    return
  }

  listEl.replaceChildren('')

  const filteredCities = findCities(this.value, cities)

  filteredCities.forEach(place => {
    const li = document.createElement('li')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')

    const regex = new RegExp(this.value, 'gi')
    const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`)
    span1.innerHTML = `${cityName}, ${stateName}`
    span2.append(numberWithCommas(place.population))
    span2.className = 'population'
    li.append(span1, span2)
    listEl.appendChild(li)
  })
}

async function getCitiesData() {
  fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data))
    .catch(err => console.error(err))
}


getCitiesData()
formEl.addEventListener('submit', (e) => e.preventDefault())
inputEl.addEventListener('input', displayCities)
