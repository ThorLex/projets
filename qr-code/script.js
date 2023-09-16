var message_valeur=document.querySelector(".information").children[1];
var Prenom,Nom,Matricule,email,dateNaissance,Genre,Numero,Password;
var valeur;
//CECI NOUS PERMET DE SELECTIONNER LE 2 EME PARAGRAHPE DANS LA DIV AYANT LA CLASS INFORMATION
window.onload=()=>{
    valeur="Aucune valeur"
    message_valeur.innerHTML=valeur;
}
document.forms[0].onchange=()=>{
    console.log("change");
}

// ICI ON GERE LES ELEMENT DU CODE QR TAILLE 
var qr = new QRious({
    element: document.querySelector('.qrious'),
    size: 250,
    value: valeur
  });
function change(element) {
switch (element.name) {
    case "Prenom":
        Prenom=element.value;
      break;
    case "Nom":
        Nom=element.value
     break;
    case "Matricule":
        Matricule=element.value;    
    break;
    case "Numero":
        Numero=element.value;    
    break;
    case "email":
        email=element.value;
    break;
        case "dateNaissance":
        dateNaissance=element.value;
        break;
    case "Password":
            Password=element.value;
            
            
        break;
        case "Genre":
            Genre=element.value;
        break;

    
}


valeur=Prenom+'-'+Nom+'-'+Matricule+'-'+Numero+'-'+email+'-'+dateNaissance+'-'+Password+'-'+Genre;
qr.value=valeur;
message_valeur.innerHTML=qr.value;


  
   
}



  