// Adding elements to the page
const body = document.body
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

// body.append(9,9);
// append works for everything, it also works for multiple items

// body.appendChild('Hello World');
// appendChild only works for elements, and only works for one element at a time 

// const div = document.createElement('div'); //creates a div

// div.innerText = 'Hello World'
// div.textContent = 'Hello World 2'
// body.append(div)
// body.appendChild(div)

// div.innerHTML = '<strong>Hello World</strong>';
// body.append(div);

// const strong = document.createElement('strong')
// strong.innerText = 'Hello World'
// body.append(strong);



// Removing elements from the page

// spanBye.remove()
// div.append(spanBye);

// div.removeChild(spanHi) // or
// spanHi.remove();



// Modifying Attributes of an element

// const atrId = spanHi.getAttribute('id')
// console.log(atrId); // prints out id

// const atrTitle = spanHi.getAttribute('title')
// console.log(atrTitle) // prints out hello
//for simpler use
// console.log(spanHi.id)
// console.log(spanHi.title)

// spanHi.setAttribute('id', 'id') // or
// spanHi.id = 'id';

// spanHi.removeAttribute('title')



// Setting Data types
// console.log(spanHi.dataset.test);
// console.log(spanHi.dataset.longerName);

// spanHi.dataset.newName = 'hi'



// Modifying classes
// spanHi.classList.add('new-class')
// spanHi.classList.remove('hi2')
// spanHi.classList.toggle('hi3')

// spanHi.style.display = 'none';
onclick => ()