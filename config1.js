exports.config = {
    framework: 'jasmine',
    directConnect : "true",
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['launchyahoo.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }