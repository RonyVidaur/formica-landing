$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px,'+ wScroll/6 +'%)'
  });

  $('.frontal').css({
    'transform' : 'translate(0px, -'+ wScroll/33 +'%)'
  });

  $('.back').css({
    'transform' : 'translate(-'+wScroll/100+'%, -'+ wScroll/19 + '%)'
  });

});
