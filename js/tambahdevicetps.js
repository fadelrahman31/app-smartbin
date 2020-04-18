$(document).ready(function(){
    $('#formdevice').submit(function(event){
        event.preventDefault();
        var iddevice           = document.getElementById('iddevice').value;
        var idtps              = document.getElementById('idtps').value;
        var url = 'https://id-smartbin.herokuapp.com/device/'+iddevice;
        console.log(iddevice);
        console.log(idtps);
        var dat = 
        {
            "id_device"         : iddevice,
            "id_tps"            : idtps,
            "is_connected"      : "true"
        };
        var data = JSON.stringify(dat);
        $.ajax({
           type: 'POST',
           url: url,
           contentType:"application/json",
           data: data,
           success: function(data){
               alert(data); 
               location.replace("device.html");
           }
         });
    });

});