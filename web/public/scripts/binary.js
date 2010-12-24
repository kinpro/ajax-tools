// Binary Initialization
$(document).ready($(function() {
	$("#tabs").tabs();

	$("#b2t").click(function() {
		$("#result").hide();
		$("#decodeText").select();
	});
	$("#t2b").click(function() {
		$("#result").hide();
		$("#encodeText").select();
	});

	$("#decodeButton").button();
	$("#decodeButton").click(function() {
		submitDecode($('#b2tForm input:radio:checked').val(), $("#decodeText").val());
	});

	$("#encodeButton").button();
	$("#encodeButton").click(function() {
		submitEncode($('#t2bForm input:checkbox:checked').val(), $('#t2bForm input:radio:checked').val(), $("#encodeText").val());
	});

	$("#b2tForm").submit(function() {
		return false;
	})
	$("#t2bForm").submit(function() {
		return false;
	})

	$("#resultText").click(function() {
		this.select();
	});

	// Everything loaded, focus the input box
	$("#decodeText").focus();
}))

function submitDecode(endian, text) {
	var startTime = new Date().getTime();

	$.ajax({
		type: "POST",
		data: "endian=" + endian + "&binary=" + text,
		url: "/binary/binaryToText",
		success: function(data, textStatus, XMLHttpRequest) {
			$("#resultText").val(data);
			$("#resultSize").text(data.length);
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}

function submitEncode(spaces, endian, text) {
	var startTime = new Date().getTime();

	$.ajax({
		type: "POST",
		data: "spaces=" + spaces + "&endian=" + endian + "&text=" + text,
		url: "/binary/textToBinary",
		success: function(data, textStatus, XMLHttpRequest) {
			$("#resultText").val(data);
			$("#resultSize").text(data.length);
			$("#resultTiming").text(new Date().getTime() - startTime);
			$("#result").fadeIn();
		}
	})
}