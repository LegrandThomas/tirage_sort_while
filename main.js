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
      
      let name1="";
      let name2="";
      let chiffre2 = 0;
      let chiffre1 = 0;
      let test=0;

      console.log(typeof test);


      function entierAleatoire(min, max)
      {
       return Math.floor(Math.random() * (max - min + 1)) + min;
      }


      document.getElementById("generate")
      .addEventListener("click", function() {

      if((firstNames.length)<2){
            alert('pas assez de noms dans le tabelau pour tirer 2 délégués')
      }
      else{
               chiffre1 = entierAleatoire(0, (firstNames.length-1));
                 console.log(JSON.parse(JSON.stringify(chiffre1)))  
        
               do{
               chiffre2 = entierAleatoire(0, (firstNames.length-1));
               console.log(JSON.parse(JSON.stringify(chiffre2)))  
                 }
                while  (chiffre1 == chiffre2);
                   name1 = (firstNames[chiffre1]);
                   name2=  (firstNames[chiffre2]);
                   document.getElementById("randomNames").innerText = name1;
                   document.getElementById("randomNames2").innerText = name2;
                  }
                                             }
                        );


                        function enreg_new_nom(){            
                          let nomaajouter = prompt("veuillez saisir un nom à insérer dans le tableau???");  

                          console.log(typeof nomaajouter);
                          console.log(typeof test);

                        if((typeof nomaajouter)===(typeof test)){
                          alert("vous n'avez pas saisi une chaine de caractéres");

                        }else{

                          firstNames[firstNames.length]=nomaajouter;
                          console.log(firstNames);

                        }
                      }

                        function sup_new_nom(){    
                          let nomaretirer = prompt("veuillez saisir un nom à retirer du le tableau???");  
                          var myIndex = firstNames.indexOf(nomaretirer);
                          if (myIndex !== -1) {
                            firstNames.splice(myIndex, 1);
                          }
                          console.log(firstNames);
                        
                        }