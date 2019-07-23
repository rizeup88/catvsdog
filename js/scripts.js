$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul").prepend("<li>Meow!</li>");
    $("ul").append('<img src="images/grumpycat1.jpg" alt="Grumpy Cat">');
    $("ul").children("img").first().click(function() {
  		$(this).remove();
	});
  });

  $("button#bark").click(function() {
    $("ul").prepend("<li>Woof!</li>");
    $("ul").append('<img src="images/golden1.jpg" alt="Golden Retriever pup">');
    $("ul").children("img").first().click(function() {
  		$(this).remove();
  	});
  });
});