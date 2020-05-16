// отримуємо всі поля форми 
let name = document.getElementsByClassName("contact-form-name")[0];
let nameLabel = document.getElementsByClassName("contact-form-name-label")[0];
let email = document.getElementsByClassName("contact-form-email")[0];
let emailLabel = document.getElementsByClassName("contact-form-email-label")[0];
let tel = document.getElementsByClassName("contact-form-tel")[0];
let telLabel = document.getElementsByClassName("contact-form-tel-label")[0];
let textarea = document.getElementsByClassName("contact-form-textarea")[0];
let textareaLabel = document.getElementsByClassName(
  "contact-form-textarea-label"
)[0];
let submitBtn = document.getElementsByClassName("contact-form-submit")[0];



// подія для кнопки форми - емуляція відправки
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // сказування стандартної поведінки форми
  if (formValidate()) { 
    clearControls();
    alert("Ваше повідомлення відправлено");
  }
});

//подія для кнопки ентер - емуляція відправки форми
document.onkeyup = function (e) {
  e.preventDefault()
  if (e.keyCode === 13) { // код ентера
  if (formValidate()) {
    clearControls();
    alert("Ваше повідомлення відправлено");
  }
}
  return false;
};


function formValidate() {
  let valid = true;
  resetWarning();
  if (!textValidation(name)) {
    addWarning(name);
    nameLabel.textContent = "імя має містити лише літери";
    valid = false;
  }
  if (!validateEmail(email)) {
    addWarning(email);
    emailLabel.textContent = "не вірно вказана електорона пошта";
    valid = false;
  }
  if (!numberValidation(tel)) {
    addWarning(tel);
    telLabel.textContent = "не вірно вказаний номер телефону";
    valid = false;
  }
  if (!textValidation(textarea)) {
    addWarning(textarea);
    textareaLabel.textContent = "повідомлення має складатись лише з літер";
    valid = false;
  }
  return valid;
}

function textValidation(name) {
  if (name.value.trim().length < 4) return false;
  return /^[a-zA-Zа-яА-ЯєЄїЇіІ'][a-zA-Z-а-яА-ЯєЄїЇіІ' ]+[a-zA-Zа-яА-ЯєЄїЇіІ']?$/.test(
    name.value
  );
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email.value).toLowerCase());
}

function numberValidation(num) { 
  return  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    num.value
  );
}

//очищення полів вводу
function clearControls() {
  [name, email, tel, textarea].forEach((elem) => {
    elem.value = "";
  });
}

//функція додає червоний бордер
function addWarning(elem) {
  elem.classList.add("border-danger");
}

//заберає бордери і повідомлення про помилку валідації
function resetWarning() {
  [name, email, tel, textarea].forEach((elem) => {
    elem.classList.remove("border-danger");
  });
  console.log(
    [nameLabel, emailLabel, telLabel, textareaLabel].forEach((label) => {
      if (label) {
        label.textContent = "";
      }
    })
  );
}

//функція що реагує на скрол і змінює індикатор скрола
window.onscroll = function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};


let primary = document.getElementsByClassName("header-btn")[0]
let secondary = document.getElementsByClassName("header-btn")[1]


primary.addEventListener("click", () => {
  primary.classList.add("hide");
  secondary.classList.remove("hide");
  switchSecondary()
});

secondary.addEventListener("click", () => {
  secondary.classList.add("hide");
  primary.classList.remove("hide");
  switchPrimary()
});

function switchSecondary(){
  body.style.setProperty('--green', '#fff');
}

function switchPrimary(){
  
}