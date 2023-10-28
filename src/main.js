import { formEl, containerEl } from "./refs";
import { getData, saveData } from "./api";
import { createCard } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";


formEl.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = Object.fromEntries(formData);
  formEl.reset();
  data.createdAt = Date.now();
  saveData(data).then((ans) => { 
    const markup = createCard([ans]);
    addMarkup(markup);
   });
}

function onLoad() {
  getData().then((response) => {
    const markup = createCard(response);
    addMarkup(markup);
  })
}

function addMarkup(markup) {
  containerEl.insertAdjacentHTML('beforeend', markup);
}

onLoad();
