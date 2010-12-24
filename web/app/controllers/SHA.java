package controllers;

import org.apache.commons.codec.digest.DigestUtils;
import play.mvc.Controller;

public class SHA extends Controller {
	public static void index() {
		render();
	}

	public static void generate(Integer shaType, String text) {
		if (shaType != null && text != null && text.length() > 0) {
			switch (shaType) {
				case 1:
					text = DigestUtils.shaHex(text);
					break;

				case 256:
					text = DigestUtils.sha256Hex(text);
					break;

				case 384:
					text = DigestUtils.sha384Hex(text);
					break;

				case 512:
					text = DigestUtils.sha512Hex(text);
					break;

				default:
					text = "[ No appropriate Digest Strength was selected ]";
					break;
			}
		} else {
			text = "[ Unable to generate an SHA digest for the given text ]";
		}

		renderText(text);
	}
}