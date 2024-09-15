const PassWordButton = document.querySelector('.PassWordButton');
const input = document.querySelector('input');

PassWordButton.addEventListener('click', createPassWord);

function createPassWord() {
    const passWordLenght = 14;
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let password = '';
    for(let index=0; index<passWordLenght;index++)
    { 
        const randomNum = Math.floor(Math.random() * characters.length); 
        password += characters[randomNum];
        }
        input.value = password;

   

}
