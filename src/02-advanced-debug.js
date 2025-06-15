function numPointsScored(playerName) {
  const game = gameObject();
  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) return players[playerName].points;
  }
}

function shoeSize(playerName) {
  const game = gameObject();
  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) return players[playerName].shoe;
  }
}

function teamColors(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) return game[team].colors;
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map(p => p.number);
    }
  }
}

function playerStats(playerName) {
  const game = gameObject();
  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) return players[playerName];
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      let stats = game[team].players[player];
      if (stats.shoe > biggestShoe) {
        biggestShoe = stats.shoe;
        rebounds = stats.rebounds;
      }
    }
  }

  return rebounds;
}

// Bonus

function mostPointsScored() {
  let game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      let pts = game[team].players[player].points;
      if (pts > maxPoints) {
        maxPoints = pts;
        topPlayer = player;
      }
    }
  }

  return topPlayer;
}

function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }

  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const game = gameObject();
  let longest = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > longest.length) {
        longest = player;
      }
    }
  }

  return longest;
}

function doesLongNameStealATon() {
  const game = gameObject();
  let longestName = playerWithLongestName();
  let maxSteals = 0;
  let topStealer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      let steals = game[team].players[player].steals;
      if (steals > maxSteals) {
        maxSteals = steals;
        topStealer = player;
      }
    }
  }

  return longestName === topStealer;
}
