// Base64 Initialization
$(document).ready($(function() {
	$("#tabs").tabs();

	$("#generateTab").click(function() {
		$("#result").hide();
		$("#decodeText").select();
	});

	$("#generateButton").button();
	$("#generateButton").click(function() {
		submitGenerate($("#decodeText").val());
	});

	$("#generateForm").submit(function() {
		return false;
	})

	$("#resultText").click(function() {
		this.select();
	});

	// Everything loaded, focus the input box
	$("#decodeText").focus();
}))

function submitGenerate(text) {
	var startTime = new Date().getTime();

	$.ajax({
		type: "POST",
		data: "text=" + text,
		url: "/md5/generate",
		success: function(data, textStatus, XMLHttpRequest) {
			$("#resultText").val(data);
			$("#resultSize").text(data.length);
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}