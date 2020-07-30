$(function(){
    $('button').on('click',function(){
        var images = [
                   'programingpic3.jpg',
      'prograingpic4.jpg',
    'programingpic5.jpg'
                   ];
        var randImg = images[Math.floor(Math.random()*images.length)];
        $('.random').attr('src','http'+ randImg);
  });
});
