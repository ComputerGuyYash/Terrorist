$(document).ready(function() {
var height = innerHeight;
  wScroll=$(this).scrollTop();

  $('set').each(function (index) {
    $(this).css('margin-top',(index+1)*10+'px')
    $(this).css('opacity','0')


    $(this).animate({opacity: '1','margin-top':'0px'},(index+1)*112,'swing');

  })
  if(wScroll<(height/1.2)){
  $('set').css('font-size',(190*(1-(wScroll/(height))))+'px');
  }
});
var x = 300;
$(window).scroll(function () {

  var height = innerHeight;
  wScroll=$(this).scrollTop();
  $('.img').each(function(){

    $(this).css('transform','translateY('+(((wScroll-($(this).offset().top))/5)+0)+'px)');

  })
  $('.text').each(function () {
    $(this).css('transform','translateY('+(((wScroll-($(this).offset().top))/2)+0)+'px)');
  })

  //$('img').css('transform','translateY('+(((wScroll-($('.card').offset().top))/10))+'px)')
  $('.navbar').css('background-color','rgba(255,255,255,'+wScroll/(height)+')');
  $('.navbar').css('border-color','rgba(0,0,0,'+wScroll/(height)+')');
if(wScroll<(height/1.2)){
  $('set').css('font-size',(190*(1-(wScroll/(height))))+'px');
}  //$('set').css('font-size',(190*(1-(wScroll/(height))))+'px');
})
