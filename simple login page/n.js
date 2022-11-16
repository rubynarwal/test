



function login()
{
    var Myname=document.getElementById('StudentName').Value;
    var passR=document.getElementById('password').Value;


if(Myname=="ruby" && passR=="123")
{
    window.location("http://127.0.0.1:5500/simple%20login%20page/ruby.html");
}
else{
    window.alert("login invalid😥");
}

}