$(document).ready(function(){

    function createTableRow(vehicle){
        var html = `
        <tr>
            <td>${vehicle.brand}</td>
            <td>${vehicle.model}</td>
            <td>${vehicle.plate}</td>
            <td>${vehicle.category}</td>
            <td>${vehicle.registration_date}</td>
            <td>${vehicle.registration_end_date}</td>
        </tr>`
        ;

        return html;
    };

var url = 'http://localhost:8090/vehicles';
$.ajax({
url: url,
       type: "GET",
       processData: false,
       contentType: "application/json",
       data: {},
       headers: {},
       success: function(res) {
           console.log(res);

           res.forEach(function(vehicle){
               $("tbody").append(createTableRow(vehicle));
           }    
           );
       },
       error: function(err) {
           console.log(`Error on executing request: ${err.message}`);
       }
});

});
