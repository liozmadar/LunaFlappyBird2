var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointSpring' )
  var i465 = data
  i464.spring = i465[0]
  i464.damper = i465[1]
  i464.targetPosition = i465[2]
  return i464
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointMotor' )
  var i467 = data
  i466.m_TargetVelocity = i467[0]
  i466.m_Force = i467[1]
  i466.m_FreeSpin = i467[2]
  return i466
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointLimits' )
  var i469 = data
  i468.m_Min = i469[0]
  i468.m_Max = i469[1]
  i468.m_Bounciness = i469[2]
  i468.m_BounceMinVelocity = i469[3]
  i468.m_ContactDistance = i469[4]
  i468.minBounce = i469[5]
  i468.maxBounce = i469[6]
  return i468
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointDrive' )
  var i471 = data
  i470.m_PositionSpring = i471[0]
  i470.m_PositionDamper = i471[1]
  i470.m_MaximumForce = i471[2]
  return i470
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i473 = data
  i472.m_Spring = i473[0]
  i472.m_Damper = i473[1]
  return i472
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i475 = data
  i474.m_Limit = i475[0]
  i474.m_Bounciness = i475[1]
  i474.m_ContactDistance = i475[2]
  return i474
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i477 = data
  i476.m_ExtremumSlip = i477[0]
  i476.m_ExtremumValue = i477[1]
  i476.m_AsymptoteSlip = i477[2]
  i476.m_AsymptoteValue = i477[3]
  i476.m_Stiffness = i477[4]
  return i476
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i479 = data
  i478.m_LowerAngle = i479[0]
  i478.m_UpperAngle = i479[1]
  return i478
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i481 = data
  i480.m_MotorSpeed = i481[0]
  i480.m_MaximumMotorTorque = i481[1]
  return i480
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i483 = data
  i482.m_DampingRatio = i483[0]
  i482.m_Frequency = i483[1]
  i482.m_Angle = i483[2]
  return i482
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i485 = data
  i484.m_LowerTranslation = i485[0]
  i484.m_UpperTranslation = i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i486 = root || new pc.UnityMaterial()
  var i487 = data
  i486.name = i487[0]
  request.r(i487[1], i487[2], 0, i486, 'shader')
  i486.renderQueue = i487[3]
  i486.enableInstancing = !!i487[4]
  var i489 = i487[5]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i489[i + 0]) );
  }
  i486.floatParameters = i488
  var i491 = i487[6]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i491[i + 0]) );
  }
  i486.colorParameters = i490
  var i493 = i487[7]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i493[i + 0]) );
  }
  i486.vectorParameters = i492
  var i495 = i487[8]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i495[i + 0]) );
  }
  i486.textureParameters = i494
  var i497 = i487[9]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i497[i + 0]) );
  }
  i486.materialFlags = i496
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = new pc.Color(i505[1], i505[2], i505[3], i505[4])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = new pc.Vec4( i509[1], i509[2], i509[3], i509[4] )
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i513 = data
  i512.name = i513[0]
  request.r(i513[1], i513[2], 0, i512, 'value')
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i517 = data
  i516.name = i517[0]
  i516.enabled = !!i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i519 = data
  i518.name = i519[0]
  i518.width = i519[1]
  i518.height = i519[2]
  i518.mipmapCount = i519[3]
  i518.anisoLevel = i519[4]
  i518.filterMode = i519[5]
  i518.hdr = !!i519[6]
  i518.format = i519[7]
  i518.wrapMode = i519[8]
  i518.alphaIsTransparency = !!i519[9]
  i518.alphaSource = i519[10]
  return i518
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i520 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i521 = data
  i520.hashCode = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'material')
  i520.materialHashCode = i521[3]
  request.r(i521[4], i521[5], 0, i520, 'atlas')
  i520.normalStyle = i521[6]
  i520.normalSpacingOffset = i521[7]
  i520.boldStyle = i521[8]
  i520.boldSpacing = i521[9]
  i520.italicStyle = i521[10]
  i520.tabSize = i521[11]
  i520.m_Version = i521[12]
  i520.m_SourceFontFileGUID = i521[13]
  request.r(i521[14], i521[15], 0, i520, 'm_SourceFontFile_EditorRef')
  request.r(i521[16], i521[17], 0, i520, 'm_SourceFontFile')
  i520.m_AtlasPopulationMode = i521[18]
  i520.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i521[19], i520.m_FaceInfo)
  var i523 = i521[20]
  var i522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i523.length; i += 1) {
    i522.add(request.d('UnityEngine.TextCore.Glyph', i523[i + 0]));
  }
  i520.m_GlyphTable = i522
  var i525 = i521[21]
  var i524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i525.length; i += 1) {
    i524.add(request.d('TMPro.TMP_Character', i525[i + 0]));
  }
  i520.m_CharacterTable = i524
  var i527 = i521[22]
  var i526 = []
  for(var i = 0; i < i527.length; i += 2) {
  request.r(i527[i + 0], i527[i + 1], 2, i526, '')
  }
  i520.m_AtlasTextures = i526
  i520.m_AtlasTextureIndex = i521[23]
  i520.m_IsMultiAtlasTexturesEnabled = !!i521[24]
  i520.m_ClearDynamicDataOnBuild = !!i521[25]
  var i529 = i521[26]
  var i528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i529.length; i += 1) {
    i528.add(request.d('UnityEngine.TextCore.GlyphRect', i529[i + 0]));
  }
  i520.m_UsedGlyphRects = i528
  var i531 = i521[27]
  var i530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i531.length; i += 1) {
    i530.add(request.d('UnityEngine.TextCore.GlyphRect', i531[i + 0]));
  }
  i520.m_FreeGlyphRects = i530
  i520.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i521[28], i520.m_fontInfo)
  i520.m_AtlasWidth = i521[29]
  i520.m_AtlasHeight = i521[30]
  i520.m_AtlasPadding = i521[31]
  i520.m_AtlasRenderMode = i521[32]
  var i533 = i521[33]
  var i532 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i533.length; i += 1) {
    i532.add(request.d('TMPro.TMP_Glyph', i533[i + 0]));
  }
  i520.m_glyphInfoList = i532
  i520.m_KerningTable = request.d('TMPro.KerningTable', i521[34], i520.m_KerningTable)
  i520.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i521[35], i520.m_FontFeatureTable)
  var i535 = i521[36]
  var i534 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i535.length; i += 2) {
  request.r(i535[i + 0], i535[i + 1], 1, i534, '')
  }
  i520.fallbackFontAssets = i534
  var i537 = i521[37]
  var i536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i537.length; i += 2) {
  request.r(i537[i + 0], i537[i + 1], 1, i536, '')
  }
  i520.m_FallbackFontAssetTable = i536
  i520.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i521[38], i520.m_CreationSettings)
  var i539 = i521[39]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('TMPro.TMP_FontWeightPair', i539[i + 0]) );
  }
  i520.m_FontWeightTable = i538
  var i541 = i521[40]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('TMPro.TMP_FontWeightPair', i541[i + 0]) );
  }
  i520.fontWeights = i540
  return i520
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i543 = data
  i542.m_FaceIndex = i543[0]
  i542.m_FamilyName = i543[1]
  i542.m_StyleName = i543[2]
  i542.m_PointSize = i543[3]
  i542.m_Scale = i543[4]
  i542.m_LineHeight = i543[5]
  i542.m_AscentLine = i543[6]
  i542.m_CapLine = i543[7]
  i542.m_MeanLine = i543[8]
  i542.m_Baseline = i543[9]
  i542.m_DescentLine = i543[10]
  i542.m_SuperscriptOffset = i543[11]
  i542.m_SuperscriptSize = i543[12]
  i542.m_SubscriptOffset = i543[13]
  i542.m_SubscriptSize = i543[14]
  i542.m_UnderlineOffset = i543[15]
  i542.m_UnderlineThickness = i543[16]
  i542.m_StrikethroughOffset = i543[17]
  i542.m_StrikethroughThickness = i543[18]
  i542.m_TabWidth = i543[19]
  return i542
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i547 = data
  i546.m_Index = i547[0]
  i546.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i547[1], i546.m_Metrics)
  i546.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i547[2], i546.m_GlyphRect)
  i546.m_Scale = i547[3]
  i546.m_AtlasIndex = i547[4]
  return i546
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i549 = data
  i548.m_Width = i549[0]
  i548.m_Height = i549[1]
  i548.m_HorizontalBearingX = i549[2]
  i548.m_HorizontalBearingY = i549[3]
  i548.m_HorizontalAdvance = i549[4]
  return i548
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i551 = data
  i550.m_X = i551[0]
  i550.m_Y = i551[1]
  i550.m_Width = i551[2]
  i550.m_Height = i551[3]
  return i550
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i554 = root || request.c( 'TMPro.TMP_Character' )
  var i555 = data
  i554.m_ElementType = i555[0]
  i554.m_Unicode = i555[1]
  i554.m_GlyphIndex = i555[2]
  i554.m_Scale = i555[3]
  return i554
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i560 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i561 = data
  i560.Name = i561[0]
  i560.PointSize = i561[1]
  i560.Scale = i561[2]
  i560.CharacterCount = i561[3]
  i560.LineHeight = i561[4]
  i560.Baseline = i561[5]
  i560.Ascender = i561[6]
  i560.CapHeight = i561[7]
  i560.Descender = i561[8]
  i560.CenterLine = i561[9]
  i560.SuperscriptOffset = i561[10]
  i560.SubscriptOffset = i561[11]
  i560.SubSize = i561[12]
  i560.Underline = i561[13]
  i560.UnderlineThickness = i561[14]
  i560.strikethrough = i561[15]
  i560.strikethroughThickness = i561[16]
  i560.TabWidth = i561[17]
  i560.Padding = i561[18]
  i560.AtlasWidth = i561[19]
  i560.AtlasHeight = i561[20]
  return i560
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i564 = root || request.c( 'TMPro.TMP_Glyph' )
  var i565 = data
  i564.id = i565[0]
  i564.x = i565[1]
  i564.y = i565[2]
  i564.width = i565[3]
  i564.height = i565[4]
  i564.xOffset = i565[5]
  i564.yOffset = i565[6]
  i564.xAdvance = i565[7]
  i564.scale = i565[8]
  return i564
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i566 = root || request.c( 'TMPro.KerningTable' )
  var i567 = data
  var i569 = i567[0]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i569.length; i += 1) {
    i568.add(request.d('TMPro.KerningPair', i569[i + 0]));
  }
  i566.kerningPairs = i568
  return i566
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i572 = root || request.c( 'TMPro.KerningPair' )
  var i573 = data
  i572.xOffset = i573[0]
  i572.m_FirstGlyph = i573[1]
  i572.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i573[2], i572.m_FirstGlyphAdjustments)
  i572.m_SecondGlyph = i573[3]
  i572.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i573[4], i572.m_SecondGlyphAdjustments)
  i572.m_IgnoreSpacingAdjustments = !!i573[5]
  return i572
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i574 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i575 = data
  var i577 = i575[0]
  var i576 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i577.length; i += 1) {
    i576.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i577[i + 0]));
  }
  i574.m_GlyphPairAdjustmentRecords = i576
  return i574
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i580 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i581 = data
  i580.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i581[0], i580.m_FirstAdjustmentRecord)
  i580.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i581[1], i580.m_SecondAdjustmentRecord)
  i580.m_FeatureLookupFlags = i581[2]
  return i580
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i582 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i583 = data
  i582.m_GlyphIndex = i583[0]
  i582.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i583[1], i582.m_GlyphValueRecord)
  return i582
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i584 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i585 = data
  i584.m_XPlacement = i585[0]
  i584.m_YPlacement = i585[1]
  i584.m_XAdvance = i585[2]
  i584.m_YAdvance = i585[3]
  return i584
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i588 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i589 = data
  i588.sourceFontFileName = i589[0]
  i588.sourceFontFileGUID = i589[1]
  i588.pointSizeSamplingMode = i589[2]
  i588.pointSize = i589[3]
  i588.padding = i589[4]
  i588.packingMode = i589[5]
  i588.atlasWidth = i589[6]
  i588.atlasHeight = i589[7]
  i588.characterSetSelectionMode = i589[8]
  i588.characterSequence = i589[9]
  i588.referencedFontAssetGUID = i589[10]
  i588.referencedTextAssetGUID = i589[11]
  i588.fontStyle = i589[12]
  i588.fontStyleModifier = i589[13]
  i588.renderMode = i589[14]
  i588.includeFontFeatures = !!i589[15]
  return i588
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i592 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'regularTypeface')
  request.r(i593[2], i593[3], 0, i592, 'italicTypeface')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i595 = data
  i594.name = i595[0]
  i594.atlasId = i595[1]
  i594.mipmapCount = i595[2]
  i594.hdr = !!i595[3]
  i594.size = i595[4]
  i594.anisoLevel = i595[5]
  i594.filterMode = i595[6]
  i594.wrapMode = i595[7]
  var i597 = i595[8]
  var i596 = []
  for(var i = 0; i < i597.length; i += 4) {
    i596.push( UnityEngine.Rect.MinMaxRect(i597[i + 0], i597[i + 1], i597[i + 2], i597[i + 3]) );
  }
  i594.rects = i596
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i601 = data
  i600.name = i601[0]
  i600.index = i601[1]
  i600.startup = !!i601[2]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i603 = data
  i602.position = new pc.Vec3( i603[0], i603[1], i603[2] )
  i602.scale = new pc.Vec3( i603[3], i603[4], i603[5] )
  i602.rotation = new pc.Quat(i603[6], i603[7], i603[8], i603[9])
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.aspect = i605[1]
  i604.orthographic = !!i605[2]
  i604.orthographicSize = i605[3]
  i604.backgroundColor = new pc.Color(i605[4], i605[5], i605[6], i605[7])
  i604.nearClipPlane = i605[8]
  i604.farClipPlane = i605[9]
  i604.fieldOfView = i605[10]
  i604.depth = i605[11]
  i604.clearFlags = i605[12]
  i604.cullingMask = i605[13]
  i604.rect = i605[14]
  request.r(i605[15], i605[16], 0, i604, 'targetTexture')
  return i604
}

Deserializers["CameraMovement"] = function (request, data, root) {
  var i606 = root || request.c( 'CameraMovement' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'player')
  i606.smoothing = i607[2]
  i606.offset = new pc.Vec3( i607[3], i607[4], i607[5] )
  i606.minPos = new pc.Vec2( i607[6], i607[7] )
  i606.maxPos = new pc.Vec2( i607[8], i607[9] )
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i609 = data
  i608.name = i609[0]
  i608.tag = i609[1]
  i608.enabled = !!i609[2]
  i608.isStatic = !!i609[3]
  i608.layer = i609[4]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i611 = data
  i610.enabled = !!i611[0]
  request.r(i611[1], i611[2], 0, i610, 'sharedMaterial')
  var i613 = i611[3]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i610.sharedMaterials = i612
  i610.receiveShadows = !!i611[4]
  i610.shadowCastingMode = i611[5]
  i610.sortingLayerID = i611[6]
  i610.sortingOrder = i611[7]
  i610.lightmapIndex = i611[8]
  i610.lightmapSceneIndex = i611[9]
  i610.lightmapScaleOffset = new pc.Vec4( i611[10], i611[11], i611[12], i611[13] )
  i610.lightProbeUsage = i611[14]
  i610.reflectionProbeUsage = i611[15]
  i610.color = new pc.Color(i611[16], i611[17], i611[18], i611[19])
  request.r(i611[20], i611[21], 0, i610, 'sprite')
  i610.flipX = !!i611[22]
  i610.flipY = !!i611[23]
  i610.drawMode = i611[24]
  i610.size = new pc.Vec2( i611[25], i611[26] )
  i610.tileMode = i611[27]
  i610.adaptiveModeThreshold = i611[28]
  i610.maskInteraction = i611[29]
  i610.spriteSortPoint = i611[30]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i617 = data
  i616.usedByComposite = !!i617[0]
  i616.autoTiling = !!i617[1]
  i616.size = new pc.Vec2( i617[2], i617[3] )
  i616.edgeRadius = i617[4]
  i616.enabled = !!i617[5]
  i616.isTrigger = !!i617[6]
  i616.usedByEffector = !!i617[7]
  i616.density = i617[8]
  i616.offset = new pc.Vec2( i617[9], i617[10] )
  request.r(i617[11], i617[12], 0, i616, 'material')
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i619 = data
  i618.bodyType = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'material')
  i618.simulated = !!i619[3]
  i618.useAutoMass = !!i619[4]
  i618.mass = i619[5]
  i618.drag = i619[6]
  i618.angularDrag = i619[7]
  i618.gravityScale = i619[8]
  i618.collisionDetectionMode = i619[9]
  i618.sleepMode = i619[10]
  i618.constraints = i619[11]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i621 = data
  i620.size = new pc.Vec2( i621[0], i621[1] )
  i620.direction = i621[2]
  i620.enabled = !!i621[3]
  i620.isTrigger = !!i621[4]
  i620.usedByEffector = !!i621[5]
  i620.density = i621[6]
  i620.offset = new pc.Vec2( i621[7], i621[8] )
  request.r(i621[9], i621[10], 0, i620, 'material')
  return i620
}

Deserializers["BirdMovement"] = function (request, data, root) {
  var i622 = root || request.c( 'BirdMovement' )
  var i623 = data
  i622.jumpForce = i623[0]
  i622.speed = i623[1]
  i622.birdDeath = !!i623[2]
  request.r(i623[3], i623[4], 0, i622, 'tutorialBird')
  return i622
}

Deserializers["BirdDeath"] = function (request, data, root) {
  var i624 = root || request.c( 'BirdDeath' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'birdDeathSprite')
  request.r(i625[2], i625[3], 0, i624, 'scoreTextNumber')
  request.r(i625[4], i625[5], 0, i624, 'gameOverText')
  request.r(i625[6], i625[7], 0, i624, 'RetryText')
  i624.gameOverBool = !!i625[8]
  request.r(i625[9], i625[10], 0, i624, 'birdMovement')
  request.r(i625[11], i625[12], 0, i624, 'SP')
  request.r(i625[13], i625[14], 0, i624, 'emote1')
  request.r(i625[15], i625[16], 0, i624, 'emote2')
  request.r(i625[17], i625[18], 0, i624, 'emote3')
  return i624
}

Deserializers["GameOver"] = function (request, data, root) {
  var i626 = root || request.c( 'GameOver' )
  var i627 = data
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'animatorController')
  i628.updateMode = i629[2]
  var i631 = i629[3]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.humanBones = i630
  i628.enabled = !!i629[4]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i635 = data
  i634.pivot = new pc.Vec2( i635[0], i635[1] )
  i634.anchorMin = new pc.Vec2( i635[2], i635[3] )
  i634.anchorMax = new pc.Vec2( i635[4], i635[5] )
  i634.sizeDelta = new pc.Vec2( i635[6], i635[7] )
  i634.anchoredPosition3D = new pc.Vec3( i635[8], i635[9], i635[10] )
  i634.rotation = new pc.Quat(i635[11], i635[12], i635[13], i635[14])
  i634.scale = new pc.Vec3( i635[15], i635[16], i635[17] )
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i637 = data
  i636.enabled = !!i637[0]
  i636.planeDistance = i637[1]
  i636.referencePixelsPerUnit = i637[2]
  i636.isFallbackOverlay = !!i637[3]
  i636.renderMode = i637[4]
  i636.renderOrder = i637[5]
  i636.sortingLayerName = i637[6]
  i636.sortingOrder = i637[7]
  i636.scaleFactor = i637[8]
  request.r(i637[9], i637[10], 0, i636, 'worldCamera')
  i636.overrideSorting = !!i637[11]
  i636.pixelPerfect = !!i637[12]
  i636.targetDisplay = i637[13]
  i636.overridePixelPerfect = !!i637[14]
  return i636
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i639 = data
  i638.m_UiScaleMode = i639[0]
  i638.m_ReferencePixelsPerUnit = i639[1]
  i638.m_ScaleFactor = i639[2]
  i638.m_ReferenceResolution = new pc.Vec2( i639[3], i639[4] )
  i638.m_ScreenMatchMode = i639[5]
  i638.m_MatchWidthOrHeight = i639[6]
  i638.m_PhysicalUnit = i639[7]
  i638.m_FallbackScreenDPI = i639[8]
  i638.m_DefaultSpriteDPI = i639[9]
  i638.m_DynamicPixelsPerUnit = i639[10]
  return i638
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i641 = data
  i640.m_IgnoreReversedGraphics = !!i641[0]
  i640.m_BlockingObjects = i641[1]
  i640.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i641[2] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i643 = data
  i642.cullTransparentMesh = !!i643[0]
  return i642
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.Image' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_Sprite')
  i644.m_Type = i645[2]
  i644.m_PreserveAspect = !!i645[3]
  i644.m_FillCenter = !!i645[4]
  i644.m_FillMethod = i645[5]
  i644.m_FillAmount = i645[6]
  i644.m_FillClockwise = !!i645[7]
  i644.m_FillOrigin = i645[8]
  i644.m_UseSpriteMesh = !!i645[9]
  i644.m_PixelsPerUnitMultiplier = i645[10]
  request.r(i645[11], i645[12], 0, i644, 'm_Material')
  i644.m_Maskable = !!i645[13]
  i644.m_Color = new pc.Color(i645[14], i645[15], i645[16], i645[17])
  i644.m_RaycastTarget = !!i645[18]
  return i644
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Button' )
  var i647 = data
  i646.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i647[0], i646.m_OnClick)
  i646.m_Navigation = request.d('UnityEngine.UI.Navigation', i647[1], i646.m_Navigation)
  i646.m_Transition = i647[2]
  i646.m_Colors = request.d('UnityEngine.UI.ColorBlock', i647[3], i646.m_Colors)
  i646.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i647[4], i646.m_SpriteState)
  i646.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i647[5], i646.m_AnimationTriggers)
  i646.m_Interactable = !!i647[6]
  request.r(i647[7], i647[8], 0, i646, 'm_TargetGraphic')
  return i646
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i649 = data
  i648.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i649[0], i648.m_PersistentCalls)
  return i648
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i651 = data
  var i653 = i651[0]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i653.length; i += 1) {
    i652.add(request.d('UnityEngine.Events.PersistentCall', i653[i + 0]));
  }
  i650.m_Calls = i652
  return i650
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_Target')
  i656.m_MethodName = i657[2]
  i656.m_Mode = i657[3]
  i656.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i657[4], i656.m_Arguments)
  i656.m_CallState = i657[5]
  return i656
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_ObjectArgument')
  i658.m_ObjectArgumentAssemblyTypeName = i659[2]
  i658.m_IntArgument = i659[3]
  i658.m_FloatArgument = i659[4]
  i658.m_StringArgument = i659[5]
  i658.m_BoolArgument = !!i659[6]
  return i658
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i661 = data
  i660.m_Mode = i661[0]
  request.r(i661[1], i661[2], 0, i660, 'm_SelectOnUp')
  request.r(i661[3], i661[4], 0, i660, 'm_SelectOnDown')
  request.r(i661[5], i661[6], 0, i660, 'm_SelectOnLeft')
  request.r(i661[7], i661[8], 0, i660, 'm_SelectOnRight')
  return i660
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i663 = data
  i662.m_NormalColor = new pc.Color(i663[0], i663[1], i663[2], i663[3])
  i662.m_HighlightedColor = new pc.Color(i663[4], i663[5], i663[6], i663[7])
  i662.m_PressedColor = new pc.Color(i663[8], i663[9], i663[10], i663[11])
  i662.m_SelectedColor = new pc.Color(i663[12], i663[13], i663[14], i663[15])
  i662.m_DisabledColor = new pc.Color(i663[16], i663[17], i663[18], i663[19])
  i662.m_ColorMultiplier = i663[20]
  i662.m_FadeDuration = i663[21]
  return i662
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'm_HighlightedSprite')
  request.r(i665[2], i665[3], 0, i664, 'm_PressedSprite')
  request.r(i665[4], i665[5], 0, i664, 'm_SelectedSprite')
  request.r(i665[6], i665[7], 0, i664, 'm_DisabledSprite')
  return i664
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i667 = data
  i666.m_NormalTrigger = i667[0]
  i666.m_HighlightedTrigger = i667[1]
  i666.m_PressedTrigger = i667[2]
  i666.m_SelectedTrigger = i667[3]
  i666.m_DisabledTrigger = i667[4]
  return i666
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i668 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i669 = data
  i668.m_hasFontAssetChanged = !!i669[0]
  request.r(i669[1], i669[2], 0, i668, 'm_baseMaterial')
  i668.m_maskOffset = new pc.Vec4( i669[3], i669[4], i669[5], i669[6] )
  i668.m_text = i669[7]
  i668.m_isRightToLeft = !!i669[8]
  request.r(i669[9], i669[10], 0, i668, 'm_fontAsset')
  request.r(i669[11], i669[12], 0, i668, 'm_sharedMaterial')
  var i671 = i669[13]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.m_fontSharedMaterials = i670
  request.r(i669[14], i669[15], 0, i668, 'm_fontMaterial')
  var i673 = i669[16]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i668.m_fontMaterials = i672
  i668.m_fontColor32 = UnityEngine.Color32.ConstructColor(i669[17], i669[18], i669[19], i669[20])
  i668.m_fontColor = new pc.Color(i669[21], i669[22], i669[23], i669[24])
  i668.m_enableVertexGradient = !!i669[25]
  i668.m_colorMode = i669[26]
  i668.m_fontColorGradient = request.d('TMPro.VertexGradient', i669[27], i668.m_fontColorGradient)
  request.r(i669[28], i669[29], 0, i668, 'm_fontColorGradientPreset')
  request.r(i669[30], i669[31], 0, i668, 'm_spriteAsset')
  i668.m_tintAllSprites = !!i669[32]
  request.r(i669[33], i669[34], 0, i668, 'm_StyleSheet')
  i668.m_TextStyleHashCode = i669[35]
  i668.m_overrideHtmlColors = !!i669[36]
  i668.m_faceColor = UnityEngine.Color32.ConstructColor(i669[37], i669[38], i669[39], i669[40])
  i668.m_fontSize = i669[41]
  i668.m_fontSizeBase = i669[42]
  i668.m_fontWeight = i669[43]
  i668.m_enableAutoSizing = !!i669[44]
  i668.m_fontSizeMin = i669[45]
  i668.m_fontSizeMax = i669[46]
  i668.m_fontStyle = i669[47]
  i668.m_HorizontalAlignment = i669[48]
  i668.m_VerticalAlignment = i669[49]
  i668.m_textAlignment = i669[50]
  i668.m_characterSpacing = i669[51]
  i668.m_wordSpacing = i669[52]
  i668.m_lineSpacing = i669[53]
  i668.m_lineSpacingMax = i669[54]
  i668.m_paragraphSpacing = i669[55]
  i668.m_charWidthMaxAdj = i669[56]
  i668.m_enableWordWrapping = !!i669[57]
  i668.m_wordWrappingRatios = i669[58]
  i668.m_overflowMode = i669[59]
  request.r(i669[60], i669[61], 0, i668, 'm_linkedTextComponent')
  request.r(i669[62], i669[63], 0, i668, 'parentLinkedComponent')
  i668.m_enableKerning = !!i669[64]
  i668.m_enableExtraPadding = !!i669[65]
  i668.checkPaddingRequired = !!i669[66]
  i668.m_isRichText = !!i669[67]
  i668.m_parseCtrlCharacters = !!i669[68]
  i668.m_isOrthographic = !!i669[69]
  i668.m_isCullingEnabled = !!i669[70]
  i668.m_horizontalMapping = i669[71]
  i668.m_verticalMapping = i669[72]
  i668.m_uvLineOffset = i669[73]
  i668.m_geometrySortingOrder = i669[74]
  i668.m_IsTextObjectScaleStatic = !!i669[75]
  i668.m_VertexBufferAutoSizeReduction = !!i669[76]
  i668.m_useMaxVisibleDescender = !!i669[77]
  i668.m_pageToDisplay = i669[78]
  i668.m_margin = new pc.Vec4( i669[79], i669[80], i669[81], i669[82] )
  i668.m_isUsingLegacyAnimationComponent = !!i669[83]
  i668.m_isVolumetricText = !!i669[84]
  request.r(i669[85], i669[86], 0, i668, 'm_Material')
  i668.m_Maskable = !!i669[87]
  i668.m_Color = new pc.Color(i669[88], i669[89], i669[90], i669[91])
  i668.m_RaycastTarget = !!i669[92]
  return i668
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i674 = root || request.c( 'TMPro.VertexGradient' )
  var i675 = data
  i674.topLeft = new pc.Color(i675[0], i675[1], i675[2], i675[3])
  i674.topRight = new pc.Color(i675[4], i675[5], i675[6], i675[7])
  i674.bottomLeft = new pc.Color(i675[8], i675[9], i675[10], i675[11])
  i674.bottomRight = new pc.Color(i675[12], i675[13], i675[14], i675[15])
  return i674
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.Text' )
  var i677 = data
  i676.m_FontData = request.d('UnityEngine.UI.FontData', i677[0], i676.m_FontData)
  i676.m_Text = i677[1]
  request.r(i677[2], i677[3], 0, i676, 'm_Material')
  i676.m_Maskable = !!i677[4]
  i676.m_Color = new pc.Color(i677[5], i677[6], i677[7], i677[8])
  i676.m_RaycastTarget = !!i677[9]
  return i676
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.FontData' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'm_Font')
  i678.m_FontSize = i679[2]
  i678.m_FontStyle = i679[3]
  i678.m_BestFit = !!i679[4]
  i678.m_MinSize = i679[5]
  i678.m_MaxSize = i679[6]
  i678.m_Alignment = i679[7]
  i678.m_AlignByGeometry = !!i679[8]
  i678.m_RichText = !!i679[9]
  i678.m_HorizontalOverflow = i679[10]
  i678.m_VerticalOverflow = i679[11]
  i678.m_LineSpacing = i679[12]
  return i678
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_FirstSelected')
  i680.m_sendNavigationEvents = !!i681[2]
  i680.m_DragThreshold = i681[3]
  return i680
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i683 = data
  i682.m_HorizontalAxis = i683[0]
  i682.m_VerticalAxis = i683[1]
  i682.m_SubmitButton = i683[2]
  i682.m_CancelButton = i683[3]
  i682.m_InputActionsPerSecond = i683[4]
  i682.m_RepeatDelay = i683[5]
  i682.m_ForceModuleActive = !!i683[6]
  return i682
}

Deserializers["BirdTutorial"] = function (request, data, root) {
  var i684 = root || request.c( 'BirdTutorial' )
  var i685 = data
  i684.jumpForce = i685[0]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i687 = data
  i686.ambientIntensity = i687[0]
  i686.reflectionIntensity = i687[1]
  i686.ambientMode = i687[2]
  i686.ambientLight = new pc.Color(i687[3], i687[4], i687[5], i687[6])
  i686.ambientSkyColor = new pc.Color(i687[7], i687[8], i687[9], i687[10])
  i686.ambientGroundColor = new pc.Color(i687[11], i687[12], i687[13], i687[14])
  i686.ambientEquatorColor = new pc.Color(i687[15], i687[16], i687[17], i687[18])
  i686.fogColor = new pc.Color(i687[19], i687[20], i687[21], i687[22])
  i686.fogEndDistance = i687[23]
  i686.fogStartDistance = i687[24]
  i686.fogDensity = i687[25]
  i686.fog = !!i687[26]
  request.r(i687[27], i687[28], 0, i686, 'skybox')
  i686.fogMode = i687[29]
  var i689 = i687[30]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i689[i + 0]) );
  }
  i686.lightmaps = i688
  i686.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i687[31], i686.lightProbes)
  i686.lightmapsMode = i687[32]
  i686.environmentLightingMode = i687[33]
  i686.ambientProbe = new pc.SphericalHarmonicsL2(i687[34])
  request.r(i687[35], i687[36], 0, i686, 'customReflection')
  request.r(i687[37], i687[38], 0, i686, 'defaultReflection')
  i686.defaultReflectionMode = i687[39]
  i686.defaultReflectionResolution = i687[40]
  i686.sunLightObjectId = i687[41]
  i686.pixelLightCount = i687[42]
  i686.defaultReflectionHDR = !!i687[43]
  i686.hasLightDataAsset = !!i687[44]
  i686.hasManualGenerate = !!i687[45]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'lightmapColor')
  request.r(i693[2], i693[3], 0, i692, 'lightmapDirection')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i694 = root || new UnityEngine.LightProbes()
  var i695 = data
  return i694
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i702 = root || request.c( 'TMPro.TMP_Settings' )
  var i703 = data
  i702.m_enableWordWrapping = !!i703[0]
  i702.m_enableKerning = !!i703[1]
  i702.m_enableExtraPadding = !!i703[2]
  i702.m_enableTintAllSprites = !!i703[3]
  i702.m_enableParseEscapeCharacters = !!i703[4]
  i702.m_EnableRaycastTarget = !!i703[5]
  i702.m_GetFontFeaturesAtRuntime = !!i703[6]
  i702.m_missingGlyphCharacter = i703[7]
  i702.m_warningsDisabled = !!i703[8]
  request.r(i703[9], i703[10], 0, i702, 'm_defaultFontAsset')
  i702.m_defaultFontAssetPath = i703[11]
  i702.m_defaultFontSize = i703[12]
  i702.m_defaultAutoSizeMinRatio = i703[13]
  i702.m_defaultAutoSizeMaxRatio = i703[14]
  i702.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i703[15], i703[16] )
  i702.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i703[17], i703[18] )
  i702.m_autoSizeTextContainer = !!i703[19]
  i702.m_IsTextObjectScaleStatic = !!i703[20]
  var i705 = i703[21]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 1, i704, '')
  }
  i702.m_fallbackFontAssets = i704
  i702.m_matchMaterialPreset = !!i703[22]
  request.r(i703[23], i703[24], 0, i702, 'm_defaultSpriteAsset')
  i702.m_defaultSpriteAssetPath = i703[25]
  i702.m_enableEmojiSupport = !!i703[26]
  i702.m_MissingCharacterSpriteUnicode = i703[27]
  i702.m_defaultColorGradientPresetsPath = i703[28]
  request.r(i703[29], i703[30], 0, i702, 'm_defaultStyleSheet')
  i702.m_StyleSheetsResourcePath = i703[31]
  request.r(i703[32], i703[33], 0, i702, 'm_leadingCharacters')
  request.r(i703[34], i703[35], 0, i702, 'm_followingCharacters')
  i702.m_UseModernHangulLineBreakingRules = !!i703[36]
  return i702
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i706 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i707 = data
  i706.hashCode = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'material')
  i706.materialHashCode = i707[3]
  request.r(i707[4], i707[5], 0, i706, 'spriteSheet')
  var i709 = i707[6]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i709.length; i += 1) {
    i708.add(request.d('TMPro.TMP_Sprite', i709[i + 0]));
  }
  i706.spriteInfoList = i708
  var i711 = i707[7]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 1, i710, '')
  }
  i706.fallbackSpriteAssets = i710
  i706.m_Version = i707[8]
  i706.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i707[9], i706.m_FaceInfo)
  var i713 = i707[10]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('TMPro.TMP_SpriteCharacter', i713[i + 0]));
  }
  i706.m_SpriteCharacterTable = i712
  var i715 = i707[11]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i715.length; i += 1) {
    i714.add(request.d('TMPro.TMP_SpriteGlyph', i715[i + 0]));
  }
  i706.m_SpriteGlyphTable = i714
  return i706
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.TMP_Sprite' )
  var i719 = data
  i718.name = i719[0]
  i718.hashCode = i719[1]
  i718.unicode = i719[2]
  i718.pivot = new pc.Vec2( i719[3], i719[4] )
  request.r(i719[5], i719[6], 0, i718, 'sprite')
  i718.id = i719[7]
  i718.x = i719[8]
  i718.y = i719[9]
  i718.width = i719[10]
  i718.height = i719[11]
  i718.xOffset = i719[12]
  i718.yOffset = i719[13]
  i718.xAdvance = i719[14]
  i718.scale = i719[15]
  return i718
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i724 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i725 = data
  i724.m_Name = i725[0]
  i724.m_HashCode = i725[1]
  i724.m_ElementType = i725[2]
  i724.m_Unicode = i725[3]
  i724.m_GlyphIndex = i725[4]
  i724.m_Scale = i725[5]
  return i724
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'sprite')
  i728.m_Index = i729[2]
  i728.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i729[3], i728.m_Metrics)
  i728.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i729[4], i728.m_GlyphRect)
  i728.m_Scale = i729[5]
  i728.m_AtlasIndex = i729[6]
  return i728
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i730 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i731 = data
  var i733 = i731[0]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i733.length; i += 1) {
    i732.add(request.d('TMPro.TMP_Style', i733[i + 0]));
  }
  i730.m_StyleList = i732
  return i730
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i736 = root || request.c( 'TMPro.TMP_Style' )
  var i737 = data
  i736.m_Name = i737[0]
  i736.m_HashCode = i737[1]
  i736.m_OpeningDefinition = i737[2]
  i736.m_ClosingDefinition = i737[3]
  i736.m_OpeningTagArray = i737[4]
  i736.m_ClosingTagArray = i737[5]
  i736.m_OpeningTagUnicodeArray = i737[6]
  i736.m_ClosingTagUnicodeArray = i737[7]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i739 = data
  var i741 = i739[0]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i741.length; i += 1) {
    i740.add(i741[i + 0]);
  }
  i738.invalidShaderVariants = i740
  i738.name = i739[1]
  i738.guid = i739[2]
  var i743 = i739[3]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i738.shaderDefinedKeywords = i742
  var i745 = i739[4]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i745[i + 0]) );
  }
  i738.passes = i744
  var i747 = i739[5]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i747[i + 0]) );
  }
  i738.usePasses = i746
  var i749 = i739[6]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i749[i + 0]) );
  }
  i738.defaultParameterValues = i748
  request.r(i739[7], i739[8], 0, i738, 'unityFallbackShader')
  i738.readDepth = !!i739[9]
  i738.isCreatedByShaderGraph = !!i739[10]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i756 = root || new pc.UnityShaderPass()
  var i757 = data
  i756.id = i757[0]
  i756.subShaderIndex = i757[1]
  i756.name = i757[2]
  i756.passType = i757[3]
  i756.usePass = !!i757[4]
  i756.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[5], i756.zTest)
  i756.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[6], i756.zWrite)
  i756.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[7], i756.culling)
  i756.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i757[8], i756.blending)
  i756.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i757[9], i756.alphaBlending)
  i756.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[10], i756.colorWriteMask)
  i756.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[11], i756.offsetUnits)
  i756.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[12], i756.offsetFactor)
  i756.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[13], i756.stencilRef)
  i756.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[14], i756.stencilReadMask)
  i756.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[15], i756.stencilWriteMask)
  i756.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i757[16], i756.stencilOp)
  i756.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i757[17], i756.stencilOpFront)
  i756.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i757[18], i756.stencilOpBack)
  var i759 = i757[19]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i759[i + 0]) );
  }
  i756.tags = i758
  var i761 = i757[20]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i756.passDefinedKeywords = i760
  var i763 = i757[21]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i763[i + 0]) );
  }
  i756.variants = i762
  var i765 = i757[22]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i765[i + 0]) );
  }
  i756.excludedVariants = i764
  i756.hasDepthReader = !!i757[23]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i767 = data
  i766.val = i767[0]
  i766.name = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i769 = data
  i768.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[0], i768.src)
  i768.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[1], i768.dst)
  i768.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[2], i768.op)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i771 = data
  i770.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[0], i770.pass)
  i770.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[1], i770.fail)
  i770.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[2], i770.zFail)
  i770.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[3], i770.comp)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i775 = data
  i774.name = i775[0]
  i774.value = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i779 = data
  i778.passId = i779[0]
  i778.subShaderIndex = i779[1]
  var i781 = i779[2]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i778.keywords = i780
  i778.vertexProgram = i779[3]
  i778.fragmentProgram = i779[4]
  i778.readDepth = !!i779[5]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'shader')
  i784.pass = i785[2]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i789 = data
  i788.name = i789[0]
  i788.type = i789[1]
  i788.value = new pc.Vec4( i789[2], i789[3], i789[4], i789[5] )
  i788.textureValue = i789[6]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i791 = data
  i790.name = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'texture')
  i790.aabb = i791[3]
  i790.vertices = i791[4]
  i790.triangles = i791[5]
  i790.textureRect = UnityEngine.Rect.MinMaxRect(i791[6], i791[7], i791[8], i791[9])
  i790.packedRect = UnityEngine.Rect.MinMaxRect(i791[10], i791[11], i791[12], i791[13])
  i790.border = new pc.Vec4( i791[14], i791[15], i791[16], i791[17] )
  i790.transparency = i791[18]
  i790.bounds = i791[19]
  i790.pixelsPerUnit = i791[20]
  i790.textureWidth = i791[21]
  i790.textureHeight = i791[22]
  i790.nativeSize = new pc.Vec2( i791[23], i791[24] )
  i790.pivot = new pc.Vec2( i791[25], i791[26] )
  i790.textureRectOffset = new pc.Vec2( i791[27], i791[28] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i793 = data
  i792.name = i793[0]
  i792.wrapMode = i793[1]
  i792.isLooping = !!i793[2]
  i792.length = i793[3]
  var i795 = i793[4]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i795[i + 0]) );
  }
  i792.curves = i794
  var i797 = i793[5]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i797[i + 0]) );
  }
  i792.events = i796
  i792.halfPrecision = !!i793[6]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i801 = data
  i800.path = i801[0]
  i800.componentType = i801[1]
  i800.property = i801[2]
  i800.keys = i801[3]
  var i803 = i801[4]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i803[i + 0]) );
  }
  i800.objectReferenceKeys = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i807 = data
  i806.time = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'value')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i811 = data
  i810.functionName = i811[0]
  i810.floatParameter = i811[1]
  i810.intParameter = i811[2]
  i810.stringParameter = i811[3]
  request.r(i811[4], i811[5], 0, i810, 'objectReferenceParameter')
  i810.time = i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i813 = data
  i812.name = i813[0]
  i812.ascent = i813[1]
  i812.originalLineHeight = i813[2]
  i812.fontSize = i813[3]
  var i815 = i813[4]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i815[i + 0]) );
  }
  i812.characterInfo = i814
  request.r(i813[5], i813[6], 0, i812, 'texture')
  i812.originalFontSize = i813[7]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i819 = data
  i818.index = i819[0]
  i818.advance = i819[1]
  i818.bearing = i819[2]
  i818.glyphWidth = i819[3]
  i818.glyphHeight = i819[4]
  i818.minX = i819[5]
  i818.maxX = i819[6]
  i818.minY = i819[7]
  i818.maxY = i819[8]
  i818.uvBottomLeftX = i819[9]
  i818.uvBottomLeftY = i819[10]
  i818.uvBottomRightX = i819[11]
  i818.uvBottomRightY = i819[12]
  i818.uvTopLeftX = i819[13]
  i818.uvTopLeftY = i819[14]
  i818.uvTopRightX = i819[15]
  i818.uvTopRightY = i819[16]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i821 = data
  i820.name = i821[0]
  var i823 = i821[1]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i823[i + 0]) );
  }
  i820.states = i822
  var i825 = i821[2]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i825[i + 0]) );
  }
  i820.layers = i824
  var i827 = i821[3]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i827[i + 0]) );
  }
  i820.parameters = i826
  var i829 = i821[4]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i820.animationClips = i828
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i833 = data
  i832.cycleOffset = i833[0]
  i832.cycleOffsetParameter = i833[1]
  i832.cycleOffsetParameterActive = !!i833[2]
  i832.mirror = !!i833[3]
  i832.mirrorParameter = i833[4]
  i832.mirrorParameterActive = !!i833[5]
  i832.motionId = i833[6]
  i832.nameHash = i833[7]
  i832.fullPathHash = i833[8]
  i832.speed = i833[9]
  i832.speedParameter = i833[10]
  i832.speedParameterActive = !!i833[11]
  i832.tag = i833[12]
  i832.name = i833[13]
  i832.writeDefaultValues = !!i833[14]
  var i835 = i833[15]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i835[i + 0]) );
  }
  i832.transitions = i834
  var i837 = i833[16]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i832.behaviours = i836
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i841 = data
  i840.fullPath = i841[0]
  i840.canTransitionToSelf = !!i841[1]
  i840.duration = i841[2]
  i840.exitTime = i841[3]
  i840.hasExitTime = !!i841[4]
  i840.hasFixedDuration = !!i841[5]
  i840.interruptionSource = i841[6]
  i840.offset = i841[7]
  i840.orderedInterruption = !!i841[8]
  i840.destinationStateNameHash = i841[9]
  i840.destinationStateMachineId = i841[10]
  i840.isExit = !!i841[11]
  i840.mute = !!i841[12]
  i840.solo = !!i841[13]
  var i843 = i841[14]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i843[i + 0]) );
  }
  i840.conditions = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i849 = data
  i848.blendingMode = i849[0]
  i848.defaultWeight = i849[1]
  i848.name = i849[2]
  i848.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i849[3], i848.stateMachine)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i851 = data
  i850.id = i851[0]
  i850.defaultStateNameHash = i851[1]
  var i853 = i851[2]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i853[i + 0]) );
  }
  i850.entryTransitions = i852
  var i855 = i851[3]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i855[i + 0]) );
  }
  i850.anyStateTransitions = i854
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i859 = data
  i858.destinationStateNameHash = i859[0]
  i858.destinationStateMachineId = i859[1]
  i858.isExit = !!i859[2]
  i858.mute = !!i859[3]
  i858.solo = !!i859[4]
  var i861 = i859[5]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i861[i + 0]) );
  }
  i858.conditions = i860
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i865 = data
  i864.defaultBool = !!i865[0]
  i864.defaultFloat = i865[1]
  i864.defaultInt = i865[2]
  i864.name = i865[3]
  i864.nameHash = i865[4]
  i864.type = i865[5]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i867 = data
  i866.name = i867[0]
  i866.bytes64 = i867[1]
  i866.data = i867[2]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i871[i + 0]) );
  }
  i868.files = i870
  i868.componentToPrefabIds = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i875 = data
  i874.path = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'unityObject')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i877 = data
  var i879 = i877[0]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i879[i + 0]) );
  }
  i876.scriptsExecutionOrder = i878
  var i881 = i877[1]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i881[i + 0]) );
  }
  i876.sortingLayers = i880
  var i883 = i877[2]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i883[i + 0]) );
  }
  i876.cullingLayers = i882
  i876.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i877[3], i876.timeSettings)
  i876.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i877[4], i876.physicsSettings)
  i876.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i877[5], i876.physics2DSettings)
  i876.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i877[6], i876.qualitySettings)
  i876.removeShadows = !!i877[7]
  i876.autoInstantiatePrefabs = !!i877[8]
  i876.enableAutoInstancing = !!i877[9]
  i876.lightmapEncodingQuality = i877[10]
  i876.desiredColorSpace = i877[11]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i887 = data
  i886.name = i887[0]
  i886.value = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i891 = data
  i890.id = i891[0]
  i890.name = i891[1]
  i890.value = i891[2]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i895 = data
  i894.id = i895[0]
  i894.name = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i897 = data
  i896.fixedDeltaTime = i897[0]
  i896.maximumDeltaTime = i897[1]
  i896.timeScale = i897[2]
  i896.maximumParticleTimestep = i897[3]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i899 = data
  i898.gravity = new pc.Vec3( i899[0], i899[1], i899[2] )
  i898.defaultSolverIterations = i899[3]
  i898.bounceThreshold = i899[4]
  i898.autoSyncTransforms = !!i899[5]
  i898.autoSimulation = !!i899[6]
  var i901 = i899[7]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i901[i + 0]) );
  }
  i898.collisionMatrix = i900
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i905 = data
  i904.enabled = !!i905[0]
  i904.layerId = i905[1]
  i904.otherLayerId = i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'material')
  i906.gravity = new pc.Vec2( i907[2], i907[3] )
  i906.positionIterations = i907[4]
  i906.velocityIterations = i907[5]
  i906.velocityThreshold = i907[6]
  i906.maxLinearCorrection = i907[7]
  i906.maxAngularCorrection = i907[8]
  i906.maxTranslationSpeed = i907[9]
  i906.maxRotationSpeed = i907[10]
  i906.timeToSleep = i907[11]
  i906.linearSleepTolerance = i907[12]
  i906.angularSleepTolerance = i907[13]
  i906.defaultContactOffset = i907[14]
  i906.autoSimulation = !!i907[15]
  i906.queriesHitTriggers = !!i907[16]
  i906.queriesStartInColliders = !!i907[17]
  i906.callbacksOnDisable = !!i907[18]
  i906.reuseCollisionCallbacks = !!i907[19]
  i906.autoSyncTransforms = !!i907[20]
  var i909 = i907[21]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i909[i + 0]) );
  }
  i906.collisionMatrix = i908
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i913 = data
  i912.enabled = !!i913[0]
  i912.layerId = i913[1]
  i912.otherLayerId = i913[2]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i915 = data
  var i917 = i915[0]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i917[i + 0]) );
  }
  i914.qualityLevels = i916
  var i919 = i915[1]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( i919[i + 0] );
  }
  i914.names = i918
  i914.shadows = i915[2]
  i914.anisotropicFiltering = i915[3]
  i914.antiAliasing = i915[4]
  i914.lodBias = i915[5]
  i914.shadowCascades = i915[6]
  i914.shadowDistance = i915[7]
  i914.shadowmaskMode = i915[8]
  i914.shadowProjection = i915[9]
  i914.shadowResolution = i915[10]
  i914.softParticles = !!i915[11]
  i914.softVegetation = !!i915[12]
  i914.activeColorSpace = i915[13]
  i914.desiredColorSpace = i915[14]
  i914.masterTextureLimit = i915[15]
  i914.maxQueuedFrames = i915[16]
  i914.particleRaycastBudget = i915[17]
  i914.pixelLightCount = i915[18]
  i914.realtimeReflectionProbes = !!i915[19]
  i914.shadowCascade2Split = i915[20]
  i914.shadowCascade4Split = new pc.Vec3( i915[21], i915[22], i915[23] )
  i914.streamingMipmapsActive = !!i915[24]
  i914.vSyncCount = i915[25]
  i914.asyncUploadBufferSize = i915[26]
  i914.asyncUploadTimeSlice = i915[27]
  i914.billboardsFaceCameraPosition = !!i915[28]
  i914.shadowNearPlaneOffset = i915[29]
  i914.streamingMipmapsMemoryBudget = i915[30]
  i914.maximumLODLevel = i915[31]
  i914.streamingMipmapsAddAllCameras = !!i915[32]
  i914.streamingMipmapsMaxLevelReduction = i915[33]
  i914.streamingMipmapsRenderersPerFrame = i915[34]
  i914.resolutionScalingFixedDPIFactor = i915[35]
  i914.streamingMipmapsMaxFileIORequests = i915[36]
  i914.currentQualityLevel = i915[37]
  return i914
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i923 = data
  i922.xPlacement = i923[0]
  i922.yPlacement = i923[1]
  i922.xAdvance = i923[2]
  i922.yAdvance = i923[3]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i927 = data
  i926.mode = i927[0]
  i926.parameter = i927[1]
  i926.threshold = i927[2]
  return i926
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

Deserializers.buildID = "33ab0bf0-ad7d-4c14-bfeb-c438907aecbc";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

