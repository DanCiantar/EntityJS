re.scene('over')
.enter(function(message){
  
  re.e('text')
  .attr({
    font:'30px sans-serif',
    text:message,
    alignVer:-60,
    alignHor:-40
  })
  
  re.e('text keyboard')
  .attr({
    text:'Press Z to continue',
    alignVer:-20,
    alignHor:-15
  })
  .on('keyup:z', function(){
    
    re.scene('home').enter();
    
  });
  
})
.exit(function(){
  
  re('text').dispose();
  
});