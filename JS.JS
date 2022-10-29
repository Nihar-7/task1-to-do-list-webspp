// first add items in local storage
show();
let Btn = document.getElementById("Btn");
let Txt = document.getElementById("Txt");
Btn.addEventListener('click', function () {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(notes);

    }

    arr.push(Txt.value);
    Txt.value = "";
    localStorage.setItem("notes", JSON.stringify(arr));
    show();

})

// show added notes
function show(e) {
    let not = document.getElementById("note")
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(notes);

    }
    let content = "";
    arr.forEach(function (element, index) {
        content += `
        <div class="cardnotes flex">
        <h3>${index + 1}</h3>
        <h3>${element}</h3>
        <i class="fa fa-times fa-lg" id="${index}" onclick="del(this.id)" aria-hidden="true"></i>   
    </div> `

    })
    if (arr.length != 0) {
        not.innerHTML = content;

    }
    else {
        not.innerHTML = `add notes`;
    }
}

// delete added notes
function del(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(notes);

    }
    arr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(arr));
    show();


}


