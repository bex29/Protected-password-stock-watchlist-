function CreateEntry() {
  new_title = document.getElementById("Entry_Title").value;
  console.log(new_title);
  new_entry = document.getElementById("Entry_info").value;
  console.log(new_entry);
  main_box = document.getElementById("entryList");
  var newDiv = document.createElement("div");
  $(newDiv).attr("class", "entry");
  $(newDiv).attr("id", new_title);
  var title = document.createElement("h3");
  $(title).attr("id",'h3');
  $(title).append(new_title);
  $(newDiv).append(title);
  var info = document.createElement("p");
  $(info).attr('id','p')
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
function del(elem) {
  $(elem).parent("div").remove();
}
// function edit(elem) {
//   new_title = prompt("PLEASE ENTER NEW TITLE : ");
//   new_entry = prompt("PLEASE ENTER NEW DETAIL : ");
//   $(elem).removeChild(document.getElementById("h3"));
//   $(elem).removeChild(document.getElementById("p"));
// //   $(elem).parent("div").document.getElementById("p").innerHTML(new_entry);
// }