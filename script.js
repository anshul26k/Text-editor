let optionbutton = document.querySelectorAll(".option-button");
let advoptionbutton = document.querySelectorAll(".adv-option-button");
let fontname = document.getElementById("fontName");
let fontsizeref = document.getElementById("fontSize");
let writingarea = document.getElementById("text-input");
let linkbutton = document.getElementById("createLink");
let alignbutton = document.querySelectorAll(".align");
let spacingbutton = document.querySelectorAll(".spacing");
let formatbutton = document.querySelectorAll(".format");
let scriptbutton = document.querySelectorAll(".script");

let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

// intial set-up
const initializer = () => {
  highlighter(alignbutton, true);
  highlighter(formatbutton, false);
  highlighter(scriptbutton, true);
  highlighter(spacingbutton, true);

  // font-types 
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontname.appendChild(option);
  });

  //font size
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontsizeref.appendChild(option);
  }
   
  // deafult size
  fontsizeref.value = 3;
};

// main logic
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

optionbutton.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

advoptionbutton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

//link
linkbutton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  //if link has http then pass directly else add https
  if (/http/i.test(userLink)) {
    modifyText(linkbutton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkbutton.id, false, userLink);
  }
});




const highlighter = (classname, need) => {
  classname.forEach((button) => {
    button.addEventListener("click", () => {
      if (need) {
        let alrdyactive = false;
        if (button.classList.contains("active")) {
          alrdyactive = true;
        }

        highlighterremover(classname);
        if (!alrdyactive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterremover = (classname) =>{
  classname.forEach((button)=>{
    button.classList.remove("active");
  });
};

window.onload = initializer();
