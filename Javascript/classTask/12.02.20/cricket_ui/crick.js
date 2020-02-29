function divCreation(){
    var body = document.getElementById('body');
    body.style = 'box-sizing:border-box;background-image: url(https://previews.123rf.com/images/lumyaisweet/lumyaisweet1706/lumyaisweet170600051/81126255-cricket-field-with-bright-stadium-vector-illustration-.jpg);background-position: center;';
    var maindiv = document.createElement('div');
    maindiv.class = 'container';
    maindiv.style = "margin: 10px;display: flex;flex-direction: column;"
    body.appendChild(maindiv);
    var heading = document.createElement('div');
    heading.class = 'heading';
    heading.innerHTML = 'Welcome to Cricket Match';
    heading.style = 'font-size:35px; color: white;text-align: center;height: 250px;';
    maindiv.appendChild(heading);
    var matchdiv = document.createElement('div');
    matchdiv.class = 'matchdiv';
    matchdiv.style = 'height: 250px;text-align: center;';
    var matchbtn = document.createElement('button');
    matchbtn.id = 'matchbtn';
    matchbtn.innerHTML = 'Click Here To Start Match';
    matchbtn.addEventListener('click',startMatch);
    matchdiv.appendChild(matchbtn);
    maindiv.appendChild(matchdiv);
    var teamdiv = document.createElement('div');
    teamdiv.class = 'teamdiv';
    teamdiv.style = 'display: flex;justify-content: space-evenly;';
    var t1div = document.createElement('div');
    t1div.id = 't1div';
    var t1btn = document.createElement('button');
    t1btn.id = 't1btn';
    t1btn.innerHTML = 'Team1';
    t1btn.addEventListener('click',setscore1);
    t1div.appendChild(t1btn);
    teamdiv.appendChild(t1btn);
    var summarydiv = document.createElement('div');
    summarydiv.class = 'sumrydiv';
    var sumbtn = document.createElement('button');
    sumbtn.id = 'sumbtn';
    sumbtn.innerHTML = 'Summary';
    sumbtn.addEventListener('click',summary)
    summarydiv.appendChild(sumbtn);
    teamdiv.appendChild(sumbtn);
    var t2div = document.createElement('div');
    t2div.class = 't2div';
    var t2btn = document.createElement('button');
    t2btn.id = 't2btn';
    t2btn.innerHTML = 'Team2';
    t2btn.addEventListener('click',setscore2);
    t2div.appendChild(t2btn);
    teamdiv.appendChild(t2div);
    maindiv.appendChild(teamdiv);
    document.getElementById('t1btn').disabled = true;
    document.getElementById('t2btn').disabled = true;
    document.getElementById('sumbtn').disabled = true;
}
function startMatch(){
    document.getElementById('matchbtn').disabled = true;
    const randomNumber = Math.floor((Math.random()*2 + 1));
    if(randomNumber == 1){
        alert('Team 1 Won the Toss \n Chose to bat');
        document.getElementById('t1btn').disabled = false;
    }
    else{
        alert('Team 2 Won the Toss \n Chose to bat');
        document.getElementById('t2btn').disabled = false;
    }
}

class Player{
    players = [];
    overSummary = [];
    constructor(){
        for(var i=0;i<11;i++){
            this.players.push({"Id": i+1,"Score":0,"Balls":0,"Four":0,"Six":0});
        }
    }   
}


class Team extends Player{
    totalScore = 0
    teamScore(){
        var p = this.players;
        for(var i=0;i<11;i++){
            this.totalScore += p[i].Score;
        }
        return this.totalScore
    }
    teamSummary(){
        var p = this.players;
        for(var i=0;i<11;i++){
            document.write("<br>");
            document.write("Player"+p[i].Id,":",p[i].Score, "-",p[i].Balls,"-",p[i].Four,"-",+p[i].Six);
        }
        document.write("<br>");
        document.write("<br>");
        document.write("Team Score:"+this.totalScore);
        return this.totalScore
    }
    showOver(){
        console.log(this.overSummary);
    }
    setOver(run,ball){
        if(run == 0){
            run = 'w';
        }
        console.log(run,ball);
        this.overSummary.push({run,ball});
        return this.overSummary
    }
    getOver(x){
        var over = x * 6;
        var o = this.overSummary;
        var total = [];
        for(var i = (over-6);i<over;i++);
        {
            total.push(o[i].run);
        }
        document.write("Over"+x+":",total);
        document.write("<br>");
    }

    setScore(i,b){
        var a = this.players;
        if((b+1)<=10){
        var f = Math.floor(Math.random() * 7);
        this.setOver(f,i);
        if (f == 0){
            a[b].Score = a[b].Score;
            a[b].Balls += 1;
            b += 1;
            
        }
        else if(f == 4){
            a[b].Score += f;
            a[b].Balls += 1;
            a[b].Four += 1;
            
        }
        else if(f== 6){
            a[b].Score += f;
            a[b].Balls += 1;
            a[b].Six += 1;
            
        }
        else{
            a[b].Score += f;
            a[b].Balls += 1; 
        }
        return b
        }   
    }
}

    //User Interface function
    var team1 = new Team();
    var team2 = new Team();
    var i = 0;
    var j = 0;
    var b = 0;
    var c = 0;

//Team 1 batting
function setscore1(){
    i += 1;
    if(i<30){
    var d = team1.setScore(i,b);
    b = d
    }
    else if(i == 30){
        var d = team1.setScore(i,b);
        b = d;
        var team1Score = team1.teamScore();
        console.log(team1Score);
        document.getElementById("t1btn").disabled = true;
        document.getElementById("t2btn").disabled = false;
        console.log(document.getElementById("sumbtn").disabled)
        if(document.getElementById("sumbtn").disabled == true){
            document.getElementById("sumbtn").disabled = false;
        }
    }
}


//Team 2 Batting function
function setscore2(){
    j += 1;
    if(j<30){
    var e = team2.setScore(j,c);
    c = e;
    }
    else if(j == 30){
        var e = team2.setScore(j,c);
        c = e;
        var team2Score = team2.teamScore();
        console.log(team2Score);
        document.getElementById("t1btn").disabled = false;
        document.getElementById("t2btn").disabled = true;
        console.log(document.getElementById("sumbtn").disabled)
        if(document.getElementById("sumbtn").disabled == true){
            document.getElementById("sumbtn").disabled = false;
        }
    }
}

// if(document.getElementById("t1btn").disabled && document.getElementById("t2btn").disabled == 'false'){
//     document.getElementById("sumbtn").disabled = true;
// }

//Gives the summary of the match
function summary(){
    document.write("-----------Team 1 ----------");
    var a = team1.teamSummary();
    document.write("<br>");
    document.write("<br>");
    for(var i= 1;i<=5;i++){
        team1.getOver(i);
    }
    document.write("<br>");
    document.write("-----------Team 2 ----------");
    var b = team2.teamSummary();
    document.write("<br>");
    document.write("<br>");
    for(var i=1;i<=5;i++){
        team2.getOver(i);
    }
    if(a>b){
        document.write("<br>");
        document.write("------------Team1 wins-------------");
    }
    else if(a<b){
        document.write("<br>");
        document.write("------------Team2 wins-------------");
    }
    else{
        document.write("<br>");
        document.write("------------Match Draws-------------");
    }
}
