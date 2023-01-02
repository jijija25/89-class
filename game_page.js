var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML=player1_name;
document.getElementById("player_answer").innerHTML=player2_name;

function send()
{
  var given_word=document.getElementById("input_word").value;
  var word=given_word.toLowerCase();
  console.log(word);

  var char1= word.charAt(1);
  var mid=Math.floor(word.length/2);
  var char2=word.charAt(mid);
  var last=word.length-1;
  var char3=word.charAt(last);

  var removed_char1=word.replace(char1,"_");
  var removed_char2=removed_char1.replace(char2,"_");
  var removed_char3=removed_char2.replace(char3,"_");

  console.log(removed_char3);

  var question="<h3 id='question_display'> Q."+
   removed_char3+"</h3>";

var text_input="<br><input id='input_word' placeholder='Answer'>";

var check_button="<br><br> <button onclick='check()'class='btn btn-info'> Check </button>";

var joined_word=question+text_input+check_button;
document.getElementById("output").innerHTML=joined_word;
document.getElementById("input_word").innerHTML="";
}

var answer_turn="player1";
var question_turn="player2";
function check()
{
      var answer= document.getElementById("input_word").value;
 answer=answer.toLowerCase();
  console.log("answer in lower case: "+answer);
console.log(word);
  if(answer==word)
  {
   if(answer_turn=="player1")   
   player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
     }
else
{
   player2_score=player2_score+1;
   document.getElementById("player2_score").innerHTML=player2_score;
}

if(question_turn=="player2")
{
   question_turn="player1";
   document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
}
else
{
   question_turn="player2";
   document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
}

if(answer_turn=="player2")
{
   answer_turn="player1";
   document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
}
else
{
 answer_turn="player2";
   document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
}
document.getElementById("output").innerHTML="";
}