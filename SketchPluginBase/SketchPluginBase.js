var SketchPluginBase_FrameworkPath = SketchPluginBase_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent();
var SketchPluginBase_Log = SketchPluginBase_Log || log;

(function () {
  var mocha = Mocha.sharedRuntime();
  var frameworkName = "SketchPluginBase";
  var directory = SketchPluginBase_FrameworkPath;
  if (mocha.valueForKey(frameworkName)) {
    SketchPluginBase_Log("😎 loadFramework: `" + frameworkName + "` already loaded.");
    return true;
  } else if ([mocha loadFrameworkWithName: frameworkName inDirectory: directory]) {
    SketchPluginBase_Log("✅ loadFramework: `" + frameworkName + "` success!");
    mocha.setValue_forKey_(true, frameworkName);
    return true;
  } else {
    SketchPluginBase_Log("❌ loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define SketchPluginBase_FrameworkPath if you're trying to @import in a custom plugin");
    return false;
  }
})();
