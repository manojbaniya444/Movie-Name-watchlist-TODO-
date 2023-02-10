// alert("Working")

// const btn = document.querySelectorAll(".delete");

// Array.from(btn).forEach(function (button) {

//     button.addEventListener('click', function (e) {  //This doesnot work for newly appended anime lists

//         // alert("Working")
//         const list = e.target.parentElement;
//         // li = list.parentElement;
//         list.parentElement.removeChild(list);

//     })
// })

//Removing the anime list
//REMOVE Button functionality
const liItem = document.querySelector(".ulLists ul");

liItem.addEventListener("click", function (e) {
  // e.preventDefault();
  if (e.target.className == "delete") {
    let li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

//Adding new anime to the anime collection

const add = document.forms["addBox"];

add.addEventListener("submit", function (e) {
  //submit works on button

  // alert("Working");
  e.preventDefault();

  const value = add.querySelector('input[type="text"]').value;

  const li = document.createElement("li");
  const animeName = document.createElement("span");
  const deleteBtn = document.createElement("span");
  // console.log(value);
  li.appendChild(animeName);
  li.appendChild(deleteBtn);

  const mainUl = document.querySelector("ul");

  mainUl.appendChild(li);

  animeName.textContent = value;
  // value.value = " ";   trying to clear the addbar after submitting the name
  deleteBtn.textContent = "Remove";

  li.classList.add("lists");
  deleteBtn.classList.add("delete");

  // let remmoveText = document.getElementsByClassName("addBar").value;
  // console.log(remmoveText);
});

//Search box filter

const searchBar = document.forms["searchBar"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const ferip = document.querySelector("ul");
  const term = e.target.value.toLowerCase();
  const anime = ferip.getElementsByTagName("li");
  Array.from(anime).forEach(function (animeNameList) {
    const title = animeNameList.firstElementChild.textContent;

    if (title.toLowerCase().indexOf(term) != -1) {
      animeNameList.style.display = "flex";
    } else {
      animeNameList.style.display = "none";
    }
  });
});
