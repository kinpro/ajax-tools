package controllers;

import org.apache.commons.codec.binary.BinaryCodec;
import org.apache.commons.lang.ArrayUtils;

import play.mvc.Controller;

public class ByteChar extends Controller {
	private static final byte COMMA_SEPARATOR = 0;
	private static final byte SPACE_SEPARATOR = 1;

	public static void index() {
		render();
	}

	public static void byteToChar(String byteValues) {
		if (byteValues != null && byteValues.length() > 0) {
			String[] vals = null;

			// Figure out if we are using spaces or commas
			if (byteValues.indexOf(',') == -1)
				vals = byteValues.split(" ");
			else {
				// We are using commas, so remove the whitespace.
				vals = byteValues.replaceAll("\\s", "").split(",");
			}

			StringBuilder result = new StringBuilder();

			for (String val : vals) {
				char c = '?';

				try {
					c = (char) Integer.parseInt(val);
				} catch (NumberFormatException e) {
					// no-op
				}

				result.append(c);
			}

			renderText(result.toString());
		}
	}

	public static void charToByte(Byte separator, String text) {
		if (text != null && text.length() > 0) {
			StringBuilder result = new StringBuilder(text.length() * 3);

			for (int i = 0, l = text.length(); i < l; i++) {
				result.append((int) text.charAt(i));

				if (i < (l - 1))
					result.append((separator.byteValue() == COMMA_SEPARATOR ? ','
							: ' '));
			}

			renderText(result.toString());
		}
	}

	// public static void binaryToText(Byte endian, String binary) {
	// if (binary != null && binary.length() > 0) {
	// // Remove all whitespace without asking; the operation is fast
	// // enough that we don't need to waste time checking.
	// binary = binary.replaceAll("\\s", "");
	//
	// byte[] result = BINARY_CODEC.toByteArray(binary);
	//
	// if (result != null) {
	// // If the result is big endian, we have to reverse the byte
	// // order first
	// if (endian == 0) {
	// ArrayUtils.reverse(result);
	// }
	//
	// binary = new String(result);
	// } else
	// binary = "[ Unable to Base64 decode text ]";
	// }
	//
	// renderText(binary);
	// }
	//
	// public static void textToBinary(Boolean spaces, Byte endian, String text)
	// {
	// if (text != null && text.length() > 0) {
	// byte[] bytes = text.getBytes();
	//
	// // If the result is big endian, we have to reverse the byte order
	// // first
	// if (endian == 0) {
	// ArrayUtils.reverse(bytes);
	// }
	//
	// text = new String(BinaryCodec.toAsciiChars(bytes));
	//
	// if (spaces) {
	// StringBuilder builder = new StringBuilder(text.length() * 2);
	//
	// for (int i = 0, size = text.length(); i < size; i++) {
	// if (i != 0 && i % 8 == 0) {
	// builder.append(' ');
	// }
	//
	// builder.append(text.charAt(i));
	// }
	//
	// text = builder.toString();
	// }
	// }
	//
	// renderText(text);
	// }
}