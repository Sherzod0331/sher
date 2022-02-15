function Close() {
    document.querySelector("#Close").style.display = "none"
    document.querySelector("#Open").style.display = "block"
    document.querySelector("#menu_ver").style.display = "none"
    document.querySelector("#begin_close").style.display = "flex"
    document.querySelector("#container_title_close").style.display = "flex"
}

function Open() {
    document.querySelector("#Close").style.display = "block"
    document.querySelector("#Open").style.display = "none"
    document.querySelector("#menu_ver").style.display = "block"
    document.querySelector("#begin_close").style.display = "none"
    document.querySelector("#container_title_close").style.display = "none"
}

function container_title() {
    document.querySelector(".container_title").style.display = "none"
    // document.querySelector(".begin").style.top = "-80px"
}

function eslatman_close() {
    document.querySelector(".eslatma").style.display = "none"
}

function search_input() {
    document.querySelector(".search_input").style.display = "block"
}

var a = 0;
function user_menu() {
  if ((a++)%2==0) {
    document.querySelector(".user_menu").style.display = "flex"
    document.querySelector(".user_menu_open").style.display = "none"
    document.querySelector(".user_menu_close").style.display = "block"
  } else {
    document.querySelector(".user_menu").style.display = "none"
    document.querySelector(".user_menu_close").style.display = "none"
    document.querySelector(".user_menu_open").style.display = "block"
  }    
}

function user_menu_close() {
    document.querySelector(".user_menu").style.display = "none"
    document.querySelector(".user_menu_close").style.display = "none"
    document.querySelector(".user_menu_open").style.display = "block"
}
function user_menu1() {
    document.querySelector(".user_menu1").style.display = "flex"
    document.querySelector(".user_menu_open1").style.display = "none"
    document.querySelector(".user_menu_close1").style.display = "block"
    document.querySelector(".bosh_joy").style.display = "block"
}

function user_menu_close1() {
    document.querySelector(".user_menu1").style.display = "none"
    document.querySelector(".user_menu_close1").style.display = "none"
    document.querySelector(".user_menu_open1").style.display = "block"
    document.querySelector(".bosh_joy").style.display = "none"
}

function parol_1_o() {
    document.querySelector("#parol_1_o").style.display = "none"
    document.querySelector("#parol_1").style.display = "block"
    var x = document.getElementById("myInput_1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function parol_1() {
    document.querySelector("#parol_1").style.display = "none"
    document.querySelector("#parol_1_o").style.display = "block"
    var x = document.getElementById("myInput_1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function parol_2_o() {
    document.querySelector("#parol_2_o").style.display = "none"
    document.querySelector("#parol_2").style.display = "block"
    var x = document.getElementById("myInput_2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function parol_2() {
    document.querySelector("#parol_2").style.display = "none"
    document.querySelector("#parol_2_o").style.display = "block"
    var x = document.getElementById("myInput_2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

var r = document.querySelector(':root');
   function tun() {  
    document.querySelector(".rejim_off").style.display = "none"
    document.querySelector(".rejim_on").style.display = "block"
    r.style.setProperty('--black', '#fff');
    r.style.setProperty('--blue', '#4d6eb6');
    r.style.setProperty('--white', '#000');
    r.style.setProperty('--shadow', 'rgba(255, 255, 255, 0.4)');
    r.style.setProperty('--shadow_menu', 'rgba(255, 255, 255, 0.4)');
    r.style.setProperty('--shadow_ver', 'rgba(0, 0, 0, 0.3)');
    r.style.setProperty('--p_text', '#cfafaf');
    r.style.setProperty('--input_b', '#595d64');
    r.style.setProperty('--input_bor', '#607088');
    r.style.setProperty('--input_text', '#d1b7b7');
    r.style.setProperty('--parol_text', '#728dc9');
  }

   function kun() {
    document.querySelector(".rejim_on").style.display = "none"
    document.querySelector(".rejim_off").style.display = "block"
    r.style.setProperty('--black', '#000');
    r.style.setProperty('--blue', '#036ED1');
    r.style.setProperty('--white', '#fff');
    r.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.1)');
    r.style.setProperty('--shadow_menu', 'rgba(0, 0, 0, 0.08)');
    r.style.setProperty('--shadow_ver', 'rgba(255, 255, 255, 0.3)');
    r.style.setProperty('--p_text', '#808080');
    r.style.setProperty('--input_b', '#f6f7f9');
    r.style.setProperty('--input_bor', '#dfe1e4');
    r.style.setProperty('--input_text', '#acacac');
    r.style.setProperty('--parol_text', '#89aeff');
  }




// Fanlar begin

const inputField = document.querySelector('.chosen-value');
const dropdown = document.querySelector('.value-list');
const dropdownArray = [... document.querySelectorAll('li')];
console.log(typeof dropdownArray)
dropdown.classList.add('closed');
inputField.focus(); // Demo purposes only
let valueArray = [];
dropdownArray.forEach(item => {
  valueArray.push(item.textContent);
});

const closeDropdown = () => {
  dropdown.classList.remove('open');
}

inputField.addEventListener('input', () => {
  dropdown.classList.add('open');
  let inputValue = inputField.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray[j].classList.add('closed');
      } else {
        dropdownArray[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray.length; i++) {
      dropdownArray[i].classList.remove('closed');
    }
  }
});

dropdownArray.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField.value = item.textContent;
    dropdownArray.forEach(dropdown => {
      dropdown.classList.add('closed');
    });
  });
})

inputField.addEventListener('focus', () => {
   inputField.placeholder = 'Fanlar orasidan qidirish';
   dropdown.classList.add('open');
   dropdownArray.forEach(dropdown => {
     dropdown.classList.remove('closed');
   });
});

inputField.addEventListener('blur', () => {
   inputField.placeholder = 'Fanlar';
  dropdown.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown.contains(evt.target);
  const isInput = inputField.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown.classList.remove('open');
  }
});

// fanlar end


function inputss() {
    var checkBox = document.querySelector(".on1");
    var text = document.querySelector(".doira");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function inputss1() {
    var checkBox = document.querySelector(".off1");
    var text = document.querySelector(".doira1");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}