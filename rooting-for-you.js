const judgeVegetable = function (vegetables, metric) {
  let provisionalWinnerScore = 0;
  let provisionalWinner;

  for (let vegetable in vegetables) {
    if (vegetable[metric] > provisionalWinnerScore) {
      provisionalWinnerScore = vegetable[metric];
      provisionalWinnerScore = vegetable['submitter'];
    }
  }
  return provisionalWinner;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

// console.log(judgeVegetable(vegetables, 'redness'));
judgeVegetable(vegetables, 'redness');