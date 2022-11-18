export const loadMenu = () => {
  const content = document.getElementById('content');
  content.innerHTML = "";
  var header = document.createElement("H1");
  header.innerText="Our Menu";
  var paragraph = document.createElement("p");
  paragraph.innerText = "We only have one item..." + "\n" + "AND ITS A BORGER!"
  content.appendChild(header);
  content.appendChild(paragraph);
}