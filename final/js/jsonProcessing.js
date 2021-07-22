const requestURL = 'json/bakersfield.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        ////////////////////////////////////
        //
        // Company Highlight Cards (Select 3)
        //
        ////////////////////////////////////
        if (document.querySelector(".index") != null) {
            let companies = jsonObject["companies"];

            // Obtain three random indexes from the company list to display
            var randIndexes = [];
            while(randIndexes.length < 3){
                var r = Math.floor(Math.random() * companies.length);
                if (randIndexes.indexOf(r) === -1) randIndexes.push(r);
            }
            // let card = document.createElement('section');

            // let cardArticle = document.createElement('article');

            // let name = document.createElement('h2');
            // let motto = document.createElement('p');
            // let founded = document.createElement('p');
            // let population = document.createElement('p');
            // let averageRainfall = document.createElement('p');
            // let photo = document.createElement('img');

            // name.textContent = town.name;

            // motto.textContent = town.motto;
            // motto.setAttribute('class', "towncardmotto");

            // founded.textContent = "Year Founded: " + town.yearFounded;
            // population.textContent = "Population: " + town.currentPopulation;
            // averageRainfall.textContent = "Annual Rain Fall: " + town.averageRainfall;

            // photo.setAttribute('src', "images/" + town.photo);
            // photo.setAttribute('alt', town.name);

            
            // cardArticle.appendChild(name);
            // cardArticle.appendChild(motto);
            // cardArticle.appendChild(founded);
            // cardArticle.appendChild(population);
            // cardArticle.appendChild(averageRainfall);

            // card.appendChild(cardArticle);
            // card.appendChild(photo);
            

            // document.querySelector('.towncards').appendChild(card);
            // Display the chosen companies
            for (i of randIndexes) {
                company = companies[i];

                let card = document.createElement('section');

                let cardArticle = document.createElement('article');

                let businessName = document.createElement('h3');
                let businessAddress = document.createElement('p');
                let businessPhone = document.createElement('p');
                let businessEmail = document.createElement('p');
                let businessWebsite = document.createElement('p');
                let businessDescription = document.createElement('p');
                let logo = document.createElement('img');

                businessName.textContent = company.businessName;
                businessAddress.textContent = company.businessAddress;
                businessPhone.textContent = company.businessPhone;
                businessEmail.textContent = company.businessEmail;
                businessWebsite.textContent = company.businessWebsite;
                businessDescription.textContent = company.businessDescription;
                businessDescription.setAttribute('class', "companycardsdescription");

                logo.setAttribute('src', company.logo);
                logo.setAttribute('alt', company.businessName);

                
                cardArticle.appendChild(businessName);
                if (businessDescription != "")  cardArticle.appendChild(businessDescription);
                if (businessAddress != "")      cardArticle.appendChild(businessAddress);
                if (businessPhone != "")        cardArticle.appendChild(businessPhone);
                if (businessEmail != "")        cardArticle.appendChild(businessEmail);
                if (businessWebsite != "")      cardArticle.appendChild(businessWebsite);
                
                card.appendChild(logo);
                card.appendChild(cardArticle);
                
                document.querySelector('.companycards').appendChild(card);
            }
        }

        ////////////////////////////////////
        //
        // Company Highlight Cards (All)
        //
        ////////////////////////////////////
        if (document.querySelector(".directory") != null) {
            let companies = jsonObject["companies"];

            // Display the chosen companies
            for (company of companies) {

                let card = document.createElement('section');

                let cardArticle = document.createElement('article');

                let businessName = document.createElement('h3');
                let businessAddress = document.createElement('p');
                let businessPhone = document.createElement('p');
                let businessEmail = document.createElement('p');
                let businessWebsite = document.createElement('p');
                let businessDescription = document.createElement('p');
                let logo = document.createElement('img');

                businessName.textContent = company.businessName;
                businessAddress.textContent = company.businessAddress;
                businessPhone.textContent = company.businessPhone;
                businessEmail.textContent = company.businessEmail;
                businessWebsite.textContent = company.businessWebsite;
                businessDescription.textContent = company.businessDescription;
                businessDescription.setAttribute('class', "companycardsdescription");

                logo.setAttribute('src', company.logo);
                logo.setAttribute('alt', company.businessName);

                
                cardArticle.appendChild(businessName);
                if (businessDescription != "")  cardArticle.appendChild(businessDescription);
                if (businessAddress != "")      cardArticle.appendChild(businessAddress);
                if (businessPhone != "")        cardArticle.appendChild(businessPhone);
                if (businessEmail != "")        cardArticle.appendChild(businessEmail);
                if (businessWebsite != "")      cardArticle.appendChild(businessWebsite);
                
                card.appendChild(logo);
                card.appendChild(cardArticle);
                
                document.querySelector('.companycards').appendChild(card);
            }
        }

        ////////////////////////////////////
        //
        // Upcoming Events
        //
        ////////////////////////////////////
        if (document.querySelector(".index") != null ||
            document.querySelector(".bakersfield") != null) {
            let events = jsonObject["events"];

            let card = document.createElement('article');
            let title = document.createElement('h3');
            let eventList = document.createElement('ul');

            title.textContent = "Upcoming Events";

            // Display the chosen companies
            for (let event of events) {

                let eventItem = document.createElement('p');
                let eventLink = document.createElement('a');
                eventLink.href = event.website;
                eventLink.innerHTML = "Learn More";

                eventItem.innerHTML = event.name + "<br />" + event.date + " - ";
                eventItem.appendChild(eventLink);

                eventList.appendChild(eventItem);
            }
                
            card.appendChild(title);
            card.appendChild(eventList);
            
            document.querySelector('.upcomingevents').appendChild(card);
        }

        ////////////////////////////////////
        //
        // Demographics
        //
        ////////////////////////////////////

        if (document.querySelector(".bakersfield") != null) {
            let demographics = jsonObject["demographics"];

            let card = document.createElement('article');
            let title = document.createElement('h3');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averagehigh = document.createElement('p');
            let averagelow = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let medianage = document.createElement('p');

            title.textContent = "Demographics";
            motto.textContent = "Motto: '" + demographics.motto + "'";
            yearFounded.textContent = "Founded: " + demographics.yearFounded;
            currentPopulation.textContent = "Population: " + demographics.currentPopulation;
            averagehigh.textContent = "Average High Temp: " + demographics.averagehigh + " F";
            averagelow.textContent = "Average Low Temp: " + demographics.averagelow + " F";
            averageRainfall.textContent = "Average Annual Rainfall: " + demographics.averageRainfall + " in.";
            medianage.textContent = "Median Age: " + demographics.medianage + " years";


            document.querySelector('.demographics').appendChild(title);
            document.querySelector('.demographics').appendChild(motto);
            document.querySelector('.demographics').appendChild(yearFounded);
            document.querySelector('.demographics').appendChild(currentPopulation);
            document.querySelector('.demographics').appendChild(averagehigh);
            document.querySelector('.demographics').appendChild(averagelow);
            document.querySelector('.demographics').appendChild(averageRainfall);
            document.querySelector('.demographics').appendChild(medianage);
        }

        ////////////////////////////////////
        //
        // Board of Directors
        //
        ////////////////////////////////////

        if (document.querySelector(".contactus") != null) {
            let directors = jsonObject["boardOfDirectors"];

            let title = document.createElement('h3');
            title.textContent = "Board of Directors";
            document.querySelector('.boardofdirectors').appendChild(title);

            for (let director of directors) {
                let name = document.createElement('p');
                let email = document.createElement('a');

                email.innerHTML = director.email;
                email.href = "mailto:" + director.email;

                name.innerHTML = director.name + " - ";
                name.appendChild(email);
                
                document.querySelector('.boardofdirectors').appendChild(name);
            }
        }
    });
  
  