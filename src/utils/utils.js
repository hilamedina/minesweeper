const positionOfMines = (arr, dimension, numberOfMines) => {
  let mineCounter = 0;
  while (mineCounter < numberOfMines) {
    let positionX = Math.floor(Math.random() * dimension);
    let positionY = Math.floor(Math.random() * dimension);
    if (!arr[positionX][positionY].isMine) {
      arr[positionX][positionY].isMine = true;
    }
    mineCounter = mineCounter + 1;
  }
  return arr;
};
export default positionOfMines;
