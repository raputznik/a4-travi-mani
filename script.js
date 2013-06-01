$(document).ready(function(){
	$("#container").find(".details").click(function(){ 
		$(".boxed").css("background-color", "yellow");
		var price = $('<p class="details">Price $399</p>');
		$(".vacation").append(price);
		//details.append("price");

	});

});
