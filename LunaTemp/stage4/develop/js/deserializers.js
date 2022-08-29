var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointSpring' )
  var i459 = data
  i458.spring = i459[0]
  i458.damper = i459[1]
  i458.targetPosition = i459[2]
  return i458
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointMotor' )
  var i461 = data
  i460.m_TargetVelocity = i461[0]
  i460.m_Force = i461[1]
  i460.m_FreeSpin = i461[2]
  return i460
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointLimits' )
  var i463 = data
  i462.m_Min = i463[0]
  i462.m_Max = i463[1]
  i462.m_Bounciness = i463[2]
  i462.m_BounceMinVelocity = i463[3]
  i462.m_ContactDistance = i463[4]
  i462.minBounce = i463[5]
  i462.maxBounce = i463[6]
  return i462
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointDrive' )
  var i465 = data
  i464.m_PositionSpring = i465[0]
  i464.m_PositionDamper = i465[1]
  i464.m_MaximumForce = i465[2]
  return i464
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i467 = data
  i466.m_Spring = i467[0]
  i466.m_Damper = i467[1]
  return i466
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i469 = data
  i468.m_Limit = i469[0]
  i468.m_Bounciness = i469[1]
  i468.m_ContactDistance = i469[2]
  return i468
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i471 = data
  i470.m_ExtremumSlip = i471[0]
  i470.m_ExtremumValue = i471[1]
  i470.m_AsymptoteSlip = i471[2]
  i470.m_AsymptoteValue = i471[3]
  i470.m_Stiffness = i471[4]
  return i470
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i473 = data
  i472.m_LowerAngle = i473[0]
  i472.m_UpperAngle = i473[1]
  return i472
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i475 = data
  i474.m_MotorSpeed = i475[0]
  i474.m_MaximumMotorTorque = i475[1]
  return i474
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i477 = data
  i476.m_DampingRatio = i477[0]
  i476.m_Frequency = i477[1]
  i476.m_Angle = i477[2]
  return i476
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i479 = data
  i478.m_LowerTranslation = i479[0]
  i478.m_UpperTranslation = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i480 = root || new pc.UnityMaterial()
  var i481 = data
  i480.name = i481[0]
  request.r(i481[1], i481[2], 0, i480, 'shader')
  i480.renderQueue = i481[3]
  i480.enableInstancing = !!i481[4]
  var i483 = i481[5]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i483[i + 0]) );
  }
  i480.floatParameters = i482
  var i485 = i481[6]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i485[i + 0]) );
  }
  i480.colorParameters = i484
  var i487 = i481[7]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i487[i + 0]) );
  }
  i480.vectorParameters = i486
  var i489 = i481[8]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i489[i + 0]) );
  }
  i480.textureParameters = i488
  var i491 = i481[9]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i491[i + 0]) );
  }
  i480.materialFlags = i490
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i495 = data
  i494.name = i495[0]
  i494.value = i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i499 = data
  i498.name = i499[0]
  i498.value = new pc.Color(i499[1], i499[2], i499[3], i499[4])
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i503 = data
  i502.name = i503[0]
  i502.value = new pc.Vec4( i503[1], i503[2], i503[3], i503[4] )
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'value')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i511 = data
  i510.name = i511[0]
  i510.enabled = !!i511[1]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i513 = data
  i512.name = i513[0]
  i512.width = i513[1]
  i512.height = i513[2]
  i512.mipmapCount = i513[3]
  i512.anisoLevel = i513[4]
  i512.filterMode = i513[5]
  i512.hdr = !!i513[6]
  i512.format = i513[7]
  i512.wrapMode = i513[8]
  i512.alphaIsTransparency = !!i513[9]
  i512.alphaSource = i513[10]
  return i512
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i514 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i515 = data
  i514.hashCode = i515[0]
  request.r(i515[1], i515[2], 0, i514, 'material')
  i514.materialHashCode = i515[3]
  request.r(i515[4], i515[5], 0, i514, 'atlas')
  i514.normalStyle = i515[6]
  i514.normalSpacingOffset = i515[7]
  i514.boldStyle = i515[8]
  i514.boldSpacing = i515[9]
  i514.italicStyle = i515[10]
  i514.tabSize = i515[11]
  i514.m_Version = i515[12]
  i514.m_SourceFontFileGUID = i515[13]
  request.r(i515[14], i515[15], 0, i514, 'm_SourceFontFile_EditorRef')
  request.r(i515[16], i515[17], 0, i514, 'm_SourceFontFile')
  i514.m_AtlasPopulationMode = i515[18]
  i514.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i515[19], i514.m_FaceInfo)
  var i517 = i515[20]
  var i516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i517.length; i += 1) {
    i516.add(request.d('UnityEngine.TextCore.Glyph', i517[i + 0]));
  }
  i514.m_GlyphTable = i516
  var i519 = i515[21]
  var i518 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i519.length; i += 1) {
    i518.add(request.d('TMPro.TMP_Character', i519[i + 0]));
  }
  i514.m_CharacterTable = i518
  var i521 = i515[22]
  var i520 = []
  for(var i = 0; i < i521.length; i += 2) {
  request.r(i521[i + 0], i521[i + 1], 2, i520, '')
  }
  i514.m_AtlasTextures = i520
  i514.m_AtlasTextureIndex = i515[23]
  i514.m_IsMultiAtlasTexturesEnabled = !!i515[24]
  i514.m_ClearDynamicDataOnBuild = !!i515[25]
  var i523 = i515[26]
  var i522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i523.length; i += 1) {
    i522.add(request.d('UnityEngine.TextCore.GlyphRect', i523[i + 0]));
  }
  i514.m_UsedGlyphRects = i522
  var i525 = i515[27]
  var i524 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i525.length; i += 1) {
    i524.add(request.d('UnityEngine.TextCore.GlyphRect', i525[i + 0]));
  }
  i514.m_FreeGlyphRects = i524
  i514.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i515[28], i514.m_fontInfo)
  i514.m_AtlasWidth = i515[29]
  i514.m_AtlasHeight = i515[30]
  i514.m_AtlasPadding = i515[31]
  i514.m_AtlasRenderMode = i515[32]
  var i527 = i515[33]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i527.length; i += 1) {
    i526.add(request.d('TMPro.TMP_Glyph', i527[i + 0]));
  }
  i514.m_glyphInfoList = i526
  i514.m_KerningTable = request.d('TMPro.KerningTable', i515[34], i514.m_KerningTable)
  i514.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i515[35], i514.m_FontFeatureTable)
  var i529 = i515[36]
  var i528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i529.length; i += 2) {
  request.r(i529[i + 0], i529[i + 1], 1, i528, '')
  }
  i514.fallbackFontAssets = i528
  var i531 = i515[37]
  var i530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i531.length; i += 2) {
  request.r(i531[i + 0], i531[i + 1], 1, i530, '')
  }
  i514.m_FallbackFontAssetTable = i530
  i514.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i515[38], i514.m_CreationSettings)
  var i533 = i515[39]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('TMPro.TMP_FontWeightPair', i533[i + 0]) );
  }
  i514.m_FontWeightTable = i532
  var i535 = i515[40]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('TMPro.TMP_FontWeightPair', i535[i + 0]) );
  }
  i514.fontWeights = i534
  return i514
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i537 = data
  i536.m_FaceIndex = i537[0]
  i536.m_FamilyName = i537[1]
  i536.m_StyleName = i537[2]
  i536.m_PointSize = i537[3]
  i536.m_Scale = i537[4]
  i536.m_LineHeight = i537[5]
  i536.m_AscentLine = i537[6]
  i536.m_CapLine = i537[7]
  i536.m_MeanLine = i537[8]
  i536.m_Baseline = i537[9]
  i536.m_DescentLine = i537[10]
  i536.m_SuperscriptOffset = i537[11]
  i536.m_SuperscriptSize = i537[12]
  i536.m_SubscriptOffset = i537[13]
  i536.m_SubscriptSize = i537[14]
  i536.m_UnderlineOffset = i537[15]
  i536.m_UnderlineThickness = i537[16]
  i536.m_StrikethroughOffset = i537[17]
  i536.m_StrikethroughThickness = i537[18]
  i536.m_TabWidth = i537[19]
  return i536
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i541 = data
  i540.m_Index = i541[0]
  i540.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i541[1], i540.m_Metrics)
  i540.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i541[2], i540.m_GlyphRect)
  i540.m_Scale = i541[3]
  i540.m_AtlasIndex = i541[4]
  return i540
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i543 = data
  i542.m_Width = i543[0]
  i542.m_Height = i543[1]
  i542.m_HorizontalBearingX = i543[2]
  i542.m_HorizontalBearingY = i543[3]
  i542.m_HorizontalAdvance = i543[4]
  return i542
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i545 = data
  i544.m_X = i545[0]
  i544.m_Y = i545[1]
  i544.m_Width = i545[2]
  i544.m_Height = i545[3]
  return i544
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i548 = root || request.c( 'TMPro.TMP_Character' )
  var i549 = data
  i548.m_ElementType = i549[0]
  i548.m_Unicode = i549[1]
  i548.m_GlyphIndex = i549[2]
  i548.m_Scale = i549[3]
  return i548
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i554 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i555 = data
  i554.Name = i555[0]
  i554.PointSize = i555[1]
  i554.Scale = i555[2]
  i554.CharacterCount = i555[3]
  i554.LineHeight = i555[4]
  i554.Baseline = i555[5]
  i554.Ascender = i555[6]
  i554.CapHeight = i555[7]
  i554.Descender = i555[8]
  i554.CenterLine = i555[9]
  i554.SuperscriptOffset = i555[10]
  i554.SubscriptOffset = i555[11]
  i554.SubSize = i555[12]
  i554.Underline = i555[13]
  i554.UnderlineThickness = i555[14]
  i554.strikethrough = i555[15]
  i554.strikethroughThickness = i555[16]
  i554.TabWidth = i555[17]
  i554.Padding = i555[18]
  i554.AtlasWidth = i555[19]
  i554.AtlasHeight = i555[20]
  return i554
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i558 = root || request.c( 'TMPro.TMP_Glyph' )
  var i559 = data
  i558.id = i559[0]
  i558.x = i559[1]
  i558.y = i559[2]
  i558.width = i559[3]
  i558.height = i559[4]
  i558.xOffset = i559[5]
  i558.yOffset = i559[6]
  i558.xAdvance = i559[7]
  i558.scale = i559[8]
  return i558
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i560 = root || request.c( 'TMPro.KerningTable' )
  var i561 = data
  var i563 = i561[0]
  var i562 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i563.length; i += 1) {
    i562.add(request.d('TMPro.KerningPair', i563[i + 0]));
  }
  i560.kerningPairs = i562
  return i560
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i566 = root || request.c( 'TMPro.KerningPair' )
  var i567 = data
  i566.xOffset = i567[0]
  i566.m_FirstGlyph = i567[1]
  i566.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i567[2], i566.m_FirstGlyphAdjustments)
  i566.m_SecondGlyph = i567[3]
  i566.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i567[4], i566.m_SecondGlyphAdjustments)
  i566.m_IgnoreSpacingAdjustments = !!i567[5]
  return i566
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i568 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i569 = data
  var i571 = i569[0]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i571.length; i += 1) {
    i570.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i571[i + 0]));
  }
  i568.m_GlyphPairAdjustmentRecords = i570
  return i568
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i574 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i575 = data
  i574.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i575[0], i574.m_FirstAdjustmentRecord)
  i574.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i575[1], i574.m_SecondAdjustmentRecord)
  i574.m_FeatureLookupFlags = i575[2]
  return i574
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i576 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i577 = data
  i576.m_GlyphIndex = i577[0]
  i576.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i577[1], i576.m_GlyphValueRecord)
  return i576
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i578 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i579 = data
  i578.m_XPlacement = i579[0]
  i578.m_YPlacement = i579[1]
  i578.m_XAdvance = i579[2]
  i578.m_YAdvance = i579[3]
  return i578
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i582 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i583 = data
  i582.sourceFontFileName = i583[0]
  i582.sourceFontFileGUID = i583[1]
  i582.pointSizeSamplingMode = i583[2]
  i582.pointSize = i583[3]
  i582.padding = i583[4]
  i582.packingMode = i583[5]
  i582.atlasWidth = i583[6]
  i582.atlasHeight = i583[7]
  i582.characterSetSelectionMode = i583[8]
  i582.characterSequence = i583[9]
  i582.referencedFontAssetGUID = i583[10]
  i582.referencedTextAssetGUID = i583[11]
  i582.fontStyle = i583[12]
  i582.fontStyleModifier = i583[13]
  i582.renderMode = i583[14]
  i582.includeFontFeatures = !!i583[15]
  return i582
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i586 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'regularTypeface')
  request.r(i587[2], i587[3], 0, i586, 'italicTypeface')
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i589 = data
  i588.name = i589[0]
  i588.atlasId = i589[1]
  i588.mipmapCount = i589[2]
  i588.hdr = !!i589[3]
  i588.size = i589[4]
  i588.anisoLevel = i589[5]
  i588.filterMode = i589[6]
  i588.wrapMode = i589[7]
  var i591 = i589[8]
  var i590 = []
  for(var i = 0; i < i591.length; i += 4) {
    i590.push( UnityEngine.Rect.MinMaxRect(i591[i + 0], i591[i + 1], i591[i + 2], i591[i + 3]) );
  }
  i588.rects = i590
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i595 = data
  i594.name = i595[0]
  i594.index = i595[1]
  i594.startup = !!i595[2]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i597 = data
  i596.position = new pc.Vec3( i597[0], i597[1], i597[2] )
  i596.scale = new pc.Vec3( i597[3], i597[4], i597[5] )
  i596.rotation = new pc.Quat(i597[6], i597[7], i597[8], i597[9])
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i599 = data
  i598.enabled = !!i599[0]
  i598.aspect = i599[1]
  i598.orthographic = !!i599[2]
  i598.orthographicSize = i599[3]
  i598.backgroundColor = new pc.Color(i599[4], i599[5], i599[6], i599[7])
  i598.nearClipPlane = i599[8]
  i598.farClipPlane = i599[9]
  i598.fieldOfView = i599[10]
  i598.depth = i599[11]
  i598.clearFlags = i599[12]
  i598.cullingMask = i599[13]
  i598.rect = i599[14]
  request.r(i599[15], i599[16], 0, i598, 'targetTexture')
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i601 = data
  i600.name = i601[0]
  i600.tag = i601[1]
  i600.enabled = !!i601[2]
  i600.isStatic = !!i601[3]
  i600.layer = i601[4]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i603 = data
  i602.enabled = !!i603[0]
  request.r(i603[1], i603[2], 0, i602, 'sharedMaterial')
  var i605 = i603[3]
  var i604 = []
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 2, i604, '')
  }
  i602.sharedMaterials = i604
  i602.receiveShadows = !!i603[4]
  i602.shadowCastingMode = i603[5]
  i602.sortingLayerID = i603[6]
  i602.sortingOrder = i603[7]
  i602.lightmapIndex = i603[8]
  i602.lightmapSceneIndex = i603[9]
  i602.lightmapScaleOffset = new pc.Vec4( i603[10], i603[11], i603[12], i603[13] )
  i602.lightProbeUsage = i603[14]
  i602.reflectionProbeUsage = i603[15]
  i602.color = new pc.Color(i603[16], i603[17], i603[18], i603[19])
  request.r(i603[20], i603[21], 0, i602, 'sprite')
  i602.flipX = !!i603[22]
  i602.flipY = !!i603[23]
  i602.drawMode = i603[24]
  i602.size = new pc.Vec2( i603[25], i603[26] )
  i602.tileMode = i603[27]
  i602.adaptiveModeThreshold = i603[28]
  i602.maskInteraction = i603[29]
  i602.spriteSortPoint = i603[30]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i609 = data
  i608.bodyType = i609[0]
  request.r(i609[1], i609[2], 0, i608, 'material')
  i608.simulated = !!i609[3]
  i608.useAutoMass = !!i609[4]
  i608.mass = i609[5]
  i608.drag = i609[6]
  i608.angularDrag = i609[7]
  i608.gravityScale = i609[8]
  i608.collisionDetectionMode = i609[9]
  i608.sleepMode = i609[10]
  i608.constraints = i609[11]
  return i608
}

Deserializers["BirdMovement"] = function (request, data, root) {
  var i610 = root || request.c( 'BirdMovement' )
  var i611 = data
  i610.jumpForce = i611[0]
  i610.speed = i611[1]
  i610.birdDeath = !!i611[2]
  request.r(i611[3], i611[4], 0, i610, 'tutorialBird')
  return i610
}

Deserializers["BirdDeath"] = function (request, data, root) {
  var i612 = root || request.c( 'BirdDeath' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'birdDeathSprite')
  request.r(i613[2], i613[3], 0, i612, 'scoreTextNumber')
  request.r(i613[4], i613[5], 0, i612, 'gameOverText')
  request.r(i613[6], i613[7], 0, i612, 'RetryText')
  i612.gameOverBool = !!i613[8]
  request.r(i613[9], i613[10], 0, i612, 'birdMovement')
  request.r(i613[11], i613[12], 0, i612, 'SP')
  request.r(i613[13], i613[14], 0, i612, 'emote1')
  request.r(i613[15], i613[16], 0, i612, 'emote2')
  request.r(i613[17], i613[18], 0, i612, 'emote3')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'animatorController')
  i614.updateMode = i615[2]
  var i617 = i615[3]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.humanBones = i616
  i614.enabled = !!i615[4]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i621 = data
  i620.usedByComposite = !!i621[0]
  i620.autoTiling = !!i621[1]
  i620.size = new pc.Vec2( i621[2], i621[3] )
  i620.edgeRadius = i621[4]
  i620.enabled = !!i621[5]
  i620.isTrigger = !!i621[6]
  i620.usedByEffector = !!i621[7]
  i620.density = i621[8]
  i620.offset = new pc.Vec2( i621[9], i621[10] )
  request.r(i621[11], i621[12], 0, i620, 'material')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i623 = data
  i622.pivot = new pc.Vec2( i623[0], i623[1] )
  i622.anchorMin = new pc.Vec2( i623[2], i623[3] )
  i622.anchorMax = new pc.Vec2( i623[4], i623[5] )
  i622.sizeDelta = new pc.Vec2( i623[6], i623[7] )
  i622.anchoredPosition3D = new pc.Vec3( i623[8], i623[9], i623[10] )
  i622.rotation = new pc.Quat(i623[11], i623[12], i623[13], i623[14])
  i622.scale = new pc.Vec3( i623[15], i623[16], i623[17] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i625 = data
  i624.enabled = !!i625[0]
  i624.planeDistance = i625[1]
  i624.referencePixelsPerUnit = i625[2]
  i624.isFallbackOverlay = !!i625[3]
  i624.renderMode = i625[4]
  i624.renderOrder = i625[5]
  i624.sortingLayerName = i625[6]
  i624.sortingOrder = i625[7]
  i624.scaleFactor = i625[8]
  request.r(i625[9], i625[10], 0, i624, 'worldCamera')
  i624.overrideSorting = !!i625[11]
  i624.pixelPerfect = !!i625[12]
  i624.targetDisplay = i625[13]
  i624.overridePixelPerfect = !!i625[14]
  return i624
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i627 = data
  i626.m_UiScaleMode = i627[0]
  i626.m_ReferencePixelsPerUnit = i627[1]
  i626.m_ScaleFactor = i627[2]
  i626.m_ReferenceResolution = new pc.Vec2( i627[3], i627[4] )
  i626.m_ScreenMatchMode = i627[5]
  i626.m_MatchWidthOrHeight = i627[6]
  i626.m_PhysicalUnit = i627[7]
  i626.m_FallbackScreenDPI = i627[8]
  i626.m_DefaultSpriteDPI = i627[9]
  i626.m_DynamicPixelsPerUnit = i627[10]
  return i626
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i629 = data
  i628.m_IgnoreReversedGraphics = !!i629[0]
  i628.m_BlockingObjects = i629[1]
  i628.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i629[2] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i631 = data
  i630.cullTransparentMesh = !!i631[0]
  return i630
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Image' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_Sprite')
  i632.m_Type = i633[2]
  i632.m_PreserveAspect = !!i633[3]
  i632.m_FillCenter = !!i633[4]
  i632.m_FillMethod = i633[5]
  i632.m_FillAmount = i633[6]
  i632.m_FillClockwise = !!i633[7]
  i632.m_FillOrigin = i633[8]
  i632.m_UseSpriteMesh = !!i633[9]
  i632.m_PixelsPerUnitMultiplier = i633[10]
  request.r(i633[11], i633[12], 0, i632, 'm_Material')
  i632.m_Maskable = !!i633[13]
  i632.m_Color = new pc.Color(i633[14], i633[15], i633[16], i633[17])
  i632.m_RaycastTarget = !!i633[18]
  return i632
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Button' )
  var i635 = data
  i634.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i635[0], i634.m_OnClick)
  i634.m_Navigation = request.d('UnityEngine.UI.Navigation', i635[1], i634.m_Navigation)
  i634.m_Transition = i635[2]
  i634.m_Colors = request.d('UnityEngine.UI.ColorBlock', i635[3], i634.m_Colors)
  i634.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i635[4], i634.m_SpriteState)
  i634.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i635[5], i634.m_AnimationTriggers)
  i634.m_Interactable = !!i635[6]
  request.r(i635[7], i635[8], 0, i634, 'm_TargetGraphic')
  return i634
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i637 = data
  i636.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i637[0], i636.m_PersistentCalls)
  return i636
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i639 = data
  var i641 = i639[0]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i641.length; i += 1) {
    i640.add(request.d('UnityEngine.Events.PersistentCall', i641[i + 0]));
  }
  i638.m_Calls = i640
  return i638
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_Target')
  i644.m_MethodName = i645[2]
  i644.m_Mode = i645[3]
  i644.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i645[4], i644.m_Arguments)
  i644.m_CallState = i645[5]
  return i644
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'm_ObjectArgument')
  i646.m_ObjectArgumentAssemblyTypeName = i647[2]
  i646.m_IntArgument = i647[3]
  i646.m_FloatArgument = i647[4]
  i646.m_StringArgument = i647[5]
  i646.m_BoolArgument = !!i647[6]
  return i646
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i649 = data
  i648.m_Mode = i649[0]
  request.r(i649[1], i649[2], 0, i648, 'm_SelectOnUp')
  request.r(i649[3], i649[4], 0, i648, 'm_SelectOnDown')
  request.r(i649[5], i649[6], 0, i648, 'm_SelectOnLeft')
  request.r(i649[7], i649[8], 0, i648, 'm_SelectOnRight')
  return i648
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i651 = data
  i650.m_NormalColor = new pc.Color(i651[0], i651[1], i651[2], i651[3])
  i650.m_HighlightedColor = new pc.Color(i651[4], i651[5], i651[6], i651[7])
  i650.m_PressedColor = new pc.Color(i651[8], i651[9], i651[10], i651[11])
  i650.m_SelectedColor = new pc.Color(i651[12], i651[13], i651[14], i651[15])
  i650.m_DisabledColor = new pc.Color(i651[16], i651[17], i651[18], i651[19])
  i650.m_ColorMultiplier = i651[20]
  i650.m_FadeDuration = i651[21]
  return i650
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'm_HighlightedSprite')
  request.r(i653[2], i653[3], 0, i652, 'm_PressedSprite')
  request.r(i653[4], i653[5], 0, i652, 'm_SelectedSprite')
  request.r(i653[6], i653[7], 0, i652, 'm_DisabledSprite')
  return i652
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i655 = data
  i654.m_NormalTrigger = i655[0]
  i654.m_HighlightedTrigger = i655[1]
  i654.m_PressedTrigger = i655[2]
  i654.m_SelectedTrigger = i655[3]
  i654.m_DisabledTrigger = i655[4]
  return i654
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i656 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i657 = data
  i656.m_hasFontAssetChanged = !!i657[0]
  request.r(i657[1], i657[2], 0, i656, 'm_baseMaterial')
  i656.m_maskOffset = new pc.Vec4( i657[3], i657[4], i657[5], i657[6] )
  i656.m_text = i657[7]
  i656.m_isRightToLeft = !!i657[8]
  request.r(i657[9], i657[10], 0, i656, 'm_fontAsset')
  request.r(i657[11], i657[12], 0, i656, 'm_sharedMaterial')
  var i659 = i657[13]
  var i658 = []
  for(var i = 0; i < i659.length; i += 2) {
  request.r(i659[i + 0], i659[i + 1], 2, i658, '')
  }
  i656.m_fontSharedMaterials = i658
  request.r(i657[14], i657[15], 0, i656, 'm_fontMaterial')
  var i661 = i657[16]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i656.m_fontMaterials = i660
  i656.m_fontColor32 = UnityEngine.Color32.ConstructColor(i657[17], i657[18], i657[19], i657[20])
  i656.m_fontColor = new pc.Color(i657[21], i657[22], i657[23], i657[24])
  i656.m_enableVertexGradient = !!i657[25]
  i656.m_colorMode = i657[26]
  i656.m_fontColorGradient = request.d('TMPro.VertexGradient', i657[27], i656.m_fontColorGradient)
  request.r(i657[28], i657[29], 0, i656, 'm_fontColorGradientPreset')
  request.r(i657[30], i657[31], 0, i656, 'm_spriteAsset')
  i656.m_tintAllSprites = !!i657[32]
  request.r(i657[33], i657[34], 0, i656, 'm_StyleSheet')
  i656.m_TextStyleHashCode = i657[35]
  i656.m_overrideHtmlColors = !!i657[36]
  i656.m_faceColor = UnityEngine.Color32.ConstructColor(i657[37], i657[38], i657[39], i657[40])
  i656.m_fontSize = i657[41]
  i656.m_fontSizeBase = i657[42]
  i656.m_fontWeight = i657[43]
  i656.m_enableAutoSizing = !!i657[44]
  i656.m_fontSizeMin = i657[45]
  i656.m_fontSizeMax = i657[46]
  i656.m_fontStyle = i657[47]
  i656.m_HorizontalAlignment = i657[48]
  i656.m_VerticalAlignment = i657[49]
  i656.m_textAlignment = i657[50]
  i656.m_characterSpacing = i657[51]
  i656.m_wordSpacing = i657[52]
  i656.m_lineSpacing = i657[53]
  i656.m_lineSpacingMax = i657[54]
  i656.m_paragraphSpacing = i657[55]
  i656.m_charWidthMaxAdj = i657[56]
  i656.m_enableWordWrapping = !!i657[57]
  i656.m_wordWrappingRatios = i657[58]
  i656.m_overflowMode = i657[59]
  request.r(i657[60], i657[61], 0, i656, 'm_linkedTextComponent')
  request.r(i657[62], i657[63], 0, i656, 'parentLinkedComponent')
  i656.m_enableKerning = !!i657[64]
  i656.m_enableExtraPadding = !!i657[65]
  i656.checkPaddingRequired = !!i657[66]
  i656.m_isRichText = !!i657[67]
  i656.m_parseCtrlCharacters = !!i657[68]
  i656.m_isOrthographic = !!i657[69]
  i656.m_isCullingEnabled = !!i657[70]
  i656.m_horizontalMapping = i657[71]
  i656.m_verticalMapping = i657[72]
  i656.m_uvLineOffset = i657[73]
  i656.m_geometrySortingOrder = i657[74]
  i656.m_IsTextObjectScaleStatic = !!i657[75]
  i656.m_VertexBufferAutoSizeReduction = !!i657[76]
  i656.m_useMaxVisibleDescender = !!i657[77]
  i656.m_pageToDisplay = i657[78]
  i656.m_margin = new pc.Vec4( i657[79], i657[80], i657[81], i657[82] )
  i656.m_isUsingLegacyAnimationComponent = !!i657[83]
  i656.m_isVolumetricText = !!i657[84]
  request.r(i657[85], i657[86], 0, i656, 'm_Material')
  i656.m_Maskable = !!i657[87]
  i656.m_Color = new pc.Color(i657[88], i657[89], i657[90], i657[91])
  i656.m_RaycastTarget = !!i657[92]
  return i656
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i662 = root || request.c( 'TMPro.VertexGradient' )
  var i663 = data
  i662.topLeft = new pc.Color(i663[0], i663[1], i663[2], i663[3])
  i662.topRight = new pc.Color(i663[4], i663[5], i663[6], i663[7])
  i662.bottomLeft = new pc.Color(i663[8], i663[9], i663[10], i663[11])
  i662.bottomRight = new pc.Color(i663[12], i663[13], i663[14], i663[15])
  return i662
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.Text' )
  var i665 = data
  i664.m_FontData = request.d('UnityEngine.UI.FontData', i665[0], i664.m_FontData)
  i664.m_Text = i665[1]
  request.r(i665[2], i665[3], 0, i664, 'm_Material')
  i664.m_Maskable = !!i665[4]
  i664.m_Color = new pc.Color(i665[5], i665[6], i665[7], i665[8])
  i664.m_RaycastTarget = !!i665[9]
  return i664
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.FontData' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_Font')
  i666.m_FontSize = i667[2]
  i666.m_FontStyle = i667[3]
  i666.m_BestFit = !!i667[4]
  i666.m_MinSize = i667[5]
  i666.m_MaxSize = i667[6]
  i666.m_Alignment = i667[7]
  i666.m_AlignByGeometry = !!i667[8]
  i666.m_RichText = !!i667[9]
  i666.m_HorizontalOverflow = i667[10]
  i666.m_VerticalOverflow = i667[11]
  i666.m_LineSpacing = i667[12]
  return i666
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_FirstSelected')
  i668.m_sendNavigationEvents = !!i669[2]
  i668.m_DragThreshold = i669[3]
  return i668
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i671 = data
  i670.m_HorizontalAxis = i671[0]
  i670.m_VerticalAxis = i671[1]
  i670.m_SubmitButton = i671[2]
  i670.m_CancelButton = i671[3]
  i670.m_InputActionsPerSecond = i671[4]
  i670.m_RepeatDelay = i671[5]
  i670.m_ForceModuleActive = !!i671[6]
  return i670
}

Deserializers["BirdTutorial"] = function (request, data, root) {
  var i672 = root || request.c( 'BirdTutorial' )
  var i673 = data
  i672.jumpForce = i673[0]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i675 = data
  i674.ambientIntensity = i675[0]
  i674.reflectionIntensity = i675[1]
  i674.ambientMode = i675[2]
  i674.ambientLight = new pc.Color(i675[3], i675[4], i675[5], i675[6])
  i674.ambientSkyColor = new pc.Color(i675[7], i675[8], i675[9], i675[10])
  i674.ambientGroundColor = new pc.Color(i675[11], i675[12], i675[13], i675[14])
  i674.ambientEquatorColor = new pc.Color(i675[15], i675[16], i675[17], i675[18])
  i674.fogColor = new pc.Color(i675[19], i675[20], i675[21], i675[22])
  i674.fogEndDistance = i675[23]
  i674.fogStartDistance = i675[24]
  i674.fogDensity = i675[25]
  i674.fog = !!i675[26]
  request.r(i675[27], i675[28], 0, i674, 'skybox')
  i674.fogMode = i675[29]
  var i677 = i675[30]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i677[i + 0]) );
  }
  i674.lightmaps = i676
  i674.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i675[31], i674.lightProbes)
  i674.lightmapsMode = i675[32]
  i674.environmentLightingMode = i675[33]
  i674.ambientProbe = new pc.SphericalHarmonicsL2(i675[34])
  request.r(i675[35], i675[36], 0, i674, 'customReflection')
  request.r(i675[37], i675[38], 0, i674, 'defaultReflection')
  i674.defaultReflectionMode = i675[39]
  i674.defaultReflectionResolution = i675[40]
  i674.sunLightObjectId = i675[41]
  i674.pixelLightCount = i675[42]
  i674.defaultReflectionHDR = !!i675[43]
  i674.hasLightDataAsset = !!i675[44]
  i674.hasManualGenerate = !!i675[45]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i681 = data
  request.r(i681[0], i681[1], 0, i680, 'lightmapColor')
  request.r(i681[2], i681[3], 0, i680, 'lightmapDirection')
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i682 = root || new UnityEngine.LightProbes()
  var i683 = data
  return i682
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i690 = root || request.c( 'TMPro.TMP_Settings' )
  var i691 = data
  i690.m_enableWordWrapping = !!i691[0]
  i690.m_enableKerning = !!i691[1]
  i690.m_enableExtraPadding = !!i691[2]
  i690.m_enableTintAllSprites = !!i691[3]
  i690.m_enableParseEscapeCharacters = !!i691[4]
  i690.m_EnableRaycastTarget = !!i691[5]
  i690.m_GetFontFeaturesAtRuntime = !!i691[6]
  i690.m_missingGlyphCharacter = i691[7]
  i690.m_warningsDisabled = !!i691[8]
  request.r(i691[9], i691[10], 0, i690, 'm_defaultFontAsset')
  i690.m_defaultFontAssetPath = i691[11]
  i690.m_defaultFontSize = i691[12]
  i690.m_defaultAutoSizeMinRatio = i691[13]
  i690.m_defaultAutoSizeMaxRatio = i691[14]
  i690.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i691[15], i691[16] )
  i690.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i691[17], i691[18] )
  i690.m_autoSizeTextContainer = !!i691[19]
  i690.m_IsTextObjectScaleStatic = !!i691[20]
  var i693 = i691[21]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 1, i692, '')
  }
  i690.m_fallbackFontAssets = i692
  i690.m_matchMaterialPreset = !!i691[22]
  request.r(i691[23], i691[24], 0, i690, 'm_defaultSpriteAsset')
  i690.m_defaultSpriteAssetPath = i691[25]
  i690.m_enableEmojiSupport = !!i691[26]
  i690.m_MissingCharacterSpriteUnicode = i691[27]
  i690.m_defaultColorGradientPresetsPath = i691[28]
  request.r(i691[29], i691[30], 0, i690, 'm_defaultStyleSheet')
  i690.m_StyleSheetsResourcePath = i691[31]
  request.r(i691[32], i691[33], 0, i690, 'm_leadingCharacters')
  request.r(i691[34], i691[35], 0, i690, 'm_followingCharacters')
  i690.m_UseModernHangulLineBreakingRules = !!i691[36]
  return i690
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i694 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i695 = data
  i694.hashCode = i695[0]
  request.r(i695[1], i695[2], 0, i694, 'material')
  i694.materialHashCode = i695[3]
  request.r(i695[4], i695[5], 0, i694, 'spriteSheet')
  var i697 = i695[6]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i697.length; i += 1) {
    i696.add(request.d('TMPro.TMP_Sprite', i697[i + 0]));
  }
  i694.spriteInfoList = i696
  var i699 = i695[7]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i694.fallbackSpriteAssets = i698
  i694.m_Version = i695[8]
  i694.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i695[9], i694.m_FaceInfo)
  var i701 = i695[10]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i701.length; i += 1) {
    i700.add(request.d('TMPro.TMP_SpriteCharacter', i701[i + 0]));
  }
  i694.m_SpriteCharacterTable = i700
  var i703 = i695[11]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(request.d('TMPro.TMP_SpriteGlyph', i703[i + 0]));
  }
  i694.m_SpriteGlyphTable = i702
  return i694
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i706 = root || request.c( 'TMPro.TMP_Sprite' )
  var i707 = data
  i706.name = i707[0]
  i706.hashCode = i707[1]
  i706.unicode = i707[2]
  i706.pivot = new pc.Vec2( i707[3], i707[4] )
  request.r(i707[5], i707[6], 0, i706, 'sprite')
  i706.id = i707[7]
  i706.x = i707[8]
  i706.y = i707[9]
  i706.width = i707[10]
  i706.height = i707[11]
  i706.xOffset = i707[12]
  i706.yOffset = i707[13]
  i706.xAdvance = i707[14]
  i706.scale = i707[15]
  return i706
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i712 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i713 = data
  i712.m_Name = i713[0]
  i712.m_HashCode = i713[1]
  i712.m_ElementType = i713[2]
  i712.m_Unicode = i713[3]
  i712.m_GlyphIndex = i713[4]
  i712.m_Scale = i713[5]
  return i712
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i716 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'sprite')
  i716.m_Index = i717[2]
  i716.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i717[3], i716.m_Metrics)
  i716.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i717[4], i716.m_GlyphRect)
  i716.m_Scale = i717[5]
  i716.m_AtlasIndex = i717[6]
  return i716
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i719 = data
  var i721 = i719[0]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('TMPro.TMP_Style', i721[i + 0]));
  }
  i718.m_StyleList = i720
  return i718
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i724 = root || request.c( 'TMPro.TMP_Style' )
  var i725 = data
  i724.m_Name = i725[0]
  i724.m_HashCode = i725[1]
  i724.m_OpeningDefinition = i725[2]
  i724.m_ClosingDefinition = i725[3]
  i724.m_OpeningTagArray = i725[4]
  i724.m_ClosingTagArray = i725[5]
  i724.m_OpeningTagUnicodeArray = i725[6]
  i724.m_ClosingTagUnicodeArray = i725[7]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(i729[i + 0]);
  }
  i726.invalidShaderVariants = i728
  i726.name = i727[1]
  i726.guid = i727[2]
  var i731 = i727[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i726.shaderDefinedKeywords = i730
  var i733 = i727[4]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i733[i + 0]) );
  }
  i726.passes = i732
  var i735 = i727[5]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i735[i + 0]) );
  }
  i726.usePasses = i734
  var i737 = i727[6]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i737[i + 0]) );
  }
  i726.defaultParameterValues = i736
  request.r(i727[7], i727[8], 0, i726, 'unityFallbackShader')
  i726.readDepth = !!i727[9]
  i726.isCreatedByShaderGraph = !!i727[10]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i744 = root || new pc.UnityShaderPass()
  var i745 = data
  i744.id = i745[0]
  i744.subShaderIndex = i745[1]
  i744.name = i745[2]
  i744.passType = i745[3]
  i744.usePass = !!i745[4]
  i744.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[5], i744.zTest)
  i744.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[6], i744.zWrite)
  i744.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[7], i744.culling)
  i744.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i745[8], i744.blending)
  i744.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i745[9], i744.alphaBlending)
  i744.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[10], i744.colorWriteMask)
  i744.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[11], i744.offsetUnits)
  i744.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[12], i744.offsetFactor)
  i744.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[13], i744.stencilRef)
  i744.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[14], i744.stencilReadMask)
  i744.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[15], i744.stencilWriteMask)
  i744.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i745[16], i744.stencilOp)
  i744.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i745[17], i744.stencilOpFront)
  i744.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i745[18], i744.stencilOpBack)
  var i747 = i745[19]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i747[i + 0]) );
  }
  i744.tags = i746
  var i749 = i745[20]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i744.passDefinedKeywords = i748
  var i751 = i745[21]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i751[i + 0]) );
  }
  i744.variants = i750
  var i753 = i745[22]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i753[i + 0]) );
  }
  i744.excludedVariants = i752
  i744.hasDepthReader = !!i745[23]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i755 = data
  i754.val = i755[0]
  i754.name = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i757 = data
  i756.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[0], i756.src)
  i756.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[1], i756.dst)
  i756.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i757[2], i756.op)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i759 = data
  i758.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[0], i758.pass)
  i758.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[1], i758.fail)
  i758.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[2], i758.zFail)
  i758.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[3], i758.comp)
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i763 = data
  i762.name = i763[0]
  i762.value = i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i767 = data
  i766.passId = i767[0]
  i766.subShaderIndex = i767[1]
  var i769 = i767[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( i769[i + 0] );
  }
  i766.keywords = i768
  i766.vertexProgram = i767[3]
  i766.fragmentProgram = i767[4]
  i766.readDepth = !!i767[5]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'shader')
  i772.pass = i773[2]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i777 = data
  i776.name = i777[0]
  i776.type = i777[1]
  i776.value = new pc.Vec4( i777[2], i777[3], i777[4], i777[5] )
  i776.textureValue = i777[6]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i779 = data
  i778.name = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'texture')
  i778.aabb = i779[3]
  i778.vertices = i779[4]
  i778.triangles = i779[5]
  i778.textureRect = UnityEngine.Rect.MinMaxRect(i779[6], i779[7], i779[8], i779[9])
  i778.packedRect = UnityEngine.Rect.MinMaxRect(i779[10], i779[11], i779[12], i779[13])
  i778.border = new pc.Vec4( i779[14], i779[15], i779[16], i779[17] )
  i778.transparency = i779[18]
  i778.bounds = i779[19]
  i778.pixelsPerUnit = i779[20]
  i778.textureWidth = i779[21]
  i778.textureHeight = i779[22]
  i778.nativeSize = new pc.Vec2( i779[23], i779[24] )
  i778.pivot = new pc.Vec2( i779[25], i779[26] )
  i778.textureRectOffset = new pc.Vec2( i779[27], i779[28] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i781 = data
  i780.name = i781[0]
  i780.wrapMode = i781[1]
  i780.isLooping = !!i781[2]
  i780.length = i781[3]
  var i783 = i781[4]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i783[i + 0]) );
  }
  i780.curves = i782
  var i785 = i781[5]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i785[i + 0]) );
  }
  i780.events = i784
  i780.halfPrecision = !!i781[6]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i789 = data
  i788.path = i789[0]
  i788.componentType = i789[1]
  i788.property = i789[2]
  i788.keys = i789[3]
  var i791 = i789[4]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i791[i + 0]) );
  }
  i788.objectReferenceKeys = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i795 = data
  i794.time = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'value')
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i799 = data
  i798.functionName = i799[0]
  i798.floatParameter = i799[1]
  i798.intParameter = i799[2]
  i798.stringParameter = i799[3]
  request.r(i799[4], i799[5], 0, i798, 'objectReferenceParameter')
  i798.time = i799[6]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i801 = data
  i800.name = i801[0]
  i800.ascent = i801[1]
  i800.originalLineHeight = i801[2]
  i800.fontSize = i801[3]
  var i803 = i801[4]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i803[i + 0]) );
  }
  i800.characterInfo = i802
  request.r(i801[5], i801[6], 0, i800, 'texture')
  i800.originalFontSize = i801[7]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i807 = data
  i806.index = i807[0]
  i806.advance = i807[1]
  i806.bearing = i807[2]
  i806.glyphWidth = i807[3]
  i806.glyphHeight = i807[4]
  i806.minX = i807[5]
  i806.maxX = i807[6]
  i806.minY = i807[7]
  i806.maxY = i807[8]
  i806.uvBottomLeftX = i807[9]
  i806.uvBottomLeftY = i807[10]
  i806.uvBottomRightX = i807[11]
  i806.uvBottomRightY = i807[12]
  i806.uvTopLeftX = i807[13]
  i806.uvTopLeftY = i807[14]
  i806.uvTopRightX = i807[15]
  i806.uvTopRightY = i807[16]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i809 = data
  i808.name = i809[0]
  var i811 = i809[1]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i811[i + 0]) );
  }
  i808.states = i810
  var i813 = i809[2]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i813[i + 0]) );
  }
  i808.layers = i812
  var i815 = i809[3]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i815[i + 0]) );
  }
  i808.parameters = i814
  var i817 = i809[4]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i808.animationClips = i816
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i821 = data
  i820.cycleOffset = i821[0]
  i820.cycleOffsetParameter = i821[1]
  i820.cycleOffsetParameterActive = !!i821[2]
  i820.mirror = !!i821[3]
  i820.mirrorParameter = i821[4]
  i820.mirrorParameterActive = !!i821[5]
  i820.motionId = i821[6]
  i820.nameHash = i821[7]
  i820.fullPathHash = i821[8]
  i820.speed = i821[9]
  i820.speedParameter = i821[10]
  i820.speedParameterActive = !!i821[11]
  i820.tag = i821[12]
  i820.name = i821[13]
  i820.writeDefaultValues = !!i821[14]
  var i823 = i821[15]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i823[i + 0]) );
  }
  i820.transitions = i822
  var i825 = i821[16]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i820.behaviours = i824
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i829 = data
  i828.fullPath = i829[0]
  i828.canTransitionToSelf = !!i829[1]
  i828.duration = i829[2]
  i828.exitTime = i829[3]
  i828.hasExitTime = !!i829[4]
  i828.hasFixedDuration = !!i829[5]
  i828.interruptionSource = i829[6]
  i828.offset = i829[7]
  i828.orderedInterruption = !!i829[8]
  i828.destinationStateNameHash = i829[9]
  i828.destinationStateMachineId = i829[10]
  i828.isExit = !!i829[11]
  i828.mute = !!i829[12]
  i828.solo = !!i829[13]
  var i831 = i829[14]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i831[i + 0]) );
  }
  i828.conditions = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i837 = data
  i836.blendingMode = i837[0]
  i836.defaultWeight = i837[1]
  i836.name = i837[2]
  i836.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i837[3], i836.stateMachine)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i839 = data
  i838.id = i839[0]
  i838.defaultStateNameHash = i839[1]
  var i841 = i839[2]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i841[i + 0]) );
  }
  i838.entryTransitions = i840
  var i843 = i839[3]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i843[i + 0]) );
  }
  i838.anyStateTransitions = i842
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i847 = data
  i846.destinationStateNameHash = i847[0]
  i846.destinationStateMachineId = i847[1]
  i846.isExit = !!i847[2]
  i846.mute = !!i847[3]
  i846.solo = !!i847[4]
  var i849 = i847[5]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i849[i + 0]) );
  }
  i846.conditions = i848
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i853 = data
  i852.defaultBool = !!i853[0]
  i852.defaultFloat = i853[1]
  i852.defaultInt = i853[2]
  i852.name = i853[3]
  i852.nameHash = i853[4]
  i852.type = i853[5]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i855 = data
  i854.name = i855[0]
  i854.bytes64 = i855[1]
  i854.data = i855[2]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i859[i + 0]) );
  }
  i856.files = i858
  i856.componentToPrefabIds = i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i863 = data
  i862.path = i863[0]
  request.r(i863[1], i863[2], 0, i862, 'unityObject')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i867[i + 0]) );
  }
  i864.scriptsExecutionOrder = i866
  var i869 = i865[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i869[i + 0]) );
  }
  i864.sortingLayers = i868
  var i871 = i865[2]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i871[i + 0]) );
  }
  i864.cullingLayers = i870
  i864.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i865[3], i864.timeSettings)
  i864.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i865[4], i864.physicsSettings)
  i864.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i865[5], i864.physics2DSettings)
  i864.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i865[6], i864.qualitySettings)
  i864.removeShadows = !!i865[7]
  i864.autoInstantiatePrefabs = !!i865[8]
  i864.enableAutoInstancing = !!i865[9]
  i864.lightmapEncodingQuality = i865[10]
  i864.desiredColorSpace = i865[11]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i875 = data
  i874.name = i875[0]
  i874.value = i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i879 = data
  i878.id = i879[0]
  i878.name = i879[1]
  i878.value = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i883 = data
  i882.id = i883[0]
  i882.name = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i885 = data
  i884.fixedDeltaTime = i885[0]
  i884.maximumDeltaTime = i885[1]
  i884.timeScale = i885[2]
  i884.maximumParticleTimestep = i885[3]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i887 = data
  i886.gravity = new pc.Vec3( i887[0], i887[1], i887[2] )
  i886.defaultSolverIterations = i887[3]
  i886.bounceThreshold = i887[4]
  i886.autoSyncTransforms = !!i887[5]
  i886.autoSimulation = !!i887[6]
  var i889 = i887[7]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i889[i + 0]) );
  }
  i886.collisionMatrix = i888
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i893 = data
  i892.enabled = !!i893[0]
  i892.layerId = i893[1]
  i892.otherLayerId = i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'material')
  i894.gravity = new pc.Vec2( i895[2], i895[3] )
  i894.positionIterations = i895[4]
  i894.velocityIterations = i895[5]
  i894.velocityThreshold = i895[6]
  i894.maxLinearCorrection = i895[7]
  i894.maxAngularCorrection = i895[8]
  i894.maxTranslationSpeed = i895[9]
  i894.maxRotationSpeed = i895[10]
  i894.timeToSleep = i895[11]
  i894.linearSleepTolerance = i895[12]
  i894.angularSleepTolerance = i895[13]
  i894.defaultContactOffset = i895[14]
  i894.autoSimulation = !!i895[15]
  i894.queriesHitTriggers = !!i895[16]
  i894.queriesStartInColliders = !!i895[17]
  i894.callbacksOnDisable = !!i895[18]
  i894.reuseCollisionCallbacks = !!i895[19]
  i894.autoSyncTransforms = !!i895[20]
  var i897 = i895[21]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i897[i + 0]) );
  }
  i894.collisionMatrix = i896
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i901 = data
  i900.enabled = !!i901[0]
  i900.layerId = i901[1]
  i900.otherLayerId = i901[2]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i903 = data
  var i905 = i903[0]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i905[i + 0]) );
  }
  i902.qualityLevels = i904
  var i907 = i903[1]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i902.names = i906
  i902.shadows = i903[2]
  i902.anisotropicFiltering = i903[3]
  i902.antiAliasing = i903[4]
  i902.lodBias = i903[5]
  i902.shadowCascades = i903[6]
  i902.shadowDistance = i903[7]
  i902.shadowmaskMode = i903[8]
  i902.shadowProjection = i903[9]
  i902.shadowResolution = i903[10]
  i902.softParticles = !!i903[11]
  i902.softVegetation = !!i903[12]
  i902.activeColorSpace = i903[13]
  i902.desiredColorSpace = i903[14]
  i902.masterTextureLimit = i903[15]
  i902.maxQueuedFrames = i903[16]
  i902.particleRaycastBudget = i903[17]
  i902.pixelLightCount = i903[18]
  i902.realtimeReflectionProbes = !!i903[19]
  i902.shadowCascade2Split = i903[20]
  i902.shadowCascade4Split = new pc.Vec3( i903[21], i903[22], i903[23] )
  i902.streamingMipmapsActive = !!i903[24]
  i902.vSyncCount = i903[25]
  i902.asyncUploadBufferSize = i903[26]
  i902.asyncUploadTimeSlice = i903[27]
  i902.billboardsFaceCameraPosition = !!i903[28]
  i902.shadowNearPlaneOffset = i903[29]
  i902.streamingMipmapsMemoryBudget = i903[30]
  i902.maximumLODLevel = i903[31]
  i902.streamingMipmapsAddAllCameras = !!i903[32]
  i902.streamingMipmapsMaxLevelReduction = i903[33]
  i902.streamingMipmapsRenderersPerFrame = i903[34]
  i902.resolutionScalingFixedDPIFactor = i903[35]
  i902.streamingMipmapsMaxFileIORequests = i903[36]
  i902.currentQualityLevel = i903[37]
  return i902
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i911 = data
  i910.xPlacement = i911[0]
  i910.yPlacement = i911[1]
  i910.xAdvance = i911[2]
  i910.yAdvance = i911[3]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i915 = data
  i914.mode = i915[0]
  i914.parameter = i915[1]
  i914.threshold = i915[2]
  return i914
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[44],"45":[6],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[47],"54":[10],"55":[10],"56":[10],"57":[10],"58":[10],"59":[10],"60":[10],"61":[10],"62":[10],"63":[10],"64":[10],"65":[10],"66":[10],"67":[6],"68":[69],"70":[71],"72":[71],"20":[19],"73":[8],"74":[19],"75":[24,19],"23":[20],"25":[24,19],"76":[19],"22":[20],"77":[19],"78":[19],"79":[19],"80":[19],"81":[19],"82":[19],"83":[19],"84":[19],"85":[24,19],"86":[24,19],"87":[19],"88":[19],"89":[19],"90":[19],"27":[24,19],"91":[19],"92":[28],"93":[28],"29":[28],"94":[28],"95":[6],"96":[6],"97":[98],"99":[6],"100":[19],"101":[24,19],"102":[69],"103":[24,19],"104":[24,19],"105":[69,24,19],"15":[19,24],"106":[19]}

Deserializers.types = ["UnityEngine.Shader","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","BirdMovement","UnityEngine.GameObject","BirdDeath","TMPro.TextMeshProUGUI","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.BoxCollider2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BirdTutorial","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.40f1";

Deserializers.productName = "FlappyBird";

Deserializers.lunaInitializationTime = "08/28/2022 16:26:06";

Deserializers.lunaDaysRunning = "1.0";

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

Deserializers.buildID = "61e8b923-a224-4d15-a7c1-6847fdfec75d";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

