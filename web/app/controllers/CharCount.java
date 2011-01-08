package controllers;

import play.mvc.Controller;

public class CharCount extends Controller {
	public static void index() {
		render();
	}

	public static void count(Boolean includeSpaces, Boolean includeNewlines,
			String text) {
		StringBuilder result = new StringBuilder(24);
		
		if (text == null) {
			result.append(0).append(',').append(0).append(',').append(0).append(',');
		} else {
			int spaceCount = 0;
			int newlineCount = 0;

			// count the spaces and newline both
			for (int i = 0, length = text.length(); i < length; i++) {
				switch (text.charAt(i)) {
				case ' ':
					spaceCount++;
					break;

				/*
				 * This case catches Unix/Mac and Windows (\r\n) newlines
				 * because in all platforms, a \n has to occur when a newline is
				 * present; in Windows's case, there is an additional \r
				 * character that we don't care about, cause we already know
				 * there is a newline present, so just count it.
				 */
				case '\n':
					newlineCount++;
					break;
				}
			}

			if (includeSpaces && includeNewlines) {
				result.append(text.length()).append(',').append(spaceCount)
						.append(',').append(newlineCount);
			} else if (includeSpaces) {
				result.append(text.length() - newlineCount).append(',')
						.append(spaceCount).append(',').append(0);
			} else if (includeNewlines) {
				result.append(text.length() - spaceCount).append(',').append(0)
						.append(',').append(newlineCount);
			} else {
				result.append(text.length() - (spaceCount + newlineCount))
						.append(',').append(0).append(',').append(0);
			}
		}

		renderText(result);
	}
}