let ranked = [100, 90, 90, 80, 75, 60],
  player = [50, 65, 77, 90, 102];

function climbingLeaderboard(ranked, player) {
  let aliceRanks = [];
  let uniqueRanked = [...new Set(ranked)];
  let count = uniqueRanked.length - 1;
  player.forEach((score) => {
    while (count >= 0) {
      if (score >= uniqueRanked[count]) {
        count--;
      } else {
        aliceRanks.push(count + 2);
        break;
      }
    }
    if (count < 0) aliceRanks.push(1);
  });
  console.log(aliceRanks);
}
climbingLeaderboard(ranked, player);
