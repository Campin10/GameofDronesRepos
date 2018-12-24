export function getWinerRound(playeroneMove,playertwoMove){
    if(playeroneMove === "Rock" && playertwoMove === "Scissors")
    { return 1 }
    if(playeroneMove === "Scissors" && playertwoMove === "Rock")
    { return 2 }
    if(playeroneMove === "Paper" && playertwoMove === "Rock")
    { return 1 }
    if(playeroneMove === "Rock" && playertwoMove === "Paper")
    { return 2 }
    if(playeroneMove === "Scissors" && playertwoMove === "Paper")
    { return 1 }
    if(playeroneMove === "Paper" && playertwoMove === "Scissors")
    { return 2 }
}

export function getScore(TableRoundsData,props)
{
    let playerOneWins = TableRoundsData[props.names.playerone]
    let playerTwoWins = TableRoundsData[props.names.playertwo]
    var winer = "Empate"
    let maxScore;
    if(playerOneWins > playerTwoWins)
    {
      winer = props.names.playerone
      maxScore = playerOneWins;
    }
    if(playerOneWins < playerTwoWins)
    {
      winer = props.names.playertwo 
      maxScore = playerTwoWins
    }
    return { winer: winer, maxScore: maxScore} 
}

