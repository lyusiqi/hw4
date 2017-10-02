       createCanvas(500, 500);  
        background(255);  
 
      
  
      function draw() {  
        for (var i = 20; i < 100; i = i + 20) {  
          for (var y = 50; y < 500; y = y + 100){  
            noFill();  
            rectMode(CENTER);  
            rect(y, 50, i, i);  
          }  
        }  
      }

draw()
