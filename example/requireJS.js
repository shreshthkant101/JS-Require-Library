function requireJS(filename){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET",filename.toString());

    xhttp.onreadystatechange = function(){
        eval(this.responseText);
    }
    xhttp.send();
}
