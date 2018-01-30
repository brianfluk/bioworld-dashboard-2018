function showQ(cbox) {
  if (cbox.checked) {
	document.getElementById(cbox.id.concat("opt")).style.display = '';
  } else {
	document.getElementById(cbox.id.concat("opt")).style.display = 'none';
	document.getElementById(cbox.id.concat("helpTxt")).style.display = "none";
  }
}

function showHelp(btn) {
 if (document.getElementById(btn.id.concat("Txt")).style.display == "none") {
	document.getElementById(btn.id.concat("Txt")).style.display = ""
 } else {
  document.getElementById(btn.id.concat("Txt")).style.display = "none";
 }
}