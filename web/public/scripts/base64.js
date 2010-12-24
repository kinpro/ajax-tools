// Base64 Initialization
$(document).ready($(function() {
	$("#tabs").tabs();
	
	$("#decodeTab").click(function() {
		$("#result").hide();
		$("#decodeText").select();
	});
	$("#encodeTab").click(function() {
		$("#result").hide();
		$("#encodeText").select();
	});

	$("#decodeButton").button();
	$("#decodeButton").click(function() {
		submitDecode($("#decodeText").val());
	});

	$("#encodeButton").button();
	$("#encodeButton").click(function() {
		submitEncode($("#encodeText").val());
	});

	$("#decodeForm").submit(function() {
		return false;
	})
	$("#encodeForm").submit(function() {
		return false;
	})

	$("#resultText").click(function() {
		this.select();
	});

	// Everything loaded, focus the input box
	$("#decodeText").focus();
}))

function submitDecode(text) {
	var startTime = new Date().getTime();

	$.ajax({
		type: "POST",
		data: "text=" + text,
		url: "/base64/decode",
		success: function(data, textStatus, XMLHttpRequest) {
			$("#resultText").val(data);
			$("#resultSize").text(data.length);
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}

function submitEncode(text) {
	var startTime = new Date().getTime();

	$.ajax({
		type: "POST",
		data: "text=" + text,
		url: "/base64/encode",
		success: function(data, textStatus, XMLHttpRequest) {
			$("#resultText").val(data);
			$("#resultSize").text(data.length);
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}