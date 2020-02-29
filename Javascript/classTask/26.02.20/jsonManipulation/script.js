function creatediv(){
    var jsondiv = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = 'JSON Manipulation';
    var jsonp = document.createElement('p');
    jsonp.id = 'randNumber';
    jsonp.innerHTML = string1;
    jsondiv.appendChild(h1);
    jsondiv.appendChild(jsonp);
    document.body.appendChild(jsondiv);
}

var input = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": [{
                                "id": 6,
                                "title": "Title 6",
                                "childrens": [{
                                    "id": 7,
                                    "title": "Title 7",
                                    "childrens": []
                               }]
                           }]
                        }
                   ]
              }
         ]
    }
]

var output = [];

function outputArray(inputArray){
    inputArray.forEach(element =>{
    dict = {
            id : element.id,
            title : element.title,
            childrens : [],
            };
    output.push(dict);
    if(element.childrens.length > 0){
            outputArray(element.childrens);
    }        
    })
}

outputArray(input)

var string1 = JSON.stringify(output);
console.log(output)