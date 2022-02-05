var slider = document.getElementById("myRange"); 
var output = document.getElementById("updatedLength"); 
output.innerHTML = slider.value; 

slider.oninput = function() { 
  output.innerHTML = this.value; 
  console.log(this.value); 
} 

const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

const specialCharacters = ['~', '$', '!', '@', '#', '&']; 

function generate() { 
    const sizeOfPassword = slider.value;
    const param = [];
    
    if(document.getElementById('UpperCase').checked) param.push(1);
    if(document.getElementById('LowerCase').checked) param.push(2);
    if(document.getElementById('Numbers').checked) param.push(3);
    if(document.getElementById('Special').checked) param.push(4);
    if(param.length==0) alert("please select some character for the password");
    else{
      let password = generatePassword(param, sizeOfPassword);
      console.log(password);
      let screen = document.getElementById("displayValue");
      screen.innerText = password;
    }
}
function generatePassword(param, sizeOfPassword){
  let password = "";
  let parameter = Math.floor(sizeOfPassword/param.length);
  for(let j=0; j<param.length; j++){
      password += getCharacter(param[j]);
  }
  for(let i = param.length; i<sizeOfPassword; i++){
    let val = param[Math.floor(Math.random()*param.length)];
    password += getCharacter(val);
  }
  return password;
}
function getCharacter(val) {
    if(val===1) return upperCase[Math.floor(Math.random()*upperCase.length)];
    if(val===2) return lowerCase[Math.floor(Math.random()*lowerCase.length)];
    if(val===3) return numbers[Math.floor(Math.random()*numbers.length)];
    return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
}

