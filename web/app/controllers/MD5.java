package controllers;

import org.apache.commons.codec.digest.DigestUtils;

import play.mvc.Controller;

public class MD5 extends Controller {
	public static void index() {
		render();
	}

	public static void generate(String text) {
		if (text != null && text.length() > 0) {
			text = DigestUtils.md5Hex(text);
		} else {
			text = "[ Unable to generate an MD5 for the given text ]";
		}

		renderText(text);
	}
}