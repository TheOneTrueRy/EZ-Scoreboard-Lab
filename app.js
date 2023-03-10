let teamOne = {
  score: 0
}

let teamTwo = {
  score: 0
}

function scoreOneIncrease(){
  teamOne.score++
  saveTeamOne()
  loadTeams()
}

function fumbleOne(){
  teamOne.score--
  saveTeamOne()
  loadTeams()
}

function GOALONE(){
  teamOne.score++
  teamOne.score++
  teamOne.score++
  teamOne.score++
  teamOne.score++
  saveTeamOne()
  loadTeams()
}

function scoreTwoIncrease(){
  teamTwo.score++
  saveTeamTwo()
  loadTeams()
}

function fumbleTwo(){
  teamTwo.score--
  saveTeamTwo()
  loadTeams()
}

function GOALTWO(){
  teamTwo.score++
  teamTwo.score++
  teamTwo.score++
  teamTwo.score++
  teamTwo.score++
  saveTeamTwo()
  loadTeams()
}

function saveTeamOne(){
  window.localStorage.setItem("teamOne", JSON.stringify(teamOne))
}


function saveTeamTwo(){
  window.localStorage.setItem("teamTwo", JSON.stringify(teamTwo))
}

function loadTeams(){
  let scoreOneElem = document.getElementById("score-one")
  let scoreTwoElem = document.getElementById("score-two")
  let totalScoreElem = document.getElementById("total-score")
  let teamOneData = JSON.parse(window.localStorage.getItem("teamOne"))
  let teamTwoData = JSON.parse(window.localStorage.getItem("teamTwo"))
  if (teamOneData){
    teamOne = teamOneData
  }
  if (teamTwoData){
    teamTwo = teamTwoData
  }
  let totalScore = teamOne.score + teamTwo.score
  scoreOneElem.innerText = teamOne.score.toString()
  scoreTwoElem.innerText = teamTwo.score.toString()
  totalScoreElem.innerText = totalScore.toString()
}

loadTeams()