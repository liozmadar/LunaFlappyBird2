var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointSpring' )
  var i467 = data
  i466.spring = i467[0]
  i466.damper = i467[1]
  i466.targetPosition = i467[2]
  return i466
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointMotor' )
  var i469 = data
  i468.m_TargetVelocity = i469[0]
  i468.m_Force = i469[1]
  i468.m_FreeSpin = i469[2]
  return i468
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointLimits' )
  var i471 = data
  i470.m_Min = i471[0]
  i470.m_Max = i471[1]
  i470.m_Bounciness = i471[2]
  i470.m_BounceMinVelocity = i471[3]
  i470.m_ContactDistance = i471[4]
  i470.minBounce = i471[5]
  i470.maxBounce = i471[6]
  return i470
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointDrive' )
  var i473 = data
  i472.m_PositionSpring = i473[0]
  i472.m_PositionDamper = i473[1]
  i472.m_MaximumForce = i473[2]
  return i472
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i475 = data
  i474.m_Spring = i475[0]
  i474.m_Damper = i475[1]
  return i474
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i477 = data
  i476.m_Limit = i477[0]
  i476.m_Bounciness = i477[1]
  i476.m_ContactDistance = i477[2]
  return i476
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i479 = data
  i478.m_ExtremumSlip = i479[0]
  i478.m_ExtremumValue = i479[1]
  i478.m_AsymptoteSlip = i479[2]
  i478.m_AsymptoteValue = i479[3]
  i478.m_Stiffness = i479[4]
  return i478
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i481 = data
  i480.m_LowerAngle = i481[0]
  i480.m_UpperAngle = i481[1]
  return i480
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i483 = data
  i482.m_MotorSpeed = i483[0]
  i482.m_MaximumMotorTorque = i483[1]
  return i482
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i485 = data
  i484.m_DampingRatio = i485[0]
  i484.m_Frequency = i485[1]
  i484.m_Angle = i485[2]
  return i484
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i487 = data
  i486.m_LowerTranslation = i487[0]
  i486.m_UpperTranslation = i487[1]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i488 = root || new pc.UnityMaterial()
  var i489 = data
  i488.name = i489[0]
  request.r(i489[1], i489[2], 0, i488, 'shader')
  i488.renderQueue = i489[3]
  i488.enableInstancing = !!i489[4]
  var i491 = i489[5]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i491[i + 0]) );
  }
  i488.floatParameters = i490
  var i493 = i489[6]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i493[i + 0]) );
  }
  i488.colorParameters = i492
  var i495 = i489[7]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i495[i + 0]) );
  }
  i488.vectorParameters = i494
  var i497 = i489[8]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i497[i + 0]) );
  }
  i488.textureParameters = i496
  var i499 = i489[9]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i499[i + 0]) );
  }
  i488.materialFlags = i498
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i503 = data
  i502.name = i503[0]
  i502.value = i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i507 = data
  i506.name = i507[0]
  i506.value = new pc.Color(i507[1], i507[2], i507[3], i507[4])
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i511 = data
  i510.name = i511[0]
  i510.value = new pc.Vec4( i511[1], i511[2], i511[3], i511[4] )
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i515 = data
  i514.name = i515[0]
  request.r(i515[1], i515[2], 0, i514, 'value')
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i519 = data
  i518.name = i519[0]
  i518.enabled = !!i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i521 = data
  i520.name = i521[0]
  i520.width = i521[1]
  i520.height = i521[2]
  i520.mipmapCount = i521[3]
  i520.anisoLevel = i521[4]
  i520.filterMode = i521[5]
  i520.hdr = !!i521[6]
  i520.format = i521[7]
  i520.wrapMode = i521[8]
  i520.alphaIsTransparency = !!i521[9]
  i520.alphaSource = i521[10]
  return i520
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i522 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i523 = data
  i522.hashCode = i523[0]
  request.r(i523[1], i523[2], 0, i522, 'material')
  i522.materialHashCode = i523[3]
  request.r(i523[4], i523[5], 0, i522, 'atlas')
  i522.normalStyle = i523[6]
  i522.normalSpacingOffset = i523[7]
  i522.boldStyle = i523[8]
  i522.boldSpacing = i523[9]
  i522.italicStyle = i523[10]
  i522.tabSize = i523[11]
  i522.m_Version = i523[12]
  i522.m_SourceFontFileGUID = i523[13]
  request.r(i523[14], i523[15], 0, i522, 'm_SourceFontFile_EditorRef')
  request.r(i523[16], i523[17], 0, i522, 'm_SourceFontFile')
  i522.m_AtlasPopulationMode = i523[18]
  i522.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i523[19], i522.m_FaceInfo)
  var i525 = i523[20]
  var i524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i525.length; i += 1) {
    i524.add(request.d('UnityEngine.TextCore.Glyph', i525[i + 0]));
  }
  i522.m_GlyphTable = i524
  var i527 = i523[21]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i527.length; i += 1) {
    i526.add(request.d('TMPro.TMP_Character', i527[i + 0]));
  }
  i522.m_CharacterTable = i526
  var i529 = i523[22]
  var i528 = []
  for(var i = 0; i < i529.length; i += 2) {
  request.r(i529[i + 0], i529[i + 1], 2, i528, '')
  }
  i522.m_AtlasTextures = i528
  i522.m_AtlasTextureIndex = i523[23]
  i522.m_IsMultiAtlasTexturesEnabled = !!i523[24]
  i522.m_ClearDynamicDataOnBuild = !!i523[25]
  var i531 = i523[26]
  var i530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i531.length; i += 1) {
    i530.add(request.d('UnityEngine.TextCore.GlyphRect', i531[i + 0]));
  }
  i522.m_UsedGlyphRects = i530
  var i533 = i523[27]
  var i532 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i533.length; i += 1) {
    i532.add(request.d('UnityEngine.TextCore.GlyphRect', i533[i + 0]));
  }
  i522.m_FreeGlyphRects = i532
  i522.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i523[28], i522.m_fontInfo)
  i522.m_AtlasWidth = i523[29]
  i522.m_AtlasHeight = i523[30]
  i522.m_AtlasPadding = i523[31]
  i522.m_AtlasRenderMode = i523[32]
  var i535 = i523[33]
  var i534 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i535.length; i += 1) {
    i534.add(request.d('TMPro.TMP_Glyph', i535[i + 0]));
  }
  i522.m_glyphInfoList = i534
  i522.m_KerningTable = request.d('TMPro.KerningTable', i523[34], i522.m_KerningTable)
  i522.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i523[35], i522.m_FontFeatureTable)
  var i537 = i523[36]
  var i536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i537.length; i += 2) {
  request.r(i537[i + 0], i537[i + 1], 1, i536, '')
  }
  i522.fallbackFontAssets = i536
  var i539 = i523[37]
  var i538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i539.length; i += 2) {
  request.r(i539[i + 0], i539[i + 1], 1, i538, '')
  }
  i522.m_FallbackFontAssetTable = i538
  i522.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i523[38], i522.m_CreationSettings)
  var i541 = i523[39]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('TMPro.TMP_FontWeightPair', i541[i + 0]) );
  }
  i522.m_FontWeightTable = i540
  var i543 = i523[40]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('TMPro.TMP_FontWeightPair', i543[i + 0]) );
  }
  i522.fontWeights = i542
  return i522
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i545 = data
  i544.m_FaceIndex = i545[0]
  i544.m_FamilyName = i545[1]
  i544.m_StyleName = i545[2]
  i544.m_PointSize = i545[3]
  i544.m_Scale = i545[4]
  i544.m_LineHeight = i545[5]
  i544.m_AscentLine = i545[6]
  i544.m_CapLine = i545[7]
  i544.m_MeanLine = i545[8]
  i544.m_Baseline = i545[9]
  i544.m_DescentLine = i545[10]
  i544.m_SuperscriptOffset = i545[11]
  i544.m_SuperscriptSize = i545[12]
  i544.m_SubscriptOffset = i545[13]
  i544.m_SubscriptSize = i545[14]
  i544.m_UnderlineOffset = i545[15]
  i544.m_UnderlineThickness = i545[16]
  i544.m_StrikethroughOffset = i545[17]
  i544.m_StrikethroughThickness = i545[18]
  i544.m_TabWidth = i545[19]
  return i544
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i549 = data
  i548.m_Index = i549[0]
  i548.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i549[1], i548.m_Metrics)
  i548.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i549[2], i548.m_GlyphRect)
  i548.m_Scale = i549[3]
  i548.m_AtlasIndex = i549[4]
  return i548
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i551 = data
  i550.m_Width = i551[0]
  i550.m_Height = i551[1]
  i550.m_HorizontalBearingX = i551[2]
  i550.m_HorizontalBearingY = i551[3]
  i550.m_HorizontalAdvance = i551[4]
  return i550
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i553 = data
  i552.m_X = i553[0]
  i552.m_Y = i553[1]
  i552.m_Width = i553[2]
  i552.m_Height = i553[3]
  return i552
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i556 = root || request.c( 'TMPro.TMP_Character' )
  var i557 = data
  i556.m_ElementType = i557[0]
  i556.m_Unicode = i557[1]
  i556.m_GlyphIndex = i557[2]
  i556.m_Scale = i557[3]
  return i556
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i562 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i563 = data
  i562.Name = i563[0]
  i562.PointSize = i563[1]
  i562.Scale = i563[2]
  i562.CharacterCount = i563[3]
  i562.LineHeight = i563[4]
  i562.Baseline = i563[5]
  i562.Ascender = i563[6]
  i562.CapHeight = i563[7]
  i562.Descender = i563[8]
  i562.CenterLine = i563[9]
  i562.SuperscriptOffset = i563[10]
  i562.SubscriptOffset = i563[11]
  i562.SubSize = i563[12]
  i562.Underline = i563[13]
  i562.UnderlineThickness = i563[14]
  i562.strikethrough = i563[15]
  i562.strikethroughThickness = i563[16]
  i562.TabWidth = i563[17]
  i562.Padding = i563[18]
  i562.AtlasWidth = i563[19]
  i562.AtlasHeight = i563[20]
  return i562
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i566 = root || request.c( 'TMPro.TMP_Glyph' )
  var i567 = data
  i566.id = i567[0]
  i566.x = i567[1]
  i566.y = i567[2]
  i566.width = i567[3]
  i566.height = i567[4]
  i566.xOffset = i567[5]
  i566.yOffset = i567[6]
  i566.xAdvance = i567[7]
  i566.scale = i567[8]
  return i566
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i568 = root || request.c( 'TMPro.KerningTable' )
  var i569 = data
  var i571 = i569[0]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i571.length; i += 1) {
    i570.add(request.d('TMPro.KerningPair', i571[i + 0]));
  }
  i568.kerningPairs = i570
  return i568
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i574 = root || request.c( 'TMPro.KerningPair' )
  var i575 = data
  i574.xOffset = i575[0]
  i574.m_FirstGlyph = i575[1]
  i574.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i575[2], i574.m_FirstGlyphAdjustments)
  i574.m_SecondGlyph = i575[3]
  i574.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i575[4], i574.m_SecondGlyphAdjustments)
  i574.m_IgnoreSpacingAdjustments = !!i575[5]
  return i574
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i576 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i577 = data
  var i579 = i577[0]
  var i578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i579.length; i += 1) {
    i578.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i579[i + 0]));
  }
  i576.m_GlyphPairAdjustmentRecords = i578
  return i576
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i582 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i583 = data
  i582.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i583[0], i582.m_FirstAdjustmentRecord)
  i582.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i583[1], i582.m_SecondAdjustmentRecord)
  i582.m_FeatureLookupFlags = i583[2]
  return i582
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i584 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i585 = data
  i584.m_GlyphIndex = i585[0]
  i584.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i585[1], i584.m_GlyphValueRecord)
  return i584
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i586 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i587 = data
  i586.m_XPlacement = i587[0]
  i586.m_YPlacement = i587[1]
  i586.m_XAdvance = i587[2]
  i586.m_YAdvance = i587[3]
  return i586
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i590 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i591 = data
  i590.sourceFontFileName = i591[0]
  i590.sourceFontFileGUID = i591[1]
  i590.pointSizeSamplingMode = i591[2]
  i590.pointSize = i591[3]
  i590.padding = i591[4]
  i590.packingMode = i591[5]
  i590.atlasWidth = i591[6]
  i590.atlasHeight = i591[7]
  i590.characterSetSelectionMode = i591[8]
  i590.characterSequence = i591[9]
  i590.referencedFontAssetGUID = i591[10]
  i590.referencedTextAssetGUID = i591[11]
  i590.fontStyle = i591[12]
  i590.fontStyleModifier = i591[13]
  i590.renderMode = i591[14]
  i590.includeFontFeatures = !!i591[15]
  return i590
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i594 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'regularTypeface')
  request.r(i595[2], i595[3], 0, i594, 'italicTypeface')
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i597 = data
  i596.name = i597[0]
  i596.atlasId = i597[1]
  i596.mipmapCount = i597[2]
  i596.hdr = !!i597[3]
  i596.size = i597[4]
  i596.anisoLevel = i597[5]
  i596.filterMode = i597[6]
  i596.wrapMode = i597[7]
  var i599 = i597[8]
  var i598 = []
  for(var i = 0; i < i599.length; i += 4) {
    i598.push( UnityEngine.Rect.MinMaxRect(i599[i + 0], i599[i + 1], i599[i + 2], i599[i + 3]) );
  }
  i596.rects = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i603 = data
  i602.name = i603[0]
  i602.index = i603[1]
  i602.startup = !!i603[2]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i605 = data
  i604.position = new pc.Vec3( i605[0], i605[1], i605[2] )
  i604.scale = new pc.Vec3( i605[3], i605[4], i605[5] )
  i604.rotation = new pc.Quat(i605[6], i605[7], i605[8], i605[9])
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i607 = data
  i606.enabled = !!i607[0]
  i606.aspect = i607[1]
  i606.orthographic = !!i607[2]
  i606.orthographicSize = i607[3]
  i606.backgroundColor = new pc.Color(i607[4], i607[5], i607[6], i607[7])
  i606.nearClipPlane = i607[8]
  i606.farClipPlane = i607[9]
  i606.fieldOfView = i607[10]
  i606.depth = i607[11]
  i606.clearFlags = i607[12]
  i606.cullingMask = i607[13]
  i606.rect = i607[14]
  request.r(i607[15], i607[16], 0, i606, 'targetTexture')
  return i606
}

Deserializers["CameraMovement"] = function (request, data, root) {
  var i608 = root || request.c( 'CameraMovement' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'player')
  i608.smoothing = i609[2]
  i608.offset = new pc.Vec3( i609[3], i609[4], i609[5] )
  i608.minPos = new pc.Vec3( i609[6], i609[7], i609[8] )
  i608.maxPos = new pc.Vec3( i609[9], i609[10], i609[11] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i611 = data
  i610.name = i611[0]
  i610.tag = i611[1]
  i610.enabled = !!i611[2]
  i610.isStatic = !!i611[3]
  i610.layer = i611[4]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i613 = data
  i612.enabled = !!i613[0]
  request.r(i613[1], i613[2], 0, i612, 'sharedMaterial')
  var i615 = i613[3]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.sharedMaterials = i614
  i612.receiveShadows = !!i613[4]
  i612.shadowCastingMode = i613[5]
  i612.sortingLayerID = i613[6]
  i612.sortingOrder = i613[7]
  i612.lightmapIndex = i613[8]
  i612.lightmapSceneIndex = i613[9]
  i612.lightmapScaleOffset = new pc.Vec4( i613[10], i613[11], i613[12], i613[13] )
  i612.lightProbeUsage = i613[14]
  i612.reflectionProbeUsage = i613[15]
  i612.color = new pc.Color(i613[16], i613[17], i613[18], i613[19])
  request.r(i613[20], i613[21], 0, i612, 'sprite')
  i612.flipX = !!i613[22]
  i612.flipY = !!i613[23]
  i612.drawMode = i613[24]
  i612.size = new pc.Vec2( i613[25], i613[26] )
  i612.tileMode = i613[27]
  i612.adaptiveModeThreshold = i613[28]
  i612.maskInteraction = i613[29]
  i612.spriteSortPoint = i613[30]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i619 = data
  i618.usedByComposite = !!i619[0]
  i618.autoTiling = !!i619[1]
  i618.size = new pc.Vec2( i619[2], i619[3] )
  i618.edgeRadius = i619[4]
  i618.enabled = !!i619[5]
  i618.isTrigger = !!i619[6]
  i618.usedByEffector = !!i619[7]
  i618.density = i619[8]
  i618.offset = new pc.Vec2( i619[9], i619[10] )
  request.r(i619[11], i619[12], 0, i618, 'material')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i621 = data
  i620.bodyType = i621[0]
  request.r(i621[1], i621[2], 0, i620, 'material')
  i620.simulated = !!i621[3]
  i620.useAutoMass = !!i621[4]
  i620.mass = i621[5]
  i620.drag = i621[6]
  i620.angularDrag = i621[7]
  i620.gravityScale = i621[8]
  i620.collisionDetectionMode = i621[9]
  i620.sleepMode = i621[10]
  i620.constraints = i621[11]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i623 = data
  i622.size = new pc.Vec2( i623[0], i623[1] )
  i622.direction = i623[2]
  i622.enabled = !!i623[3]
  i622.isTrigger = !!i623[4]
  i622.usedByEffector = !!i623[5]
  i622.density = i623[6]
  i622.offset = new pc.Vec2( i623[7], i623[8] )
  request.r(i623[9], i623[10], 0, i622, 'material')
  return i622
}

Deserializers["BirdMovement"] = function (request, data, root) {
  var i624 = root || request.c( 'BirdMovement' )
  var i625 = data
  i624.jumpForce = i625[0]
  i624.speed = i625[1]
  i624.birdDeath = !!i625[2]
  request.r(i625[3], i625[4], 0, i624, 'tutorialBird')
  return i624
}

Deserializers["BirdDeath"] = function (request, data, root) {
  var i626 = root || request.c( 'BirdDeath' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'birdDeathSprite')
  request.r(i627[2], i627[3], 0, i626, 'scoreTextNumber')
  request.r(i627[4], i627[5], 0, i626, 'gameOverText')
  request.r(i627[6], i627[7], 0, i626, 'RetryText')
  i626.gameOverBool = !!i627[8]
  request.r(i627[9], i627[10], 0, i626, 'birdMovement')
  request.r(i627[11], i627[12], 0, i626, 'SP')
  request.r(i627[13], i627[14], 0, i626, 'emote1')
  request.r(i627[15], i627[16], 0, i626, 'emote2')
  request.r(i627[17], i627[18], 0, i626, 'emote3')
  i626.birdChances = i627[19]
  return i626
}

Deserializers["GameOver"] = function (request, data, root) {
  var i628 = root || request.c( 'GameOver' )
  var i629 = data
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'animatorController')
  i630.updateMode = i631[2]
  var i633 = i631[3]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i630.humanBones = i632
  i630.enabled = !!i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i637 = data
  i636.pivot = new pc.Vec2( i637[0], i637[1] )
  i636.anchorMin = new pc.Vec2( i637[2], i637[3] )
  i636.anchorMax = new pc.Vec2( i637[4], i637[5] )
  i636.sizeDelta = new pc.Vec2( i637[6], i637[7] )
  i636.anchoredPosition3D = new pc.Vec3( i637[8], i637[9], i637[10] )
  i636.rotation = new pc.Quat(i637[11], i637[12], i637[13], i637[14])
  i636.scale = new pc.Vec3( i637[15], i637[16], i637[17] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i639 = data
  i638.enabled = !!i639[0]
  i638.planeDistance = i639[1]
  i638.referencePixelsPerUnit = i639[2]
  i638.isFallbackOverlay = !!i639[3]
  i638.renderMode = i639[4]
  i638.renderOrder = i639[5]
  i638.sortingLayerName = i639[6]
  i638.sortingOrder = i639[7]
  i638.scaleFactor = i639[8]
  request.r(i639[9], i639[10], 0, i638, 'worldCamera')
  i638.overrideSorting = !!i639[11]
  i638.pixelPerfect = !!i639[12]
  i638.targetDisplay = i639[13]
  i638.overridePixelPerfect = !!i639[14]
  return i638
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i641 = data
  i640.m_UiScaleMode = i641[0]
  i640.m_ReferencePixelsPerUnit = i641[1]
  i640.m_ScaleFactor = i641[2]
  i640.m_ReferenceResolution = new pc.Vec2( i641[3], i641[4] )
  i640.m_ScreenMatchMode = i641[5]
  i640.m_MatchWidthOrHeight = i641[6]
  i640.m_PhysicalUnit = i641[7]
  i640.m_FallbackScreenDPI = i641[8]
  i640.m_DefaultSpriteDPI = i641[9]
  i640.m_DynamicPixelsPerUnit = i641[10]
  return i640
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i643 = data
  i642.m_IgnoreReversedGraphics = !!i643[0]
  i642.m_BlockingObjects = i643[1]
  i642.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i643[2] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i645 = data
  i644.cullTransparentMesh = !!i645[0]
  return i644
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Image' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'm_Sprite')
  i646.m_Type = i647[2]
  i646.m_PreserveAspect = !!i647[3]
  i646.m_FillCenter = !!i647[4]
  i646.m_FillMethod = i647[5]
  i646.m_FillAmount = i647[6]
  i646.m_FillClockwise = !!i647[7]
  i646.m_FillOrigin = i647[8]
  i646.m_UseSpriteMesh = !!i647[9]
  i646.m_PixelsPerUnitMultiplier = i647[10]
  request.r(i647[11], i647[12], 0, i646, 'm_Material')
  i646.m_Maskable = !!i647[13]
  i646.m_Color = new pc.Color(i647[14], i647[15], i647[16], i647[17])
  i646.m_RaycastTarget = !!i647[18]
  return i646
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Button' )
  var i649 = data
  i648.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i649[0], i648.m_OnClick)
  i648.m_Navigation = request.d('UnityEngine.UI.Navigation', i649[1], i648.m_Navigation)
  i648.m_Transition = i649[2]
  i648.m_Colors = request.d('UnityEngine.UI.ColorBlock', i649[3], i648.m_Colors)
  i648.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i649[4], i648.m_SpriteState)
  i648.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i649[5], i648.m_AnimationTriggers)
  i648.m_Interactable = !!i649[6]
  request.r(i649[7], i649[8], 0, i648, 'm_TargetGraphic')
  return i648
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i651 = data
  i650.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i651[0], i650.m_PersistentCalls)
  return i650
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i653 = data
  var i655 = i653[0]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('UnityEngine.Events.PersistentCall', i655[i + 0]));
  }
  i652.m_Calls = i654
  return i652
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_Target')
  i658.m_MethodName = i659[2]
  i658.m_Mode = i659[3]
  i658.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i659[4], i658.m_Arguments)
  i658.m_CallState = i659[5]
  return i658
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_ObjectArgument')
  i660.m_ObjectArgumentAssemblyTypeName = i661[2]
  i660.m_IntArgument = i661[3]
  i660.m_FloatArgument = i661[4]
  i660.m_StringArgument = i661[5]
  i660.m_BoolArgument = !!i661[6]
  return i660
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i663 = data
  i662.m_Mode = i663[0]
  request.r(i663[1], i663[2], 0, i662, 'm_SelectOnUp')
  request.r(i663[3], i663[4], 0, i662, 'm_SelectOnDown')
  request.r(i663[5], i663[6], 0, i662, 'm_SelectOnLeft')
  request.r(i663[7], i663[8], 0, i662, 'm_SelectOnRight')
  return i662
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i665 = data
  i664.m_NormalColor = new pc.Color(i665[0], i665[1], i665[2], i665[3])
  i664.m_HighlightedColor = new pc.Color(i665[4], i665[5], i665[6], i665[7])
  i664.m_PressedColor = new pc.Color(i665[8], i665[9], i665[10], i665[11])
  i664.m_SelectedColor = new pc.Color(i665[12], i665[13], i665[14], i665[15])
  i664.m_DisabledColor = new pc.Color(i665[16], i665[17], i665[18], i665[19])
  i664.m_ColorMultiplier = i665[20]
  i664.m_FadeDuration = i665[21]
  return i664
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_HighlightedSprite')
  request.r(i667[2], i667[3], 0, i666, 'm_PressedSprite')
  request.r(i667[4], i667[5], 0, i666, 'm_SelectedSprite')
  request.r(i667[6], i667[7], 0, i666, 'm_DisabledSprite')
  return i666
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i669 = data
  i668.m_NormalTrigger = i669[0]
  i668.m_HighlightedTrigger = i669[1]
  i668.m_PressedTrigger = i669[2]
  i668.m_SelectedTrigger = i669[3]
  i668.m_DisabledTrigger = i669[4]
  return i668
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i670 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i671 = data
  i670.m_hasFontAssetChanged = !!i671[0]
  request.r(i671[1], i671[2], 0, i670, 'm_baseMaterial')
  i670.m_maskOffset = new pc.Vec4( i671[3], i671[4], i671[5], i671[6] )
  i670.m_text = i671[7]
  i670.m_isRightToLeft = !!i671[8]
  request.r(i671[9], i671[10], 0, i670, 'm_fontAsset')
  request.r(i671[11], i671[12], 0, i670, 'm_sharedMaterial')
  var i673 = i671[13]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.m_fontSharedMaterials = i672
  request.r(i671[14], i671[15], 0, i670, 'm_fontMaterial')
  var i675 = i671[16]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i670.m_fontMaterials = i674
  i670.m_fontColor32 = UnityEngine.Color32.ConstructColor(i671[17], i671[18], i671[19], i671[20])
  i670.m_fontColor = new pc.Color(i671[21], i671[22], i671[23], i671[24])
  i670.m_enableVertexGradient = !!i671[25]
  i670.m_colorMode = i671[26]
  i670.m_fontColorGradient = request.d('TMPro.VertexGradient', i671[27], i670.m_fontColorGradient)
  request.r(i671[28], i671[29], 0, i670, 'm_fontColorGradientPreset')
  request.r(i671[30], i671[31], 0, i670, 'm_spriteAsset')
  i670.m_tintAllSprites = !!i671[32]
  request.r(i671[33], i671[34], 0, i670, 'm_StyleSheet')
  i670.m_TextStyleHashCode = i671[35]
  i670.m_overrideHtmlColors = !!i671[36]
  i670.m_faceColor = UnityEngine.Color32.ConstructColor(i671[37], i671[38], i671[39], i671[40])
  i670.m_fontSize = i671[41]
  i670.m_fontSizeBase = i671[42]
  i670.m_fontWeight = i671[43]
  i670.m_enableAutoSizing = !!i671[44]
  i670.m_fontSizeMin = i671[45]
  i670.m_fontSizeMax = i671[46]
  i670.m_fontStyle = i671[47]
  i670.m_HorizontalAlignment = i671[48]
  i670.m_VerticalAlignment = i671[49]
  i670.m_textAlignment = i671[50]
  i670.m_characterSpacing = i671[51]
  i670.m_wordSpacing = i671[52]
  i670.m_lineSpacing = i671[53]
  i670.m_lineSpacingMax = i671[54]
  i670.m_paragraphSpacing = i671[55]
  i670.m_charWidthMaxAdj = i671[56]
  i670.m_enableWordWrapping = !!i671[57]
  i670.m_wordWrappingRatios = i671[58]
  i670.m_overflowMode = i671[59]
  request.r(i671[60], i671[61], 0, i670, 'm_linkedTextComponent')
  request.r(i671[62], i671[63], 0, i670, 'parentLinkedComponent')
  i670.m_enableKerning = !!i671[64]
  i670.m_enableExtraPadding = !!i671[65]
  i670.checkPaddingRequired = !!i671[66]
  i670.m_isRichText = !!i671[67]
  i670.m_parseCtrlCharacters = !!i671[68]
  i670.m_isOrthographic = !!i671[69]
  i670.m_isCullingEnabled = !!i671[70]
  i670.m_horizontalMapping = i671[71]
  i670.m_verticalMapping = i671[72]
  i670.m_uvLineOffset = i671[73]
  i670.m_geometrySortingOrder = i671[74]
  i670.m_IsTextObjectScaleStatic = !!i671[75]
  i670.m_VertexBufferAutoSizeReduction = !!i671[76]
  i670.m_useMaxVisibleDescender = !!i671[77]
  i670.m_pageToDisplay = i671[78]
  i670.m_margin = new pc.Vec4( i671[79], i671[80], i671[81], i671[82] )
  i670.m_isUsingLegacyAnimationComponent = !!i671[83]
  i670.m_isVolumetricText = !!i671[84]
  request.r(i671[85], i671[86], 0, i670, 'm_Material')
  i670.m_Maskable = !!i671[87]
  i670.m_Color = new pc.Color(i671[88], i671[89], i671[90], i671[91])
  i670.m_RaycastTarget = !!i671[92]
  return i670
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i676 = root || request.c( 'TMPro.VertexGradient' )
  var i677 = data
  i676.topLeft = new pc.Color(i677[0], i677[1], i677[2], i677[3])
  i676.topRight = new pc.Color(i677[4], i677[5], i677[6], i677[7])
  i676.bottomLeft = new pc.Color(i677[8], i677[9], i677[10], i677[11])
  i676.bottomRight = new pc.Color(i677[12], i677[13], i677[14], i677[15])
  return i676
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.Text' )
  var i679 = data
  i678.m_FontData = request.d('UnityEngine.UI.FontData', i679[0], i678.m_FontData)
  i678.m_Text = i679[1]
  request.r(i679[2], i679[3], 0, i678, 'm_Material')
  i678.m_Maskable = !!i679[4]
  i678.m_Color = new pc.Color(i679[5], i679[6], i679[7], i679[8])
  i678.m_RaycastTarget = !!i679[9]
  return i678
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.FontData' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'm_Font')
  i680.m_FontSize = i681[2]
  i680.m_FontStyle = i681[3]
  i680.m_BestFit = !!i681[4]
  i680.m_MinSize = i681[5]
  i680.m_MaxSize = i681[6]
  i680.m_Alignment = i681[7]
  i680.m_AlignByGeometry = !!i681[8]
  i680.m_RichText = !!i681[9]
  i680.m_HorizontalOverflow = i681[10]
  i680.m_VerticalOverflow = i681[11]
  i680.m_LineSpacing = i681[12]
  return i680
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_FirstSelected')
  i682.m_sendNavigationEvents = !!i683[2]
  i682.m_DragThreshold = i683[3]
  return i682
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i685 = data
  i684.m_HorizontalAxis = i685[0]
  i684.m_VerticalAxis = i685[1]
  i684.m_SubmitButton = i685[2]
  i684.m_CancelButton = i685[3]
  i684.m_InputActionsPerSecond = i685[4]
  i684.m_RepeatDelay = i685[5]
  i684.m_ForceModuleActive = !!i685[6]
  return i684
}

Deserializers["BirdTutorial"] = function (request, data, root) {
  var i686 = root || request.c( 'BirdTutorial' )
  var i687 = data
  i686.jumpForce = i687[0]
  return i686
}

Deserializers["GameManager"] = function (request, data, root) {
  var i688 = root || request.c( 'GameManager' )
  var i689 = data
  i688.birdEndCard = i689[0]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i691 = data
  i690.ambientIntensity = i691[0]
  i690.reflectionIntensity = i691[1]
  i690.ambientMode = i691[2]
  i690.ambientLight = new pc.Color(i691[3], i691[4], i691[5], i691[6])
  i690.ambientSkyColor = new pc.Color(i691[7], i691[8], i691[9], i691[10])
  i690.ambientGroundColor = new pc.Color(i691[11], i691[12], i691[13], i691[14])
  i690.ambientEquatorColor = new pc.Color(i691[15], i691[16], i691[17], i691[18])
  i690.fogColor = new pc.Color(i691[19], i691[20], i691[21], i691[22])
  i690.fogEndDistance = i691[23]
  i690.fogStartDistance = i691[24]
  i690.fogDensity = i691[25]
  i690.fog = !!i691[26]
  request.r(i691[27], i691[28], 0, i690, 'skybox')
  i690.fogMode = i691[29]
  var i693 = i691[30]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i693[i + 0]) );
  }
  i690.lightmaps = i692
  i690.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i691[31], i690.lightProbes)
  i690.lightmapsMode = i691[32]
  i690.environmentLightingMode = i691[33]
  i690.ambientProbe = new pc.SphericalHarmonicsL2(i691[34])
  request.r(i691[35], i691[36], 0, i690, 'customReflection')
  request.r(i691[37], i691[38], 0, i690, 'defaultReflection')
  i690.defaultReflectionMode = i691[39]
  i690.defaultReflectionResolution = i691[40]
  i690.sunLightObjectId = i691[41]
  i690.pixelLightCount = i691[42]
  i690.defaultReflectionHDR = !!i691[43]
  i690.hasLightDataAsset = !!i691[44]
  i690.hasManualGenerate = !!i691[45]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'lightmapColor')
  request.r(i697[2], i697[3], 0, i696, 'lightmapDirection')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i698 = root || new UnityEngine.LightProbes()
  var i699 = data
  return i698
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i706 = root || request.c( 'TMPro.TMP_Settings' )
  var i707 = data
  i706.m_enableWordWrapping = !!i707[0]
  i706.m_enableKerning = !!i707[1]
  i706.m_enableExtraPadding = !!i707[2]
  i706.m_enableTintAllSprites = !!i707[3]
  i706.m_enableParseEscapeCharacters = !!i707[4]
  i706.m_EnableRaycastTarget = !!i707[5]
  i706.m_GetFontFeaturesAtRuntime = !!i707[6]
  i706.m_missingGlyphCharacter = i707[7]
  i706.m_warningsDisabled = !!i707[8]
  request.r(i707[9], i707[10], 0, i706, 'm_defaultFontAsset')
  i706.m_defaultFontAssetPath = i707[11]
  i706.m_defaultFontSize = i707[12]
  i706.m_defaultAutoSizeMinRatio = i707[13]
  i706.m_defaultAutoSizeMaxRatio = i707[14]
  i706.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i707[15], i707[16] )
  i706.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i707[17], i707[18] )
  i706.m_autoSizeTextContainer = !!i707[19]
  i706.m_IsTextObjectScaleStatic = !!i707[20]
  var i709 = i707[21]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i706.m_fallbackFontAssets = i708
  i706.m_matchMaterialPreset = !!i707[22]
  request.r(i707[23], i707[24], 0, i706, 'm_defaultSpriteAsset')
  i706.m_defaultSpriteAssetPath = i707[25]
  i706.m_enableEmojiSupport = !!i707[26]
  i706.m_MissingCharacterSpriteUnicode = i707[27]
  i706.m_defaultColorGradientPresetsPath = i707[28]
  request.r(i707[29], i707[30], 0, i706, 'm_defaultStyleSheet')
  i706.m_StyleSheetsResourcePath = i707[31]
  request.r(i707[32], i707[33], 0, i706, 'm_leadingCharacters')
  request.r(i707[34], i707[35], 0, i706, 'm_followingCharacters')
  i706.m_UseModernHangulLineBreakingRules = !!i707[36]
  return i706
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i710 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i711 = data
  i710.hashCode = i711[0]
  request.r(i711[1], i711[2], 0, i710, 'material')
  i710.materialHashCode = i711[3]
  request.r(i711[4], i711[5], 0, i710, 'spriteSheet')
  var i713 = i711[6]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i713.length; i += 1) {
    i712.add(request.d('TMPro.TMP_Sprite', i713[i + 0]));
  }
  i710.spriteInfoList = i712
  var i715 = i711[7]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 1, i714, '')
  }
  i710.fallbackSpriteAssets = i714
  i710.m_Version = i711[8]
  i710.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i711[9], i710.m_FaceInfo)
  var i717 = i711[10]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('TMPro.TMP_SpriteCharacter', i717[i + 0]));
  }
  i710.m_SpriteCharacterTable = i716
  var i719 = i711[11]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('TMPro.TMP_SpriteGlyph', i719[i + 0]));
  }
  i710.m_SpriteGlyphTable = i718
  return i710
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i722 = root || request.c( 'TMPro.TMP_Sprite' )
  var i723 = data
  i722.name = i723[0]
  i722.hashCode = i723[1]
  i722.unicode = i723[2]
  i722.pivot = new pc.Vec2( i723[3], i723[4] )
  request.r(i723[5], i723[6], 0, i722, 'sprite')
  i722.id = i723[7]
  i722.x = i723[8]
  i722.y = i723[9]
  i722.width = i723[10]
  i722.height = i723[11]
  i722.xOffset = i723[12]
  i722.yOffset = i723[13]
  i722.xAdvance = i723[14]
  i722.scale = i723[15]
  return i722
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i728 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i729 = data
  i728.m_Name = i729[0]
  i728.m_HashCode = i729[1]
  i728.m_ElementType = i729[2]
  i728.m_Unicode = i729[3]
  i728.m_GlyphIndex = i729[4]
  i728.m_Scale = i729[5]
  return i728
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i732 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'sprite')
  i732.m_Index = i733[2]
  i732.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i733[3], i732.m_Metrics)
  i732.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i733[4], i732.m_GlyphRect)
  i732.m_Scale = i733[5]
  i732.m_AtlasIndex = i733[6]
  return i732
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i734 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i735 = data
  var i737 = i735[0]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('TMPro.TMP_Style', i737[i + 0]));
  }
  i734.m_StyleList = i736
  return i734
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i740 = root || request.c( 'TMPro.TMP_Style' )
  var i741 = data
  i740.m_Name = i741[0]
  i740.m_HashCode = i741[1]
  i740.m_OpeningDefinition = i741[2]
  i740.m_ClosingDefinition = i741[3]
  i740.m_OpeningTagArray = i741[4]
  i740.m_ClosingTagArray = i741[5]
  i740.m_OpeningTagUnicodeArray = i741[6]
  i740.m_ClosingTagUnicodeArray = i741[7]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i743 = data
  var i745 = i743[0]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(i745[i + 0]);
  }
  i742.invalidShaderVariants = i744
  i742.name = i743[1]
  i742.guid = i743[2]
  var i747 = i743[3]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i742.shaderDefinedKeywords = i746
  var i749 = i743[4]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i749[i + 0]) );
  }
  i742.passes = i748
  var i751 = i743[5]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i751[i + 0]) );
  }
  i742.usePasses = i750
  var i753 = i743[6]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i753[i + 0]) );
  }
  i742.defaultParameterValues = i752
  request.r(i743[7], i743[8], 0, i742, 'unityFallbackShader')
  i742.readDepth = !!i743[9]
  i742.isCreatedByShaderGraph = !!i743[10]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i760 = root || new pc.UnityShaderPass()
  var i761 = data
  i760.id = i761[0]
  i760.subShaderIndex = i761[1]
  i760.name = i761[2]
  i760.passType = i761[3]
  i760.usePass = !!i761[4]
  i760.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[5], i760.zTest)
  i760.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[6], i760.zWrite)
  i760.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[7], i760.culling)
  i760.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i761[8], i760.blending)
  i760.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i761[9], i760.alphaBlending)
  i760.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[10], i760.colorWriteMask)
  i760.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[11], i760.offsetUnits)
  i760.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[12], i760.offsetFactor)
  i760.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[13], i760.stencilRef)
  i760.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[14], i760.stencilReadMask)
  i760.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[15], i760.stencilWriteMask)
  i760.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i761[16], i760.stencilOp)
  i760.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i761[17], i760.stencilOpFront)
  i760.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i761[18], i760.stencilOpBack)
  var i763 = i761[19]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i763[i + 0]) );
  }
  i760.tags = i762
  var i765 = i761[20]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( i765[i + 0] );
  }
  i760.passDefinedKeywords = i764
  var i767 = i761[21]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i767[i + 0]) );
  }
  i760.variants = i766
  var i769 = i761[22]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i769[i + 0]) );
  }
  i760.excludedVariants = i768
  i760.hasDepthReader = !!i761[23]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i771 = data
  i770.val = i771[0]
  i770.name = i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i773 = data
  i772.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[0], i772.src)
  i772.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[1], i772.dst)
  i772.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[2], i772.op)
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i775 = data
  i774.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[0], i774.pass)
  i774.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[1], i774.fail)
  i774.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[2], i774.zFail)
  i774.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[3], i774.comp)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i779 = data
  i778.name = i779[0]
  i778.value = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i783 = data
  i782.passId = i783[0]
  i782.subShaderIndex = i783[1]
  var i785 = i783[2]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i782.keywords = i784
  i782.vertexProgram = i783[3]
  i782.fragmentProgram = i783[4]
  i782.readDepth = !!i783[5]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'shader')
  i788.pass = i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i793 = data
  i792.name = i793[0]
  i792.type = i793[1]
  i792.value = new pc.Vec4( i793[2], i793[3], i793[4], i793[5] )
  i792.textureValue = i793[6]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i795 = data
  i794.name = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'texture')
  i794.aabb = i795[3]
  i794.vertices = i795[4]
  i794.triangles = i795[5]
  i794.textureRect = UnityEngine.Rect.MinMaxRect(i795[6], i795[7], i795[8], i795[9])
  i794.packedRect = UnityEngine.Rect.MinMaxRect(i795[10], i795[11], i795[12], i795[13])
  i794.border = new pc.Vec4( i795[14], i795[15], i795[16], i795[17] )
  i794.transparency = i795[18]
  i794.bounds = i795[19]
  i794.pixelsPerUnit = i795[20]
  i794.textureWidth = i795[21]
  i794.textureHeight = i795[22]
  i794.nativeSize = new pc.Vec2( i795[23], i795[24] )
  i794.pivot = new pc.Vec2( i795[25], i795[26] )
  i794.textureRectOffset = new pc.Vec2( i795[27], i795[28] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i797 = data
  i796.name = i797[0]
  i796.wrapMode = i797[1]
  i796.isLooping = !!i797[2]
  i796.length = i797[3]
  var i799 = i797[4]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i799[i + 0]) );
  }
  i796.curves = i798
  var i801 = i797[5]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i801[i + 0]) );
  }
  i796.events = i800
  i796.halfPrecision = !!i797[6]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i805 = data
  i804.path = i805[0]
  i804.componentType = i805[1]
  i804.property = i805[2]
  i804.keys = i805[3]
  var i807 = i805[4]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i807[i + 0]) );
  }
  i804.objectReferenceKeys = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i811 = data
  i810.time = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'value')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i815 = data
  i814.functionName = i815[0]
  i814.floatParameter = i815[1]
  i814.intParameter = i815[2]
  i814.stringParameter = i815[3]
  request.r(i815[4], i815[5], 0, i814, 'objectReferenceParameter')
  i814.time = i815[6]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i817 = data
  i816.name = i817[0]
  i816.ascent = i817[1]
  i816.originalLineHeight = i817[2]
  i816.fontSize = i817[3]
  var i819 = i817[4]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i819[i + 0]) );
  }
  i816.characterInfo = i818
  request.r(i817[5], i817[6], 0, i816, 'texture')
  i816.originalFontSize = i817[7]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i823 = data
  i822.index = i823[0]
  i822.advance = i823[1]
  i822.bearing = i823[2]
  i822.glyphWidth = i823[3]
  i822.glyphHeight = i823[4]
  i822.minX = i823[5]
  i822.maxX = i823[6]
  i822.minY = i823[7]
  i822.maxY = i823[8]
  i822.uvBottomLeftX = i823[9]
  i822.uvBottomLeftY = i823[10]
  i822.uvBottomRightX = i823[11]
  i822.uvBottomRightY = i823[12]
  i822.uvTopLeftX = i823[13]
  i822.uvTopLeftY = i823[14]
  i822.uvTopRightX = i823[15]
  i822.uvTopRightY = i823[16]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i825 = data
  i824.name = i825[0]
  var i827 = i825[1]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i827[i + 0]) );
  }
  i824.states = i826
  var i829 = i825[2]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i829[i + 0]) );
  }
  i824.layers = i828
  var i831 = i825[3]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i831[i + 0]) );
  }
  i824.parameters = i830
  var i833 = i825[4]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i824.animationClips = i832
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i837 = data
  i836.cycleOffset = i837[0]
  i836.cycleOffsetParameter = i837[1]
  i836.cycleOffsetParameterActive = !!i837[2]
  i836.mirror = !!i837[3]
  i836.mirrorParameter = i837[4]
  i836.mirrorParameterActive = !!i837[5]
  i836.motionId = i837[6]
  i836.nameHash = i837[7]
  i836.fullPathHash = i837[8]
  i836.speed = i837[9]
  i836.speedParameter = i837[10]
  i836.speedParameterActive = !!i837[11]
  i836.tag = i837[12]
  i836.name = i837[13]
  i836.writeDefaultValues = !!i837[14]
  var i839 = i837[15]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i839[i + 0]) );
  }
  i836.transitions = i838
  var i841 = i837[16]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i836.behaviours = i840
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i845 = data
  i844.fullPath = i845[0]
  i844.canTransitionToSelf = !!i845[1]
  i844.duration = i845[2]
  i844.exitTime = i845[3]
  i844.hasExitTime = !!i845[4]
  i844.hasFixedDuration = !!i845[5]
  i844.interruptionSource = i845[6]
  i844.offset = i845[7]
  i844.orderedInterruption = !!i845[8]
  i844.destinationStateNameHash = i845[9]
  i844.destinationStateMachineId = i845[10]
  i844.isExit = !!i845[11]
  i844.mute = !!i845[12]
  i844.solo = !!i845[13]
  var i847 = i845[14]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i847[i + 0]) );
  }
  i844.conditions = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i853 = data
  i852.blendingMode = i853[0]
  i852.defaultWeight = i853[1]
  i852.name = i853[2]
  i852.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i853[3], i852.stateMachine)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i855 = data
  i854.id = i855[0]
  i854.defaultStateNameHash = i855[1]
  var i857 = i855[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i857[i + 0]) );
  }
  i854.entryTransitions = i856
  var i859 = i855[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i859[i + 0]) );
  }
  i854.anyStateTransitions = i858
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i863 = data
  i862.destinationStateNameHash = i863[0]
  i862.destinationStateMachineId = i863[1]
  i862.isExit = !!i863[2]
  i862.mute = !!i863[3]
  i862.solo = !!i863[4]
  var i865 = i863[5]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i865[i + 0]) );
  }
  i862.conditions = i864
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i869 = data
  i868.defaultBool = !!i869[0]
  i868.defaultFloat = i869[1]
  i868.defaultInt = i869[2]
  i868.name = i869[3]
  i868.nameHash = i869[4]
  i868.type = i869[5]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i871 = data
  i870.name = i871[0]
  i870.bytes64 = i871[1]
  i870.data = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i875[i + 0]) );
  }
  i872.files = i874
  i872.componentToPrefabIds = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i879 = data
  i878.path = i879[0]
  request.r(i879[1], i879[2], 0, i878, 'unityObject')
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i881 = data
  var i883 = i881[0]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i883[i + 0]) );
  }
  i880.scriptsExecutionOrder = i882
  var i885 = i881[1]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i885[i + 0]) );
  }
  i880.sortingLayers = i884
  var i887 = i881[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i887[i + 0]) );
  }
  i880.cullingLayers = i886
  i880.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i881[3], i880.timeSettings)
  i880.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i881[4], i880.physicsSettings)
  i880.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i881[5], i880.physics2DSettings)
  i880.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i881[6], i880.qualitySettings)
  i880.removeShadows = !!i881[7]
  i880.autoInstantiatePrefabs = !!i881[8]
  i880.enableAutoInstancing = !!i881[9]
  i880.lightmapEncodingQuality = i881[10]
  i880.desiredColorSpace = i881[11]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i891 = data
  i890.name = i891[0]
  i890.value = i891[1]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i895 = data
  i894.id = i895[0]
  i894.name = i895[1]
  i894.value = i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i899 = data
  i898.id = i899[0]
  i898.name = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i901 = data
  i900.fixedDeltaTime = i901[0]
  i900.maximumDeltaTime = i901[1]
  i900.timeScale = i901[2]
  i900.maximumParticleTimestep = i901[3]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i903 = data
  i902.gravity = new pc.Vec3( i903[0], i903[1], i903[2] )
  i902.defaultSolverIterations = i903[3]
  i902.bounceThreshold = i903[4]
  i902.autoSyncTransforms = !!i903[5]
  i902.autoSimulation = !!i903[6]
  var i905 = i903[7]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i905[i + 0]) );
  }
  i902.collisionMatrix = i904
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i909 = data
  i908.enabled = !!i909[0]
  i908.layerId = i909[1]
  i908.otherLayerId = i909[2]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'material')
  i910.gravity = new pc.Vec2( i911[2], i911[3] )
  i910.positionIterations = i911[4]
  i910.velocityIterations = i911[5]
  i910.velocityThreshold = i911[6]
  i910.maxLinearCorrection = i911[7]
  i910.maxAngularCorrection = i911[8]
  i910.maxTranslationSpeed = i911[9]
  i910.maxRotationSpeed = i911[10]
  i910.timeToSleep = i911[11]
  i910.linearSleepTolerance = i911[12]
  i910.angularSleepTolerance = i911[13]
  i910.defaultContactOffset = i911[14]
  i910.autoSimulation = !!i911[15]
  i910.queriesHitTriggers = !!i911[16]
  i910.queriesStartInColliders = !!i911[17]
  i910.callbacksOnDisable = !!i911[18]
  i910.reuseCollisionCallbacks = !!i911[19]
  i910.autoSyncTransforms = !!i911[20]
  var i913 = i911[21]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i913[i + 0]) );
  }
  i910.collisionMatrix = i912
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i917 = data
  i916.enabled = !!i917[0]
  i916.layerId = i917[1]
  i916.otherLayerId = i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i921[i + 0]) );
  }
  i918.qualityLevels = i920
  var i923 = i919[1]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i918.names = i922
  i918.shadows = i919[2]
  i918.anisotropicFiltering = i919[3]
  i918.antiAliasing = i919[4]
  i918.lodBias = i919[5]
  i918.shadowCascades = i919[6]
  i918.shadowDistance = i919[7]
  i918.shadowmaskMode = i919[8]
  i918.shadowProjection = i919[9]
  i918.shadowResolution = i919[10]
  i918.softParticles = !!i919[11]
  i918.softVegetation = !!i919[12]
  i918.activeColorSpace = i919[13]
  i918.desiredColorSpace = i919[14]
  i918.masterTextureLimit = i919[15]
  i918.maxQueuedFrames = i919[16]
  i918.particleRaycastBudget = i919[17]
  i918.pixelLightCount = i919[18]
  i918.realtimeReflectionProbes = !!i919[19]
  i918.shadowCascade2Split = i919[20]
  i918.shadowCascade4Split = new pc.Vec3( i919[21], i919[22], i919[23] )
  i918.streamingMipmapsActive = !!i919[24]
  i918.vSyncCount = i919[25]
  i918.asyncUploadBufferSize = i919[26]
  i918.asyncUploadTimeSlice = i919[27]
  i918.billboardsFaceCameraPosition = !!i919[28]
  i918.shadowNearPlaneOffset = i919[29]
  i918.streamingMipmapsMemoryBudget = i919[30]
  i918.maximumLODLevel = i919[31]
  i918.streamingMipmapsAddAllCameras = !!i919[32]
  i918.streamingMipmapsMaxLevelReduction = i919[33]
  i918.streamingMipmapsRenderersPerFrame = i919[34]
  i918.resolutionScalingFixedDPIFactor = i919[35]
  i918.streamingMipmapsMaxFileIORequests = i919[36]
  i918.currentQualityLevel = i919[37]
  return i918
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i926 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i927 = data
  i926.xPlacement = i927[0]
  i926.yPlacement = i927[1]
  i926.xAdvance = i927[2]
  i926.yAdvance = i927[3]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i931 = data
  i930.mode = i931[0]
  i930.parameter = i931[1]
  i930.threshold = i931[2]
  return i930
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[6],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[13],"59":[13],"60":[13],"61":[13],"62":[13],"63":[13],"64":[13],"65":[13],"66":[13],"67":[13],"68":[13],"69":[13],"70":[13],"71":[6],"72":[73],"74":[75],"76":[75],"23":[22],"77":[10],"78":[22],"79":[27,22],"26":[23],"28":[27,22],"80":[22],"25":[23],"81":[22],"82":[22],"83":[22],"84":[22],"85":[22],"86":[22],"87":[22],"88":[22],"89":[27,22],"90":[27,22],"91":[22],"92":[22],"93":[22],"94":[22],"30":[27,22],"95":[22],"96":[31],"97":[31],"32":[31],"98":[31],"99":[6],"100":[6],"101":[102],"103":[6],"104":[22],"105":[27,22],"106":[73],"107":[27,22],"108":[27,22],"109":[73,27,22],"18":[22,27],"110":[22]}

Deserializers.types = ["UnityEngine.Shader","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraMovement","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.CapsuleCollider2D","BirdMovement","UnityEngine.GameObject","BirdDeath","TMPro.TextMeshProUGUI","GameOver","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BirdTutorial","GameManager","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.40f1";

Deserializers.productName = "FlappyBird";

Deserializers.lunaInitializationTime = "08/28/2022 16:26:06";

Deserializers.lunaDaysRunning = "3.0";

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

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.FlappyBird";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "d4b324c9-3278-4dd2-a5d5-af56ec85e11d";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

