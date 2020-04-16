var BASE_URL = "https://id-smartbin.herokuapp.com"


$(document).ready(function(){
    $.ajax({
        url: "https://id-smartbin.herokuapp.com/tps"
    }).then(function(data) {
        console.log(data);
        // console.log(data.length);
        // console.log(data[0]);
        // console.log(data[0].length);
        // console.log(data[0][1]);
        // console.log(data[0][1]);
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
            '<td class="text-center">'+"<a class='btn btn-info btn-xs' "+'href="edittps.html?idtps='+row[0]+'"><span class="glyphicon glyphicon-edit"></span> Edit</a></td>' +
            '</tr>';
            $('#bodydetailtps').append(html);
        }
    });
});