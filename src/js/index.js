import '../css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';


const DEBOUNCE_DELAY = 300;

const refs = {
    inputEl: document.querySelector('#search-box'),
    listEl: document.querySelector('.country-list'),
    infoContainer: document.querySelector('.country-info'),
}

const { inputEl, listEl, infoContainer } = refs;

inputEl.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(e) {
    let name = this.value.trim();

    if (name) {
        fetchCountries(name);
    }
    
}

//function makeMarkup() {
  //  return ``
//}


