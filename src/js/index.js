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
            .then(data => validateDataLength(data));
    }
}


function validateDataLength(data) {
    if (data.length > 10) {
        
        return Notify.info("Too many matches found. Please enter a more specific name.");

    } else if (data.length >= 2 && data.length <= 10) {

        listEl.innerHTML = reduceDataToList(data);
        
    } else if (data.length === 1) {
        rendering.makeCountryCardMarkup();
    } else if (data.length === 0) throw new Error("No data");
}


function reduceDataToList(data) {
    return data.reduce((list, country) => rendering.makeCountriesListMarkup(country) + list, "");
}



