function registerUser(){
    let myJsonData = {
        'email' : document.getElementById('inputEmail').value,
        'password' : document.getElementById('inputPassword').value,
        'firstName' : document.getElementById('firstName').value,
        'lastName' : document.getElementById('lastName').value,
    };
  
    document.getElementsByName('gender').forEach(function (genderObj){
        if(genderObj.checked){
            myJsonData.gender = genderObj.value;
        }
    });
    

    fetch("http://localhost:3000/register",{
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body : JSON.stringify(myJsonData)
    })
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.error(err)})

    document.getElementById('userData').reset();
    document.getElementById('inputEmail').focus();
}

function loginUser(){
    let myLoginData = {
        'email' : document.getElementById("inputEmail").value,
        'password' : document.getElementById("inputPassword").value
    } 
    fetch("http://localhost:3000/login",{
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body : JSON.stringify(myLoginData)
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        alert(data.message);
    })
    .catch(err=>console.error(err));
}

