console.log("hello");
function create() {

    let name = document.getElementById("nam").value;
    console.log(name)

    if (name != '') {

        let num1 = Math.floor(Math.random() * (126 - 32)) + 32;
        let num2 = Math.floor(Math.random() * (126 - 32)) + 32;
        let num3 = Math.floor(Math.random() * (126 - 32)) + 32;
        let num4 = Math.floor(Math.random() * (1000 - 100)) + 100;
        let caps = Math.floor(Math.random() * (90 - 65)) + 65;
        let ch1 = String.fromCharCode(num1);
        let ch2 = String.fromCharCode(num2);
        let ch3 = String.fromCharCode(num3);
        let chcap = String.fromCharCode(caps);

        let str = name[0] + ch1 + num4 + ch2 + chcap + ch3;

        document.getElementById("pswrd").innerText = str;

        console.log(str);
    } else {

        document.getElementById("pswrd").innerText = "enter valid name";


    }

}

//

// console.log(typeof(name) )
// console.log(name[0].charCodeAt()+num);
// let asci=name[0].charCodeAt()+num;

// console.log(x)