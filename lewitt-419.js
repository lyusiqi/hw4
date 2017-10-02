function B(){
  stroke (0);
strokeWeight(10)
line(0,0,0,340);
line(0,340,340,340);
line(340,340,340,0);
line(340,0,0,0);
line(0,height/2,340,height/2)
line(width/2,0,width/2,340)
}


function D1(){
  stroke(200);
strokeWeight(12)
  for (var i=12; i<= 170; i=i+30){
    var startX= i
    var startY= 8
    var endX=i
    var endY=160
    line (startX,startY,endX,endY)
    }
}

colorMode(RGB)
function D2(){
  stroke(10,120,10);
	strokeWeight(10)
    for (var o=20; o<= 160; o=o+30){
       var startX =170
       var startY= o
       var endX=335
       var endY=o
  line(startX,startY,endX,endY)
    }
}

function D4(){
  stroke(200,50,50)
  strokeWeight(10)
  for (var x1=10,x2=170,x3=0,x4=180;x1<=width/2;x1=x1+30,x4=x4+30){
      line(x1,x2,x3,x4)
  }  for (var x5=width/2,x6=190,x7=0,x8=360; x6<=340;x6=x6+30,x8=x8+30){
    line(x5,x6,x7,x8)
  }  
}

function D5(){
  stroke(50,50,200)
    for (var x1=330,x2=170,x3=340,x4=180;x1>=170;x1=x1-30,x4=x4+30){
      line(x1,x2,x3,x4)
}
  for (var x5=width/2,x6=190,x7=340,x8=360; x6<=340;x6=x6+30,x8=x8+30){
    line(x5,x6,x7,x8)
}
}

D1()
D2()
D4()
D5()
B()
