//This will have the table and work with a collection of cells
//The id for the board is "board" on the table in the html
import Backbone from 'backbone';
import CellView from 'app/views/cell_view';
import Board from 'app/models/board';
import $ from 'jquery';
const BoardView = Backbone.View.extend({
  initialize: function(){
    console.log("Hello!");
  },

  render: function(){
    var build = this.$el;

    this.model.get('grid').forEach(function(arr, firstNum){
      var row =  $('<tr> </tr>');
      var num = firstNum.toString();

      arr.forEach(function(val, dex){
        var index = dex.toString();
        var element = $('<td></td>');
        var cell = new CellView({
          index: firstNum + index,
          value: val,
          el: element
        });
        console.log("forEach this: " + this);
        console.log("forEach cell value: " + cell.val);
        this.listenTo(cell, 'select', this.cellSelect);
        cell.render();

        row.append(cell.$el);
      }, this);

      build.append(row);
    }, this);

    this.$el.append(build);
  },

  cellSelect: function(cell) {
    // this.val = val;
    this.trigger('cellHappin', cell);
    console.log("BoardView! cellSelect" + cell);
    // return false;
    // console.log("BoardView! Selected cell " + val);
    // this.trigger('select', this.val, this.position);
  },


});

export default BoardView;
