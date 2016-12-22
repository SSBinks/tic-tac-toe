//Section tag for this view is "game" and this view holds the board and cells
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import $ from 'jquery';

const GameView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.playOneModal = this.$('#playerOne');
    this.playOneModal.hide();
    this.playTwoModal = this.$('#playerTwo');
    this.playTwoModal.hide();


    this.input = {
      firstPlayer: this.$('.players input[name="name"]'),
      secondPlayer: this.$('.players input[name="playname"]')
    };
  },

  events: {
    'click .btn-game': 'resetGame',
  },

  savePlayer: function(){

  },

  skyCell: function(cell){

    this.model.play((this.model.whoseTurn().idNum), cell[1]);
    // console.log("GameView! cellSelect" + cell.val);
  },
  resetGame: function(event){
    console.log(" ResetGame Button was clicked");

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

});


// Feeling okay about this basic view may need to add more
//May need to import
export default GameView;
