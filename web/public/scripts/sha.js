// Base64 Initialization
$(document).ready($(function() {
	$("#tabs").tabs();

	$("#generateTab").click(function() {
		$("#result").hide();
		$("#decodeText").select();
	});

	$("#generateButton").button();
	$("#generateButton").click(function() {
		submitGenerate($('#generateForm input:radio:checked').val(), $("#decodeText").val());
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

function submitGenerate(shaType, text) {
	var startTime = new Date().getTime();

	$.ajax({
		type: "POST",
		data: "shaType=" + shaType + "&text=" + text,
		url: "/sha/generate",
		success: function(data, textStatus, XMLHttpRequest) {
			$("#resultText").val(data);
			$("#resultSize").text(data.length);
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}