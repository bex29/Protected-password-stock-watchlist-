$(document).ready(function(){
  let storage=[];
  var request = new XMLHttpRequest();
  request.open("GET", "http://localhost:2000/getStorage");
  request.onload = function () {
    var resp = JSON.parse(request.response);
    storage = resp;
  };
  request.send();
  console.log(storage)
  for (var i=0;i < storage.length;i++) {
    new_title = storage[i].title;
    new_entry = storage[i].desc;
    main_box = document.getElementById("entryList");
    var newDiv = document.createElement("div");
    $(newDiv).attr("class", "entry");
    $(newDiv).attr("id", new_title);
    var title = document.createElement("h3");
    //   $(title).attr("id",'h3');
    $(title).append(new_title);
    $(newDiv).append(title);
    var info = document.createElement("p");
    //   $(info).attr('id','p')
    $(info).append(new_entry);
    $(newDiv).append(info);
    $(newDiv).append("<br>");
    var del =
      '<button class="edit-delete" onclick="del(this)"><i class="fa fa-trash-o">&emsp;Delete&emsp;</i></button>';
    $(newDiv).append(del);
    var edit =
      '<button class="edit-delete" onclick="edit(this)"><i class="fa fa-pencil">&emsp;Edit&emsp;&emsp;</i></button>';
    $(newDiv).append(edit);
    $(newDiv).append("<hr>");
    console.log(newDiv);
    $(main_box).append(newDiv);
  }
});
function CreateEntry() {
  new_title = document.getElementById("Entry_Title").value;
  // console.log(new_title);
  new_entry = document.getElementById("Entry_info").value;
  // console.log(new_entry);
  // loadEntry();
  main_box = document.getElementById("entryList");
  var newDiv = document.createElement("div");
  $(newDiv).attr("class", "entry");
  $(newDiv).attr("id", new_title);
  var title = document.createElement("h3");
  //   $(title).attr("id",'h3');
  $(title).append(new_title);
  $(newDiv).append(title);
  var info = document.createElement("p");
  //   $(info).attr('id','p')
  $(info).append(new_entry);
  $(newDiv).append(info);
  $(newDiv).append("<br>");
  var del =
    '<button class="edit-delete" onclick="del(this)"><i class="fa fa-trash-o">&emsp;Delete&emsp;</i></button>';
  $(newDiv).append(del);
  var edit =
    '<button class="edit-delete" onclick="edit(this)"><i class="fa fa-pencil">&emsp;Edit&emsp;&emsp;</i></button>';
  $(newDiv).append(edit);
  $(newDiv).append("<hr>");
  console.log(newDiv);
  $(main_box).append(newDiv);
  document.getElementById("Entry_Title").value = document.getElementById("Entry_Title").defaultValue;
  document.getElementById("Entry_info").value = document.getElementById("Entry_info").defaultValue;
  // saveEntry(new_title, new_entry);
}

function del(elem) {
  $(elem).parent("div").remove();
  showEmptyImg();
}

function edit(elem) {
  new_title = prompt("PLEASE ENTER NEW TITLE : ");
  new_entry = prompt("PLEASE ENTER NEW DETAIL : ");
  elem.parentElement.getElementsByTagName("h3")[0].innerHTML = new_title;
  elem.parentElement.getElementsByTagName("p")[0].innerHTML = new_entry;
}

// function saveEntry(new_title, new_entry) {
//   storage = []; //get it from server;
//   var request = new XMLHttpRequest();
//   request.open("GET", "http://localhost:2000/getStorage");
//   request.onload = function () {
//     var resp = JSON.parse(request.response);
//     storage = resp;
//   };
//   request.send();
//   storage[] = new_entry;
//   //send it to server;
// }

// // function loadEntry() {
  
// // }


function hideEmptyImg() {
  document.getElementById("emptyEntries").style.display = "none";
}

function showEmptyImg(){
  // myElem=null;
  // var myElem = document.getElementsByClassName('entry');
  // console.log(myElem)
  if ($('.entry').length === 0) {
    document.getElementById("emptyEntries").style.display = "block";
  };
}