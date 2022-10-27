// const name = 'Edouard'
// console.log(name)
// const max = 5
// for (i=0; i<max;i++) {
//     console.log(i)
// }
// console.log('end')

// const in1Second = Date.now() 
// console.log(in1Second)
// let operations = 0
// while(Date.now() < in1Second){
//     operations += 1
// }
// // // console.log('After the delay')
// // // console.log('We could have done '+ operations + ' operations in that time.') bad approach

// console.log('Before the delay')
// setTimeout(() => console.log('After 1s'), 1000)
// console.log('After the delay')

// exo1

const button = document.querySelector('button');

button.addEventListener('click', () => {
    fetch ('./becode.json')
    .then (response => response.json())
    .then (liste => {
        const ul = document.createElement('ul');
        for (const regles of liste){
            const li = document.createElement('li');
            li.textContent = regles;
            ul.appendChild(li);

        }
        document.body.appendChild (ul)
 
    })

    .catch(error => {
        console.log('There was an error!', error)
    })
}
)