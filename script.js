function alpha()
{
    if (/^[A-Za-z]+/.test(form.name.value))
    {
        return true;
    }
    else 
    {
        alert("Enter only alphabets");
        return false;
    }
}

function validateEmail() 
{

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
    {
    return (true)
    } 
        alert("You have entered an invalid email address!")
        return (false)
}

function phonenumber()
{

  if (/^\d{10}$/.test(form.phone.value))
        {
            return true;
        }
      else
        {
        alert("need 10 numbers");
        return false;
        }
}


function validate(){
    if (phonenumber() && validateEmail() && alpha()  )
        {
            document.getElementById("submit").disabled=false;
            return false
        }
    else
    {
        document.getElementById("submit").disabled=true;
        return true
    }
    }



function check_pal(){
    // Selecting the input element and get its value 
    var str = document.getElementById("myInput1").value;

        var len = str.length;
        
        var mid = Math.floor(len/2);
    
        for ( var i = 0; i < mid; i++ ) {
            if (str[i] !== str[len - 1 - i]) {
                alert("not a palindrome")
                return false;
            } 
        }
        alert("palindrome")
        return true;
       
    }



    function whowillsurvive(){
        var human = 0;
        var cockroach = 1;
        var bomb = 2
        var numb1 = document.getElementById('numb1').value;
        var numb2 = document.getElementById('numb2').value;
        div1 = numb1 % 3;
        div2 = numb2 % 3;
            if (div1 == 0 && div2 == 0 || div1 == 1 && div2 == 1 || div1 == 2 && div2 == 2 )
            {
                alert("its a tie")
                setRandom()
                return -1
            }
            else if (div1 == 0 && div2 == 1 || div1 == 1 && div2 == 0)
            {
                alert("Human survives")
                setRandom()
                return 0
            }
            else if (div1 == 1 && div2 == 2 || div1 == 2 && div2 == 1)
            {
                alert("Cockroach survives")
                setRandom()
                return 1
            }
            else if (div1 == 2 && div2 == 0 || div1 == 0 && div2 == 2)
            {
                alert("Nuclear bomb survives")
                setRandom()
                return 2

            }
            
        
        }

   function ana(){
    myInput2 = (document.getElementById('myInput2').value)
    myInput3 = (document.getElementById('myInput3').value)
    myInput2= myInput2.toLowerCase().split('').sort().join('')
    myInput3=myInput3.toLowerCase().split('').sort().join('')
    var isAnagram = myInput2.length > 0 && myInput2.length === myInput3.length && (myInput2 === myInput3);

    alert('Its an Anagram: ' + isAnagram);
   }

function setNumber(val){
    document.getElementById('op_value').innerHTML = document.getElementById('op_value').innerHTML + val
    
}

function clearScreen(){
    document.getElementById('op_value').innerHTML = ''
    document.getElementById('prev_op_num').innerHTML = ''
    document.getElementById('prev_op_oper').innerHTML = ''

}

function cE(){
    document.getElementById('op_value').innerHTML = ''
}
 
function selectOperation(oper){
    if (document.getElementById('op_value').innerHTML == '' && oper == '-'){
        document.getElementById('op_value').innerHTML = '-'
    }
    else {
    document.getElementById('prev_op_num').innerHTML = document.getElementById('op_value').innerHTML 
    document.getElementById('prev_op_oper').innerHTML = oper
    document.getElementById('op_value').innerHTML=''
    }
}

function calculate(){
    let prev=parseInt(document.getElementById('prev_op_num').innerHTML)
    let cur=parseInt(document.getElementById('op_value').innerHTML)

    switch (document.getElementById('prev_op_oper').innerHTML){
        case '%': 
            document.getElementById('op_value').innerHTML = (prev * cur) / 100 
            break
        case '*': 
            document.getElementById('op_value').innerHTML = prev * cur
            break
        case '/': 
            document.getElementById('op_value').innerHTML = prev / cur
            break
        case '-': 
            document.getElementById('op_value').innerHTML = prev - cur
            break
        default :
            document.getElementById('op_value').innerHTML = prev + cur

    }
    document.getElementById('prev_op_num').innerHTML = ''
    document.getElementById('prev_op_oper').innerHTML = ''
}
function absolute(){
   var2 = document.getElementById('op_value').innerHTML 
   document.getElementById("op_value").innerHTML = Math.abs(var2)
}


function squareroot(){
    var1 = document.getElementById("op_value").innerHTML 
    document.getElementById("op_value").innerHTML = round(Math.sqrt(var1),3)

}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}



function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(1000));
  }

function setRandom(){
    document.getElementById('numb1').value = getRandomInt()
    document.getElementById('numb2').value = getRandomInt()

}