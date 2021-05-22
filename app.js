const submitbttn = document.getElementById('submit-bttn');
const form = document.querySelector('form');
const workListElement = document.getElementById('work-list');

ondone =(event)=>{
    event.preventDefault();
    event.target.checked = true;
    console.log(event);
    // console.log('trigger');
    const text = event.target.nextElementSibling;

    const parent = event.target.parentElement;
    parent.classList.toggle('off');
    // console.log(text);
    text.classList.toggle('linethrough');
}

ondelete = (event)=>{
    // console.log(event.target.parentElement);
    event.target.parentElement.remove();
}

additem = (value)=>{
    const divelemnet = document.createElement('div');
    divelemnet.className = 'list-item';
    divelemnet.innerHTML = `
    <input type="checkbox">
    <h4 >${value}</h4>
    <button type="button" title="delete" >Delete</button>
    `;

   const input =  divelemnet.querySelector('input');
   input.addEventListener('change',ondone);
   const bttn =  divelemnet.querySelector('button');
   bttn.addEventListener('click',ondelete);
    workListElement.appendChild(divelemnet);

}

submitbttnhandler = (event)=>{
    event.preventDefault();
    // console.log('button trigger');
    const inputfield = document.getElementById('enter-field');
    additem(inputfield.value);

}

submitbttn.addEventListener('click',submitbttnhandler);
form.addEventListener('submit',submitbttnhandler)