$(document).ready(function(){
    $('#form').submit(function(event){
        event.preventDefault();
        var nopegawai      = parseInt(document.getElementById('nopegawai').value);
        var username       = document.getElementById('username').value;
        var password       = document.getElementById('password').value;
        var tipe           = document.getElementById('tipe').value;

        var url = 'https://id-smartbin.herokuapp.com/user/' + nopegawai;
        var data1 = 
        {
                "no_pegawai": nopegawai,
                "username": username,
                "password": password,
                "tipe_pegawai": tipe
        };
        var data = JSON.stringify(data1);
        $.ajax({
           type: "POST",
           url: url,
           data: data,
           contentType:"application/json",
           success: function(data){
               alert(data); 
               location.replace("pengguna.html");
           }
         });
    });

});