const wdio = require('webdriverio');
async function main () {
  const caps = {
                "platformName":"Android",
                "appium:platformVersion":"9.0",
                "appium:deviceName":"Galaxy S9 FHD GoogleAPI Emulator",
                "appium:deviceOrientation":"portrait","appium:app":"storage:filename=mda-1.0.17-20.apk",
                "appium:appPackage":"com.saucelabs.mydemoapp.android",
                "appium:appActivity":"com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
                "browserName":"",
                "appium:ensureWebviewsHavePages":true,
                "appium:nativeWebScreenshot":true,
                "sauce:options":{"name":"Appium Desktop Session -- Jul 21, 2023 10:32 AM"},
                "appium:newCommandTimeout":3600,
                "appium:connectHardwareKeyboard":true
              };
  const driver = await wdio.remote({
    protocol: "http",
    hostname: "ondemand.us-west-1.saucelabs.com",
    port: 80,
    path: "/wd/hub",
    capabilities: caps
  });
  let el1 = await driver.$("~Sauce Lab Back Packs");
  await el1.click();
  let el2 = await driver.$("com.saucelabs.mydemoapp.android:id/productTV");
  await el2.click();
  let el3 = await driver.$("com.saucelabs.mydemoapp.android:id/priceTV");
  await el3.click();
  await driver.touchAction([
    {action: 'press', x: 565, y: 616},
    {action: 'moveTo', x: 565, y: 616},
    'release'
  ]);
  await driver.touchAction([
    {action: 'press', x: 517, y: 1915},
    {action: 'moveTo', x: 543, y: 708},
    'release'
  ]);
  let el4 = await driver.$("~Tap to add product to cart");
  await el4.click();
  await driver.deleteSession();
}

main().catch(console.log);