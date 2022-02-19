console.log("hello");

function checkName(name){

    if(name.length==0){
        return false;
    }
    for(let i=0;i<name.length;i++){
        if(name[i]=='1' || name[i]=='2' || name[i]=='3' || name[i]=='4' || name[i]=='5' || name[i]=='6' || name[i]=='7' || name[i]=='8' || name[i]=='9' || name[i]=='0'){
            return false;
        }
    }
    return true;
}

function checkMail(email) {

    if (email.length == 0) {
        return false;
    }

    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            return true;
        }
    }
    return false;


}

function checkMobile(mobile) {

    console.log(mobile.length);
    if (mobile.length != 10) {
        return false;
    }
    return true;


}
function addData() {
    document.getElementById("alert-name").innerText=""
    document.getElementById("alert-email").innerText=""
    document.getElementById("alert-mobile").innerText=""

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    console.log(name);
     

   let checkname= checkName(name);
   let checkmail= checkMail(email);
   let checkmobile= checkMobile(mobile);
   if(checkname ==false){
       console.log("name is invalid");
       document.getElementById("alert-name").innerText="invalid name"
   }
   if(checkmail ==false){
       console.log("mail is invalid");
       document.getElementById("alert-email").innerText="invalid email"
   }
   if(checkmobile ==false){
       console.log("mobile is invalid");

       document.getElementById("alert-mobile").innerText="invalid mobile"
   }

}

