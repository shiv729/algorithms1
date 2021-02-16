function algo1(obj1,obj2){
    if(obj1.x-obj2.x<obj2.width/2+obj1.width/2 && 
      obj2.x-obj1.x<obj2.width/2+obj1.width/2 &&
      obj1.y-obj2.y<obj2.height/2+obj1.height/2 &&
      obj2.y-obj1.y< obj2.height/2+obj1.height/2){
  
        return true;
  
        
      }
      else{
        return false
      }
      
  
  }
  
  function algo2(r1,r2){
    if(r1.x-r2.x<r1.width/2+r2.width/2 && 
      r2.x-r1.x<r1.width/2+r2.width/2){
        r1.velocityX=-(r1.velocityX);
        r2.velocityX=-(r1.velocityX);
      }
      
  }