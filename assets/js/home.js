console.log("file is loaded");
function delete_todo() {
    console.log("Inside delete_todo function");
    var checkboxes = document.getElementsByTagName("input");
    var value = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox" && checkboxes[i].checked) {
          value = checkboxes[i].value;
          console.log(value);
          break;
        }
    }
    window.location.href = "/deletetodo/?id="+value;
}

//

const checkboxesarr = document.querySelectorAll("input[type='checkbox']");

for (const checkbox of checkboxesarr) {
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      // Deselect all other checkboxes.
      for (const otherCheckbox of checkboxesarr) {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      }
    }
  });
}