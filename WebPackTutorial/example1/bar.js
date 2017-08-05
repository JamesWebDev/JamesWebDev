export default function bar() {
  const para = document.createElement("p");
  const node = document.createTextNode("Hello World!");
  para.appendChild(node);
  const element = document.getElementById("div1");
  element.appendChild(para);
  console.log('hello world');
}