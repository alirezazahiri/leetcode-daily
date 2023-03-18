// URL: https://leetcode.com/problems/design-browser-history/

/**
 * @param {string} homepage
 */
class BrowserHistory {
  constructor(homepage) {
    this.currentIdx = 0;
    this.homepage = homepage;
    this.pages = [homepage];
  }
  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    this.pages.splice(
      this.currentIdx + 1,
      this.pages.slice(this.currentIdx + 1).length
    );
    this.pages.splice(
      this.currentIdx + 1,
      this.pages.length - this.currentIdx,
      url
    );
    this.currentIdx = this.pages.length - 1;
  }
  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    if (steps > this.currentIdx) {
      this.currentIdx = 0;
      return this.pages[this.currentIdx];
    }
    this.currentIdx -= steps;
    return this.pages[this.currentIdx];
  }
  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    if (steps + this.currentIdx > this.pages.length - 1) {
      this.currentIdx = this.pages.length - 1;
      return this.pages[this.currentIdx];
    }
    this.currentIdx += steps;
    return this.pages[this.currentIdx];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

["leetcode", "google.com", "facebook.com", "linkedin.com", "youtube.com"];
let browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com"); // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com"); // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com"); // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1); // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1); // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1); // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com"); // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2); // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2); // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7); // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
