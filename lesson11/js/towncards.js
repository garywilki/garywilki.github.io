const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let town of towns) {
        if (town.name == "Soda Springs" || town.name == "Fish Haven" || town.name == "Preston") {
            if (document.querySelector('.towncards') != null) {
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

                photo.setAttribute('src', "images/" + town.photo);
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
            else if (document.querySelector('.townpage') != null) {
                let townName = "";
                if      (document.querySelector('.preston-events') != null) townName = "preston";
                else if (document.querySelector('.sodasprings-events') != null) townName = "sodasprings";
                else if (document.querySelector('.fishhaven-events') != null) townName = "fishhaven";

                if (town.name == "Soda Springs" && townName == "sodasprings" ||
                town.name == "Fish Haven" && townName == "fishhaven" ||
                town.name == "Preston" && townName == "preston") {

                    let card = document.createElement('article');

                    let title = document.createElement('h2');
                    title.textContent = "Upcoming Events";
                    card.appendChild(title);

                    for(let event of town.events) {
                        let eventText = document.createElement('p');
                        eventText.textContent = event;
                        card.appendChild(eventText);
                    }

                    document.querySelector('.' + townName + '-events').appendChild(card);
                }
            }
        }
    }
  });
  
  