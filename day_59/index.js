// //  Avoid to many Event

// let myDiv = document.createElement('div')
// for(let i=1;  i<=100; i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = 'This is a Para' + i;
//     newElement.addEventListener('click', function(event){
//         console.log('I have Clicked on Para');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv)


// //  We Move to Optimize our code 
// //  What I can Do i can write the function globally thats helps all event work on single function 

// let myDiv = document.createElement('div')
// function paraStatus(event){
//         console.log('I have Clicked on Para')
//     };
// for(let i=1;  i<=100; i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = 'This is a Para' + i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv)


// // There is none More optimization 


// let myDiv = document.createElement('div')
// function paraStatus(event){
//         console.log('I have Clicked on Para')
//     };
// myDiv.addEvenetListener('click', paraStatus);
// for(let i=1;  i<=100; i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = 'This is a Para' + i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv)
// // But there one problem we can not axcess indivisully paragraph



// // EventTarget-properties  ^  control this after use 

// let myDiv = document.createElement('div')
// function paraStatus(event){
//         console.log('para' + event.target.textContent);
//     };
// myDiv.addEvenetListener('click', paraStatus);
// for(let i=1;  i<=100; i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = 'This is a Para ' + i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv)
// Now Here When ever you Click Any Para In console you the Out put click parak 1 etc ;
// I can apply eventlisner on div allthough i can use para also by the help of  EventTarget-properties



let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai' + event.target.textContent);
    }
});

// Dom content loaders
