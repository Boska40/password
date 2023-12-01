let pwd=document.getElementById("password");
let eyeicon=document.getElementById("eyeicon");


// événement au click de l'icone
eyeicon.onclick=function(){
    // si le type de l'input est "password", on le met à "text" pour afficher le contenu
    if(pwd.type=="password"){
        pwd.type="text";
        eyeicon.src="eye-open.png";
    }else{
        pwd.type="password";
        eyeicon.src="eye-close.png";
    }
}