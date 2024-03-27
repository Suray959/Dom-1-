
let profil=document.querySelector('.profile-card')
console.log(profil);

let h2=document.querySelector('h2')
console.log(h2);
h2.innerText='Soft Skills'

let h1=document.querySelector('h1')
console.log(h1);
console.log(h1.innerHTML='Kate Doe ');

let prg=document.querySelector('p')
console.log(prg);
console.log(prg.innerText='Avid adventurer and nature enthusiast with a passion for exploring new places and capturing the beauty of the world through photography.');

let img=document.querySelector('img')
console.log(img);

let myUl = document.getElementsByTagName('ul')[0];
myUl.innerHTML = '<ul>' +
'<li>Communication</li>' +
'<li>Teamwork</li>' +
'<li>Problem-solving</li>' +
'<li>Stress management</li>' +
'<li>Decision-making</li>' +
'<li>Critical Thinking</li>' +
'</ul>';

console.log(myUl.innerText)

let name=document.querySelector('h1')
let newName = document.createTextNode('Lale Elekberova');
name.appendChild(newName);