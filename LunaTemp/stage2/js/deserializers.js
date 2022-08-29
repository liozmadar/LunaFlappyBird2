var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.JointSpring' )
  var i2321 = data
  i2320.spring = i2321[0]
  i2320.damper = i2321[1]
  i2320.targetPosition = i2321[2]
  return i2320
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.JointMotor' )
  var i2323 = data
  i2322.m_TargetVelocity = i2323[0]
  i2322.m_Force = i2323[1]
  i2322.m_FreeSpin = i2323[2]
  return i2322
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.JointLimits' )
  var i2325 = data
  i2324.m_Min = i2325[0]
  i2324.m_Max = i2325[1]
  i2324.m_Bounciness = i2325[2]
  i2324.m_BounceMinVelocity = i2325[3]
  i2324.m_ContactDistance = i2325[4]
  i2324.minBounce = i2325[5]
  i2324.maxBounce = i2325[6]
  return i2324
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.JointDrive' )
  var i2327 = data
  i2326.m_PositionSpring = i2327[0]
  i2326.m_PositionDamper = i2327[1]
  i2326.m_MaximumForce = i2327[2]
  return i2326
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2329 = data
  i2328.m_Spring = i2329[0]
  i2328.m_Damper = i2329[1]
  return i2328
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2331 = data
  i2330.m_Limit = i2331[0]
  i2330.m_Bounciness = i2331[1]
  i2330.m_ContactDistance = i2331[2]
  return i2330
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2333 = data
  i2332.m_ExtremumSlip = i2333[0]
  i2332.m_ExtremumValue = i2333[1]
  i2332.m_AsymptoteSlip = i2333[2]
  i2332.m_AsymptoteValue = i2333[3]
  i2332.m_Stiffness = i2333[4]
  return i2332
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2334 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2335 = data
  i2334.m_LowerAngle = i2335[0]
  i2334.m_UpperAngle = i2335[1]
  return i2334
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2337 = data
  i2336.m_MotorSpeed = i2337[0]
  i2336.m_MaximumMotorTorque = i2337[1]
  return i2336
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2339 = data
  i2338.m_DampingRatio = i2339[0]
  i2338.m_Frequency = i2339[1]
  i2338.m_Angle = i2339[2]
  return i2338
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2341 = data
  i2340.m_LowerTranslation = i2341[0]
  i2340.m_UpperTranslation = i2341[1]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2342 = root || new pc.UnityMaterial()
  var i2343 = data
  i2342.name = i2343[0]
  request.r(i2343[1], i2343[2], 0, i2342, 'shader')
  i2342.renderQueue = i2343[3]
  i2342.enableInstancing = !!i2343[4]
  var i2345 = i2343[5]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2345[i + 0]) );
  }
  i2342.floatParameters = i2344
  var i2347 = i2343[6]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2347[i + 0]) );
  }
  i2342.colorParameters = i2346
  var i2349 = i2343[7]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2349[i + 0]) );
  }
  i2342.vectorParameters = i2348
  var i2351 = i2343[8]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2351[i + 0]) );
  }
  i2342.textureParameters = i2350
  var i2353 = i2343[9]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2353[i + 0]) );
  }
  i2342.materialFlags = i2352
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2357 = data
  i2356.name = i2357[0]
  i2356.value = i2357[1]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2361 = data
  i2360.name = i2361[0]
  i2360.value = new pc.Color(i2361[1], i2361[2], i2361[3], i2361[4])
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2365 = data
  i2364.name = i2365[0]
  i2364.value = new pc.Vec4( i2365[1], i2365[2], i2365[3], i2365[4] )
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2369 = data
  i2368.name = i2369[0]
  request.r(i2369[1], i2369[2], 0, i2368, 'value')
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2373 = data
  i2372.name = i2373[0]
  i2372.enabled = !!i2373[1]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2375 = data
  i2374.name = i2375[0]
  i2374.width = i2375[1]
  i2374.height = i2375[2]
  i2374.mipmapCount = i2375[3]
  i2374.anisoLevel = i2375[4]
  i2374.filterMode = i2375[5]
  i2374.hdr = !!i2375[6]
  i2374.format = i2375[7]
  i2374.wrapMode = i2375[8]
  i2374.alphaIsTransparency = !!i2375[9]
  i2374.alphaSource = i2375[10]
  return i2374
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2376 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2377 = data
  i2376.hashCode = i2377[0]
  request.r(i2377[1], i2377[2], 0, i2376, 'material')
  i2376.materialHashCode = i2377[3]
  request.r(i2377[4], i2377[5], 0, i2376, 'atlas')
  i2376.normalStyle = i2377[6]
  i2376.normalSpacingOffset = i2377[7]
  i2376.boldStyle = i2377[8]
  i2376.boldSpacing = i2377[9]
  i2376.italicStyle = i2377[10]
  i2376.tabSize = i2377[11]
  i2376.m_Version = i2377[12]
  i2376.m_SourceFontFileGUID = i2377[13]
  request.r(i2377[14], i2377[15], 0, i2376, 'm_SourceFontFile_EditorRef')
  request.r(i2377[16], i2377[17], 0, i2376, 'm_SourceFontFile')
  i2376.m_AtlasPopulationMode = i2377[18]
  i2376.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2377[19], i2376.m_FaceInfo)
  var i2379 = i2377[20]
  var i2378 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.add(request.d('UnityEngine.TextCore.Glyph', i2379[i + 0]));
  }
  i2376.m_GlyphTable = i2378
  var i2381 = i2377[21]
  var i2380 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.add(request.d('TMPro.TMP_Character', i2381[i + 0]));
  }
  i2376.m_CharacterTable = i2380
  var i2383 = i2377[22]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 2) {
  request.r(i2383[i + 0], i2383[i + 1], 2, i2382, '')
  }
  i2376.m_AtlasTextures = i2382
  i2376.m_AtlasTextureIndex = i2377[23]
  i2376.m_IsMultiAtlasTexturesEnabled = !!i2377[24]
  i2376.m_ClearDynamicDataOnBuild = !!i2377[25]
  var i2385 = i2377[26]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.add(request.d('UnityEngine.TextCore.GlyphRect', i2385[i + 0]));
  }
  i2376.m_UsedGlyphRects = i2384
  var i2387 = i2377[27]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.add(request.d('UnityEngine.TextCore.GlyphRect', i2387[i + 0]));
  }
  i2376.m_FreeGlyphRects = i2386
  i2376.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2377[28], i2376.m_fontInfo)
  i2376.m_AtlasWidth = i2377[29]
  i2376.m_AtlasHeight = i2377[30]
  i2376.m_AtlasPadding = i2377[31]
  i2376.m_AtlasRenderMode = i2377[32]
  var i2389 = i2377[33]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.add(request.d('TMPro.TMP_Glyph', i2389[i + 0]));
  }
  i2376.m_glyphInfoList = i2388
  i2376.m_KerningTable = request.d('TMPro.KerningTable', i2377[34], i2376.m_KerningTable)
  i2376.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2377[35], i2376.m_FontFeatureTable)
  var i2391 = i2377[36]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2391.length; i += 2) {
  request.r(i2391[i + 0], i2391[i + 1], 1, i2390, '')
  }
  i2376.fallbackFontAssets = i2390
  var i2393 = i2377[37]
  var i2392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 1, i2392, '')
  }
  i2376.m_FallbackFontAssetTable = i2392
  i2376.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2377[38], i2376.m_CreationSettings)
  var i2395 = i2377[39]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('TMPro.TMP_FontWeightPair', i2395[i + 0]) );
  }
  i2376.m_FontWeightTable = i2394
  var i2397 = i2377[40]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('TMPro.TMP_FontWeightPair', i2397[i + 0]) );
  }
  i2376.fontWeights = i2396
  return i2376
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2399 = data
  i2398.m_FaceIndex = i2399[0]
  i2398.m_FamilyName = i2399[1]
  i2398.m_StyleName = i2399[2]
  i2398.m_PointSize = i2399[3]
  i2398.m_Scale = i2399[4]
  i2398.m_LineHeight = i2399[5]
  i2398.m_AscentLine = i2399[6]
  i2398.m_CapLine = i2399[7]
  i2398.m_MeanLine = i2399[8]
  i2398.m_Baseline = i2399[9]
  i2398.m_DescentLine = i2399[10]
  i2398.m_SuperscriptOffset = i2399[11]
  i2398.m_SuperscriptSize = i2399[12]
  i2398.m_SubscriptOffset = i2399[13]
  i2398.m_SubscriptSize = i2399[14]
  i2398.m_UnderlineOffset = i2399[15]
  i2398.m_UnderlineThickness = i2399[16]
  i2398.m_StrikethroughOffset = i2399[17]
  i2398.m_StrikethroughThickness = i2399[18]
  i2398.m_TabWidth = i2399[19]
  return i2398
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2403 = data
  i2402.m_Index = i2403[0]
  i2402.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2403[1], i2402.m_Metrics)
  i2402.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2403[2], i2402.m_GlyphRect)
  i2402.m_Scale = i2403[3]
  i2402.m_AtlasIndex = i2403[4]
  return i2402
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2405 = data
  i2404.m_Width = i2405[0]
  i2404.m_Height = i2405[1]
  i2404.m_HorizontalBearingX = i2405[2]
  i2404.m_HorizontalBearingY = i2405[3]
  i2404.m_HorizontalAdvance = i2405[4]
  return i2404
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2407 = data
  i2406.m_X = i2407[0]
  i2406.m_Y = i2407[1]
  i2406.m_Width = i2407[2]
  i2406.m_Height = i2407[3]
  return i2406
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2410 = root || request.c( 'TMPro.TMP_Character' )
  var i2411 = data
  i2410.m_ElementType = i2411[0]
  i2410.m_Unicode = i2411[1]
  i2410.m_GlyphIndex = i2411[2]
  i2410.m_Scale = i2411[3]
  return i2410
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2416 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2417 = data
  i2416.Name = i2417[0]
  i2416.PointSize = i2417[1]
  i2416.Scale = i2417[2]
  i2416.CharacterCount = i2417[3]
  i2416.LineHeight = i2417[4]
  i2416.Baseline = i2417[5]
  i2416.Ascender = i2417[6]
  i2416.CapHeight = i2417[7]
  i2416.Descender = i2417[8]
  i2416.CenterLine = i2417[9]
  i2416.SuperscriptOffset = i2417[10]
  i2416.SubscriptOffset = i2417[11]
  i2416.SubSize = i2417[12]
  i2416.Underline = i2417[13]
  i2416.UnderlineThickness = i2417[14]
  i2416.strikethrough = i2417[15]
  i2416.strikethroughThickness = i2417[16]
  i2416.TabWidth = i2417[17]
  i2416.Padding = i2417[18]
  i2416.AtlasWidth = i2417[19]
  i2416.AtlasHeight = i2417[20]
  return i2416
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2420 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2421 = data
  i2420.id = i2421[0]
  i2420.x = i2421[1]
  i2420.y = i2421[2]
  i2420.width = i2421[3]
  i2420.height = i2421[4]
  i2420.xOffset = i2421[5]
  i2420.yOffset = i2421[6]
  i2420.xAdvance = i2421[7]
  i2420.scale = i2421[8]
  return i2420
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2422 = root || request.c( 'TMPro.KerningTable' )
  var i2423 = data
  var i2425 = i2423[0]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.add(request.d('TMPro.KerningPair', i2425[i + 0]));
  }
  i2422.kerningPairs = i2424
  return i2422
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2428 = root || request.c( 'TMPro.KerningPair' )
  var i2429 = data
  i2428.xOffset = i2429[0]
  i2428.m_FirstGlyph = i2429[1]
  i2428.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2429[2], i2428.m_FirstGlyphAdjustments)
  i2428.m_SecondGlyph = i2429[3]
  i2428.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2429[4], i2428.m_SecondGlyphAdjustments)
  i2428.m_IgnoreSpacingAdjustments = !!i2429[5]
  return i2428
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2430 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2431 = data
  var i2433 = i2431[0]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2433[i + 0]));
  }
  i2430.m_GlyphPairAdjustmentRecords = i2432
  return i2430
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2436 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2437 = data
  i2436.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2437[0], i2436.m_FirstAdjustmentRecord)
  i2436.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2437[1], i2436.m_SecondAdjustmentRecord)
  i2436.m_FeatureLookupFlags = i2437[2]
  return i2436
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2438 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2439 = data
  i2438.m_GlyphIndex = i2439[0]
  i2438.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2439[1], i2438.m_GlyphValueRecord)
  return i2438
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2440 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2441 = data
  i2440.m_XPlacement = i2441[0]
  i2440.m_YPlacement = i2441[1]
  i2440.m_XAdvance = i2441[2]
  i2440.m_YAdvance = i2441[3]
  return i2440
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2444 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2445 = data
  i2444.sourceFontFileName = i2445[0]
  i2444.sourceFontFileGUID = i2445[1]
  i2444.pointSizeSamplingMode = i2445[2]
  i2444.pointSize = i2445[3]
  i2444.padding = i2445[4]
  i2444.packingMode = i2445[5]
  i2444.atlasWidth = i2445[6]
  i2444.atlasHeight = i2445[7]
  i2444.characterSetSelectionMode = i2445[8]
  i2444.characterSequence = i2445[9]
  i2444.referencedFontAssetGUID = i2445[10]
  i2444.referencedTextAssetGUID = i2445[11]
  i2444.fontStyle = i2445[12]
  i2444.fontStyleModifier = i2445[13]
  i2444.renderMode = i2445[14]
  i2444.includeFontFeatures = !!i2445[15]
  return i2444
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2448 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'regularTypeface')
  request.r(i2449[2], i2449[3], 0, i2448, 'italicTypeface')
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2451 = data
  i2450.name = i2451[0]
  i2450.atlasId = i2451[1]
  i2450.mipmapCount = i2451[2]
  i2450.hdr = !!i2451[3]
  i2450.size = i2451[4]
  i2450.anisoLevel = i2451[5]
  i2450.filterMode = i2451[6]
  i2450.wrapMode = i2451[7]
  var i2453 = i2451[8]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 4) {
    i2452.push( UnityEngine.Rect.MinMaxRect(i2453[i + 0], i2453[i + 1], i2453[i + 2], i2453[i + 3]) );
  }
  i2450.rects = i2452
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.index = i2457[1]
  i2456.startup = !!i2457[2]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2459 = data
  i2458.position = new pc.Vec3( i2459[0], i2459[1], i2459[2] )
  i2458.scale = new pc.Vec3( i2459[3], i2459[4], i2459[5] )
  i2458.rotation = new pc.Quat(i2459[6], i2459[7], i2459[8], i2459[9])
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2461 = data
  i2460.enabled = !!i2461[0]
  i2460.aspect = i2461[1]
  i2460.orthographic = !!i2461[2]
  i2460.orthographicSize = i2461[3]
  i2460.backgroundColor = new pc.Color(i2461[4], i2461[5], i2461[6], i2461[7])
  i2460.nearClipPlane = i2461[8]
  i2460.farClipPlane = i2461[9]
  i2460.fieldOfView = i2461[10]
  i2460.depth = i2461[11]
  i2460.clearFlags = i2461[12]
  i2460.cullingMask = i2461[13]
  i2460.rect = i2461[14]
  request.r(i2461[15], i2461[16], 0, i2460, 'targetTexture')
  return i2460
}

Deserializers["CameraMovement"] = function (request, data, root) {
  var i2462 = root || request.c( 'CameraMovement' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'player')
  i2462.smoothing = i2463[2]
  i2462.offset = new pc.Vec3( i2463[3], i2463[4], i2463[5] )
  i2462.minPos = new pc.Vec2( i2463[6], i2463[7] )
  i2462.maxPos = new pc.Vec2( i2463[8], i2463[9] )
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2465 = data
  i2464.name = i2465[0]
  i2464.tag = i2465[1]
  i2464.enabled = !!i2465[2]
  i2464.isStatic = !!i2465[3]
  i2464.layer = i2465[4]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2467 = data
  i2466.enabled = !!i2467[0]
  request.r(i2467[1], i2467[2], 0, i2466, 'sharedMaterial')
  var i2469 = i2467[3]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 2, i2468, '')
  }
  i2466.sharedMaterials = i2468
  i2466.receiveShadows = !!i2467[4]
  i2466.shadowCastingMode = i2467[5]
  i2466.sortingLayerID = i2467[6]
  i2466.sortingOrder = i2467[7]
  i2466.lightmapIndex = i2467[8]
  i2466.lightmapSceneIndex = i2467[9]
  i2466.lightmapScaleOffset = new pc.Vec4( i2467[10], i2467[11], i2467[12], i2467[13] )
  i2466.lightProbeUsage = i2467[14]
  i2466.reflectionProbeUsage = i2467[15]
  i2466.color = new pc.Color(i2467[16], i2467[17], i2467[18], i2467[19])
  request.r(i2467[20], i2467[21], 0, i2466, 'sprite')
  i2466.flipX = !!i2467[22]
  i2466.flipY = !!i2467[23]
  i2466.drawMode = i2467[24]
  i2466.size = new pc.Vec2( i2467[25], i2467[26] )
  i2466.tileMode = i2467[27]
  i2466.adaptiveModeThreshold = i2467[28]
  i2466.maskInteraction = i2467[29]
  i2466.spriteSortPoint = i2467[30]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2473 = data
  i2472.usedByComposite = !!i2473[0]
  i2472.autoTiling = !!i2473[1]
  i2472.size = new pc.Vec2( i2473[2], i2473[3] )
  i2472.edgeRadius = i2473[4]
  i2472.enabled = !!i2473[5]
  i2472.isTrigger = !!i2473[6]
  i2472.usedByEffector = !!i2473[7]
  i2472.density = i2473[8]
  i2472.offset = new pc.Vec2( i2473[9], i2473[10] )
  request.r(i2473[11], i2473[12], 0, i2472, 'material')
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2475 = data
  i2474.bodyType = i2475[0]
  request.r(i2475[1], i2475[2], 0, i2474, 'material')
  i2474.simulated = !!i2475[3]
  i2474.useAutoMass = !!i2475[4]
  i2474.mass = i2475[5]
  i2474.drag = i2475[6]
  i2474.angularDrag = i2475[7]
  i2474.gravityScale = i2475[8]
  i2474.collisionDetectionMode = i2475[9]
  i2474.sleepMode = i2475[10]
  i2474.constraints = i2475[11]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i2477 = data
  i2476.size = new pc.Vec2( i2477[0], i2477[1] )
  i2476.direction = i2477[2]
  i2476.enabled = !!i2477[3]
  i2476.isTrigger = !!i2477[4]
  i2476.usedByEffector = !!i2477[5]
  i2476.density = i2477[6]
  i2476.offset = new pc.Vec2( i2477[7], i2477[8] )
  request.r(i2477[9], i2477[10], 0, i2476, 'material')
  return i2476
}

Deserializers["BirdMovement"] = function (request, data, root) {
  var i2478 = root || request.c( 'BirdMovement' )
  var i2479 = data
  i2478.jumpForce = i2479[0]
  i2478.speed = i2479[1]
  i2478.birdDeath = !!i2479[2]
  request.r(i2479[3], i2479[4], 0, i2478, 'tutorialBird')
  return i2478
}

Deserializers["BirdDeath"] = function (request, data, root) {
  var i2480 = root || request.c( 'BirdDeath' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'birdDeathSprite')
  request.r(i2481[2], i2481[3], 0, i2480, 'scoreTextNumber')
  request.r(i2481[4], i2481[5], 0, i2480, 'gameOverText')
  request.r(i2481[6], i2481[7], 0, i2480, 'RetryText')
  i2480.gameOverBool = !!i2481[8]
  request.r(i2481[9], i2481[10], 0, i2480, 'birdMovement')
  request.r(i2481[11], i2481[12], 0, i2480, 'SP')
  request.r(i2481[13], i2481[14], 0, i2480, 'emote1')
  request.r(i2481[15], i2481[16], 0, i2480, 'emote2')
  request.r(i2481[17], i2481[18], 0, i2480, 'emote3')
  return i2480
}

Deserializers["GameOver"] = function (request, data, root) {
  var i2482 = root || request.c( 'GameOver' )
  var i2483 = data
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2485 = data
  request.r(i2485[0], i2485[1], 0, i2484, 'animatorController')
  i2484.updateMode = i2485[2]
  var i2487 = i2485[3]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 2, i2486, '')
  }
  i2484.humanBones = i2486
  i2484.enabled = !!i2485[4]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2491 = data
  i2490.pivot = new pc.Vec2( i2491[0], i2491[1] )
  i2490.anchorMin = new pc.Vec2( i2491[2], i2491[3] )
  i2490.anchorMax = new pc.Vec2( i2491[4], i2491[5] )
  i2490.sizeDelta = new pc.Vec2( i2491[6], i2491[7] )
  i2490.anchoredPosition3D = new pc.Vec3( i2491[8], i2491[9], i2491[10] )
  i2490.rotation = new pc.Quat(i2491[11], i2491[12], i2491[13], i2491[14])
  i2490.scale = new pc.Vec3( i2491[15], i2491[16], i2491[17] )
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2493 = data
  i2492.enabled = !!i2493[0]
  i2492.planeDistance = i2493[1]
  i2492.referencePixelsPerUnit = i2493[2]
  i2492.isFallbackOverlay = !!i2493[3]
  i2492.renderMode = i2493[4]
  i2492.renderOrder = i2493[5]
  i2492.sortingLayerName = i2493[6]
  i2492.sortingOrder = i2493[7]
  i2492.scaleFactor = i2493[8]
  request.r(i2493[9], i2493[10], 0, i2492, 'worldCamera')
  i2492.overrideSorting = !!i2493[11]
  i2492.pixelPerfect = !!i2493[12]
  i2492.targetDisplay = i2493[13]
  i2492.overridePixelPerfect = !!i2493[14]
  return i2492
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2495 = data
  i2494.m_UiScaleMode = i2495[0]
  i2494.m_ReferencePixelsPerUnit = i2495[1]
  i2494.m_ScaleFactor = i2495[2]
  i2494.m_ReferenceResolution = new pc.Vec2( i2495[3], i2495[4] )
  i2494.m_ScreenMatchMode = i2495[5]
  i2494.m_MatchWidthOrHeight = i2495[6]
  i2494.m_PhysicalUnit = i2495[7]
  i2494.m_FallbackScreenDPI = i2495[8]
  i2494.m_DefaultSpriteDPI = i2495[9]
  i2494.m_DynamicPixelsPerUnit = i2495[10]
  return i2494
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2497 = data
  i2496.m_IgnoreReversedGraphics = !!i2497[0]
  i2496.m_BlockingObjects = i2497[1]
  i2496.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2497[2] )
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2499 = data
  i2498.cullTransparentMesh = !!i2499[0]
  return i2498
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.UI.Image' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'm_Sprite')
  i2500.m_Type = i2501[2]
  i2500.m_PreserveAspect = !!i2501[3]
  i2500.m_FillCenter = !!i2501[4]
  i2500.m_FillMethod = i2501[5]
  i2500.m_FillAmount = i2501[6]
  i2500.m_FillClockwise = !!i2501[7]
  i2500.m_FillOrigin = i2501[8]
  i2500.m_UseSpriteMesh = !!i2501[9]
  i2500.m_PixelsPerUnitMultiplier = i2501[10]
  request.r(i2501[11], i2501[12], 0, i2500, 'm_Material')
  i2500.m_Maskable = !!i2501[13]
  i2500.m_Color = new pc.Color(i2501[14], i2501[15], i2501[16], i2501[17])
  i2500.m_RaycastTarget = !!i2501[18]
  return i2500
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2502 = root || request.c( 'UnityEngine.UI.Button' )
  var i2503 = data
  i2502.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2503[0], i2502.m_OnClick)
  i2502.m_Navigation = request.d('UnityEngine.UI.Navigation', i2503[1], i2502.m_Navigation)
  i2502.m_Transition = i2503[2]
  i2502.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2503[3], i2502.m_Colors)
  i2502.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2503[4], i2502.m_SpriteState)
  i2502.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2503[5], i2502.m_AnimationTriggers)
  i2502.m_Interactable = !!i2503[6]
  request.r(i2503[7], i2503[8], 0, i2502, 'm_TargetGraphic')
  return i2502
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2504 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2505 = data
  i2504.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2505[0], i2504.m_PersistentCalls)
  return i2504
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2507 = data
  var i2509 = i2507[0]
  var i2508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.add(request.d('UnityEngine.Events.PersistentCall', i2509[i + 0]));
  }
  i2506.m_Calls = i2508
  return i2506
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2513 = data
  request.r(i2513[0], i2513[1], 0, i2512, 'm_Target')
  i2512.m_MethodName = i2513[2]
  i2512.m_Mode = i2513[3]
  i2512.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2513[4], i2512.m_Arguments)
  i2512.m_CallState = i2513[5]
  return i2512
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'm_ObjectArgument')
  i2514.m_ObjectArgumentAssemblyTypeName = i2515[2]
  i2514.m_IntArgument = i2515[3]
  i2514.m_FloatArgument = i2515[4]
  i2514.m_StringArgument = i2515[5]
  i2514.m_BoolArgument = !!i2515[6]
  return i2514
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2517 = data
  i2516.m_Mode = i2517[0]
  request.r(i2517[1], i2517[2], 0, i2516, 'm_SelectOnUp')
  request.r(i2517[3], i2517[4], 0, i2516, 'm_SelectOnDown')
  request.r(i2517[5], i2517[6], 0, i2516, 'm_SelectOnLeft')
  request.r(i2517[7], i2517[8], 0, i2516, 'm_SelectOnRight')
  return i2516
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2518 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2519 = data
  i2518.m_NormalColor = new pc.Color(i2519[0], i2519[1], i2519[2], i2519[3])
  i2518.m_HighlightedColor = new pc.Color(i2519[4], i2519[5], i2519[6], i2519[7])
  i2518.m_PressedColor = new pc.Color(i2519[8], i2519[9], i2519[10], i2519[11])
  i2518.m_SelectedColor = new pc.Color(i2519[12], i2519[13], i2519[14], i2519[15])
  i2518.m_DisabledColor = new pc.Color(i2519[16], i2519[17], i2519[18], i2519[19])
  i2518.m_ColorMultiplier = i2519[20]
  i2518.m_FadeDuration = i2519[21]
  return i2518
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2520 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'm_HighlightedSprite')
  request.r(i2521[2], i2521[3], 0, i2520, 'm_PressedSprite')
  request.r(i2521[4], i2521[5], 0, i2520, 'm_SelectedSprite')
  request.r(i2521[6], i2521[7], 0, i2520, 'm_DisabledSprite')
  return i2520
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2522 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2523 = data
  i2522.m_NormalTrigger = i2523[0]
  i2522.m_HighlightedTrigger = i2523[1]
  i2522.m_PressedTrigger = i2523[2]
  i2522.m_SelectedTrigger = i2523[3]
  i2522.m_DisabledTrigger = i2523[4]
  return i2522
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2524 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2525 = data
  i2524.m_hasFontAssetChanged = !!i2525[0]
  request.r(i2525[1], i2525[2], 0, i2524, 'm_baseMaterial')
  i2524.m_maskOffset = new pc.Vec4( i2525[3], i2525[4], i2525[5], i2525[6] )
  i2524.m_text = i2525[7]
  i2524.m_isRightToLeft = !!i2525[8]
  request.r(i2525[9], i2525[10], 0, i2524, 'm_fontAsset')
  request.r(i2525[11], i2525[12], 0, i2524, 'm_sharedMaterial')
  var i2527 = i2525[13]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 2, i2526, '')
  }
  i2524.m_fontSharedMaterials = i2526
  request.r(i2525[14], i2525[15], 0, i2524, 'm_fontMaterial')
  var i2529 = i2525[16]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 2) {
  request.r(i2529[i + 0], i2529[i + 1], 2, i2528, '')
  }
  i2524.m_fontMaterials = i2528
  i2524.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2525[17], i2525[18], i2525[19], i2525[20])
  i2524.m_fontColor = new pc.Color(i2525[21], i2525[22], i2525[23], i2525[24])
  i2524.m_enableVertexGradient = !!i2525[25]
  i2524.m_colorMode = i2525[26]
  i2524.m_fontColorGradient = request.d('TMPro.VertexGradient', i2525[27], i2524.m_fontColorGradient)
  request.r(i2525[28], i2525[29], 0, i2524, 'm_fontColorGradientPreset')
  request.r(i2525[30], i2525[31], 0, i2524, 'm_spriteAsset')
  i2524.m_tintAllSprites = !!i2525[32]
  request.r(i2525[33], i2525[34], 0, i2524, 'm_StyleSheet')
  i2524.m_TextStyleHashCode = i2525[35]
  i2524.m_overrideHtmlColors = !!i2525[36]
  i2524.m_faceColor = UnityEngine.Color32.ConstructColor(i2525[37], i2525[38], i2525[39], i2525[40])
  i2524.m_fontSize = i2525[41]
  i2524.m_fontSizeBase = i2525[42]
  i2524.m_fontWeight = i2525[43]
  i2524.m_enableAutoSizing = !!i2525[44]
  i2524.m_fontSizeMin = i2525[45]
  i2524.m_fontSizeMax = i2525[46]
  i2524.m_fontStyle = i2525[47]
  i2524.m_HorizontalAlignment = i2525[48]
  i2524.m_VerticalAlignment = i2525[49]
  i2524.m_textAlignment = i2525[50]
  i2524.m_characterSpacing = i2525[51]
  i2524.m_wordSpacing = i2525[52]
  i2524.m_lineSpacing = i2525[53]
  i2524.m_lineSpacingMax = i2525[54]
  i2524.m_paragraphSpacing = i2525[55]
  i2524.m_charWidthMaxAdj = i2525[56]
  i2524.m_enableWordWrapping = !!i2525[57]
  i2524.m_wordWrappingRatios = i2525[58]
  i2524.m_overflowMode = i2525[59]
  request.r(i2525[60], i2525[61], 0, i2524, 'm_linkedTextComponent')
  request.r(i2525[62], i2525[63], 0, i2524, 'parentLinkedComponent')
  i2524.m_enableKerning = !!i2525[64]
  i2524.m_enableExtraPadding = !!i2525[65]
  i2524.checkPaddingRequired = !!i2525[66]
  i2524.m_isRichText = !!i2525[67]
  i2524.m_parseCtrlCharacters = !!i2525[68]
  i2524.m_isOrthographic = !!i2525[69]
  i2524.m_isCullingEnabled = !!i2525[70]
  i2524.m_horizontalMapping = i2525[71]
  i2524.m_verticalMapping = i2525[72]
  i2524.m_uvLineOffset = i2525[73]
  i2524.m_geometrySortingOrder = i2525[74]
  i2524.m_IsTextObjectScaleStatic = !!i2525[75]
  i2524.m_VertexBufferAutoSizeReduction = !!i2525[76]
  i2524.m_useMaxVisibleDescender = !!i2525[77]
  i2524.m_pageToDisplay = i2525[78]
  i2524.m_margin = new pc.Vec4( i2525[79], i2525[80], i2525[81], i2525[82] )
  i2524.m_isUsingLegacyAnimationComponent = !!i2525[83]
  i2524.m_isVolumetricText = !!i2525[84]
  request.r(i2525[85], i2525[86], 0, i2524, 'm_Material')
  i2524.m_Maskable = !!i2525[87]
  i2524.m_Color = new pc.Color(i2525[88], i2525[89], i2525[90], i2525[91])
  i2524.m_RaycastTarget = !!i2525[92]
  return i2524
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2530 = root || request.c( 'TMPro.VertexGradient' )
  var i2531 = data
  i2530.topLeft = new pc.Color(i2531[0], i2531[1], i2531[2], i2531[3])
  i2530.topRight = new pc.Color(i2531[4], i2531[5], i2531[6], i2531[7])
  i2530.bottomLeft = new pc.Color(i2531[8], i2531[9], i2531[10], i2531[11])
  i2530.bottomRight = new pc.Color(i2531[12], i2531[13], i2531[14], i2531[15])
  return i2530
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2532 = root || request.c( 'UnityEngine.UI.Text' )
  var i2533 = data
  i2532.m_FontData = request.d('UnityEngine.UI.FontData', i2533[0], i2532.m_FontData)
  i2532.m_Text = i2533[1]
  request.r(i2533[2], i2533[3], 0, i2532, 'm_Material')
  i2532.m_Maskable = !!i2533[4]
  i2532.m_Color = new pc.Color(i2533[5], i2533[6], i2533[7], i2533[8])
  i2532.m_RaycastTarget = !!i2533[9]
  return i2532
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2534 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2535 = data
  request.r(i2535[0], i2535[1], 0, i2534, 'm_Font')
  i2534.m_FontSize = i2535[2]
  i2534.m_FontStyle = i2535[3]
  i2534.m_BestFit = !!i2535[4]
  i2534.m_MinSize = i2535[5]
  i2534.m_MaxSize = i2535[6]
  i2534.m_Alignment = i2535[7]
  i2534.m_AlignByGeometry = !!i2535[8]
  i2534.m_RichText = !!i2535[9]
  i2534.m_HorizontalOverflow = i2535[10]
  i2534.m_VerticalOverflow = i2535[11]
  i2534.m_LineSpacing = i2535[12]
  return i2534
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2536 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'm_FirstSelected')
  i2536.m_sendNavigationEvents = !!i2537[2]
  i2536.m_DragThreshold = i2537[3]
  return i2536
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2538 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2539 = data
  i2538.m_HorizontalAxis = i2539[0]
  i2538.m_VerticalAxis = i2539[1]
  i2538.m_SubmitButton = i2539[2]
  i2538.m_CancelButton = i2539[3]
  i2538.m_InputActionsPerSecond = i2539[4]
  i2538.m_RepeatDelay = i2539[5]
  i2538.m_ForceModuleActive = !!i2539[6]
  return i2538
}

Deserializers["BirdTutorial"] = function (request, data, root) {
  var i2540 = root || request.c( 'BirdTutorial' )
  var i2541 = data
  i2540.jumpForce = i2541[0]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2543 = data
  i2542.ambientIntensity = i2543[0]
  i2542.reflectionIntensity = i2543[1]
  i2542.ambientMode = i2543[2]
  i2542.ambientLight = new pc.Color(i2543[3], i2543[4], i2543[5], i2543[6])
  i2542.ambientSkyColor = new pc.Color(i2543[7], i2543[8], i2543[9], i2543[10])
  i2542.ambientGroundColor = new pc.Color(i2543[11], i2543[12], i2543[13], i2543[14])
  i2542.ambientEquatorColor = new pc.Color(i2543[15], i2543[16], i2543[17], i2543[18])
  i2542.fogColor = new pc.Color(i2543[19], i2543[20], i2543[21], i2543[22])
  i2542.fogEndDistance = i2543[23]
  i2542.fogStartDistance = i2543[24]
  i2542.fogDensity = i2543[25]
  i2542.fog = !!i2543[26]
  request.r(i2543[27], i2543[28], 0, i2542, 'skybox')
  i2542.fogMode = i2543[29]
  var i2545 = i2543[30]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2545[i + 0]) );
  }
  i2542.lightmaps = i2544
  i2542.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2543[31], i2542.lightProbes)
  i2542.lightmapsMode = i2543[32]
  i2542.environmentLightingMode = i2543[33]
  i2542.ambientProbe = new pc.SphericalHarmonicsL2(i2543[34])
  request.r(i2543[35], i2543[36], 0, i2542, 'customReflection')
  request.r(i2543[37], i2543[38], 0, i2542, 'defaultReflection')
  i2542.defaultReflectionMode = i2543[39]
  i2542.defaultReflectionResolution = i2543[40]
  i2542.sunLightObjectId = i2543[41]
  i2542.pixelLightCount = i2543[42]
  i2542.defaultReflectionHDR = !!i2543[43]
  i2542.hasLightDataAsset = !!i2543[44]
  i2542.hasManualGenerate = !!i2543[45]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2549 = data
  request.r(i2549[0], i2549[1], 0, i2548, 'lightmapColor')
  request.r(i2549[2], i2549[3], 0, i2548, 'lightmapDirection')
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2550 = root || new UnityEngine.LightProbes()
  var i2551 = data
  return i2550
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2558 = root || request.c( 'TMPro.TMP_Settings' )
  var i2559 = data
  i2558.m_enableWordWrapping = !!i2559[0]
  i2558.m_enableKerning = !!i2559[1]
  i2558.m_enableExtraPadding = !!i2559[2]
  i2558.m_enableTintAllSprites = !!i2559[3]
  i2558.m_enableParseEscapeCharacters = !!i2559[4]
  i2558.m_EnableRaycastTarget = !!i2559[5]
  i2558.m_GetFontFeaturesAtRuntime = !!i2559[6]
  i2558.m_missingGlyphCharacter = i2559[7]
  i2558.m_warningsDisabled = !!i2559[8]
  request.r(i2559[9], i2559[10], 0, i2558, 'm_defaultFontAsset')
  i2558.m_defaultFontAssetPath = i2559[11]
  i2558.m_defaultFontSize = i2559[12]
  i2558.m_defaultAutoSizeMinRatio = i2559[13]
  i2558.m_defaultAutoSizeMaxRatio = i2559[14]
  i2558.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2559[15], i2559[16] )
  i2558.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2559[17], i2559[18] )
  i2558.m_autoSizeTextContainer = !!i2559[19]
  i2558.m_IsTextObjectScaleStatic = !!i2559[20]
  var i2561 = i2559[21]
  var i2560 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2561.length; i += 2) {
  request.r(i2561[i + 0], i2561[i + 1], 1, i2560, '')
  }
  i2558.m_fallbackFontAssets = i2560
  i2558.m_matchMaterialPreset = !!i2559[22]
  request.r(i2559[23], i2559[24], 0, i2558, 'm_defaultSpriteAsset')
  i2558.m_defaultSpriteAssetPath = i2559[25]
  i2558.m_enableEmojiSupport = !!i2559[26]
  i2558.m_MissingCharacterSpriteUnicode = i2559[27]
  i2558.m_defaultColorGradientPresetsPath = i2559[28]
  request.r(i2559[29], i2559[30], 0, i2558, 'm_defaultStyleSheet')
  i2558.m_StyleSheetsResourcePath = i2559[31]
  request.r(i2559[32], i2559[33], 0, i2558, 'm_leadingCharacters')
  request.r(i2559[34], i2559[35], 0, i2558, 'm_followingCharacters')
  i2558.m_UseModernHangulLineBreakingRules = !!i2559[36]
  return i2558
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2562 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2563 = data
  i2562.hashCode = i2563[0]
  request.r(i2563[1], i2563[2], 0, i2562, 'material')
  i2562.materialHashCode = i2563[3]
  request.r(i2563[4], i2563[5], 0, i2562, 'spriteSheet')
  var i2565 = i2563[6]
  var i2564 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.add(request.d('TMPro.TMP_Sprite', i2565[i + 0]));
  }
  i2562.spriteInfoList = i2564
  var i2567 = i2563[7]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2567.length; i += 2) {
  request.r(i2567[i + 0], i2567[i + 1], 1, i2566, '')
  }
  i2562.fallbackSpriteAssets = i2566
  i2562.m_Version = i2563[8]
  i2562.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2563[9], i2562.m_FaceInfo)
  var i2569 = i2563[10]
  var i2568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.add(request.d('TMPro.TMP_SpriteCharacter', i2569[i + 0]));
  }
  i2562.m_SpriteCharacterTable = i2568
  var i2571 = i2563[11]
  var i2570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.add(request.d('TMPro.TMP_SpriteGlyph', i2571[i + 0]));
  }
  i2562.m_SpriteGlyphTable = i2570
  return i2562
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2574 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2575 = data
  i2574.name = i2575[0]
  i2574.hashCode = i2575[1]
  i2574.unicode = i2575[2]
  i2574.pivot = new pc.Vec2( i2575[3], i2575[4] )
  request.r(i2575[5], i2575[6], 0, i2574, 'sprite')
  i2574.id = i2575[7]
  i2574.x = i2575[8]
  i2574.y = i2575[9]
  i2574.width = i2575[10]
  i2574.height = i2575[11]
  i2574.xOffset = i2575[12]
  i2574.yOffset = i2575[13]
  i2574.xAdvance = i2575[14]
  i2574.scale = i2575[15]
  return i2574
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2581 = data
  i2580.m_Name = i2581[0]
  i2580.m_HashCode = i2581[1]
  i2580.m_ElementType = i2581[2]
  i2580.m_Unicode = i2581[3]
  i2580.m_GlyphIndex = i2581[4]
  i2580.m_Scale = i2581[5]
  return i2580
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2584 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2585 = data
  request.r(i2585[0], i2585[1], 0, i2584, 'sprite')
  i2584.m_Index = i2585[2]
  i2584.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2585[3], i2584.m_Metrics)
  i2584.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2585[4], i2584.m_GlyphRect)
  i2584.m_Scale = i2585[5]
  i2584.m_AtlasIndex = i2585[6]
  return i2584
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2586 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2587 = data
  var i2589 = i2587[0]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.add(request.d('TMPro.TMP_Style', i2589[i + 0]));
  }
  i2586.m_StyleList = i2588
  return i2586
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2592 = root || request.c( 'TMPro.TMP_Style' )
  var i2593 = data
  i2592.m_Name = i2593[0]
  i2592.m_HashCode = i2593[1]
  i2592.m_OpeningDefinition = i2593[2]
  i2592.m_ClosingDefinition = i2593[3]
  i2592.m_OpeningTagArray = i2593[4]
  i2592.m_ClosingTagArray = i2593[5]
  i2592.m_OpeningTagUnicodeArray = i2593[6]
  i2592.m_ClosingTagUnicodeArray = i2593[7]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2595 = data
  var i2597 = i2595[0]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(i2597[i + 0]);
  }
  i2594.invalidShaderVariants = i2596
  i2594.name = i2595[1]
  i2594.guid = i2595[2]
  var i2599 = i2595[3]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( i2599[i + 0] );
  }
  i2594.shaderDefinedKeywords = i2598
  var i2601 = i2595[4]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2601[i + 0]) );
  }
  i2594.passes = i2600
  var i2603 = i2595[5]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2603[i + 0]) );
  }
  i2594.usePasses = i2602
  var i2605 = i2595[6]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2605[i + 0]) );
  }
  i2594.defaultParameterValues = i2604
  request.r(i2595[7], i2595[8], 0, i2594, 'unityFallbackShader')
  i2594.readDepth = !!i2595[9]
  i2594.isCreatedByShaderGraph = !!i2595[10]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2612 = root || new pc.UnityShaderPass()
  var i2613 = data
  i2612.id = i2613[0]
  i2612.subShaderIndex = i2613[1]
  i2612.name = i2613[2]
  i2612.passType = i2613[3]
  i2612.usePass = !!i2613[4]
  i2612.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2613[5], i2612.zTest)
  i2612.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2613[6], i2612.zWrite)
  i2612.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2613[7], i2612.culling)
  i2612.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2613[8], i2612.blending)
  i2612.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2613[9], i2612.alphaBlending)
  i2612.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2613[10], i2612.colorWriteMask)
  i2612.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2613[11], i2612.offsetUnits)
  i2612.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2613[12], i2612.offsetFactor)
  i2612.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2613[13], i2612.stencilRef)
  i2612.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2613[14], i2612.stencilReadMask)
  i2612.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2613[15], i2612.stencilWriteMask)
  i2612.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2613[16], i2612.stencilOp)
  i2612.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2613[17], i2612.stencilOpFront)
  i2612.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2613[18], i2612.stencilOpBack)
  var i2615 = i2613[19]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2615[i + 0]) );
  }
  i2612.tags = i2614
  var i2617 = i2613[20]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( i2617[i + 0] );
  }
  i2612.passDefinedKeywords = i2616
  var i2619 = i2613[21]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2619[i + 0]) );
  }
  i2612.variants = i2618
  var i2621 = i2613[22]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2621[i + 0]) );
  }
  i2612.excludedVariants = i2620
  i2612.hasDepthReader = !!i2613[23]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2623 = data
  i2622.val = i2623[0]
  i2622.name = i2623[1]
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2625 = data
  i2624.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2625[0], i2624.src)
  i2624.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2625[1], i2624.dst)
  i2624.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2625[2], i2624.op)
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2627 = data
  i2626.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[0], i2626.pass)
  i2626.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[1], i2626.fail)
  i2626.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[2], i2626.zFail)
  i2626.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2627[3], i2626.comp)
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2631 = data
  i2630.name = i2631[0]
  i2630.value = i2631[1]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2635 = data
  i2634.passId = i2635[0]
  i2634.subShaderIndex = i2635[1]
  var i2637 = i2635[2]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( i2637[i + 0] );
  }
  i2634.keywords = i2636
  i2634.vertexProgram = i2635[3]
  i2634.fragmentProgram = i2635[4]
  i2634.readDepth = !!i2635[5]
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2641 = data
  request.r(i2641[0], i2641[1], 0, i2640, 'shader')
  i2640.pass = i2641[2]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2645 = data
  i2644.name = i2645[0]
  i2644.type = i2645[1]
  i2644.value = new pc.Vec4( i2645[2], i2645[3], i2645[4], i2645[5] )
  i2644.textureValue = i2645[6]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2647 = data
  i2646.name = i2647[0]
  request.r(i2647[1], i2647[2], 0, i2646, 'texture')
  i2646.aabb = i2647[3]
  i2646.vertices = i2647[4]
  i2646.triangles = i2647[5]
  i2646.textureRect = UnityEngine.Rect.MinMaxRect(i2647[6], i2647[7], i2647[8], i2647[9])
  i2646.packedRect = UnityEngine.Rect.MinMaxRect(i2647[10], i2647[11], i2647[12], i2647[13])
  i2646.border = new pc.Vec4( i2647[14], i2647[15], i2647[16], i2647[17] )
  i2646.transparency = i2647[18]
  i2646.bounds = i2647[19]
  i2646.pixelsPerUnit = i2647[20]
  i2646.textureWidth = i2647[21]
  i2646.textureHeight = i2647[22]
  i2646.nativeSize = new pc.Vec2( i2647[23], i2647[24] )
  i2646.pivot = new pc.Vec2( i2647[25], i2647[26] )
  i2646.textureRectOffset = new pc.Vec2( i2647[27], i2647[28] )
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2649 = data
  i2648.name = i2649[0]
  i2648.wrapMode = i2649[1]
  i2648.isLooping = !!i2649[2]
  i2648.length = i2649[3]
  var i2651 = i2649[4]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2651[i + 0]) );
  }
  i2648.curves = i2650
  var i2653 = i2649[5]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2653[i + 0]) );
  }
  i2648.events = i2652
  i2648.halfPrecision = !!i2649[6]
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2657 = data
  i2656.path = i2657[0]
  i2656.componentType = i2657[1]
  i2656.property = i2657[2]
  i2656.keys = i2657[3]
  var i2659 = i2657[4]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2659[i + 0]) );
  }
  i2656.objectReferenceKeys = i2658
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2663 = data
  i2662.time = i2663[0]
  request.r(i2663[1], i2663[2], 0, i2662, 'value')
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2667 = data
  i2666.functionName = i2667[0]
  i2666.floatParameter = i2667[1]
  i2666.intParameter = i2667[2]
  i2666.stringParameter = i2667[3]
  request.r(i2667[4], i2667[5], 0, i2666, 'objectReferenceParameter')
  i2666.time = i2667[6]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2669 = data
  i2668.name = i2669[0]
  i2668.ascent = i2669[1]
  i2668.originalLineHeight = i2669[2]
  i2668.fontSize = i2669[3]
  var i2671 = i2669[4]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2671[i + 0]) );
  }
  i2668.characterInfo = i2670
  request.r(i2669[5], i2669[6], 0, i2668, 'texture')
  i2668.originalFontSize = i2669[7]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2675 = data
  i2674.index = i2675[0]
  i2674.advance = i2675[1]
  i2674.bearing = i2675[2]
  i2674.glyphWidth = i2675[3]
  i2674.glyphHeight = i2675[4]
  i2674.minX = i2675[5]
  i2674.maxX = i2675[6]
  i2674.minY = i2675[7]
  i2674.maxY = i2675[8]
  i2674.uvBottomLeftX = i2675[9]
  i2674.uvBottomLeftY = i2675[10]
  i2674.uvBottomRightX = i2675[11]
  i2674.uvBottomRightY = i2675[12]
  i2674.uvTopLeftX = i2675[13]
  i2674.uvTopLeftY = i2675[14]
  i2674.uvTopRightX = i2675[15]
  i2674.uvTopRightY = i2675[16]
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2677 = data
  i2676.name = i2677[0]
  var i2679 = i2677[1]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2679[i + 0]) );
  }
  i2676.states = i2678
  var i2681 = i2677[2]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2681[i + 0]) );
  }
  i2676.layers = i2680
  var i2683 = i2677[3]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2683[i + 0]) );
  }
  i2676.parameters = i2682
  var i2685 = i2677[4]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( i2685[i + 0] );
  }
  i2676.animationClips = i2684
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2689 = data
  i2688.cycleOffset = i2689[0]
  i2688.cycleOffsetParameter = i2689[1]
  i2688.cycleOffsetParameterActive = !!i2689[2]
  i2688.mirror = !!i2689[3]
  i2688.mirrorParameter = i2689[4]
  i2688.mirrorParameterActive = !!i2689[5]
  i2688.motionId = i2689[6]
  i2688.nameHash = i2689[7]
  i2688.fullPathHash = i2689[8]
  i2688.speed = i2689[9]
  i2688.speedParameter = i2689[10]
  i2688.speedParameterActive = !!i2689[11]
  i2688.tag = i2689[12]
  i2688.name = i2689[13]
  i2688.writeDefaultValues = !!i2689[14]
  var i2691 = i2689[15]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2691[i + 0]) );
  }
  i2688.transitions = i2690
  var i2693 = i2689[16]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 2, i2692, '')
  }
  i2688.behaviours = i2692
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2697 = data
  i2696.fullPath = i2697[0]
  i2696.canTransitionToSelf = !!i2697[1]
  i2696.duration = i2697[2]
  i2696.exitTime = i2697[3]
  i2696.hasExitTime = !!i2697[4]
  i2696.hasFixedDuration = !!i2697[5]
  i2696.interruptionSource = i2697[6]
  i2696.offset = i2697[7]
  i2696.orderedInterruption = !!i2697[8]
  i2696.destinationStateNameHash = i2697[9]
  i2696.destinationStateMachineId = i2697[10]
  i2696.isExit = !!i2697[11]
  i2696.mute = !!i2697[12]
  i2696.solo = !!i2697[13]
  var i2699 = i2697[14]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2699[i + 0]) );
  }
  i2696.conditions = i2698
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2705 = data
  i2704.blendingMode = i2705[0]
  i2704.defaultWeight = i2705[1]
  i2704.name = i2705[2]
  i2704.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2705[3], i2704.stateMachine)
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2707 = data
  i2706.id = i2707[0]
  i2706.defaultStateNameHash = i2707[1]
  var i2709 = i2707[2]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2709[i + 0]) );
  }
  i2706.entryTransitions = i2708
  var i2711 = i2707[3]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2711[i + 0]) );
  }
  i2706.anyStateTransitions = i2710
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2715 = data
  i2714.destinationStateNameHash = i2715[0]
  i2714.destinationStateMachineId = i2715[1]
  i2714.isExit = !!i2715[2]
  i2714.mute = !!i2715[3]
  i2714.solo = !!i2715[4]
  var i2717 = i2715[5]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2717[i + 0]) );
  }
  i2714.conditions = i2716
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2721 = data
  i2720.defaultBool = !!i2721[0]
  i2720.defaultFloat = i2721[1]
  i2720.defaultInt = i2721[2]
  i2720.name = i2721[3]
  i2720.nameHash = i2721[4]
  i2720.type = i2721[5]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2723 = data
  i2722.name = i2723[0]
  i2722.bytes64 = i2723[1]
  i2722.data = i2723[2]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2725 = data
  var i2727 = i2725[0]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2727[i + 0]) );
  }
  i2724.files = i2726
  i2724.componentToPrefabIds = i2725[1]
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2731 = data
  i2730.path = i2731[0]
  request.r(i2731[1], i2731[2], 0, i2730, 'unityObject')
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2733 = data
  var i2735 = i2733[0]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2735[i + 0]) );
  }
  i2732.scriptsExecutionOrder = i2734
  var i2737 = i2733[1]
  var i2736 = []
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2737[i + 0]) );
  }
  i2732.sortingLayers = i2736
  var i2739 = i2733[2]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2739[i + 0]) );
  }
  i2732.cullingLayers = i2738
  i2732.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2733[3], i2732.timeSettings)
  i2732.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2733[4], i2732.physicsSettings)
  i2732.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2733[5], i2732.physics2DSettings)
  i2732.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2733[6], i2732.qualitySettings)
  i2732.removeShadows = !!i2733[7]
  i2732.autoInstantiatePrefabs = !!i2733[8]
  i2732.enableAutoInstancing = !!i2733[9]
  i2732.lightmapEncodingQuality = i2733[10]
  i2732.desiredColorSpace = i2733[11]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2743 = data
  i2742.name = i2743[0]
  i2742.value = i2743[1]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2747 = data
  i2746.id = i2747[0]
  i2746.name = i2747[1]
  i2746.value = i2747[2]
  return i2746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2751 = data
  i2750.id = i2751[0]
  i2750.name = i2751[1]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2753 = data
  i2752.fixedDeltaTime = i2753[0]
  i2752.maximumDeltaTime = i2753[1]
  i2752.timeScale = i2753[2]
  i2752.maximumParticleTimestep = i2753[3]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2755 = data
  i2754.gravity = new pc.Vec3( i2755[0], i2755[1], i2755[2] )
  i2754.defaultSolverIterations = i2755[3]
  i2754.bounceThreshold = i2755[4]
  i2754.autoSyncTransforms = !!i2755[5]
  i2754.autoSimulation = !!i2755[6]
  var i2757 = i2755[7]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2757[i + 0]) );
  }
  i2754.collisionMatrix = i2756
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2761 = data
  i2760.enabled = !!i2761[0]
  i2760.layerId = i2761[1]
  i2760.otherLayerId = i2761[2]
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2763 = data
  request.r(i2763[0], i2763[1], 0, i2762, 'material')
  i2762.gravity = new pc.Vec2( i2763[2], i2763[3] )
  i2762.positionIterations = i2763[4]
  i2762.velocityIterations = i2763[5]
  i2762.velocityThreshold = i2763[6]
  i2762.maxLinearCorrection = i2763[7]
  i2762.maxAngularCorrection = i2763[8]
  i2762.maxTranslationSpeed = i2763[9]
  i2762.maxRotationSpeed = i2763[10]
  i2762.timeToSleep = i2763[11]
  i2762.linearSleepTolerance = i2763[12]
  i2762.angularSleepTolerance = i2763[13]
  i2762.defaultContactOffset = i2763[14]
  i2762.autoSimulation = !!i2763[15]
  i2762.queriesHitTriggers = !!i2763[16]
  i2762.queriesStartInColliders = !!i2763[17]
  i2762.callbacksOnDisable = !!i2763[18]
  i2762.reuseCollisionCallbacks = !!i2763[19]
  i2762.autoSyncTransforms = !!i2763[20]
  var i2765 = i2763[21]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2765[i + 0]) );
  }
  i2762.collisionMatrix = i2764
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2769 = data
  i2768.enabled = !!i2769[0]
  i2768.layerId = i2769[1]
  i2768.otherLayerId = i2769[2]
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2771 = data
  var i2773 = i2771[0]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2773[i + 0]) );
  }
  i2770.qualityLevels = i2772
  var i2775 = i2771[1]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( i2775[i + 0] );
  }
  i2770.names = i2774
  i2770.shadows = i2771[2]
  i2770.anisotropicFiltering = i2771[3]
  i2770.antiAliasing = i2771[4]
  i2770.lodBias = i2771[5]
  i2770.shadowCascades = i2771[6]
  i2770.shadowDistance = i2771[7]
  i2770.shadowmaskMode = i2771[8]
  i2770.shadowProjection = i2771[9]
  i2770.shadowResolution = i2771[10]
  i2770.softParticles = !!i2771[11]
  i2770.softVegetation = !!i2771[12]
  i2770.activeColorSpace = i2771[13]
  i2770.desiredColorSpace = i2771[14]
  i2770.masterTextureLimit = i2771[15]
  i2770.maxQueuedFrames = i2771[16]
  i2770.particleRaycastBudget = i2771[17]
  i2770.pixelLightCount = i2771[18]
  i2770.realtimeReflectionProbes = !!i2771[19]
  i2770.shadowCascade2Split = i2771[20]
  i2770.shadowCascade4Split = new pc.Vec3( i2771[21], i2771[22], i2771[23] )
  i2770.streamingMipmapsActive = !!i2771[24]
  i2770.vSyncCount = i2771[25]
  i2770.asyncUploadBufferSize = i2771[26]
  i2770.asyncUploadTimeSlice = i2771[27]
  i2770.billboardsFaceCameraPosition = !!i2771[28]
  i2770.shadowNearPlaneOffset = i2771[29]
  i2770.streamingMipmapsMemoryBudget = i2771[30]
  i2770.maximumLODLevel = i2771[31]
  i2770.streamingMipmapsAddAllCameras = !!i2771[32]
  i2770.streamingMipmapsMaxLevelReduction = i2771[33]
  i2770.streamingMipmapsRenderersPerFrame = i2771[34]
  i2770.resolutionScalingFixedDPIFactor = i2771[35]
  i2770.streamingMipmapsMaxFileIORequests = i2771[36]
  i2770.currentQualityLevel = i2771[37]
  return i2770
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2778 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2779 = data
  i2778.xPlacement = i2779[0]
  i2778.yPlacement = i2779[1]
  i2778.xAdvance = i2779[2]
  i2778.yAdvance = i2779[3]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2783 = data
  i2782.mode = i2783[0]
  i2782.parameter = i2783[1]
  i2782.threshold = i2783[2]
  return i2782
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[6],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[13],"58":[13],"59":[13],"60":[13],"61":[13],"62":[13],"63":[13],"64":[13],"65":[13],"66":[13],"67":[13],"68":[13],"69":[13],"70":[6],"71":[72],"73":[74],"75":[74],"23":[22],"76":[10],"77":[22],"78":[27,22],"26":[23],"28":[27,22],"79":[22],"25":[23],"80":[22],"81":[22],"82":[22],"83":[22],"84":[22],"85":[22],"86":[22],"87":[22],"88":[27,22],"89":[27,22],"90":[22],"91":[22],"92":[22],"93":[22],"30":[27,22],"94":[22],"95":[31],"96":[31],"32":[31],"97":[31],"98":[6],"99":[6],"100":[101],"102":[6],"103":[22],"104":[27,22],"105":[72],"106":[27,22],"107":[27,22],"108":[72,27,22],"18":[22,27],"109":[22]}

Deserializers.types = ["UnityEngine.Shader","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraMovement","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.CapsuleCollider2D","BirdMovement","UnityEngine.GameObject","BirdDeath","TMPro.TextMeshProUGUI","GameOver","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BirdTutorial","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.40f1";

Deserializers.productName = "FlappyBird";

Deserializers.lunaInitializationTime = "08/28/2022 16:26:06";

Deserializers.lunaDaysRunning = "1.1";

Deserializers.lunaVersion = "3.12.0";

Deserializers.lunaSHA = "b6890f1f3fae46d6aab4282328914da691d139da";

Deserializers.creativeName = "FlappyBird2";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "85a9c8dd-52d1-49e8-8128-0e14ee15671b";

Deserializers.packagesInfo = "com.unity.textmeshpro: 2.1.6\ncom.unity.timeline: 1.2.18\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.FlappyBird";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "6ec77c03-bda7-4391-ab85-fc6316a238ff";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

