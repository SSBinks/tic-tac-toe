import Backbone from 'backbone';
// import Game from 'app/models/game';


var Board = Backbone.Model.extend({
  defaults: {
    grid: [["", "", ""], ["", "", ""], ["", "", ""]],
    winner: "",
    isWon:  false
  },
  initialize: function(options){
    this.set('grid', [["", "", ""], ["", "", ""], ["", "", ""]]);
  },
  won: function(){
    var grid = this.get('grid');
    var diagRight = grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]  &&  grid[1][1] !== "";
    var diagLeft = grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]  &&  grid[1][1] !== "";
    if (diagLeft){
      this.set('winner', grid[0][2]);
      this.set('isWon', true);
      return this.get('isWon');
    }
    else if (diagRight) {
      this.set('winner', grid[0][0]);
      this.set('isWon', true);
      return this.get('isWon');
    }
    for(var i = 0; i < 3; i++){
      // console.log("grid at top" + grid[0][i]);
      // console.log("I == " + i);
      // console.log("Grid in the middle" +grid[1][i]);
      // console.log("I == " + i);
      // console.log("Grid at the bottom" +grid[2][i]);
      // console.log("I == " + i);
      var vertical = (grid[0][i] === grid[1][i]) && (grid[1][i] === grid[2][i]) &&  (grid[1][i] !== "");
      var horizontal = grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]  &&  grid[i][1] !== "";
      if (vertical){
        this.set('winner', grid[0][i]) ;
        this.set('isWon', true);
        return this.get('isWon');
      }
      else if (horizontal) {
        this.set('winner', grid[i][0]);
        this.set('isWon', true);
        return this.get('isWon');
      }

    }
    this.set('isWon', false);
    return this.get('isWon');

  },

  full: function() {
    var isFull = true;
    this.get('grid').forEach(function(subarray) {
      if (subarray.includes("")) {
        isFull = false;
      }
    });
    return isFull;
  }

});

export default Board;
