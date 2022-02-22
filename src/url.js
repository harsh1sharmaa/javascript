
// function checkUrl(){
//     let url=document.getElementById("url").value;
// console.log(url);
// console.log(check(url));


// }


function check(str){
    let startUrl='https://';

    if(str.substring(0,8)==startUrl || str.substring(0,7)=='http://'){
        return true;
    }
    return false;
}
$(document).ready(function(){
    $("#click").click(function(){

        let str=$("#url").val();

     let ans=check(str);
     $("#ans").text(ans);
    });
  });
  