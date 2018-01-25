colors = ["blue", "red", "purple", "lime", "aqua", "orange", " yellow", "magenta", "green", "gray"];
num = 0;
arta = 0;

score = 0;

othercolor = 0;
otherplace = 0;

blocks = 0;
verts = 0;

left = 0;
right = 0;
up = 0;
down = 0;

blocknum = 7;

//console.log(Math.floor(Math.random() * 4));




function horiz() {

//console.log(blocks);

side = Math.floor((arta)/5);
//console.log(side);
a = Math.floor(Math.random() * blocknum); 

$('.box:eq(' + (arta-2) + ')').fadeTo(1000,0);
$('.box:eq(' + (arta-1) + ')').fadeTo(1000,0);
$('.box:eq(' + (arta) + ')').fadeTo(1000,0);
if (blocks ==3) {
$('.box:eq(' + (arta-3) + ')').fadeTo(1000,0);    
}

if (blocks ==4) {
$('.box:eq(' + (arta-3) + ')').fadeTo(1000,0); 
$('.box:eq(' + (arta-4) + ')').fadeTo(1000,0); 
}

    setTimeout(function(){

//$('.box').fadeTo(10,1);
$('.box:eq(' + (arta-2) + ')').fadeTo(10,1);
$('.box:eq(' + (arta-1) + ')').fadeTo(10,1);
$('.box:eq(' + (arta) + ')').fadeTo(10,1);
if (blocks ==3) {
$('.box:eq(' + (arta-3) + ')').fadeTo(10,1);    
}

if (blocks ==4) {
$('.box:eq(' + (arta-3) + ')').fadeTo(10,1); 
$('.box:eq(' + (arta-4) + ')').fadeTo(10,1); 
}

for (i=0; i<side; i++) {
     //console.log("same");
        $('.box:eq(' + (arta+(i*-5)) + ')').text($('.box:eq(' + (arta-5+(i*-5)) + ')').text());
        $('.box:eq(' + (arta+(i*-5)) + ')').css("background-color", colors[$('.box:eq(' + (arta+(i*-5)) + ')').text()]);

        $('.box:eq(' + (arta-1+(i*-5)) + ')').text($('.box:eq(' + (arta-1-5+(i*-5)) + ')').text());
        $('.box:eq(' + (arta-1+(i*-5)) + ')').css("background-color", colors[$('.box:eq(' + (arta-1+(i*-5)) + ')').text()]);
        
        $('.box:eq(' + (arta-2+(i*-5)) + ')').text($('.box:eq(' + (arta-2-5+(i*-5)) + ')').text());
        $('.box:eq(' + (arta-2+(i*-5)) + ')').css("background-color", colors[$('.box:eq(' + (arta-2+(i*-5)) + ')').text()]);
        
        if (blocks == 3) {
        $('.box:eq(' + (arta-3+(i*-5)) + ')').text($('.box:eq(' + (arta-3-5+(i*-5)) + ')').text());
        $('.box:eq(' + (arta-3+(i*-5)) + ')').css("background-color", colors[$('.box:eq(' + (arta-3+(i*-5)) + ')').text()]);            
        }
        
        if (blocks == 4) {
        $('.box:eq(' + (arta-3+(i*-5)) + ')').text($('.box:eq(' + (arta-3-5+(i*-5)) + ')').text());
        $('.box:eq(' + (arta-3+(i*-5)) + ')').css("background-color", colors[$('.box:eq(' + (arta-3+(i*-5)) + ')').text()]); 
        
        $('.box:eq(' + (arta-4+(i*-5)) + ')').text($('.box:eq(' + (arta-4-5+(i*-5)) + ')').text());
        $('.box:eq(' + (arta-4+(i*-5)) + ')').css("background-color", colors[$('.box:eq(' + (arta-4+(i*-5)) + ')').text()]);  
        }
}


        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-(5*side)) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-(5*side)) + ')').text(a); 
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-1-(5*side)) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-1-(5*side)) + ')').text(a);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-2-(5*side)) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-2-(5*side)) + ')').text(a);
        
        if (blocks == 3) {
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-3-(5*side)) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-3-(5*side)) + ')').text(a);    
        }
        
        if (blocks == 4) {
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-3-(5*side)) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-3-(5*side)) + ')').text(a);   
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-4-(5*side)) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-4-(5*side)) + ')').text(a);   
        }

        
        checkblocks(); 
    },1000);
}



function verti() {

        $('.box:eq(' + (arta-10) + ')').fadeTo(1000,0);
        $('.box:eq(' + (arta-5) + ')').fadeTo(1000,0);
        $('.box:eq(' + arta + ')').fadeTo(1000,0);
        
        if (verts == 3) {
        $('.box:eq(' + (arta-15) + ')').fadeTo(1000,0);          
        }
        
        if (verts == 4) {
        $('.box:eq(' + (arta-15) + ')').fadeTo(1000,0); 
        $('.box:eq(' + (arta-20) + ')').fadeTo(1000,0);
        }
        
setTimeout(function(){
        //$('.box').fadeTo(10,1);
        $('.box:eq(' + (arta-5) + ')').fadeTo(10,1);
        $('.box:eq(' + (arta-10) + ')').fadeTo(10,1);
        $('.box:eq(' + arta + ')').fadeTo(10,1);
        
        if (verts == 3) {
        $('.box:eq(' + (arta-15) + ')').fadeTo(10,1);          
        }
        
        if (verts == 4) {
        $('.box:eq(' + (arta-15) + ')').fadeTo(10,1); 
        $('.box:eq(' + (arta-20) + ')').fadeTo(10,1);
        }
//console.log(verts);

bide = Math.floor((arta)/5)-2;
amended = bide-(verts-2);
fore = verts-2;
//console.log(fore);
//console.log(bide);
//console.log(amended);
//console.log(arta);
//console.log(verts);

    if (amended == 4) {
        $('.box:eq(' + (arta) + ')').text($('.box:eq(' + (arta-15) + ')').text());
        $('.box:eq(' + (arta) + ')').css("background-color", colors[$('.box:eq(' + (arta) + ')').text()]);
        $('.box:eq(' + (arta-15) + ')').text($('.box:eq(' + (arta-30) + ')').text());
        $('.box:eq(' + (arta-15) + ')').css("background-color", colors[$('.box:eq(' + (arta-15) + ')').text()]);
        $('.box:eq(' + (arta-10) + ')').text($('.box:eq(' + (arta-25) + ')').text());
        $('.box:eq(' + (arta-10) + ')').css("background-color", colors[$('.box:eq(' + (arta-10) + ')').text()]);
        $('.box:eq(' + (arta-5) + ')').text($('.box:eq(' + (arta-20) + ')').text());
        $('.box:eq(' + (arta-5) + ')').css("background-color", colors[$('.box:eq(' + (arta-5) + ')').text()]);
        
        a = Math.floor(Math.random() * 6);
        $('.box:eq(' + (arta-20) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-20) + ')').text(a);
        a = Math.floor(Math.random() * 6);
        $('.box:eq(' + (arta-25) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-25) + ')').text(a);
        a = Math.floor(Math.random() * 6);
        $('.box:eq(' + (arta-30) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-30) + ')').text(a);
    }
    else
    if (amended == 3) {
        $('.box:eq(' + (arta-10) + ')').text($('.box:eq(' + (arta-25 + (fore*-5)) + ')').text());
        $('.box:eq(' + (arta-10) + ')').css("background-color", colors[$('.box:eq(' + (arta-10) + ')').text()]);
        
        $('.box:eq(' + (arta-5) + ')').text($('.box:eq(' + (arta-20 + (fore*-5)) + ')').text());
        $('.box:eq(' + (arta-5) + ')').css("background-color", colors[$('.box:eq(' + (arta-5) + ')').text()]);
        
        $('.box:eq(' + (arta) + ')').text($('.box:eq(' + (arta-15 + (fore*-5)) + ')').text());
        $('.box:eq(' + (arta) + ')').css("background-color", colors[$('.box:eq(' + (arta) + ')').text()]);
        
        
        
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-20) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-20) + ')').text(a);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-25) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-25) + ')').text(a);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-15) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-15) + ')').text(a);
        
        if (fore == 1) {
            //console.log("yes")
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-30) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-30) + ')').text(a);            
        }
    }
    else
    if (amended == 2) {
        $('.box:eq(' + (arta-5) + ')').text($('.box:eq(' + (arta-20 + (fore*-5)) + ')').text());
        $('.box:eq(' + (arta-5) + ')').css("background-color", colors[$('.box:eq(' + (arta-5) + ')').text()]);
        $('.box:eq(' + (arta) + ')').text($('.box:eq(' + (arta-15 + (fore*-5)) + ')').text());
        $('.box:eq(' + (arta) + ')').css("background-color", colors[$('.box:eq(' + (arta) + ')').text()]);
        
        
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-10) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-10) + ')').text(a);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-20) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-20) + ')').text(a);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-15) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-15) + ')').text(a);
        
        if (fore == 1) {
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-25) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-25) + ')').text(a);            
        }
        
        if (fore == 2) {
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-25) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-25) + ')').text(a);   
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-30) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-30) + ')').text(a);            
        }
    }
    else       
    if (amended == 1) {
        //console.log("check");
        //console.log(arta);
        $('.box:eq(' + (arta) + ')').text($('.box:eq(' + (arta-15 + (fore*-5)) + ')').text());
        $('.box:eq(' + (arta) + ')').css("background-color", colors[$('.box:eq(' + (arta) + ')').text()]);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-10) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-10) + ')').text(a);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-5) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-5) + ')').text(a);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-15) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-15) + ')').text(a);
        
        if (fore == 1) {
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-20) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-205) + ')').text(a);            
        }
        
        if (fore == 2) {
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-25) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-25) + ')').text(a);   
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-20) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-20) + ')').text(a);            
        }
    }
    else
    if (amended === 0) {
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-10) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-10) + ')').text(a);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-5) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-5) + ')').text(a);
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + arta + ')').css("background-color", colors[a]);
        $('.box:eq(' + arta + ')').text(a);
        
        if (fore == 1) {
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-15) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-15) + ')').text(a);            
        }
        
        if (fore == 2) {
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-15) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-15) + ')').text(a);   
        a = Math.floor(Math.random() * blocknum);
        $('.box:eq(' + (arta-20) + ')').css("background-color", colors[a]);
        $('.box:eq(' + (arta-20) + ')').text(a);            
        }
    }
checkblocks(); 

},1000);

}

setTimeout(function() { 

    num = $('.box').length
    //console.log(num);
    
    for (i=num-1; i>-1; i--)    {
    //console.log(i)
    a = Math.floor(Math.random() * blocknum);
    b = $('.box:eq(' + i + ')').position();
    //console.log(b.top)
    $('.box:eq(' + i + ')').text(a/* + "-" + i  + " x:" + b.top + " y:" + b.left*/);
    $('.box:eq(' + i + ')').css("background-color", colors[a]);
    
    //$('.box:eq(2)').css("border", "1px solid black");
    
    }
    
},1000);


//have all blocks check if they are in a sequence
function checkblocks() {
    for (i=num; i>-1; i--) {
        colr = $('.box:eq(' + i + ')').text()
        numra = i
        //console.log(colr);
        vert = false
        hort = false
        blocks = 0

        
        if ( (numra > 4) && $('.box:eq(' + (numra-5) + ')').text() === colr) {
            
            if ( (numra > 9) && $('.box:eq(' + (numra-10) + ')').text() === colr) {
            
                if ( (numra > 14) && $('.box:eq(' + (numra-15) + ')').text() === colr) {

                    if ( (numra > 19) && $('.box:eq(' + (numra-20) + ')').text() === colr) {
                    
                        verts = 4;
                        arta = numra;
                        verti();
                        score+=75
                $("p:eq(0)").text("Score:" + score);
                        break;
                    }
                    else
                    {
                    verts = 3;
                    arta = numra;
                    verti();
                    score+=40
                $("p:eq(0)").text("Score:" + score);
                    break;
                    }
                }
                else
                {
                verts = 2;
                arta = numra;
                verti();
                score+=15
                $("p:eq(0)").text("Score:" + score);
                break;
                }
            }
        }            
        

        
        if ( ((numra) % 5 !== 0) && $('.box:eq(' + (numra-1) + ')').text() === colr) {
            if ( ((numra-1) % 5 !== 0) && $('.box:eq(' + (numra-2) + ')').text() === colr) {
                if ( ((numra-2) % 5 !== 0) && $('.box:eq(' + (numra-3) + ')').text() === colr) {
                    if ( ((numra-3) % 5 !== 0) && $('.box:eq(' + (numra-4) + ')').text() === colr) {
                    blocks = 4
                    arta = numra;
                    horiz(); 
                    score+=75;
                    $("p:eq(0)").text("Score:" + score);
                    break;
                    }
                    else
                    {
                    blocks = 3
                    arta = numra;
                    horiz();
                    score+=40
                    $("p:eq(0)").text("Score:" + score);
                    break;
                    }
                }
                else
                {
                blocks = 2
                arta = numra;
                horiz();
                score+=15
                $("p:eq(0)").text("Score:" + score);
                break;
                }
            }
        }
        
    }
    
}

setTimeout(function(){  
    checkblocks()
},1100);

$(function(){ 
    $('.box').click(function() {
        ida = $(this).index("div");
        //console.log(ida);
        
        if ($(this).css("opacity") == 0.5) {
            //console.log("yes");
            $('.box:eq(' + otherplace + ')').css("background-color", colors[$(this).text()]);
            $('.box:eq(' + otherplace + ')').text($(this).text());
            $(this).css("background-color", colors[othercolor]);
            $(this).text(othercolor);
            $('.box').css("opacity", 1);
            checkblocks();
        }
        else
        if (otherplace == ida) {
            $('.box').css("opacity", 1);
            //$('.block').css("border", "0px solid white");
            otherplace = 0;
        }
        else
        {
            otherplace = ida;
            othercolor = $(this).text();
            //console.log("no");
            $('.box').css("opacity", 1);
            $(this).css("opacity", 1)
            
            
            if ((ida+1) % 5 !== 0) {
                $('.box:eq(' + (ida+1) + ')').css("opacity", 0.5);
                }
            
            if ((ida) % 5 !== 0) {
            $('.box:eq(' + (ida-1) + ')').css("opacity", 0.5);
            }
            
            $('.box:eq(' + (ida+5) + ')').css("opacity", 0.5);
            
            if (ida>4) {
            $('.box:eq(' + (ida-5) + ')').css("opacity", 0.5);
            }
        }
        
        
       
    });
});