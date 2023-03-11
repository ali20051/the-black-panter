const btt = document.querySelectorAll('#Close');
const  open = document.getElementById('open')
const dailog = document.getElementById("modal-example");

// dailog closing and opening system
open.addEventListener('click', () => {
    const getState = dailog.getAttribute("close");
    console.log(getState)
    if (getState === "close") {
      dailog.removeAttribute('close');
      dailog.setAttribute("open", "open");
    } else {
    dailog.setAttribute('close','close');
    }  
}); 
btt.forEach(btt => {
    btt.addEventListener('click', () => {
         dailog.removeAttribute("open");
        dailog.setAttribute("close", "close");
    });
});


// drop down of profile pic
const dropdownToggle = document.querySelector(".profile-picture");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownMenuItems = dropdownMenu.children;
let active = -1;

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 40) {
    if (active < dropdownMenuItems.length - 1) {
      active++;
      dropdownMenuItems[active].focus();
    }
  } else if (e.keyCode == 38) {
    if (active > -1) {
      active--;
      dropdownMenuItems[active].focus();
    }
  }
});