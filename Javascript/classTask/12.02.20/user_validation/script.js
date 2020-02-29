function creatediv(){
    var body = document.getElementById('body');
    body.style = 'background-color: grey;'
    var maindiv = document.createElement('div');
    maindiv.id = 'container';
    var divhead = document.createElement('div');
    divhead.id = 'head';
    var heading = document.createElement('h3');
    heading.innerHTML = 'Username & Password Validation';
    divhead.appendChild(heading);
    var p_text = document.createElement('p');
    p_text.innerHTML = 'Try to fill the form with valid inputs as required.'
    divhead.appendChild(p_text);
    maindiv.appendChild(divhead);
    var formdiv = document.createElement('div');
    formdiv.id = 'formdiv';
    var form = document.createElement('form');
    form.action = "/action_page.php";
    var label_usr = document.createElement('label');
    label_usr.setAttribute('for','usrname');
    label_usr.innerHTML = 'USERNAME';
    var username = document.createElement('input');
    username.name = 'usrname';
    username.id = 'usrname';
    username.type = 'text';
    username.setAttribute('pattern','^[A-Za-z][A-Za-z0-9]*([._-]?[A-Za-z0-9]+)@[A-Za-z].[A-Za-z]{0,3}?.[A-Za-z]{0,2}$|[0-9]{10}');
    username.setAttribute('title','Accepted formats: \n email-Id \n Mobile Number')
    username.setAttribute('required','');
    var label_pass = document.createElement('label');
    label_pass.setAttribute('for','passwrd');
    label_pass.innerHTML = 'PASSWORD';
    var passwrd = document.createElement('input');
    passwrd.name = 'passwrd';
    passwrd.id = 'passwrd';
    passwrd.type = 'password';
    passwrd.setAttribute('pattern','(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}');
    passwrd.setAttribute('title','Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
    passwrd.setAttribute('reqired','');
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.value = 'submit';
    submit.setAttribute('onclick','message()');
    form.appendChild(label_usr);
    form.appendChild(username);
    form.appendChild(label_pass);
    form.appendChild(passwrd);
    form.appendChild(submit);
    formdiv.appendChild(form);
    maindiv.appendChild(formdiv);
    var messagediv = document.createElement('div');
    messagediv.id = 'message';
    maindiv.appendChild(messagediv);
    document.body.appendChild(maindiv);
}


function message(){
    var user_val = document.getElementById('usrname').value;
    var pass_val = document.getElementById('passwrd');
    if((user_val.length) && (pass_val.length) != 0 ){
    var message = document.getElementById('message');
    var mess_success = document.createElement('p');
    mess_success.innerHTML = 'Valid username & password';
    message.appendChild(mess_success);
    document.getElementById('maindiv').appendChild(message);
    }
    else{
    var message = document.getElementById('message');
    var mess_failed = document.createElement('p');
    mess_failed.innerHTML = 'InValid username & password';
    message.appendChild(mess_failed);
    document.getElementById('maindiv').appendChild(message);
    }
}


function message1(){
    var message = document.getElementById('message');
    var lowercase = document.createElement('p');
    lowercase.innerHTML = 'A lowercase letter';
    var uppercase = document.createElement('p');
    uppercase.innerHTML = 'A Uppercase letter';
    var num = document.createElement('p');
    num.innerHTML = 'Must contain a number';
    var special = document.createElement('p');
    special.innerHTML = 'Must contain a special character';
    var len = document.createElement('p');
    len.innerHTML = 'Minimum of 8 characters';
    message.appendChild(lowercase);
    message.appendChild(uppercase);
    message.appendChild(num);
    message.appendChild(special);
    message.appendChild(lowercase);
    document.getElementById('maindiv').appendChild(message);
}