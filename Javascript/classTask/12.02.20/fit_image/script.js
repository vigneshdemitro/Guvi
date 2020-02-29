function creatediv(){
    var body = document.getElementById('body');
    var maindiv = document.createElement('div');
    maindiv.id = 'container';
    var topdiv = document.createElement('div');
    topdiv.id = 'topdiv';
    topdiv.style ='width:1150px;height:420px;';
    var top_image = document.createElement('img');
    top_image.id = 'topimage';
    top_image.style = 'width:1150px;height:420px';
    topdiv.appendChild(top_image);
    maindiv.appendChild(topdiv);
    var prev_image = document.createElement('div');
    prev_image.id = 'previmage';
    prev_image.style = 'width:1150px;height:100px;';
    var image1 = document.createElement('img');
    image1.id = 'image1';
    image1.style = 'width:200px;height:100px';
    image1.setAttribute('src','https://www.hdcarwallpapers.com/walls/ford_shelby_gt500_2012-wide.jpg')
    image1.setAttribute('onclick','image(this.src)')
    prev_image.appendChild(image1);
    var image2 = document.createElement('img');
    image2.id = 'image2';
    image2.style = 'width:200px;height:100px';
    image2.setAttribute('src','https://i.pinimg.com/originals/5d/5a/76/5d5a764eaa33add49f7b94846eb0b935.jpg')
    image2.setAttribute('onclick','image(src)')
    prev_image.appendChild(image2);
    var image3 = document.createElement('img');
    image3.id = 'image1';
    image3.style = 'width:200px;height:100px';
    image3.setAttribute('src','https://wallpapers.gry-online.pl/pliki/70751/1920x1080.jpg')
    image3.setAttribute('onclick','image(this.src)')
    prev_image.appendChild(image3);
    maindiv.appendChild(prev_image);
    document.body.appendChild(maindiv);
}


function image(img){
    var image = document.getElementById('topimage');
    image.setAttribute('src',img);
    console.log(img);
}
