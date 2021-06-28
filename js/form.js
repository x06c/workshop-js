document.writeln("<div>");
document.writeln("<form>");
document.writeln('<input type="text" id="txt">');
document.write('<input type="button" id="btn" value="valider exercice">');
document.writeln("</form>");
document.writeln("</div>");

document.getElementById("btn").onclick = function fun() {
  document.getElementById("txt").value = "Vous avez réussi !!";
};
