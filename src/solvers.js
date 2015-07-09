/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({'n':n}); //fixme
  var rooks = n;
  solution.togglePiece(0,0);
  if (n === 1){
    return solution.rows();
  }
  for (var i = 1; i < n; i++) {
    for (var j = 1; j < n; j++) {
      solution.togglePiece(i,j);
      if(solution.hasAnyRowConflicts()){
        solution.togglePiece(i,j);
        break;
      } else if(solution.hasAnyColConflicts()){
        solution.togglePiece(i,j);
      } else{
        break;
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};
//create a board
//toggle on 0x0
//iterate over board starting with row[1]
  //iterate over row
    //toggle 1x0<--change
    //check for row and column conflicts
      //if yes, toggle off
      //if no, break
/*
[1,0,0]
[0,1,0]
[0,0,1]
*/
/*
[0,0,1]
[0,1,0]
[1,0,0]
*/
/*
[0,1,0]
[1,0,0]
[0,0,1]
*/
/*
[0,1,0]
[0,0,1]
[1,0,0]
*/
// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

