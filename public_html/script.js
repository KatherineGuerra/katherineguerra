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