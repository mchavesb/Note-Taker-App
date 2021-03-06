// To save the Note with a Click.
document.querySelector("#addNoteBtn").addEventListener("click", function() {
  listeners(this.innerHTML);
});

// To save the Note with Enter.
document.addEventListener("keydown", function(event) {
  listeners(event.key);
});

// To open the MODAL with a click
document.querySelector("#principalRow").addEventListener("click", function(event) {
  if (event.target.className === "btn btn-primary") {
    // Process to get the <p> TEXT.
    var parentDiv = event.target.parentNode;
    var childrenP = parentDiv.children[1];
    var childrenText = childrenP.innerHTML;

    // Calling the function.
    modal(childrenText);
  }

});

// Function to perform the action - Save/Add Note.
var x = 0;

function addNewNote() {
  x++;
  // get the info from the Text Area.
  var noteTextArea = document.querySelector("#addNoteTextArea").value;

  //Creating the DIV - COL6.
  var divCol = document.createElement("div");
  divCol.setAttribute("class", "col-6");

  //Creating the DIV - CARD.
  var divCard = document.createElement("div");
  divCard.setAttribute("class", "card");

  // Creating the DIV - CARDBODY.
  var divCardBody = document.createElement("div");
  divCardBody.setAttribute("class", "card-body");

  // Creating the H5.
  var h5 = document.createElement("h5");
  h5.setAttribute("class", "card-title");
  var h5Text = document.createTextNode("Note " + x);

  // Creating the P.
  var pElement = document.createElement("p");
  pElement.setAttribute("class", "card-text");
  var pText = document.createTextNode(noteTextArea);

  // Creating the Button.
  var detailButton = document.createElement("a")
  detailButton.setAttribute("href", "#");
  detailButton.setAttribute("class", "btn btn-primary");
  var buttonText = document.createTextNode("View Detail");

  // Appendind all the Elements.
  detailButton.appendChild(buttonText);
  pElement.appendChild(pText);
  h5.appendChild(h5Text);

  divCardBody.appendChild(h5);
  divCardBody.appendChild(pElement);
  divCardBody.appendChild(detailButton);

  divCard.appendChild(divCardBody);

  divCol.appendChild(divCard);

  var principalRow = document.querySelector("#principalRow");
  principalRow.appendChild(divCol);

  // Refresh the TextArea Placeholder.
  document.querySelector("#addNoteTextArea").value = "";

}

// Function to Listen the KEYS.
function listeners(key) {

  switch (key) {
    case "Add Note":
      addNewNote();
      break;

    case "Alt":
      addNewNote();
      break;

    default:

  }
}

// Function to show the complete note.
function modal(y) {
  // Get the modal.
  var modal = document.querySelector(".modal");

  // Get the SPAN that close the modal.
  var closeSpan = document.querySelectorAll(".close")[0];

  // Add the Complete Note to the modal.
  var pModal = document.createElement("p");
  var pModalText = document.createTextNode(y);

  pModal.appendChild(pModalText);

  var modalContent = document.querySelector(".modal-content");
  modalContent.appendChild(pModal);

  // Show the modal.
  modal.style.display = "block";

  // close Modal.
  closeSpan.onclick = function() {
    modal.style.display = "none";
    pModal.remove();
  }

}
