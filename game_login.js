function add_user()
{
   var player1= document.getElementById("input_1").value;
   var player2= document.getElementById("input_2").value;

   localStorage.setItem("player1_name",player1);
   localStorage.setItem("player2_name",player2);

   window.location="game_page.html";
}