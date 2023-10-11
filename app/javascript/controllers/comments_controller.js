import { Controller, Application } from "@hotwired/stimulus";

const application = Application.start();
application.debug = true;

export default class extends Controller {

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  clear() {
    console.log("clear was called")
    this.element.reset();
  }
}
