export const pageLoad = () => {
  const content = document.getElementById('content');
  content.innerHTML = "";
  var header = document.createElement("H1");
  header.innerText="Welcome to Borger.com";
  var image = document.createElement("img");
  image.src = "Restaurant-Page/docs/borger.jpg";
  image.alt = "Tasty looking borger";
  var paragraph = document.createElement("p");
  paragraph.innerText = "Look at this tasty borger. It has a vegan bun made from the finest Italian flour, a crisp piece of iceburg lettuce, a hearty home-grown tomato, spicy onions, authentic tomato puree, two slices of fake American cheese, and finally a juicy lean beef patty. Tasty huh? Too bad it isn't real."
  content.appendChild(header);
  content.appendChild(image);
  content.appendChild(paragraph);
}