import { formEl } from "./refs";
import { saveData } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = Object.fromEntries(formData);
  formEl.reset();
  data.createdAt = Date.now();
  saveData(data).then((ans) => console.log(ans));
}
