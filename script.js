function getData(){
    debugger
var UserMailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
 var UserPassRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var firstName=document.getElementById('firstName').value
    var lastName=document.getElementById('lastName').value
    var phoneNumber=document.getElementById('phNumber').value
    var email=document.getElementById('email').value
    var state=document.getElementById('state').value
    var city=document.getElementById('city').value
    var firstPassword=document.getElementById('enterPassword').value
    var secondPassword=document.getElementById('confirmPassword').value
    var userId=parseInt(Math.random()*99099000)
    var fullname=firstName+" "+lastName
    let userObject={
        firstNameLS:firstName,
        lastNameLS:lastName,
        phoneNumberLS:phoneNumber,
        emailLS:email,
        userIdLS:userId,
        stateLS:state,
        cityLS:city,
        firstPasswordLS:firstPassword,
        secondPasswordlS:secondPassword
    }
    const dataFromLS = JSON.parse(localStorage.getItem("userInput"))? JSON.parse(localStorage.getItem("userInput")): []
    if(dataFromLS.some(xx)||dataFromLS.some(yy)){
        if(dataFromLS.some(xx)){
           document.getElementById('phNumber').style.border='2px solid red'
            document.getElementById('existPhoneNumber').style.display='block'
        }else if(dataFromLS.some(yy)){
            document.getElementById('email').style.border='2px solid red'
            document.getElementById('existEmail').style.display='block'
        }
    }else if(firstName==""||lastName==""||phoneNumber==""||email==""||state==""||city==""||firstPassword==""||secondPassword==""){
        if(firstName==""){
            document.getElementById('firstName').style.border='5px solid red'
            document.getElementById('emptyName').style.visibility='visible'
        }else if(lastName==""){
            document.getElementById('lastName').style.border='5px solid red'
            document.getElementById('emptyLastName').style.visibility='visible'
        }else if(phoneNumber==""){
            document.getElementById('phNumber').style.border='5px solid red'
            document.getElementById('emptyPhoneNumber').style.visibility='visible'
        }else if(email==""){
            document.getElementById('email').style.border='5px solid red'
            document.getElementById('emptyMail').style.visibility='visible'
        }else if(state==""){
            document.getElementById('state').style.border='5px solid red'
            document.getElementById('emptyState').style.visibility='visible'
        }else if(city==""){
            document.getElementById('city').style.border='5px solid red'
            document.getElementById('emptyCity').style.visibility='visible'
        }else if(firstPassword==""){
            document.getElementById('enterPassword').style.border='5px solid red'
            document.getElementById('emptyFirstPassword').style.visibility='visible'
        }else if(secondPassword==""){
            document.getElementById('confirmPassword').style.border='5px solid red'
            document.getElementById('emptyConfirmPassword').style.visibility='visible'
        }
    }else if(!UserMailRegex.test(email)){
        
        document.getElementById('validEmail').style.display='block'
        document.getElementById('email').style.border='5px solid red'
    }else if(!UserPassRegex.test(firstPassword)){
        document.getElementById('enterPassword').style.border='5px solid red'
        document.getElementById('pwdpattern').style.display = 'block'
    }else if(firstPassword==secondPassword){ 
    
        // alert('something is empty')
        alert('Your user Id is: '+userId)
        dataFromLS.push(userObject)
        localStorage.setItem('userInput',JSON.stringify(dataFromLS))
    }else{
        document.getElementById("diffPwd").style.display = 'block'
        document.getElementById('enterPassword').style.border='5px solid red'
        document.getElementById('confirmPassword').style.border='5px solid red'
    }
// console.log(dataFromLS);
// console.log(dataFromLS.some(name));
function name(i){
    return firstName==i.firstNameLS
}
    

function xx(i){
debugger
    return phoneNumber===i.phoneNumberLS
}
function yy(i){
    debugger
        return email===i.emailLS
    }
}
function inputfirstName(){
    document.getElementById('firstName').style.border='2px solid black';
    document.getElementById('emptyName').style.visibility='hidden';
}
function inputLastName(){
    document.getElementById('lastName').style.border='2px solid black';
    document.getElementById('emptyLastName').style.visibility='hidden';
}
function inputPhoneNumber(){
    document.getElementById('phNumber').style.border='2px solid black';
    document.getElementById('emptyPhoneNumber').style.visibility='hidden';
    document.getElementById('phNumber').style.border='2px solid black'
    document.getElementById('existPhoneNumber').style.display='none'
}
function inputEmail(){
    document.getElementById('email').style.border='2px solid black';
    document.getElementById('emptyMail').style.visibility='hidden';
    document.getElementById('existEmail').style.display='none'
    document.getElementById('validEmail').style.display='none'
}
function inputState(){
    document.getElementById('state').style.border='2px solid black';
    document.getElementById('emptyState').style.visibility='hidden';
}
function inputLastCity(){
    document.getElementById('city').style.border='2px solid black';
    document.getElementById('emptyCity').style.visibility='hidden';
}
function inputEnterPassword(){
    document.getElementById('enterPassword').style.border='2px solid black';
    document.getElementById('emptyFirstPassword').style.visibility='hidden';
    document.getElementById('diffPwd').style.display='none';
    document.getElementById('pwdpattern').display='none'
}
function inputConfirmPassword(){
    document.getElementById('confirmPassword').style.border='2px solid black';
    document.getElementById('emptyConfirmPassword').style.visibility='hidden';
}














function loginCancel(){
    debugger
    document.getElementById('originalPopUp').style.display='none'
    document.getElementById('login').style.filter='blur(0px)'
    document.getElementById('CompanyName').style.filter='blur(0px)'
    document.getElementById('logo').style.filter='blur(0px)'
    window.location.reload()
}

function signUp(){
    // debugger
    document.getElementById('originalPopUp').style.display='block'
    document.getElementById('login').style.filter='blur(5px)'
    document.getElementById('CompanyName').style.filter='blur(5px)'
    document.getElementById('logo').style.filter='blur(5px)'
    
}
var userIDForUserProfile;
function login(){
    debugger
    const dataFromLS = JSON.parse(localStorage.getItem("userInput"))? JSON.parse(localStorage.getItem("userInput")): []
    var uName2=document.getElementById('uid').value
    var pwd=document.getElementById('pwd').value
    console.log(uName2);
    console.log(pwd);
    // const dataFromLS = JSON.parse(localStorage.getItem("userInput"))? JSON.parse(localStorage.getItem("userInput")): []
    if(uName2=='1234'&&pwd=='1234'){
        window.location.href="adminPage.html"
    }else{
        if(dataFromLS.some((aa)) && dataFromLS.some(bb)){
            window.location.href='UserPage.html'
            userIDForUserProfile=uName2
            localStorage.setItem('userIDForUserProfile', JSON.stringify(userIDForUserProfile))
        }else{
            alert('UserId or Password is different')
        }
    }
    function aa(i){
        return pwd==i.firstPasswordLS
    }
    function bb(i){
        return uName2==i.userIdLS
    }

}
   
// const dataFromLS = JSON.parse(localStorage.getItem("userInput"))? JSON.parse(localStorage.getItem("userInput")): []
// var fullname2=dataFromLS[1].firstNameLS+" "+dataFromLS[1].lastNameLS
// // console.log(fullname2);

function price(){
    var rate=document.getElementById('price2').value;
    var km=document.getElementById('distance').innerHTML
    var amount=rate*km
    document.getElementById('amount').innerHTML=amount
}

function addTrucks(){
    // debugger
    document.getElementById('mainAddTrucks').style.display ='block'
    document.getElementById('mainContainer').style.display ='none'
    document.getElementById('extraContainer').style.display ='block'
    document.getElementById('addDeleteButons').style.display='none'
    document.getElementById('availableTrucks').style.display='none'
    document.getElementById('availableTrucks2').style.display='none'
   
}
function goBack(){
    // debugger
    document.getElementById('mainAddTrucks').style.display ='none'
    document.getElementById('mainContainer').style.display ='block'
    document.getElementById('extraContainer').style.display ='none'
    document.getElementById('addDeleteButons').style.display='block'
    window.location.reload();
}

function loginpageClear(){
    document.getElementById('uid').value=''
    document.getElementById('pwd').value=''
}
    
    