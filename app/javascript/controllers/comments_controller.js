import { Controller, Application } from "@hotwired/stimulus";

export default class extends Controller {

  clear() {
    this.element.reset();
  }
}
