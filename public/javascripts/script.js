$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

function emailValidation(){
    var email=$('#emailText').val();
    var letters= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email==""){
        $('#emailSpan').html("Filed is required")
        return false;
    }else if(email.match(letters)){
        $('#emailSpan').html("")
        return true;
    }else{
        $('#emailSpan').html("Enter valid E-mail")
        return false;
    }
}

function CheckPassword() {
    
    var password=$('#passwordText').val();
    // var letters=  /^[A-Za-z]\w{7,14}$/;
    var len = password.length
    if(password==""){
        $('#passwordSpan').html("Filed is required")
        return false;
    }
    // else if(password.match(letters)){ 
    //     $('#passwordSpan').html("")
    //     return true;
    // }
    else if(len<=3){
        $('#passwordSpan').html("Password is too short")
        return false;
    }else{ 
        $('#passwordSpan').html("")
        return true;
    }
    }