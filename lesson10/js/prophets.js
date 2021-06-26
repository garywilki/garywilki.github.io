const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let prophet of prophets) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = prophet.name + ' ' + prophet.lastname;
        birthdate.textContent = "Date of Birth: " + prophet.birthdate;
        birthplace.textContent = "Place of Birth: " + prophet.birthplace;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', prophet.name + ' ' + prophet.lastname + " - " + prophet.order);


        card.appendChild(name);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);
    }
  });
  
  