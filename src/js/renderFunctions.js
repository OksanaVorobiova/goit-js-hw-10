function makeCountriesListMarkup({ name, flags }) {
    
return `<li class="country-item">
                <img class="country-flag-icon" src="${flags.svg}" />
            <p class="country-name">${name.official}</p>
        </li>`
}

function makeCountryCardMarkup({name, capital, population, flags, languages}) {

    return `<div class="country-card">
                <div class="card-head">
                    <img class="flag" src="${flags.svg}" />
                    <p class="card-country-name">${name.official}</p>
                </div>
                <p class="country-info"><span class="param">Capital:</span> ${capital}</p>
                <p class="country-info"><span class="param">Population:</span> ${population}</p>
                <p class="country-info"><span class="param">Languages:</span> ${Object.values(languages).join(", ")}</p>
            </div>`
}


export default { makeCountriesListMarkup, makeCountryCardMarkup };
