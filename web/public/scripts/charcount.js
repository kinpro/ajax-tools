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
		data: "includeSpaces=" + includeSpaces + "&includeNewlines=" + includeNewlines + "&text=" + text,
		url: "/charcount/count",
		success: function(data, textStatus, XMLHttpRequest) {
			$("#resultText").text(data);
			//$("#resultSize").text(data.length);
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}