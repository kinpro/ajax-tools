package controllers;

import play.mvc.Controller;

public class CharCount extends Controller {
	public static void index() {
		render();
	}

	public static void count(Boolean includeSpaces, Boolean includeNewlines,
			String text) {
		if (text == null) {
			text = Integer.toString(0);
		} else {
			if (includeSpaces && includeNewlines) {
				text = Integer.toString(text.length());
			} else {
				int spaceCount = 0;
				int newlineCount = 0;

				// count the spaces and newline both -- it is cheap enough to
				// just count both without looking at the bools first.
				for (int i = 0, length = text.length(); i < length; i++) {
					switch (text.charAt(i)) {
					case ' ':
						spaceCount++;
						break;

					/*
					 * This case catches Unix/Mac and Windows (\r\n) newlines
					 * because in all platforms, a \n has to occur when a
					 * newline is present; in Windows's case, there is an
					 * additional \r character that we don't care about, cause
					 * we already know there is a newline present, so just count
					 * it.
					 */
					case '\n':
						newlineCount++;
						break;
					}
				}
				
				// If we wanted to include spaces, then subtract newlines.
				if(includeSpaces)
					text = Integer.toString(text.length() - newlineCount);
				// If we wanted newlines, then subtract spaces.
				else if(includeNewlines)
					text = Integer.toString(text.length() - spaceCount);
				else
					text = Integer.toString(text.length() - (spaceCount + newlineCount));
			}
		}

		renderText(text);
	}
}