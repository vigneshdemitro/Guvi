function creatediv(){
    var maindiv = document.createElement('div');
    maindiv.id = 'container';
    var divleft = document.createElement('div');
    divleft.id = 'left';
    divleft.innerHTML = "I'm div left";
    maindiv.appendChild(divleft);
    var divright = document.createElement('div');
    divright.id = 'right';
    divright.innerHTML = "I'm div right";
    maindiv.appendChild(divright);
    var btndiv = document.createElement('div');
    btndiv.id = 'btndiv';
    var btn = document.createElement('button');
    btn.id = 'btn';
    btn.setAttribute('onclick','swap()');
    btn.innerHTML = 'SWAP';
    btndiv.appendChild(btn);
    document.body.appendChild(maindiv);
    document.body.appendChild(btndiv);
}


function swap(){
    document.getElementById('btn').disabled = true;
    var left = document.getElementById('left').innerText;
    var right = document.getElementById('right').innerText;
    [left,right] = [right,left];
    console.log(left,right)
    document.getElementById('left').innerHTML = left;
    document.getElementById('right').innerHTML = right;
}