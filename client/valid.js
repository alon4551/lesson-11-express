const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
const passwordRegex = RegExp(/^(?=.*\$).{5,10}$/);
const validInput = (input)=>{
    switch(input.name){
        case "username":
            return input.value.length>=4&&input.value.length<=8;
        case "email":
            return emailRegex.test(input.value)
        case "password":
        case "confirm":
            return passwordRegex.test(input.value)
            case "submit":
                return true
    }
}
const validtion=()=>{
    let arr = document.getElementsByTagName('input')
    let result =true;
    for(let i=0;i<arr.length-1;i++){
        console.log(validInput(arr[i]),arr[i])
        result&=validInput(arr[i])
        if(!validInput(arr[i])){
            arr[i].classList.add('error')
        }
    }
    return document.getElementById('password').value==document.getElementById('confirm').value && result;
}
const homeValid = ()=>{
    let result = document.getElementById("fullname").value.length>2
    if(!result)
        alert('username must be at least 2 chracthers')
    return result;
}
const getUserName = async ()=>{
    let name = await (await fetch('/username')).json()
    console.log(name)
    document.getElementById('username').value = name.username
}
getUserName()