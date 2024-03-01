
let result = document.getElementById('answer');

let arrResponse = [];

let response = document.getElementById('text-input');

function palindromeChecker(){
  console.log(response.value);
  if (response.value === '') {
    alert('Please input a value');
    return;
  }
  const responseShort = response.value.toLowerCase().replace(/[^0-9a-z]/gi, '');
  arrResponse = responseShort.split('');
  const  isPalindrome = `${response.value} <em class="bold">is</em> a palindrome`
  const isNotPal = `${response.value} is <em class="bold">not</em> a palindrome`
  for(let i = 0; i <= arrResponse.length; i++){
    if (arrResponse[i] !== arrResponse[arrResponse.length - i - 1]){
      result.innerHTML = isNotPal;
      return;
    }
    result.innerHTML = isPalindrome;
  }
}

document.getElementById('check-btn').onclick = palindromeChecker;
