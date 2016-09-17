function scoreif (){
    const scores = [100, 99, 58, 15, 75, 69, 81];
    var i = 0;
    console.log(scores);
    do{
        if(scores[i] >= 90 && scores[i] <= 100){
          scores[i] = 'A';
        }
        else if(scores[i] >= 80 && scores[i] < 90){
          scores[i] = 'B';
        }
        else if(scores[i] >= 70 && scores[i] < 80){
          scores[i] = 'C';
        }
        else if(scores[i] >= 60 && scores[i] < 70){
          scores[i] = 'D';
        }
        else if(scores[i] >= 0 && scores[i] < 60){
          scores[i] = 'F';
        }
        i++;
    }while(i < scores.length);
    return scores;
}
function scoresw (){
  const scores = [100, 99, 58, 15, 75, 69, 81];
  var i = 0;
  console.log(scores);
  do{
      switch (true){
          case scores[i] >= 90:
              scores[i] = 'A';
              break;
          case scores[i] >= 80:
              scores[i] = 'A';
              break;
          case scores[i] >= 70:
              scores[i] = 'A';
              break;
          case scores[i] >= 60:
              scores[i] = 'A';
              break;
          case scores[i] >= 0:
              scores[i] = 'A';
              break;
          default: console.log('No hay elementos para convertir');
      }
      i++;
  }while(i < scores.length);
  return scores;
}
console.log(scoreif());
console.log(scoresw());
