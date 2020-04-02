
describe('Jenkin', function() {
    it('launchgoogle', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/');
      browser.sleep('10000');
      console.log("checking");
     });
  });
