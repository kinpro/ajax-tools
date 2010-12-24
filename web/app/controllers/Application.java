package controllers;

import org.apache.commons.codec.binary.Base64;
import play.mvc.Controller;

public class Application extends Controller {
	public static void index() {
		controllers.Base64.index();
	}
}