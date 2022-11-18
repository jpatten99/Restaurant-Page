export const loadContact = () => {
  const content = document.getElementById('content');
  content.innerHTML = "";
  var header = document.createElement("H1");
  header.innerText="Contact Us";
  var paragraph = document.createElement("p");
  paragraph.innerText = "Phone number: (123)-456-7890" + "\n" + "Fax: We don't have a fax" + "\n" + "Email: joshua.patten@rockets.utoledo.edu  ;)"
  content.appendChild(header);
  content.appendChild(paragraph);
}