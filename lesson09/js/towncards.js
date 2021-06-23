const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let town of towns) {
        if (town.name == "Soda Springs" || town.name == "Fish Haven" || town.name == "Preston") {
            let card = document.createElement('section');

            let cardArticle = document.createElement('article');

            let name = document.createElement('h2');
            let motto = document.createElement('p');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let photo = document.createElement('img');

            name.textContent = town.name;

            motto.textContent = town.motto;
            motto.setAttribute('class', "towncardmotto");

            founded.textContent = "Year Founded: " + town.yearFounded;
            population.textContent = "Population: " + town.currentPopulation;
            averageRainfall.textContent = "Annual Rain Fall: " + town.averageRainfall;
            
            switch(town.name) {
                case "Soda Springs":
                    photo.setAttribute('src', "./images/sodasprings.jpg");
                    break;
                case "Fish Haven":
                    photo.setAttribute('src', "./images/fishhaven.jpg");
                    break;
                case "Preston":
                    photo.setAttribute('src', "./images/preston.jpg");
                    break;
            }
            photo.setAttribute('alt', town.name);

            
            cardArticle.appendChild(name);
            cardArticle.appendChild(motto);
            cardArticle.appendChild(founded);
            cardArticle.appendChild(population);
            cardArticle.appendChild(averageRainfall);

            card.appendChild(cardArticle);
            card.appendChild(photo);
            

            document.querySelector('.towncards').appendChild(card);
        }
    }
  });
  
  