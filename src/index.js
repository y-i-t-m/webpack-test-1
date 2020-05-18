import _ from 'lodash';
// import { name as name_of_hase } from "./utilities";
import Tiger from "./utilities";

console.log(Tiger.say());
// console.log(nijou(5));
// console.log(name_of_hase);

function component() {
  const element = document.createElement('div');
  const array = ["Hello", "WebPack!", "hase!!"]
  element.innerHTML = _.join(array, '〜');
  return element;
}

document.body.appendChild(component());
