function creatediv(){
    var body = document.getElementById('body');
    var maindiv = document.createElement('div');
    maindiv.id = 'container';
    maindiv.style = 'display:flex;justify-content:center'
    var image = document.createElement('img');
    image.id = 'image';
    image.style = 'width:1080px;height:550px';
    image.setAttribute('src','https://www.hdcarwallpapers.com/walls/ford_shelby_gt500_2012-wide.jpg')
    image.setAttribute('onmouseover','image()')
    maindiv.appendChild(image);
    document.body.appendChild(maindiv);
}


function image(){
    var image_list =["https://www.itl.cat/pngfile/big/9-99114_hd-car-wallpapers-for-pc-car-4k-wallpaper.jpg",
    "https://i.pinimg.com/originals/5d/5a/76/5d5a764eaa33add49f7b94846eb0b935.jpg",
    "https://wallpaperplay.com/walls/full/b/6/e/285137.jpg",
    "https://wallpaperset.com/w/full/a/6/b/126835.jpg",
    "https://i.pinimg.com/originals/13/1d/9b/131d9bb1141b5d03dd514b85d0c240d9.jpg",
    "https://wallpapers.gry-online.pl/pliki/70751/1920x1080.jpg"
    ]
    var random = Math.floor(Math.random()*6);
    var image = document.getElementById('image');
    image.setAttribute('src',image_list[random]);
    console.log(random,image_list[random]);
}
