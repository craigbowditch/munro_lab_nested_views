const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js')

const MunrosListView = function (container) {
  this.munros = null;
  this.container = container;
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (event) => {
    // console.log(event);
    this.munros = event.detail;
    this.render();
  })
};

MunrosListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
    // console.log(munroView);
    munroView.render();
  })
};

module.exports = MunrosListView;
