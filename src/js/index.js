import '../css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import rendering from './renderFunctions';


const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector('#search-box'),
    listEl: document.querySelector('.country-list'),
    infoContainer: document.querySelector('.country-info'),
}

const { inputEl, listEl, infoContainer } = refs;

inputEl.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(e) {
    let value = this.value.trim();

    if (value) {
        fetchCountries(value)
            .then(data => validateDataLength(data))
            .catch(onFetchError);
    }

    if (value === "") {
        listEl.innerHTML = "";
        infoContainer.innerHTML = "";
    }
}


function validateDataLength(data) {
    if (data.length > 10) {
        listEl.innerHTML = "";
        infoContainer.innerHTML = "";
        return Notify.info("Too many matches found. Please enter a more specific name.");

    } else if (data.length >= 2 && data.length <= 10) {

        infoContainer.innerHTML = "";
        listEl.innerHTML = reduceDataToList(data);
        
    } else if (data.length === 1) {

        listEl.innerHTML = "";
        infoContainer.innerHTML = rendering.makeCountryCardMarkup(data[0]);
        
    } 
}


function reduceDataToList(data) {
    return data.reduce((list, country) => rendering.makeCountriesListMarkup(country) + list, "");
}

function onFetchError(error) {
    listEl.innerHTML = infoContainer.innerHTML = "";
    Notify.failure("Oops, there is no country with that name");
}



