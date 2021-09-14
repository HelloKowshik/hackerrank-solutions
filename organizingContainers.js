let containers = [
  [1, 4],
  [2, 3],
];
containers = [
  [1, 1],
  [1, 1],
];

containers = [
  [0, 2],
  [1, 1],
];

function organizingContainers(container) {
  const containerCount = [];
  const ballTypes = [];
  for (let i = 0; i < container.length; i++) {
    let total = 0;
    let type = 0;
    for (let j = 0; j < container[i].length; j++) {
      total += container[i][j];
      type += container[j][i];
    }
    containerCount.push(total);
    ballTypes.push(type);
  }
  const sortedContainer = containerCount.sort((a, b) => a - b);
  const sortedBallTypes = ballTypes.sort((a, b) => a - b);
  for (let k = 0; k < sortedContainer.length; k++) {
    if (sortedContainer[k] !== sortedBallTypes[k]) {
      return 'Impossible';
    }
  }
  return 'Possible';
}

console.log(organizingContainers(containers));
