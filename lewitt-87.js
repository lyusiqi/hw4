function D1(){
  for (var i=0; i<= 340; i=i+10){
    var startX= i
    var startY= 0
    var endX=i
    var endY=340
    line (startX,startY,endX,endY)
    }
}


function D2(){
    for (var o=0; o<= 170; o=o+10){
       var startX =width/2
       var startY= o
       var endX=340
       var endY=o
  line(startX,startY,endX,endY)
    }
}

function D4(){
  for (var x1=10,x2=170,x3=0,x4=180;x1<=490;x1=x1+10,x4=x4+10){
      line(x1,x2,x3,x4)
  }  
}
function D5(){
    for (var x1=330,x2=170,x3=340,x4=180;x1>=170;x1=x1-10,x4=x4+10){
      line(x1,x2,x3,x4)
}
  for (var x5=width/2,x6=180,x7=340,x8=350; x6<=340;x6=x6+10,x8=x8+10){
    line(x5,x6,x7,x8)
}
}
D1()
D2()
D4()
D5()
