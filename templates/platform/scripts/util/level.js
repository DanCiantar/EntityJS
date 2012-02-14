re.c('level')
.defines({
  
  build:function(){
    if(re.hitmap){
      re.hitmap.dispose();
    }
    re.hitmap = re.e('hitmap');
    
    this.placeTiles();
    
    this.placeItems();
    
    this.placeHero();
    
  },
  
  teardown:function(){
    //todo
  },
  
  placeTiles:function(){
    
    var map = this.layer.data.$;
    
    for(var y=0; y<map.length; y++){
      
      for(var x=0; x<map[0].length; x++){
        
        var v = map[y][x];
        
        if(v){
          v--;
          
         re.e('tile').attr({
          tileX:x,
          tileY:y,
          frame:v
          });
          
          //add to hitmap
          re.hitmap.automap(x, y, 1);
          
        }
        
      }
      
    }
    
  },
  
  placeItems:function(){
    var items = this.objectgroup[1].object;
    
    for(var i in items){
      var it = items[i];
      
      re.e('coin').attr({
        posX:it.x,
        posY:it.y - re.tile.sizeY,
        frame:14
      });
    }
  },
  
  placeHero:function(){
    
    var pos = this.objectgroup[0].object;
    
    re.e('hero')
    .attr({
      frame:pos.gid,
      posX:pos.x,
      posY:pos.y - re.tile.sizeY //tiled editor adds an extra tile to y
    });
    
  }
  
});