function createTextBoxes() {
  // Get a reference to the container where the text boxes will be added
  const container = document.getElementById("textbox-container");

  // Loop through the specified number of times and generate a text box each time
  for (let i = 0; i < 5; i++) {
    // Create a new input element of type "text"
    const textBox = document.createElement("input");
    textBox.type = "text";

    // Add the text box to the container
    container.appendChild(textBox);
  }
}
