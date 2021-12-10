const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innertext=message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control error';
}

function isValidemail(email){
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        console.log(input.value); 
    });
}



form.addEventListener('submit',function(e){

    e.preventDefault();
    console.log(username.value);

    if(username.value===''){
        showError(username,'Username is required');
        // alert('username is required');
    }else{
        showSuccess(username);

    }   

    if(email.value===''){
        showError(email,'Email is required');
        // alert('username is required');
    }else if(!isValidemail(enail.value)){
        showError(email,'Email is not Valid');

    } else{
        showSuccess(email);
    }   

    if(password.value===''){
        showError(password,'Password is required');
        // alert('username is required');
    }else{
        showSuccess(password);
    }   

    if(password2.value===''){
        showError(password2,'Password Confirmation is required');
        // alert('username is required');
    }else{
        showSuccess(password2);
    }   


    


})