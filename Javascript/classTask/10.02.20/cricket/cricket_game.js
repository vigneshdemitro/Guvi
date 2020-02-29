class Team{
    players = [
    {id:1,score:0,balls:0,four:0,six:0},
    {id:2,score:0,balls:0,four:0,six:0},
    {id:3,score:0,balls:0,four:0,six:0},
    {id:4,score:0,balls:0,four:0,six:0},
    {id:5,score:0,balls:0,four:0,six:0},
    {id:6,score:0,balls:0,four:0,six:0},
    {id:7,score:0,balls:0,four:0,six:0},
    {id:8,score:0,balls:0,four:0,six:0},
    {id:9,score:0,balls:0,four:0,six:0},
    {id:10,score:0,balls:0,four:0,six:0},
    {id:11,score:0,balls:0,four:0,six:0},    
    ];
    getScore(){
        for(var i=0;i<11;i++){
            var player = this.players;
            console.log(player[i].id,player[i].score);
        }
    }
    getBalls(){
        for(var i=0;i<11;i++){
            var p = this.players;
            console.log(p[i].id,p[i].balls);
        }
    }
    teamScore(){
        var p = this.players;
        var totalScore = 0;
        for(var i=0;i<11;i++){
            totalScore += p[i].score;
        }
        return totalScore;
    }
    teamSummary(){
        var pl = this.players;
        for(var i=0;i<11;i++){
            console.log('Player: '+pl[i].id,'Score: '+pl[i].score,'Balls Played: '+pl[i].balls,'Fours: '+pl[i].four,'Six: '+pl[i].six);
        }
    }

}
class Player extends Team{
    setScore(){
        var player = this.players;
        var i = 0;
        for(var j=1;j<=30;j++){
            var rand = Math.floor(Math.random() * 7);
        if (rand == 0){
            player[i].score = player[i].score;
            player[i].balls += 1;
            i = i + 1;
        }
        else if(rand == 4){
            player[i].score += rand;
            player[i].balls += 1;
            player[i].four += 1;
        }
        else if(rand == 6){
            player[i].score += rand;
            player[i].balls += 1;
            player[i].six += 1;
        }
        else{
            player[i].score += rand;
            player[i].balls += 1;
        }
    }
}
}

var team1 = new Player();
team1.setScore();
var t1score = team1.teamScore();
team1.teamSummary();
console.log('Total Score: ',t1score);
var team2 = new Player();
team2.setScore();
var t2score = team2.teamScore();
team2.teamSummary();
console.log('Total Score: ',t2score);
if(t1score > t2score){
    console.log('Team 1 Wins');
}
else if(t2score > t1score){
    console.log('Team 2 Wins');
}
else if(t1score == t2score){
    console.log('Match Draw');
}




