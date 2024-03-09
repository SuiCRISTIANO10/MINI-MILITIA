var Splashscreen;
   function preload(){
    Splashscreen=loadImage("game-boilerplate-latest-main/Untitled design.gif")
   }
   function setup(){
    createCanvas(900,600);
playbutton=createImg("game-boilerplate-latest-main\play button.jpg")
playbutton.size(70,70)
playbutton.position(600,500)
aboutbutton=createImg("game-boilerplate-latest-main\about button.png")
aboutbutton.size(40,40)
aboutbutton.position(400,500) 
   }
   function draw(){
    background (Splashscreen)
    playbutton.mousePressed(()=>{

        playbutton.hide();
        aboutbutton.hide();
        Gamestate="2";
        
        })
        
        aboutbutton.mousePressed(()=>{
        
            playbutton.hide();
            aboutbutton.hide();
            Gamestate="4";
            
            })
        if (Gamestate==="4"){
        aboutgame();
   }
   function aboutgame(){

    swal({
    title:"How To Play",
    text:"move around using arrow keys ,and use the space button to shoot the oppponent players,Win the game! .",
    textAllign:"center",
    confirmButtonText:"Let's Play ",
    confirmButtonColor:"red",
    
    },
       function ()  {
            Gamestate = "1"
        }
    )
    }