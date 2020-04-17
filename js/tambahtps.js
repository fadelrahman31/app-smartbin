$(document).ready(function(){
    $('#form').submit(function(event){
        event.preventDefault();
        var idtps        = document.getElementById('idtps').value;
        var nama         = document.getElementById('nama').value;
        var kelurahan    = document.getElementById('kelurahan').value;
        var kecamatan    = document.getElementById('kecamatan').value;
        var region       = document.getElementById('region').value;
        var alokasi      = parseInt(document.getElementById('alokasi').value);
        
        var url = 'https://id-smartbin.herokuapp.com/tps/' + idtps;
        var data1 = 
        {
            "id_tps": idtps,
            "nama": nama,
            "kelurahan": kelurahan,
            "kecamatan": kecamatan,
            "region": region,
            "is_full": "false",
            "alokasi_petugas": alokasi
        };
        var data = JSON.stringify(data1);
        $.ajax({
           type: "POST",
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