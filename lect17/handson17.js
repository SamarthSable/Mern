console.log("Handson File");
const teams = {
    name: "Indian Cricket Team",
    playersh: [{id:1 , scores: [10,20,30]}],

    displayh: function() {
        for(let player of this.playersh){
            console.log(player.id + "---" + player.scores.join(" "));
        }
    },
    addPlayersh:  function(id){
        const newPlayer ={};
        newPlayer.id = id; 
        newPlayer.scores=[];
        this.playersh.push(newPlayer);
    },
    addScoreh: function(id,score){
        for(let player of this.playersh){
            if(player.id === id){
                player.scores.push(score);
                return;
            }
        }
    },
    avgScore: function(id) {
        for(let player of this.playersh){
            if(player.id===id){
                let sum =0;
                for(let val of player.scores){
                    sum+=val;
                    return sum/player?.scores?.length;
                }
            }
        }
    }
}

teams.addPlayersh(2);
teams.addPlayersh(3);

teams.addScoreh(1, 29);
teams.addScoreh(3, 80);
teams.addScoreh(2, 40);
teams.addScoreh(2, 100);
teams.addScoreh(2, 120);
teams.addScoreh(3, 20);

teams.displayh();
console.log("Average score of player 1 is =" + teams.avgScore(1));
console.log("Average score of player 1 is =" + teams.avgScore(1));
console.log("Average score of Team is =" + teams.teamAvgScore(1));
