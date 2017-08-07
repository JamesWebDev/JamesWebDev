export default function AddTextToHtml(message:string, elementId:string) {
  const element = document.getElementById(elementId);
  if(element){
    console.log(`${elementId} element found`);
    const para = document.createElement("p");
    const node = document.createTextNode(message);
    para.appendChild(node);  
    element.appendChild(para);
    console.log(message,elementId);
  }else{
    console.log(`${elementId} element not found`)
  }
}