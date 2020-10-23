import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.LegonCities',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;