//Section tag for this view is "game" and this view holds the board and cells
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import $ from 'jquery';

const GameView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click .btn-savepl1': 'savePlayer',
    'click .btn-savepl2': 'savePlayer',
  },

  savePlayer: function(){
    var name = {
      // We still need to complete this
      // name: this.$()

    };
  },

  skyCell: function(cell){
    console.log("GameView! Cell value" + cell[0]);
    console.log("GameView! Cell position" + cell[1]);
    console.log(" Game view player:" + (this.model.whoseTurn().idNum));
    this.model.play((this.model.whoseTurn().idNum), cell[1]);
    // console.log("GameView! cellSelect" + cell.val);
  },


  render: function(){
    this.delegateEvents();
    const boardView = new BoardView({
      model: this.model.board,
      el: this.$('#board')
    });
    this.listenTo(boardView, 'cellHappin', this.skyCell);
    boardView.render();
    return this;
  },

  // cellSelect: function(val, position) {
  //   // this.val = val;
  //   console.log("GameView! cellSelect" + position);
  //   console.log("BoardView! Selected cell " + val);
  //   // this.trigger('select', this.val, this.position);
  // },

});


// Feeling okay about this basic view may need to add more
//May need to import
export default GameView;
