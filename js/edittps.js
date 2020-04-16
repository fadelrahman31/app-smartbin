function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

$(document).ready(function(){
    var idtps = getUrlVars()['idtps']
    document.getElementById('idtps').value = idtps;

    $('#form').submit(function(event){
        event.preventDefault();
        var alokasi = parseInt(document.getElementById('alokasi').value);
        console.log(alokasi+1)
        console.log(idtps)
        var url = 'https://id-smartbin.herokuapp.com/tps/alokasi/'+idtps;
        var data1 = {'id_tps': idtps, 'alokasi_petugas': alokasi};
        var data = JSON.stringify(data1);
        $.ajax({
            type: "PUT",
            url: url,
            data: data,
            contentType:"application/json",
            success: function(data){
                alert(data); 
                location.replace("detailtps.html");
            }
          });
    });

});