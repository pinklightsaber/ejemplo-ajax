$('#boton').on("click", function() {
  var url = 'https://jsonplaceholder.typicode.com';

  var id = parseInt(Math.random() * 100);

  $.ajax({
    url: url + '/posts/', //request
    method: 'GET'				//request
  }).then(function(data) {
  		data.map(function(row){
  			$('body').append('<h1>' + row.title + '</h1>');
  		})
      
    });
});
