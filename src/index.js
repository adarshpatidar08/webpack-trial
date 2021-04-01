import _ from 'lodash';
import './style.css';

// login form creation
function logPage() {

  var section = document.createElement('section');
  section.classList.add('section');

  var div = document.createElement('div');
  div.classList.add('center-div');

  var form = document.createElement('form');
  form.setAttribute('method', 'POST');
  form.setAttribute('id', 'log');
  form.classList.add('log-form');
  
  var heading = document.createElement('h1');
  heading.innerText = ('Log IN');

  var field_1 = document.createElement('div');
  field_1.classList.add('fieldset');

  var field_2 = document.createElement('div');
  field_2.classList.add('fieldset');

  var field_3 = document.createElement('div');
  field_3.classList.add('fieldset');

  var uName = document.createElement('input');
  uName.setAttribute("type", "email");
  uName.setAttribute("name", "UserName");
  uName.setAttribute("value","");
  uName.setAttribute("placeholder", "Username");

  var passWord = document.createElement('input');
  passWord.setAttribute("type", "password");
  passWord.setAttribute("name", "password");
  passWord.setAttribute("value","");
  passWord.setAttribute("placeholder", "Password");

  var subBtn = document.createElement('button');
  subBtn.setAttribute("type", "submit");
  subBtn.innerHTML = ("Submit");
  subBtn.classList.add("btn");

  form.appendChild(heading)
  field_1.appendChild(uName);
  form.appendChild(field_1);
  field_2.appendChild(passWord);
  form.appendChild(field_2);
  field_3.appendChild(subBtn);
  form.appendChild(field_3);
  div.appendChild(form);
  section.appendChild(div);

  return section;
}
document.body.appendChild(logPage());