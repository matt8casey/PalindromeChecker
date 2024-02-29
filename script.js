const response = document.getElementById('text-input');

if (response === '') {
    alert('Please input a value');
    return;
  }

const result = document.getElementById('answer');

  response.tolowercase();

const responseShort = response.replace(/[^0-9a-z]/gi, '')

const reverseResponse = [];
const arrResponse = [];

const isPalindrome = `${response} <em class="bold">is</em> a palindrome`

const isNotPal = `${response} is <em class="bold">not</em> a palindrome`

arrResponse = responseShort.split('');
reverseResponse = arrResponse.reverse();

function palindromeChecker(){
  for(let i = 0; i < arrResponse.length; i++){
    if (arrResponse[i] !== reverseResponse[i]){
      result.innerHTML = isNotPal;
    }
    result.innerHTML = isPalindrome;
  }
}

document.getElementById('check-btn').onclick = palindromeChecker;
