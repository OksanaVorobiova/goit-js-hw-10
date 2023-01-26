function makeCountriesListMarkup({ name, flags }) {
    
return `<li class="country-item">
                <image class="country-flag-icon" src="${flags.svg}" />
            <p class="country-name">${name.official}</p>
        </li>`
}

function makeCountryCardMarkup() {

}


export default { makeCountriesListMarkup, makeCountryCardMarkup };
