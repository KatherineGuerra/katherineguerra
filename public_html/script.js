/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".umm").css("background-color","cyan");
    $(".1").css({"background-color": "pink", "color": "blue"});
    $(".2").css({"background-color": "gray", "color": "white"});
    $('.logo').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
});
 function mouseOverMe(){
   $("#second").html("you put your cursor on my logo");
 }
 function mouseOutMe(){
   $("#second").html("you stopped touching my logo");  
 }
 