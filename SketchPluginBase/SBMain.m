//
//  SBMain.m
//  SketchPluginBase
//
//  Created by gaofeng.gf on 2017/7/26.
//  Copyright © 2017年 gaofeng.gf. All rights reserved.
//

#import "SBMain.h"
@import AppKit;
#define HSLog(fmt, ...) NSLog((@"SketchPluginBase (Sketch Plugin) %s [Line %d] " fmt), __PRETTY_FUNCTION__, __LINE__, ##__VA_ARGS__);

@implementation SBMain
- (NSString *)helloText {
    HSLog(@"Reading helloText");
    return @"Hey there, sending signal from SBMain, over.";
}
@end
