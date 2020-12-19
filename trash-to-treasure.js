const smartGarbage = function (trash, bins) {
  switch(trash) {
  case 'waste':
    bins.waste += 1;
    break;
  case 'recycling':
    bins.recycling += 1;
    break;
  case 'compost':
    bins.compost += 1;
    break;
  default:
    return 'Error';
  }
  return bins;
}