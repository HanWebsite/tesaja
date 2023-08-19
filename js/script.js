
function getNama(){
    var name = document.getElementById("mynama").value;
    localStorage.setItem("nama", name);
    window.location.href = './status.html';
}

function timeoutData() {
    setTimeout(function(){
        window.location.href = "";
    },82000)
}

