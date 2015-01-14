/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$("document").ready(function(){
    $(".umm").css("background-color","cyan");
    $("p").css({"background-color": "magenta", "color": "white"});
    $('.logo').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('h1').bind('click', mouseClick);
    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);
    $('#addAPara').bind('click',addAPara);
    $('#removeAPara').bind('click',removeAPara);
    $('#hideLogo').bind('click',hideTheImage);
    $('#showLogo').bind('click', showTheImage);
    $('#fadeLogo').bind('click', fadeTheImage);
    $('#fadeALittle').bind('click', fadeALittle);
    setInterval("slidePix()", 2000);
    $()
    
});
 function mouseOverMe(){
   $("#second").html("you put your cursor on my logo");
 }
 function mouseOutMe(){
   $("#second").html("you stopped touching my logo");  
 }
 function mouseClick(){
   $('h1').html("click");  
 }
 function replaceWHtml(){
     $('#h2tag').html('<h4>Now I/m on h4</h4>');
 }
 function replaceWText(){
     $('#h2tag').text('<h4>Now I/m on h4</h4>');
 }
  function addAPara(){
     $('#randPara').append('<p>Another Paragraph</p>');
 }
 function removeAPara(){
     $('#randPara p:last').remove();
 }
 function hideTheImage(){
     $('.logo').hide('explode', {}, 2500);
 }
 function showTheImage(){
     $('.logo').show('fold', {}, 2500);
 }
 function fadeTheImage(){
     $('.logo').fadeOut(2500);
 }
 function fadeALittle(){
     $('.logo').fadeTo(2500, .30);
 }
 function slidePix(){
   var curPic = $('#flipPix div.active');
   var nextPic = curPic.next();
   if(nextPic.length == 0){
       nextPic = $('#flipPix div:first');
   }
    curPic.removeClass('active').addClass('prev');
    nextPic.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 2000, 
    function() {
        curPic.removeClass('prev');
    });
 }
 
 //function lastIsFirst(){
     //$('#randPara p: last').append($('#randPara p:first'));
 //}
 //function addBefore(){
     //$('#randPara p:first').before('I go before anything');
 //}
 //function addAfter(){
     //$('#randPara p: last').after('I go after anything');
 //}
// function addToTextBox(){
    // $('#randText').val('Random Text');
 //}
 //function deleteSpan(){
    // $('span').remove(':contains("Append")');
 //}
 //$('#lastIsFirst').bind('click', lastIsFirst);
 //   $('#addBefore').bind('click',addBefore);
  //  $('#addAfter').bind('click',addAfter);
   // $('#addToTextBox').bind('click',lastIsFirst);
   // $('deleteSpan').bind('click',deleteSpan);
    
    //$('#randPara').before('<span>Before Paragraph</span>');
   // $('<span> Insert Before Paragraph</span>').insertBefore('#randPara');
   // $('<span> Prepend to Paragraph</span>').prependTo('#randPara');
    //$('<span> Append To Paragraph</span>').appendTo('#randPara');
    //$('#randPara').append('<span>Append Paragraph</span>');
   // $('<span> Insert After Paragraph</span>').insertAfter('#randPara');
  //  $('#randPara').after('<span> After Paragraph</span>');
  //  
 // $("a[rel=example_group]").fancybox({
      //  'transitionIn' : 'elastic',
     //   'transitionOut' : 'elastic',
     //   'titlePosition' : 'over',
    //    'titleFormat' : function(title, currentArray, currentIndex, currentOpts)
    ////    { return '<span id="fancy-box-title-over">Image' + (surrentIndex + 1) + '/' + currantArray.length +
        //(title.length ? '$nbsp;' +title : '') + '</span>';}
        //});
   