var clicked = true;
$("#menuButton").click(function(){
  if (clicked){
      $("#pageWrap").css({
        "transform":' translateX(180px)'
      });
      clicked = false;

}else{
  $("#pageWrap").css({
    "transform":' translateX(0px)'
  });
  clicked = true;
}
});
