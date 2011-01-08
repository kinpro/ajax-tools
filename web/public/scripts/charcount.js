// Count Initialization
$(document).ready($(function() {
	$("#tabs").tabs();

	$("#countTab").click(function() {
		$("#result").hide();
		$("#countText").select();
	});

	$("#countButton").button();
	$("#countButton").click(function() {
		submitCount($("#includeSpaces").is(":checked"), $("#includeNewlines").is(":checked"), $("#countText").val());
	});

	$("#countForm").submit(function() {
		return false;
	})

	$("#countText").click(function() {
		this.select();
	});

	// Everything loaded, focus the input box
	$("#countText").focus();
}))

function submitCount(includeSpaces, includeNewlines, text) {
	var startTime = new Date().getTime();

	$.ajax({
		type: "POST",
		data: ({includeSpaces: includeSpaces, includeNewlines: includeNewlines, text: text}),
		url: "/charcount/count",
		success: function(data, textStatus, XMLHttpRequest) {
			var results = data.split(',');
			
			$("#resultText").text(results[0]);
			$("#resultSpaces").text(results[1]);
			$("#resultNewlines").text(results[2]);
			
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}