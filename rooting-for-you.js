const judgeVegetable = function (vegetables, metric) {
  // hold winning values for comparison
  let provisionalWinnerScore = 0;
  let provisionalWinner;

  // loop through all the items in the vegetables array
  for (let vegetable of vegetables) {
    if (vegetable[metric] > provisionalWinnerScore) { // compare the vegetable to the provisional winner
      provisionalWinnerScore = vegetable[metric]; // update the high score
      provisionalWinner = vegetable['submitter']; // update the winner
    }
  }
  return provisionalWinner;
}
