var BASE_URL = "https://id-smartbin.herokuapp.com"

function deleteData(id_tps){
    $.ajax({
        url: "https://id-smartbin.herokuapp.com/data/tps/"+id_tps,
        type: "DELETE",
        success: function(){
            alert("Berhasil selesaikan data tps!");
            location.replace("statustps.html");
        }
    })
}

$(document).ready(function(){
    //this.getDataTPS();
    $.ajax({
        url: "https://id-smartbin.herokuapp.com/data/tps"
    }).then(function(data) {
        /*console.log(data);
        console.log(data.length);
        console.log(data[0]);
        console.log(data[0].length);
        console.log(data[0][1]);*/
        console.log(data[0][1]);
        for (let i=0; i < data.length; i++){
            let row = data[i];
            const html = 
            '<tr>\n'+
            '    <td>' + row[0] + '</td>\n' +
            '    <td>' + row[1] + '</td>\n' +
            '    <td>' + row[2] + '</td>\n' +
            '    <td>' + row[3] + '</td>\n' +
            '    <td>' + row[4] + '</td>\n' +
            '    <td>' + row[5] + '</td>\n' +
            '    <td>' + row[6] + '</td>\n' +
            '<td class="text-center">'+"<a class='btn btn-info btn-xs' "+'href="#" onclick="deleteData(\'' + row[0] +'\')"> Tandai Selesai</a></td>' +
            '</tr>';
            $('#table-rows').append(html);
        }
    });
});