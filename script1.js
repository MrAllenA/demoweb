function pictureChange()
   {
    if(document.getElementById('image1').src=="https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=bounds&format=jpg&width=960")
        {document.getElementById('image1').src="https://i1.rgstatic.net/ii/profile.image/998589094436864-1615093601713_Q128/Allen-Anand.jpg";}
 else{
      document.getElementById('image1').src="https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=bounds&format=jpg&width=960";
 }
   }
 const music = new Audio('Footstep.wav');
   let left_offset = 0;
   let top_offset = 0;
   document.onkeydown = function (event) {
     let img = document.getElementById("image2");
      music.play();
     switch (event.keyCode) {
       case 37:
         // Move left
         left_offset -= 50;
         break;
       case 38:
         // Move up
         top_offset -= 50;
         break;
       case 39:
         // Move right
         left_offset += 50;
         break;
       case 40:
         // Move down
         top_offset += 50;
         break;
     }
     img.style.left = `${left_offset}px`;
     img.style.top = `${top_offset}px`;

   };
   function check()
   { if(document.getElementById(image2).width>=0.5)
     {
       document.getElementById('image1').src="https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=bounds&format=jpg&width=960";

     }
   }
