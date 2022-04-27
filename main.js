let firstNames = [
  'Lucie',
  'Adrien',
  'Cécile', 
  'Steeven',
  'Kevin',
  'Florian',
  'Cedric',
  'Kenny',
  'Thomas',
  'Aymeric',
  'Olivier',
  'Aurore'
                 ];
let dejadelegue = [
    'Lucie',
    'Aymeric', 
    'Adrien',
    'Thomas',
    'Olivier',
    'Florian',
                  ];
    
let name1="";
let name2="";
let chiffre2 = 0;
let chiffre1 = 0;
let test=3;
let compteur=0;
   

function entierAleatoire(min, max){
     return Math.floor(Math.random() * (max - min + 1)) + min;
                                  }

document.getElementById("generate")
.addEventListener("click", function generate() {

if((firstNames.length)<2){
  alert('pas assez de noms dans le tabelau pour tirer 2 délégués');
                         }
else{
     chiffre1 = entierAleatoire(0, (firstNames.length-1));
             do{
             chiffre2 = entierAleatoire(0, (firstNames.length-1));
               }
              while  (chiffre1 == chiffre2);
                      name1 = (firstNames[chiffre1]);
                      name2=  (firstNames[chiffre2]);
                      console.log(name1,name2);
                         

    }
                 document.getElementById("randomNames").innerText = name1;
                 document.getElementById("randomNames2").innerText = name2;
                
                                               });

                                             
function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
                          }

function enreg_new_nom(){         

let nomaajouter = prompt("veuillez saisir un nom à insérer dans le tableau???");   

      if((filterInt(nomaajouter))===(filterInt(test))){
           alert("vous n'avez pas saisi une chaine de caractéres");
                                                      }
          else{

         firstNames[firstNames.length]=nomaajouter;
         dejadelegue [dejadelegue.length]=nomaajouter;
         afficheAncienDele();

              }
                        }

function sup_new_nom(){    
let nomaretirer = prompt("veuillez saisir un nom à retirer, respecter SCRUPULESEMENT la casse");  
let myIndex = firstNames.indexOf(nomaretirer);

  if (myIndex !== -1) {
      firstNames.splice(myIndex, 1);
      dejadelegue.splice(myIndex, 1);
      alert("nom bien effacé");
      afficheAncienDele();                
                      }
  else{
    alert("nom PAS effacé, respecter la casse ou annulation");
    afficheAncienDele();
      }
     
                      }

function afficheAncienDele(){
let listing = '';
document.getElementById("tablo").innerHTML = listing;
      for (let i in dejadelegue){                             
        listing += 'Key: ' + i + '; Valeur: ' + dejadelegue[i] + "\r\n";
                                }
document.getElementById("tablo").innerHTML = dejadelegue.join();
                            }
