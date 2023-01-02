let allBtn = document.querySelectorAll("button:not(#submit-btn)");
let submitBtn = document.getElementById("submit-btn");
let spanTag = document.getElementById("span-tag");







for ( let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", function clicked() {
    if (allBtn[i] === allBtn[0]) {
      console.log("1")
      return;
    } else if (allBtn[i] === allBtn[1]) {
      console.log("2");
      return;
    } else if (allBtn[i] === allBtn[2]) {
      console.log("3");
      return;
    } else if (allBtn[i] === allBtn[3]) {
      console.log("4");
      return;
    } else {
      console.log("5");
    }
  });
  
}





// localStorage.setItem("myFunction", JSON.stringify(clicked))
//const clicked = JSON.parse(localStorage.getItem("clicked"))

//console.log(clicked())

// window.location.href = "interactiveX.html"










