 function upisi_tekst(){
		
var roditelj = document.querySelector('#demo');

var upisaniText = document.getElementById('newtechnology').value;
var newDiv = document.createElement('div');
var newP = document.createElement('p');
var newText = document.createTextNode(upisaniText);
 
newP.appendChild(newText);
newDiv.appendChild(newP);
roditelj.appendChild(newDiv);



		}
  
function obrisi_tekst(){
			var roditelj = document.querySelector('#demo');
			roditelj.innerHTML = '';
		}
		


