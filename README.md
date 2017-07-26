## Sketch Plugin Base

A XCode project to create sketch plugin, which inspired by [magicsketch](https://blog.magicsketch.io/beginning-sketch-plugins-development-in-xcode-2ee562352798)


### Development

1. Add your custom Classes, properties and methods into `./SketchPluginBase` folder
2. Modify framework's name within the whole project as you wish
3. Build project


### Usage

1. Just copy `./Products/${framework_name}.framework` into your custom Sketch Plugin folder, such as `test.sketchplugin/Contents/Sketch/`
2. Import OC framework in your CocoaScript file
3. Init the invoker


#### Example

```javascript
// script.cocoascript

@import 'SketchPluginBase.framework/SketchPluginBase.js';

var onRun = function(context) {
  var main = SBMain.alloc().init();
  context.document.showMessage(main.helloText());
  log("SB Finish")
};
```
