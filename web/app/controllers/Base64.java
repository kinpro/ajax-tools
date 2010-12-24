package controllers;

import play.mvc.Controller;

public class Base64 extends Controller {
	public static void index() {
		render();
	}

	public static void decode(String text) {
		byte[] result = org.apache.commons.codec.binary.Base64.decodeBase64(text);

		if (result != null) {
			text = new String(result);
		} else
			text = "[ Unable to Base64 decode text ]";

		renderText(text);
	}

	public static void encode(String text) {
		if (text != null && text.length() > 0) {
			text = org.apache.commons.codec.binary.Base64.encodeBase64URLSafeString(text.getBytes());
		}

		renderText(text);
	}
}