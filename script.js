var dropdown = document.getElementsByClassName("dropdown");
var mainMenu = document.getElementsByClassName("main-menu")[0];

var i;
for (i=0; i<dropdown.length; i++){
    console.log("dropdown elements: " + dropdown);
    dropdown[i].addEventListener("click", function(){
        var dropdownList = this.children[0];
        console.log("dropdown list: " + dropdownList);
        if (dropdownList.style.height == "100px"){
            //dropdownList.style.display = "none";
            dropdownList.style.height = "0";
        }
        else {
            //dropdownList.style.display = "block";
            dropdownList.style.height = "100px";
        }
    });  
}

mainMenu.addEventListener("mouseleave", function(){
    var i;
    for (i=0; i<dropdown.length; i++){
        var dropdownList = dropdown[i].children[0];
        if (dropdownList.style.height == "100px"){
            //dropdownList.style.display = "none";
            dropdownList.style.height = "0";
        }
    }
    });