function CreateEntry() {
  new_title = document.getElementById("Entry_Title").value;
  // console.log(new_title);
  new_entry = document.getElementById("Entry_info").value;
  // console.log(new_entry);
  loadEntry();
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
  saveEntry(new_title, new_entry);
}

function del(elem) {
  $(elem).parent("div").remove();
}

function edit(elem) {
  new_title = prompt("PLEASE ENTER NEW TITLE : ");
  new_entry = prompt("PLEASE ENTER NEW DETAIL : ");
  elem.parentElement.getElementsByTagName("h3")[0].innerHTML = new_title;
  elem.parentElement.getElementsByTagName("p")[0].innerHTML = new_entry;
}

function saveEntry(new_title, new_entry) {
  storage = []; //get it from server;
  storage[new_title] = new_entry;
  //send it to server;
}

function loadEntry() {
  storage = []; //get it from server
  for (key in storage) {
    value = storage[key];
    new_title = key;
    new_entry = value;
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
}
