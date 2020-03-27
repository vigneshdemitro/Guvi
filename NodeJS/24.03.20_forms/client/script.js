function formSubmit() {
    var myJsonData = {
        'email': document.getElementById('inputEmail').value,
        'password': document.getElementById('inputPassword').value,
        'firstName': document.getElementById('firstName').value,
        'lastName': document.getElementById('lastName').value,
    };

    document.getElementsByName('gender').forEach(function (genderObj) {
        if (genderObj.checked) {
            myJsonData.gender = genderObj.value;
        }
    });


    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(myJsonData)
    })
        .then((response) => { return response.json() })
        .then((data) => alert(data.message))
        .catch((err) => console.error(err))

    document.getElementById('userData').reset();
    document.getElementById('inputEmail').focus();
}

function showUserData() {
    fetch("http://localhost:3000/getUsers")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            document.getElementById('tBody').innerHTML = '';
            data.forEach(element => {
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                td1.innerHTML = element.firstName;
                var td2 = document.createElement('td');
                td2.innerHTML = element.lastName;
                var td3 = document.createElement('td');
                td3.innerHTML = element.email;
                var td4 = document.createElement('td');
                td4.innerHTML = element.gender;
                var td5 = document.createElement('td');
                var delbtn = document.createElement('button');
                delbtn.className = "btn btn-danger";
                delbtn.id = element.email;
                delbtn.innerHTML = "Delete";
                delbtn.setAttribute('onClick', `deleteUser(this.id)`);
                td5.appendChild(delbtn);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                document.getElementById('tBody').appendChild(tr);
            })
        })
        .catch((err) => {
            console.error(err);
        })
}


function deleteUser(userEmail) {
    fetch("http://localhost:3000/deleteUser", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userEmail)
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            alert(data.message);
        })
        .catch((err) => {
            console.error(err);
        })

}
