// Binary Initialization
$(document).ready($(function() {
	$("#tabs").tabs();

	$("#b2c").click(function() {
		$("#result").hide();
		$("#byteText").select();
	});
	$("#c2b").click(function() {
		$("#result").hide();
		$("#charText").select();
	});

	$("#byteToCharButton").button();
	$("#byteToCharButton").click(function() {
		submitByteToChar($("#byteText").val());
	});

	$("#charToByteButton").button();
	$("#charToByteButton").click(function() {
		submitCharToByte($('#c2bForm input:radio:checked').val(), $("#charText").val());
	});

	$("#b2cForm").submit(function() {
		return false;
	})
	$("#c2bForm").submit(function() {
		return false;
	})

	$("#resultText").click(function() {
		this.select();
	});

	// Everything loaded, focus the input box
	$("#byteText").focus();
}))

function submitByteToChar(text) {
	var startTime = new Date().getTime();

	$.ajax({
		type: "POST",
		data: "byteValues=" + text,
		url: "/bytechar/byteToChar",
		success: function(data, textStatus, XMLHttpRequest) {
			$("#resultText").val(data);
			$("#resultSize").text(data.length);
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}

function submitCharToByte(separator, text) {
	var startTime = new Date().getTime();

	$.ajax({
		type: "POST",
		data: "separator=" + separator + "&text=" + text,
		url: "/bytechar/charToByte",
		success: function(data, textStatus, XMLHttpRequest) {
			$("#resultText").val(data);
			$("#resultSize").text(data.length);
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}