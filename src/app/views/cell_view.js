// Cells will be created when the board is initialized as tr and tds there is nothing
//In the html yet
//This view will update a single cell

import Backbone from 'backbone';
import Game from 'app/models/game';

// import $ from 'jquery';
const CellView = Backbone.View.extend( {
  initialize: function(options) {
    this.val = options.value;
    this.position = options.index;
    console.log("THis is options!" + options);
  },

  render: function() {
    this.$el.append(this.val);

    return this;
  },

  events: {
    'click': 'cellClick'
  },

  cellClick: function(event) {
    console.log("Position of cell" + this.position);
    console.log("Click on cell " + this.val);
    this.trigger('select', [this.val, this.position]);
  }
});

export default CellView;
