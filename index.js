import Page from '../../common/page';

Page({
  data: {
    show: {
      basic: false,
    }
  },

  toggle(type, show) {
    this.setData({
      [`show.${type}`]: show
    });
  },

  showBasic() {
    this.toggle('basic', true);
  },


});
