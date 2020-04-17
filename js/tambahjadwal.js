$(document).ready(function(){
    $('#form').submit(function(event){
        event.preventDefault();
        var idlog           = document.getElementById('idlog').value;
        var idjalur         = document.getElementById('idjalur').value;
        var pic             = parseInt(document.getElementById('pic').value);
        var total_station   = parseInt(document.getElementById('tot_station').value);
        var total_capacity  = parseInt(document.getElementById('tot_capacity').value);
        var total_petugas   = parseInt(document.getElementById('tot_petugas').value);
        var tanggal         = document.getElementById('tgl').value;
        var jam_mulai       = document.getElementById('jam_mulai').value;
        var jam_selesai     = document.getElementById('jam_selesai').value;
        var target_station  = document.getElementById('target_station').value;

        var url = 'https://id-smartbin.herokuapp.com/jadwal/' + idlog;
        var data1 = 
        {
            "idlog"             : idlog,
            "idjalur"           : idjalur,
            "pic"               : pic,
            "total_station"     : total_station,
            "total_capacity"    : total_capacity,
            "total_petugas"     : total_petugas,
            "tanggal"           : tanggal,
            "jam_mulai"         : jam_mulai,
            "jam_selesai"       : jam_selesai,
            "target_station"    : target_station,
        };
        var data = JSON.stringify(data1);
        $.ajax({
           type: "POST",
           url: url,
           data: data,
           contentType:"application/json",
           success: function(data){
               alert(data); 
               location.replace("jadwal.html");
           }
         });
    });

});