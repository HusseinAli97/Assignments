$(document).ready(function() {
  $('.counter').text("0");

  var waypoint = new Waypoint({
    element: $('.py-5')[0],
    handler: function(direction) {
      if (direction === 'down') {
        $('.counter').each(function() {
          var $this = $(this),
          countTo = Math.floor(Math.random() * 1000);

          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 2000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        });
        this.destroy();
      }
    },
    offset: 'bottom-in-view'
  });
});
