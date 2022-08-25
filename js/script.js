function openForm() {
    document.getElementById("myForm").style.display = "block";
 }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function hamburger() {
    var x = document.getElementById("myhamburger");
    if (x.className === "navigation__hamb") {
        x.className += " responsive";
    } else {
        x.className = "navigation__hamb";
    }
}