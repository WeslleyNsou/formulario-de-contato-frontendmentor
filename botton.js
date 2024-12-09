const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkinputs();
})

function checkinputs(){
    const fname = fname.value
    const lname = lname.value
    const email = email.value

    if(fname.value === ''){
        alert('digite seu nome')
    }
}