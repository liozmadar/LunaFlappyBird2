var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.JointSpring' )
  var i1393 = data
  i1392.spring = i1393[0]
  i1392.damper = i1393[1]
  i1392.targetPosition = i1393[2]
  return i1392
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.JointMotor' )
  var i1395 = data
  i1394.m_TargetVelocity = i1395[0]
  i1394.m_Force = i1395[1]
  i1394.m_FreeSpin = i1395[2]
  return i1394
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.JointLimits' )
  var i1397 = data
  i1396.m_Min = i1397[0]
  i1396.m_Max = i1397[1]
  i1396.m_Bounciness = i1397[2]
  i1396.m_BounceMinVelocity = i1397[3]
  i1396.m_ContactDistance = i1397[4]
  i1396.minBounce = i1397[5]
  i1396.maxBounce = i1397[6]
  return i1396
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.JointDrive' )
  var i1399 = data
  i1398.m_PositionSpring = i1399[0]
  i1398.m_PositionDamper = i1399[1]
  i1398.m_MaximumForce = i1399[2]
  return i1398
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1401 = data
  i1400.m_Spring = i1401[0]
  i1400.m_Damper = i1401[1]
  return i1400
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1403 = data
  i1402.m_Limit = i1403[0]
  i1402.m_Bounciness = i1403[1]
  i1402.m_ContactDistance = i1403[2]
  return i1402
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1405 = data
  i1404.m_ExtremumSlip = i1405[0]
  i1404.m_ExtremumValue = i1405[1]
  i1404.m_AsymptoteSlip = i1405[2]
  i1404.m_AsymptoteValue = i1405[3]
  i1404.m_Stiffness = i1405[4]
  return i1404
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1407 = data
  i1406.m_LowerAngle = i1407[0]
  i1406.m_UpperAngle = i1407[1]
  return i1406
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1409 = data
  i1408.m_MotorSpeed = i1409[0]
  i1408.m_MaximumMotorTorque = i1409[1]
  return i1408
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1411 = data
  i1410.m_DampingRatio = i1411[0]
  i1410.m_Frequency = i1411[1]
  i1410.m_Angle = i1411[2]
  return i1410
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1413 = data
  i1412.m_LowerTranslation = i1413[0]
  i1412.m_UpperTranslation = i1413[1]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1414 = root || new pc.UnityMaterial()
  var i1415 = data
  i1414.name = i1415[0]
  request.r(i1415[1], i1415[2], 0, i1414, 'shader')
  i1414.renderQueue = i1415[3]
  i1414.enableInstancing = !!i1415[4]
  var i1417 = i1415[5]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1417[i + 0]) );
  }
  i1414.floatParameters = i1416
  var i1419 = i1415[6]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1419[i + 0]) );
  }
  i1414.colorParameters = i1418
  var i1421 = i1415[7]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1421[i + 0]) );
  }
  i1414.vectorParameters = i1420
  var i1423 = i1415[8]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1423[i + 0]) );
  }
  i1414.textureParameters = i1422
  var i1425 = i1415[9]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1425[i + 0]) );
  }
  i1414.materialFlags = i1424
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1429 = data
  i1428.name = i1429[0]
  i1428.value = i1429[1]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1433 = data
  i1432.name = i1433[0]
  i1432.value = new pc.Color(i1433[1], i1433[2], i1433[3], i1433[4])
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1437 = data
  i1436.name = i1437[0]
  i1436.value = new pc.Vec4( i1437[1], i1437[2], i1437[3], i1437[4] )
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1441 = data
  i1440.name = i1441[0]
  request.r(i1441[1], i1441[2], 0, i1440, 'value')
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1445 = data
  i1444.name = i1445[0]
  i1444.enabled = !!i1445[1]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1447 = data
  i1446.name = i1447[0]
  i1446.width = i1447[1]
  i1446.height = i1447[2]
  i1446.mipmapCount = i1447[3]
  i1446.anisoLevel = i1447[4]
  i1446.filterMode = i1447[5]
  i1446.hdr = !!i1447[6]
  i1446.format = i1447[7]
  i1446.wrapMode = i1447[8]
  i1446.alphaIsTransparency = !!i1447[9]
  i1446.alphaSource = i1447[10]
  return i1446
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1449 = data
  i1448.hashCode = i1449[0]
  request.r(i1449[1], i1449[2], 0, i1448, 'material')
  i1448.materialHashCode = i1449[3]
  request.r(i1449[4], i1449[5], 0, i1448, 'atlas')
  i1448.normalStyle = i1449[6]
  i1448.normalSpacingOffset = i1449[7]
  i1448.boldStyle = i1449[8]
  i1448.boldSpacing = i1449[9]
  i1448.italicStyle = i1449[10]
  i1448.tabSize = i1449[11]
  i1448.m_Version = i1449[12]
  i1448.m_SourceFontFileGUID = i1449[13]
  request.r(i1449[14], i1449[15], 0, i1448, 'm_SourceFontFile_EditorRef')
  request.r(i1449[16], i1449[17], 0, i1448, 'm_SourceFontFile')
  i1448.m_AtlasPopulationMode = i1449[18]
  i1448.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1449[19], i1448.m_FaceInfo)
  var i1451 = i1449[20]
  var i1450 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.add(request.d('UnityEngine.TextCore.Glyph', i1451[i + 0]));
  }
  i1448.m_GlyphTable = i1450
  var i1453 = i1449[21]
  var i1452 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.add(request.d('TMPro.TMP_Character', i1453[i + 0]));
  }
  i1448.m_CharacterTable = i1452
  var i1455 = i1449[22]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 2) {
  request.r(i1455[i + 0], i1455[i + 1], 2, i1454, '')
  }
  i1448.m_AtlasTextures = i1454
  i1448.m_AtlasTextureIndex = i1449[23]
  i1448.m_IsMultiAtlasTexturesEnabled = !!i1449[24]
  i1448.m_ClearDynamicDataOnBuild = !!i1449[25]
  var i1457 = i1449[26]
  var i1456 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.add(request.d('UnityEngine.TextCore.GlyphRect', i1457[i + 0]));
  }
  i1448.m_UsedGlyphRects = i1456
  var i1459 = i1449[27]
  var i1458 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.add(request.d('UnityEngine.TextCore.GlyphRect', i1459[i + 0]));
  }
  i1448.m_FreeGlyphRects = i1458
  i1448.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1449[28], i1448.m_fontInfo)
  i1448.m_AtlasWidth = i1449[29]
  i1448.m_AtlasHeight = i1449[30]
  i1448.m_AtlasPadding = i1449[31]
  i1448.m_AtlasRenderMode = i1449[32]
  var i1461 = i1449[33]
  var i1460 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.add(request.d('TMPro.TMP_Glyph', i1461[i + 0]));
  }
  i1448.m_glyphInfoList = i1460
  i1448.m_KerningTable = request.d('TMPro.KerningTable', i1449[34], i1448.m_KerningTable)
  i1448.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1449[35], i1448.m_FontFeatureTable)
  var i1463 = i1449[36]
  var i1462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1463.length; i += 2) {
  request.r(i1463[i + 0], i1463[i + 1], 1, i1462, '')
  }
  i1448.fallbackFontAssets = i1462
  var i1465 = i1449[37]
  var i1464 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1465.length; i += 2) {
  request.r(i1465[i + 0], i1465[i + 1], 1, i1464, '')
  }
  i1448.m_FallbackFontAssetTable = i1464
  i1448.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1449[38], i1448.m_CreationSettings)
  var i1467 = i1449[39]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('TMPro.TMP_FontWeightPair', i1467[i + 0]) );
  }
  i1448.m_FontWeightTable = i1466
  var i1469 = i1449[40]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('TMPro.TMP_FontWeightPair', i1469[i + 0]) );
  }
  i1448.fontWeights = i1468
  return i1448
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1470 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1471 = data
  i1470.m_FaceIndex = i1471[0]
  i1470.m_FamilyName = i1471[1]
  i1470.m_StyleName = i1471[2]
  i1470.m_PointSize = i1471[3]
  i1470.m_Scale = i1471[4]
  i1470.m_LineHeight = i1471[5]
  i1470.m_AscentLine = i1471[6]
  i1470.m_CapLine = i1471[7]
  i1470.m_MeanLine = i1471[8]
  i1470.m_Baseline = i1471[9]
  i1470.m_DescentLine = i1471[10]
  i1470.m_SuperscriptOffset = i1471[11]
  i1470.m_SuperscriptSize = i1471[12]
  i1470.m_SubscriptOffset = i1471[13]
  i1470.m_SubscriptSize = i1471[14]
  i1470.m_UnderlineOffset = i1471[15]
  i1470.m_UnderlineThickness = i1471[16]
  i1470.m_StrikethroughOffset = i1471[17]
  i1470.m_StrikethroughThickness = i1471[18]
  i1470.m_TabWidth = i1471[19]
  return i1470
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1474 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1475 = data
  i1474.m_Index = i1475[0]
  i1474.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1475[1], i1474.m_Metrics)
  i1474.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1475[2], i1474.m_GlyphRect)
  i1474.m_Scale = i1475[3]
  i1474.m_AtlasIndex = i1475[4]
  return i1474
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1476 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1477 = data
  i1476.m_Width = i1477[0]
  i1476.m_Height = i1477[1]
  i1476.m_HorizontalBearingX = i1477[2]
  i1476.m_HorizontalBearingY = i1477[3]
  i1476.m_HorizontalAdvance = i1477[4]
  return i1476
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1478 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1479 = data
  i1478.m_X = i1479[0]
  i1478.m_Y = i1479[1]
  i1478.m_Width = i1479[2]
  i1478.m_Height = i1479[3]
  return i1478
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1482 = root || request.c( 'TMPro.TMP_Character' )
  var i1483 = data
  i1482.m_ElementType = i1483[0]
  i1482.m_Unicode = i1483[1]
  i1482.m_GlyphIndex = i1483[2]
  i1482.m_Scale = i1483[3]
  return i1482
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1488 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1489 = data
  i1488.Name = i1489[0]
  i1488.PointSize = i1489[1]
  i1488.Scale = i1489[2]
  i1488.CharacterCount = i1489[3]
  i1488.LineHeight = i1489[4]
  i1488.Baseline = i1489[5]
  i1488.Ascender = i1489[6]
  i1488.CapHeight = i1489[7]
  i1488.Descender = i1489[8]
  i1488.CenterLine = i1489[9]
  i1488.SuperscriptOffset = i1489[10]
  i1488.SubscriptOffset = i1489[11]
  i1488.SubSize = i1489[12]
  i1488.Underline = i1489[13]
  i1488.UnderlineThickness = i1489[14]
  i1488.strikethrough = i1489[15]
  i1488.strikethroughThickness = i1489[16]
  i1488.TabWidth = i1489[17]
  i1488.Padding = i1489[18]
  i1488.AtlasWidth = i1489[19]
  i1488.AtlasHeight = i1489[20]
  return i1488
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1492 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1493 = data
  i1492.id = i1493[0]
  i1492.x = i1493[1]
  i1492.y = i1493[2]
  i1492.width = i1493[3]
  i1492.height = i1493[4]
  i1492.xOffset = i1493[5]
  i1492.yOffset = i1493[6]
  i1492.xAdvance = i1493[7]
  i1492.scale = i1493[8]
  return i1492
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1494 = root || request.c( 'TMPro.KerningTable' )
  var i1495 = data
  var i1497 = i1495[0]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('TMPro.KerningPair', i1497[i + 0]));
  }
  i1494.kerningPairs = i1496
  return i1494
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1500 = root || request.c( 'TMPro.KerningPair' )
  var i1501 = data
  i1500.xOffset = i1501[0]
  i1500.m_FirstGlyph = i1501[1]
  i1500.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1501[2], i1500.m_FirstGlyphAdjustments)
  i1500.m_SecondGlyph = i1501[3]
  i1500.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1501[4], i1500.m_SecondGlyphAdjustments)
  i1500.m_IgnoreSpacingAdjustments = !!i1501[5]
  return i1500
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1502 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1503 = data
  var i1505 = i1503[0]
  var i1504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1505[i + 0]));
  }
  i1502.m_GlyphPairAdjustmentRecords = i1504
  return i1502
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1508 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1509 = data
  i1508.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1509[0], i1508.m_FirstAdjustmentRecord)
  i1508.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1509[1], i1508.m_SecondAdjustmentRecord)
  i1508.m_FeatureLookupFlags = i1509[2]
  return i1508
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1510 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1511 = data
  i1510.m_GlyphIndex = i1511[0]
  i1510.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1511[1], i1510.m_GlyphValueRecord)
  return i1510
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1512 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1513 = data
  i1512.m_XPlacement = i1513[0]
  i1512.m_YPlacement = i1513[1]
  i1512.m_XAdvance = i1513[2]
  i1512.m_YAdvance = i1513[3]
  return i1512
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1516 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1517 = data
  i1516.sourceFontFileName = i1517[0]
  i1516.sourceFontFileGUID = i1517[1]
  i1516.pointSizeSamplingMode = i1517[2]
  i1516.pointSize = i1517[3]
  i1516.padding = i1517[4]
  i1516.packingMode = i1517[5]
  i1516.atlasWidth = i1517[6]
  i1516.atlasHeight = i1517[7]
  i1516.characterSetSelectionMode = i1517[8]
  i1516.characterSequence = i1517[9]
  i1516.referencedFontAssetGUID = i1517[10]
  i1516.referencedTextAssetGUID = i1517[11]
  i1516.fontStyle = i1517[12]
  i1516.fontStyleModifier = i1517[13]
  i1516.renderMode = i1517[14]
  i1516.includeFontFeatures = !!i1517[15]
  return i1516
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1520 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'regularTypeface')
  request.r(i1521[2], i1521[3], 0, i1520, 'italicTypeface')
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1523 = data
  i1522.name = i1523[0]
  i1522.atlasId = i1523[1]
  i1522.mipmapCount = i1523[2]
  i1522.hdr = !!i1523[3]
  i1522.size = i1523[4]
  i1522.anisoLevel = i1523[5]
  i1522.filterMode = i1523[6]
  i1522.wrapMode = i1523[7]
  var i1525 = i1523[8]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 4) {
    i1524.push( UnityEngine.Rect.MinMaxRect(i1525[i + 0], i1525[i + 1], i1525[i + 2], i1525[i + 3]) );
  }
  i1522.rects = i1524
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1529 = data
  i1528.name = i1529[0]
  i1528.index = i1529[1]
  i1528.startup = !!i1529[2]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1531 = data
  i1530.position = new pc.Vec3( i1531[0], i1531[1], i1531[2] )
  i1530.scale = new pc.Vec3( i1531[3], i1531[4], i1531[5] )
  i1530.rotation = new pc.Quat(i1531[6], i1531[7], i1531[8], i1531[9])
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1533 = data
  i1532.enabled = !!i1533[0]
  i1532.aspect = i1533[1]
  i1532.orthographic = !!i1533[2]
  i1532.orthographicSize = i1533[3]
  i1532.backgroundColor = new pc.Color(i1533[4], i1533[5], i1533[6], i1533[7])
  i1532.nearClipPlane = i1533[8]
  i1532.farClipPlane = i1533[9]
  i1532.fieldOfView = i1533[10]
  i1532.depth = i1533[11]
  i1532.clearFlags = i1533[12]
  i1532.cullingMask = i1533[13]
  i1532.rect = i1533[14]
  request.r(i1533[15], i1533[16], 0, i1532, 'targetTexture')
  return i1532
}

Deserializers["CameraMovement"] = function (request, data, root) {
  var i1534 = root || request.c( 'CameraMovement' )
  var i1535 = data
  request.r(i1535[0], i1535[1], 0, i1534, 'player')
  i1534.smoothing = i1535[2]
  i1534.offset = new pc.Vec3( i1535[3], i1535[4], i1535[5] )
  i1534.minPos = new pc.Vec3( i1535[6], i1535[7], i1535[8] )
  i1534.maxPos = new pc.Vec3( i1535[9], i1535[10], i1535[11] )
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1537 = data
  i1536.name = i1537[0]
  i1536.tag = i1537[1]
  i1536.enabled = !!i1537[2]
  i1536.isStatic = !!i1537[3]
  i1536.layer = i1537[4]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1539 = data
  i1538.enabled = !!i1539[0]
  request.r(i1539[1], i1539[2], 0, i1538, 'sharedMaterial')
  var i1541 = i1539[3]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 2) {
  request.r(i1541[i + 0], i1541[i + 1], 2, i1540, '')
  }
  i1538.sharedMaterials = i1540
  i1538.receiveShadows = !!i1539[4]
  i1538.shadowCastingMode = i1539[5]
  i1538.sortingLayerID = i1539[6]
  i1538.sortingOrder = i1539[7]
  i1538.lightmapIndex = i1539[8]
  i1538.lightmapSceneIndex = i1539[9]
  i1538.lightmapScaleOffset = new pc.Vec4( i1539[10], i1539[11], i1539[12], i1539[13] )
  i1538.lightProbeUsage = i1539[14]
  i1538.reflectionProbeUsage = i1539[15]
  i1538.color = new pc.Color(i1539[16], i1539[17], i1539[18], i1539[19])
  request.r(i1539[20], i1539[21], 0, i1538, 'sprite')
  i1538.flipX = !!i1539[22]
  i1538.flipY = !!i1539[23]
  i1538.drawMode = i1539[24]
  i1538.size = new pc.Vec2( i1539[25], i1539[26] )
  i1538.tileMode = i1539[27]
  i1538.adaptiveModeThreshold = i1539[28]
  i1538.maskInteraction = i1539[29]
  i1538.spriteSortPoint = i1539[30]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1545 = data
  i1544.usedByComposite = !!i1545[0]
  i1544.autoTiling = !!i1545[1]
  i1544.size = new pc.Vec2( i1545[2], i1545[3] )
  i1544.edgeRadius = i1545[4]
  i1544.enabled = !!i1545[5]
  i1544.isTrigger = !!i1545[6]
  i1544.usedByEffector = !!i1545[7]
  i1544.density = i1545[8]
  i1544.offset = new pc.Vec2( i1545[9], i1545[10] )
  request.r(i1545[11], i1545[12], 0, i1544, 'material')
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1547 = data
  i1546.bodyType = i1547[0]
  request.r(i1547[1], i1547[2], 0, i1546, 'material')
  i1546.simulated = !!i1547[3]
  i1546.useAutoMass = !!i1547[4]
  i1546.mass = i1547[5]
  i1546.drag = i1547[6]
  i1546.angularDrag = i1547[7]
  i1546.gravityScale = i1547[8]
  i1546.collisionDetectionMode = i1547[9]
  i1546.sleepMode = i1547[10]
  i1546.constraints = i1547[11]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i1549 = data
  i1548.size = new pc.Vec2( i1549[0], i1549[1] )
  i1548.direction = i1549[2]
  i1548.enabled = !!i1549[3]
  i1548.isTrigger = !!i1549[4]
  i1548.usedByEffector = !!i1549[5]
  i1548.density = i1549[6]
  i1548.offset = new pc.Vec2( i1549[7], i1549[8] )
  request.r(i1549[9], i1549[10], 0, i1548, 'material')
  return i1548
}

Deserializers["BirdMovement"] = function (request, data, root) {
  var i1550 = root || request.c( 'BirdMovement' )
  var i1551 = data
  i1550.jumpForce = i1551[0]
  i1550.speed = i1551[1]
  i1550.birdDeath = !!i1551[2]
  request.r(i1551[3], i1551[4], 0, i1550, 'tutorialBird')
  return i1550
}

Deserializers["BirdDeath"] = function (request, data, root) {
  var i1552 = root || request.c( 'BirdDeath' )
  var i1553 = data
  request.r(i1553[0], i1553[1], 0, i1552, 'birdDeathSprite')
  request.r(i1553[2], i1553[3], 0, i1552, 'scoreTextNumber')
  request.r(i1553[4], i1553[5], 0, i1552, 'gameOverText')
  request.r(i1553[6], i1553[7], 0, i1552, 'RetryText')
  i1552.gameOverBool = !!i1553[8]
  request.r(i1553[9], i1553[10], 0, i1552, 'birdMovement')
  request.r(i1553[11], i1553[12], 0, i1552, 'SP')
  request.r(i1553[13], i1553[14], 0, i1552, 'emote1')
  request.r(i1553[15], i1553[16], 0, i1552, 'emote2')
  request.r(i1553[17], i1553[18], 0, i1552, 'emote3')
  return i1552
}

Deserializers["GameOver"] = function (request, data, root) {
  var i1554 = root || request.c( 'GameOver' )
  var i1555 = data
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'animatorController')
  i1556.updateMode = i1557[2]
  var i1559 = i1557[3]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 2) {
  request.r(i1559[i + 0], i1559[i + 1], 2, i1558, '')
  }
  i1556.humanBones = i1558
  i1556.enabled = !!i1557[4]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1563 = data
  i1562.pivot = new pc.Vec2( i1563[0], i1563[1] )
  i1562.anchorMin = new pc.Vec2( i1563[2], i1563[3] )
  i1562.anchorMax = new pc.Vec2( i1563[4], i1563[5] )
  i1562.sizeDelta = new pc.Vec2( i1563[6], i1563[7] )
  i1562.anchoredPosition3D = new pc.Vec3( i1563[8], i1563[9], i1563[10] )
  i1562.rotation = new pc.Quat(i1563[11], i1563[12], i1563[13], i1563[14])
  i1562.scale = new pc.Vec3( i1563[15], i1563[16], i1563[17] )
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1565 = data
  i1564.enabled = !!i1565[0]
  i1564.planeDistance = i1565[1]
  i1564.referencePixelsPerUnit = i1565[2]
  i1564.isFallbackOverlay = !!i1565[3]
  i1564.renderMode = i1565[4]
  i1564.renderOrder = i1565[5]
  i1564.sortingLayerName = i1565[6]
  i1564.sortingOrder = i1565[7]
  i1564.scaleFactor = i1565[8]
  request.r(i1565[9], i1565[10], 0, i1564, 'worldCamera')
  i1564.overrideSorting = !!i1565[11]
  i1564.pixelPerfect = !!i1565[12]
  i1564.targetDisplay = i1565[13]
  i1564.overridePixelPerfect = !!i1565[14]
  return i1564
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1566 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1567 = data
  i1566.m_UiScaleMode = i1567[0]
  i1566.m_ReferencePixelsPerUnit = i1567[1]
  i1566.m_ScaleFactor = i1567[2]
  i1566.m_ReferenceResolution = new pc.Vec2( i1567[3], i1567[4] )
  i1566.m_ScreenMatchMode = i1567[5]
  i1566.m_MatchWidthOrHeight = i1567[6]
  i1566.m_PhysicalUnit = i1567[7]
  i1566.m_FallbackScreenDPI = i1567[8]
  i1566.m_DefaultSpriteDPI = i1567[9]
  i1566.m_DynamicPixelsPerUnit = i1567[10]
  return i1566
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1568 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1569 = data
  i1568.m_IgnoreReversedGraphics = !!i1569[0]
  i1568.m_BlockingObjects = i1569[1]
  i1568.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1569[2] )
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1571 = data
  i1570.cullTransparentMesh = !!i1571[0]
  return i1570
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.UI.Image' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'm_Sprite')
  i1572.m_Type = i1573[2]
  i1572.m_PreserveAspect = !!i1573[3]
  i1572.m_FillCenter = !!i1573[4]
  i1572.m_FillMethod = i1573[5]
  i1572.m_FillAmount = i1573[6]
  i1572.m_FillClockwise = !!i1573[7]
  i1572.m_FillOrigin = i1573[8]
  i1572.m_UseSpriteMesh = !!i1573[9]
  i1572.m_PixelsPerUnitMultiplier = i1573[10]
  request.r(i1573[11], i1573[12], 0, i1572, 'm_Material')
  i1572.m_Maskable = !!i1573[13]
  i1572.m_Color = new pc.Color(i1573[14], i1573[15], i1573[16], i1573[17])
  i1572.m_RaycastTarget = !!i1573[18]
  return i1572
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.UI.Button' )
  var i1575 = data
  i1574.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1575[0], i1574.m_OnClick)
  i1574.m_Navigation = request.d('UnityEngine.UI.Navigation', i1575[1], i1574.m_Navigation)
  i1574.m_Transition = i1575[2]
  i1574.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1575[3], i1574.m_Colors)
  i1574.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1575[4], i1574.m_SpriteState)
  i1574.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1575[5], i1574.m_AnimationTriggers)
  i1574.m_Interactable = !!i1575[6]
  request.r(i1575[7], i1575[8], 0, i1574, 'm_TargetGraphic')
  return i1574
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1577 = data
  i1576.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1577[0], i1576.m_PersistentCalls)
  return i1576
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1579 = data
  var i1581 = i1579[0]
  var i1580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.add(request.d('UnityEngine.Events.PersistentCall', i1581[i + 0]));
  }
  i1578.m_Calls = i1580
  return i1578
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'm_Target')
  i1584.m_MethodName = i1585[2]
  i1584.m_Mode = i1585[3]
  i1584.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1585[4], i1584.m_Arguments)
  i1584.m_CallState = i1585[5]
  return i1584
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'm_ObjectArgument')
  i1586.m_ObjectArgumentAssemblyTypeName = i1587[2]
  i1586.m_IntArgument = i1587[3]
  i1586.m_FloatArgument = i1587[4]
  i1586.m_StringArgument = i1587[5]
  i1586.m_BoolArgument = !!i1587[6]
  return i1586
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1589 = data
  i1588.m_Mode = i1589[0]
  request.r(i1589[1], i1589[2], 0, i1588, 'm_SelectOnUp')
  request.r(i1589[3], i1589[4], 0, i1588, 'm_SelectOnDown')
  request.r(i1589[5], i1589[6], 0, i1588, 'm_SelectOnLeft')
  request.r(i1589[7], i1589[8], 0, i1588, 'm_SelectOnRight')
  return i1588
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1591 = data
  i1590.m_NormalColor = new pc.Color(i1591[0], i1591[1], i1591[2], i1591[3])
  i1590.m_HighlightedColor = new pc.Color(i1591[4], i1591[5], i1591[6], i1591[7])
  i1590.m_PressedColor = new pc.Color(i1591[8], i1591[9], i1591[10], i1591[11])
  i1590.m_SelectedColor = new pc.Color(i1591[12], i1591[13], i1591[14], i1591[15])
  i1590.m_DisabledColor = new pc.Color(i1591[16], i1591[17], i1591[18], i1591[19])
  i1590.m_ColorMultiplier = i1591[20]
  i1590.m_FadeDuration = i1591[21]
  return i1590
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'm_HighlightedSprite')
  request.r(i1593[2], i1593[3], 0, i1592, 'm_PressedSprite')
  request.r(i1593[4], i1593[5], 0, i1592, 'm_SelectedSprite')
  request.r(i1593[6], i1593[7], 0, i1592, 'm_DisabledSprite')
  return i1592
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1594 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1595 = data
  i1594.m_NormalTrigger = i1595[0]
  i1594.m_HighlightedTrigger = i1595[1]
  i1594.m_PressedTrigger = i1595[2]
  i1594.m_SelectedTrigger = i1595[3]
  i1594.m_DisabledTrigger = i1595[4]
  return i1594
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1596 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1597 = data
  i1596.m_hasFontAssetChanged = !!i1597[0]
  request.r(i1597[1], i1597[2], 0, i1596, 'm_baseMaterial')
  i1596.m_maskOffset = new pc.Vec4( i1597[3], i1597[4], i1597[5], i1597[6] )
  i1596.m_text = i1597[7]
  i1596.m_isRightToLeft = !!i1597[8]
  request.r(i1597[9], i1597[10], 0, i1596, 'm_fontAsset')
  request.r(i1597[11], i1597[12], 0, i1596, 'm_sharedMaterial')
  var i1599 = i1597[13]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 2) {
  request.r(i1599[i + 0], i1599[i + 1], 2, i1598, '')
  }
  i1596.m_fontSharedMaterials = i1598
  request.r(i1597[14], i1597[15], 0, i1596, 'm_fontMaterial')
  var i1601 = i1597[16]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 2) {
  request.r(i1601[i + 0], i1601[i + 1], 2, i1600, '')
  }
  i1596.m_fontMaterials = i1600
  i1596.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1597[17], i1597[18], i1597[19], i1597[20])
  i1596.m_fontColor = new pc.Color(i1597[21], i1597[22], i1597[23], i1597[24])
  i1596.m_enableVertexGradient = !!i1597[25]
  i1596.m_colorMode = i1597[26]
  i1596.m_fontColorGradient = request.d('TMPro.VertexGradient', i1597[27], i1596.m_fontColorGradient)
  request.r(i1597[28], i1597[29], 0, i1596, 'm_fontColorGradientPreset')
  request.r(i1597[30], i1597[31], 0, i1596, 'm_spriteAsset')
  i1596.m_tintAllSprites = !!i1597[32]
  request.r(i1597[33], i1597[34], 0, i1596, 'm_StyleSheet')
  i1596.m_TextStyleHashCode = i1597[35]
  i1596.m_overrideHtmlColors = !!i1597[36]
  i1596.m_faceColor = UnityEngine.Color32.ConstructColor(i1597[37], i1597[38], i1597[39], i1597[40])
  i1596.m_fontSize = i1597[41]
  i1596.m_fontSizeBase = i1597[42]
  i1596.m_fontWeight = i1597[43]
  i1596.m_enableAutoSizing = !!i1597[44]
  i1596.m_fontSizeMin = i1597[45]
  i1596.m_fontSizeMax = i1597[46]
  i1596.m_fontStyle = i1597[47]
  i1596.m_HorizontalAlignment = i1597[48]
  i1596.m_VerticalAlignment = i1597[49]
  i1596.m_textAlignment = i1597[50]
  i1596.m_characterSpacing = i1597[51]
  i1596.m_wordSpacing = i1597[52]
  i1596.m_lineSpacing = i1597[53]
  i1596.m_lineSpacingMax = i1597[54]
  i1596.m_paragraphSpacing = i1597[55]
  i1596.m_charWidthMaxAdj = i1597[56]
  i1596.m_enableWordWrapping = !!i1597[57]
  i1596.m_wordWrappingRatios = i1597[58]
  i1596.m_overflowMode = i1597[59]
  request.r(i1597[60], i1597[61], 0, i1596, 'm_linkedTextComponent')
  request.r(i1597[62], i1597[63], 0, i1596, 'parentLinkedComponent')
  i1596.m_enableKerning = !!i1597[64]
  i1596.m_enableExtraPadding = !!i1597[65]
  i1596.checkPaddingRequired = !!i1597[66]
  i1596.m_isRichText = !!i1597[67]
  i1596.m_parseCtrlCharacters = !!i1597[68]
  i1596.m_isOrthographic = !!i1597[69]
  i1596.m_isCullingEnabled = !!i1597[70]
  i1596.m_horizontalMapping = i1597[71]
  i1596.m_verticalMapping = i1597[72]
  i1596.m_uvLineOffset = i1597[73]
  i1596.m_geometrySortingOrder = i1597[74]
  i1596.m_IsTextObjectScaleStatic = !!i1597[75]
  i1596.m_VertexBufferAutoSizeReduction = !!i1597[76]
  i1596.m_useMaxVisibleDescender = !!i1597[77]
  i1596.m_pageToDisplay = i1597[78]
  i1596.m_margin = new pc.Vec4( i1597[79], i1597[80], i1597[81], i1597[82] )
  i1596.m_isUsingLegacyAnimationComponent = !!i1597[83]
  i1596.m_isVolumetricText = !!i1597[84]
  request.r(i1597[85], i1597[86], 0, i1596, 'm_Material')
  i1596.m_Maskable = !!i1597[87]
  i1596.m_Color = new pc.Color(i1597[88], i1597[89], i1597[90], i1597[91])
  i1596.m_RaycastTarget = !!i1597[92]
  return i1596
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.VertexGradient' )
  var i1603 = data
  i1602.topLeft = new pc.Color(i1603[0], i1603[1], i1603[2], i1603[3])
  i1602.topRight = new pc.Color(i1603[4], i1603[5], i1603[6], i1603[7])
  i1602.bottomLeft = new pc.Color(i1603[8], i1603[9], i1603[10], i1603[11])
  i1602.bottomRight = new pc.Color(i1603[12], i1603[13], i1603[14], i1603[15])
  return i1602
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.UI.Text' )
  var i1605 = data
  i1604.m_FontData = request.d('UnityEngine.UI.FontData', i1605[0], i1604.m_FontData)
  i1604.m_Text = i1605[1]
  request.r(i1605[2], i1605[3], 0, i1604, 'm_Material')
  i1604.m_Maskable = !!i1605[4]
  i1604.m_Color = new pc.Color(i1605[5], i1605[6], i1605[7], i1605[8])
  i1604.m_RaycastTarget = !!i1605[9]
  return i1604
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1607 = data
  request.r(i1607[0], i1607[1], 0, i1606, 'm_Font')
  i1606.m_FontSize = i1607[2]
  i1606.m_FontStyle = i1607[3]
  i1606.m_BestFit = !!i1607[4]
  i1606.m_MinSize = i1607[5]
  i1606.m_MaxSize = i1607[6]
  i1606.m_Alignment = i1607[7]
  i1606.m_AlignByGeometry = !!i1607[8]
  i1606.m_RichText = !!i1607[9]
  i1606.m_HorizontalOverflow = i1607[10]
  i1606.m_VerticalOverflow = i1607[11]
  i1606.m_LineSpacing = i1607[12]
  return i1606
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'm_FirstSelected')
  i1608.m_sendNavigationEvents = !!i1609[2]
  i1608.m_DragThreshold = i1609[3]
  return i1608
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1611 = data
  i1610.m_HorizontalAxis = i1611[0]
  i1610.m_VerticalAxis = i1611[1]
  i1610.m_SubmitButton = i1611[2]
  i1610.m_CancelButton = i1611[3]
  i1610.m_InputActionsPerSecond = i1611[4]
  i1610.m_RepeatDelay = i1611[5]
  i1610.m_ForceModuleActive = !!i1611[6]
  return i1610
}

Deserializers["BirdTutorial"] = function (request, data, root) {
  var i1612 = root || request.c( 'BirdTutorial' )
  var i1613 = data
  i1612.jumpForce = i1613[0]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1615 = data
  i1614.ambientIntensity = i1615[0]
  i1614.reflectionIntensity = i1615[1]
  i1614.ambientMode = i1615[2]
  i1614.ambientLight = new pc.Color(i1615[3], i1615[4], i1615[5], i1615[6])
  i1614.ambientSkyColor = new pc.Color(i1615[7], i1615[8], i1615[9], i1615[10])
  i1614.ambientGroundColor = new pc.Color(i1615[11], i1615[12], i1615[13], i1615[14])
  i1614.ambientEquatorColor = new pc.Color(i1615[15], i1615[16], i1615[17], i1615[18])
  i1614.fogColor = new pc.Color(i1615[19], i1615[20], i1615[21], i1615[22])
  i1614.fogEndDistance = i1615[23]
  i1614.fogStartDistance = i1615[24]
  i1614.fogDensity = i1615[25]
  i1614.fog = !!i1615[26]
  request.r(i1615[27], i1615[28], 0, i1614, 'skybox')
  i1614.fogMode = i1615[29]
  var i1617 = i1615[30]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1617[i + 0]) );
  }
  i1614.lightmaps = i1616
  i1614.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1615[31], i1614.lightProbes)
  i1614.lightmapsMode = i1615[32]
  i1614.environmentLightingMode = i1615[33]
  i1614.ambientProbe = new pc.SphericalHarmonicsL2(i1615[34])
  request.r(i1615[35], i1615[36], 0, i1614, 'customReflection')
  request.r(i1615[37], i1615[38], 0, i1614, 'defaultReflection')
  i1614.defaultReflectionMode = i1615[39]
  i1614.defaultReflectionResolution = i1615[40]
  i1614.sunLightObjectId = i1615[41]
  i1614.pixelLightCount = i1615[42]
  i1614.defaultReflectionHDR = !!i1615[43]
  i1614.hasLightDataAsset = !!i1615[44]
  i1614.hasManualGenerate = !!i1615[45]
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1621 = data
  request.r(i1621[0], i1621[1], 0, i1620, 'lightmapColor')
  request.r(i1621[2], i1621[3], 0, i1620, 'lightmapDirection')
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1622 = root || new UnityEngine.LightProbes()
  var i1623 = data
  return i1622
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1630 = root || request.c( 'TMPro.TMP_Settings' )
  var i1631 = data
  i1630.m_enableWordWrapping = !!i1631[0]
  i1630.m_enableKerning = !!i1631[1]
  i1630.m_enableExtraPadding = !!i1631[2]
  i1630.m_enableTintAllSprites = !!i1631[3]
  i1630.m_enableParseEscapeCharacters = !!i1631[4]
  i1630.m_EnableRaycastTarget = !!i1631[5]
  i1630.m_GetFontFeaturesAtRuntime = !!i1631[6]
  i1630.m_missingGlyphCharacter = i1631[7]
  i1630.m_warningsDisabled = !!i1631[8]
  request.r(i1631[9], i1631[10], 0, i1630, 'm_defaultFontAsset')
  i1630.m_defaultFontAssetPath = i1631[11]
  i1630.m_defaultFontSize = i1631[12]
  i1630.m_defaultAutoSizeMinRatio = i1631[13]
  i1630.m_defaultAutoSizeMaxRatio = i1631[14]
  i1630.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1631[15], i1631[16] )
  i1630.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1631[17], i1631[18] )
  i1630.m_autoSizeTextContainer = !!i1631[19]
  i1630.m_IsTextObjectScaleStatic = !!i1631[20]
  var i1633 = i1631[21]
  var i1632 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1633.length; i += 2) {
  request.r(i1633[i + 0], i1633[i + 1], 1, i1632, '')
  }
  i1630.m_fallbackFontAssets = i1632
  i1630.m_matchMaterialPreset = !!i1631[22]
  request.r(i1631[23], i1631[24], 0, i1630, 'm_defaultSpriteAsset')
  i1630.m_defaultSpriteAssetPath = i1631[25]
  i1630.m_enableEmojiSupport = !!i1631[26]
  i1630.m_MissingCharacterSpriteUnicode = i1631[27]
  i1630.m_defaultColorGradientPresetsPath = i1631[28]
  request.r(i1631[29], i1631[30], 0, i1630, 'm_defaultStyleSheet')
  i1630.m_StyleSheetsResourcePath = i1631[31]
  request.r(i1631[32], i1631[33], 0, i1630, 'm_leadingCharacters')
  request.r(i1631[34], i1631[35], 0, i1630, 'm_followingCharacters')
  i1630.m_UseModernHangulLineBreakingRules = !!i1631[36]
  return i1630
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1634 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1635 = data
  i1634.hashCode = i1635[0]
  request.r(i1635[1], i1635[2], 0, i1634, 'material')
  i1634.materialHashCode = i1635[3]
  request.r(i1635[4], i1635[5], 0, i1634, 'spriteSheet')
  var i1637 = i1635[6]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('TMPro.TMP_Sprite', i1637[i + 0]));
  }
  i1634.spriteInfoList = i1636
  var i1639 = i1635[7]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1639.length; i += 2) {
  request.r(i1639[i + 0], i1639[i + 1], 1, i1638, '')
  }
  i1634.fallbackSpriteAssets = i1638
  i1634.m_Version = i1635[8]
  i1634.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1635[9], i1634.m_FaceInfo)
  var i1641 = i1635[10]
  var i1640 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1641.length; i += 1) {
    i1640.add(request.d('TMPro.TMP_SpriteCharacter', i1641[i + 0]));
  }
  i1634.m_SpriteCharacterTable = i1640
  var i1643 = i1635[11]
  var i1642 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.add(request.d('TMPro.TMP_SpriteGlyph', i1643[i + 0]));
  }
  i1634.m_SpriteGlyphTable = i1642
  return i1634
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1646 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1647 = data
  i1646.name = i1647[0]
  i1646.hashCode = i1647[1]
  i1646.unicode = i1647[2]
  i1646.pivot = new pc.Vec2( i1647[3], i1647[4] )
  request.r(i1647[5], i1647[6], 0, i1646, 'sprite')
  i1646.id = i1647[7]
  i1646.x = i1647[8]
  i1646.y = i1647[9]
  i1646.width = i1647[10]
  i1646.height = i1647[11]
  i1646.xOffset = i1647[12]
  i1646.yOffset = i1647[13]
  i1646.xAdvance = i1647[14]
  i1646.scale = i1647[15]
  return i1646
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1652 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1653 = data
  i1652.m_Name = i1653[0]
  i1652.m_HashCode = i1653[1]
  i1652.m_ElementType = i1653[2]
  i1652.m_Unicode = i1653[3]
  i1652.m_GlyphIndex = i1653[4]
  i1652.m_Scale = i1653[5]
  return i1652
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1656 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1657 = data
  request.r(i1657[0], i1657[1], 0, i1656, 'sprite')
  i1656.m_Index = i1657[2]
  i1656.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1657[3], i1656.m_Metrics)
  i1656.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1657[4], i1656.m_GlyphRect)
  i1656.m_Scale = i1657[5]
  i1656.m_AtlasIndex = i1657[6]
  return i1656
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1658 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1659 = data
  var i1661 = i1659[0]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.add(request.d('TMPro.TMP_Style', i1661[i + 0]));
  }
  i1658.m_StyleList = i1660
  return i1658
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1664 = root || request.c( 'TMPro.TMP_Style' )
  var i1665 = data
  i1664.m_Name = i1665[0]
  i1664.m_HashCode = i1665[1]
  i1664.m_OpeningDefinition = i1665[2]
  i1664.m_ClosingDefinition = i1665[3]
  i1664.m_OpeningTagArray = i1665[4]
  i1664.m_ClosingTagArray = i1665[5]
  i1664.m_OpeningTagUnicodeArray = i1665[6]
  i1664.m_ClosingTagUnicodeArray = i1665[7]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1667 = data
  var i1669 = i1667[0]
  var i1668 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.add(i1669[i + 0]);
  }
  i1666.invalidShaderVariants = i1668
  i1666.name = i1667[1]
  i1666.guid = i1667[2]
  var i1671 = i1667[3]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( i1671[i + 0] );
  }
  i1666.shaderDefinedKeywords = i1670
  var i1673 = i1667[4]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1673[i + 0]) );
  }
  i1666.passes = i1672
  var i1675 = i1667[5]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1675[i + 0]) );
  }
  i1666.usePasses = i1674
  var i1677 = i1667[6]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1677[i + 0]) );
  }
  i1666.defaultParameterValues = i1676
  request.r(i1667[7], i1667[8], 0, i1666, 'unityFallbackShader')
  i1666.readDepth = !!i1667[9]
  i1666.isCreatedByShaderGraph = !!i1667[10]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1684 = root || new pc.UnityShaderPass()
  var i1685 = data
  i1684.id = i1685[0]
  i1684.subShaderIndex = i1685[1]
  i1684.name = i1685[2]
  i1684.passType = i1685[3]
  i1684.usePass = !!i1685[4]
  i1684.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[5], i1684.zTest)
  i1684.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[6], i1684.zWrite)
  i1684.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[7], i1684.culling)
  i1684.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[8], i1684.blending)
  i1684.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1685[9], i1684.alphaBlending)
  i1684.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[10], i1684.colorWriteMask)
  i1684.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[11], i1684.offsetUnits)
  i1684.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[12], i1684.offsetFactor)
  i1684.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[13], i1684.stencilRef)
  i1684.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[14], i1684.stencilReadMask)
  i1684.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[15], i1684.stencilWriteMask)
  i1684.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[16], i1684.stencilOp)
  i1684.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[17], i1684.stencilOpFront)
  i1684.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1685[18], i1684.stencilOpBack)
  var i1687 = i1685[19]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1687[i + 0]) );
  }
  i1684.tags = i1686
  var i1689 = i1685[20]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( i1689[i + 0] );
  }
  i1684.passDefinedKeywords = i1688
  var i1691 = i1685[21]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1691[i + 0]) );
  }
  i1684.variants = i1690
  var i1693 = i1685[22]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1693[i + 0]) );
  }
  i1684.excludedVariants = i1692
  i1684.hasDepthReader = !!i1685[23]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1695 = data
  i1694.val = i1695[0]
  i1694.name = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1697 = data
  i1696.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1697[0], i1696.src)
  i1696.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1697[1], i1696.dst)
  i1696.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1697[2], i1696.op)
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1699 = data
  i1698.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[0], i1698.pass)
  i1698.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[1], i1698.fail)
  i1698.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[2], i1698.zFail)
  i1698.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1699[3], i1698.comp)
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1703 = data
  i1702.name = i1703[0]
  i1702.value = i1703[1]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1707 = data
  i1706.passId = i1707[0]
  i1706.subShaderIndex = i1707[1]
  var i1709 = i1707[2]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( i1709[i + 0] );
  }
  i1706.keywords = i1708
  i1706.vertexProgram = i1707[3]
  i1706.fragmentProgram = i1707[4]
  i1706.readDepth = !!i1707[5]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1713 = data
  request.r(i1713[0], i1713[1], 0, i1712, 'shader')
  i1712.pass = i1713[2]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1717 = data
  i1716.name = i1717[0]
  i1716.type = i1717[1]
  i1716.value = new pc.Vec4( i1717[2], i1717[3], i1717[4], i1717[5] )
  i1716.textureValue = i1717[6]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1719 = data
  i1718.name = i1719[0]
  request.r(i1719[1], i1719[2], 0, i1718, 'texture')
  i1718.aabb = i1719[3]
  i1718.vertices = i1719[4]
  i1718.triangles = i1719[5]
  i1718.textureRect = UnityEngine.Rect.MinMaxRect(i1719[6], i1719[7], i1719[8], i1719[9])
  i1718.packedRect = UnityEngine.Rect.MinMaxRect(i1719[10], i1719[11], i1719[12], i1719[13])
  i1718.border = new pc.Vec4( i1719[14], i1719[15], i1719[16], i1719[17] )
  i1718.transparency = i1719[18]
  i1718.bounds = i1719[19]
  i1718.pixelsPerUnit = i1719[20]
  i1718.textureWidth = i1719[21]
  i1718.textureHeight = i1719[22]
  i1718.nativeSize = new pc.Vec2( i1719[23], i1719[24] )
  i1718.pivot = new pc.Vec2( i1719[25], i1719[26] )
  i1718.textureRectOffset = new pc.Vec2( i1719[27], i1719[28] )
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1721 = data
  i1720.name = i1721[0]
  i1720.wrapMode = i1721[1]
  i1720.isLooping = !!i1721[2]
  i1720.length = i1721[3]
  var i1723 = i1721[4]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1723[i + 0]) );
  }
  i1720.curves = i1722
  var i1725 = i1721[5]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1725[i + 0]) );
  }
  i1720.events = i1724
  i1720.halfPrecision = !!i1721[6]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1729 = data
  i1728.path = i1729[0]
  i1728.componentType = i1729[1]
  i1728.property = i1729[2]
  i1728.keys = i1729[3]
  var i1731 = i1729[4]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1731[i + 0]) );
  }
  i1728.objectReferenceKeys = i1730
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1735 = data
  i1734.time = i1735[0]
  request.r(i1735[1], i1735[2], 0, i1734, 'value')
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1739 = data
  i1738.functionName = i1739[0]
  i1738.floatParameter = i1739[1]
  i1738.intParameter = i1739[2]
  i1738.stringParameter = i1739[3]
  request.r(i1739[4], i1739[5], 0, i1738, 'objectReferenceParameter')
  i1738.time = i1739[6]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1741 = data
  i1740.name = i1741[0]
  i1740.ascent = i1741[1]
  i1740.originalLineHeight = i1741[2]
  i1740.fontSize = i1741[3]
  var i1743 = i1741[4]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1743[i + 0]) );
  }
  i1740.characterInfo = i1742
  request.r(i1741[5], i1741[6], 0, i1740, 'texture')
  i1740.originalFontSize = i1741[7]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1747 = data
  i1746.index = i1747[0]
  i1746.advance = i1747[1]
  i1746.bearing = i1747[2]
  i1746.glyphWidth = i1747[3]
  i1746.glyphHeight = i1747[4]
  i1746.minX = i1747[5]
  i1746.maxX = i1747[6]
  i1746.minY = i1747[7]
  i1746.maxY = i1747[8]
  i1746.uvBottomLeftX = i1747[9]
  i1746.uvBottomLeftY = i1747[10]
  i1746.uvBottomRightX = i1747[11]
  i1746.uvBottomRightY = i1747[12]
  i1746.uvTopLeftX = i1747[13]
  i1746.uvTopLeftY = i1747[14]
  i1746.uvTopRightX = i1747[15]
  i1746.uvTopRightY = i1747[16]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1749 = data
  i1748.name = i1749[0]
  var i1751 = i1749[1]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1751[i + 0]) );
  }
  i1748.states = i1750
  var i1753 = i1749[2]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1753[i + 0]) );
  }
  i1748.layers = i1752
  var i1755 = i1749[3]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1755[i + 0]) );
  }
  i1748.parameters = i1754
  var i1757 = i1749[4]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( i1757[i + 0] );
  }
  i1748.animationClips = i1756
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1761 = data
  i1760.cycleOffset = i1761[0]
  i1760.cycleOffsetParameter = i1761[1]
  i1760.cycleOffsetParameterActive = !!i1761[2]
  i1760.mirror = !!i1761[3]
  i1760.mirrorParameter = i1761[4]
  i1760.mirrorParameterActive = !!i1761[5]
  i1760.motionId = i1761[6]
  i1760.nameHash = i1761[7]
  i1760.fullPathHash = i1761[8]
  i1760.speed = i1761[9]
  i1760.speedParameter = i1761[10]
  i1760.speedParameterActive = !!i1761[11]
  i1760.tag = i1761[12]
  i1760.name = i1761[13]
  i1760.writeDefaultValues = !!i1761[14]
  var i1763 = i1761[15]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 1) {
    i1762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1763[i + 0]) );
  }
  i1760.transitions = i1762
  var i1765 = i1761[16]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 2) {
  request.r(i1765[i + 0], i1765[i + 1], 2, i1764, '')
  }
  i1760.behaviours = i1764
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1769 = data
  i1768.fullPath = i1769[0]
  i1768.canTransitionToSelf = !!i1769[1]
  i1768.duration = i1769[2]
  i1768.exitTime = i1769[3]
  i1768.hasExitTime = !!i1769[4]
  i1768.hasFixedDuration = !!i1769[5]
  i1768.interruptionSource = i1769[6]
  i1768.offset = i1769[7]
  i1768.orderedInterruption = !!i1769[8]
  i1768.destinationStateNameHash = i1769[9]
  i1768.destinationStateMachineId = i1769[10]
  i1768.isExit = !!i1769[11]
  i1768.mute = !!i1769[12]
  i1768.solo = !!i1769[13]
  var i1771 = i1769[14]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1771[i + 0]) );
  }
  i1768.conditions = i1770
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1777 = data
  i1776.blendingMode = i1777[0]
  i1776.defaultWeight = i1777[1]
  i1776.name = i1777[2]
  i1776.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1777[3], i1776.stateMachine)
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1779 = data
  i1778.id = i1779[0]
  i1778.defaultStateNameHash = i1779[1]
  var i1781 = i1779[2]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1781[i + 0]) );
  }
  i1778.entryTransitions = i1780
  var i1783 = i1779[3]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1783[i + 0]) );
  }
  i1778.anyStateTransitions = i1782
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1787 = data
  i1786.destinationStateNameHash = i1787[0]
  i1786.destinationStateMachineId = i1787[1]
  i1786.isExit = !!i1787[2]
  i1786.mute = !!i1787[3]
  i1786.solo = !!i1787[4]
  var i1789 = i1787[5]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1789[i + 0]) );
  }
  i1786.conditions = i1788
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1793 = data
  i1792.defaultBool = !!i1793[0]
  i1792.defaultFloat = i1793[1]
  i1792.defaultInt = i1793[2]
  i1792.name = i1793[3]
  i1792.nameHash = i1793[4]
  i1792.type = i1793[5]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1795 = data
  i1794.name = i1795[0]
  i1794.bytes64 = i1795[1]
  i1794.data = i1795[2]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1797 = data
  var i1799 = i1797[0]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1799[i + 0]) );
  }
  i1796.files = i1798
  i1796.componentToPrefabIds = i1797[1]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1803 = data
  i1802.path = i1803[0]
  request.r(i1803[1], i1803[2], 0, i1802, 'unityObject')
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1805 = data
  var i1807 = i1805[0]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1807[i + 0]) );
  }
  i1804.scriptsExecutionOrder = i1806
  var i1809 = i1805[1]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1809[i + 0]) );
  }
  i1804.sortingLayers = i1808
  var i1811 = i1805[2]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1811[i + 0]) );
  }
  i1804.cullingLayers = i1810
  i1804.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1805[3], i1804.timeSettings)
  i1804.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1805[4], i1804.physicsSettings)
  i1804.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1805[5], i1804.physics2DSettings)
  i1804.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1805[6], i1804.qualitySettings)
  i1804.removeShadows = !!i1805[7]
  i1804.autoInstantiatePrefabs = !!i1805[8]
  i1804.enableAutoInstancing = !!i1805[9]
  i1804.lightmapEncodingQuality = i1805[10]
  i1804.desiredColorSpace = i1805[11]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1815 = data
  i1814.name = i1815[0]
  i1814.value = i1815[1]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1819 = data
  i1818.id = i1819[0]
  i1818.name = i1819[1]
  i1818.value = i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1823 = data
  i1822.id = i1823[0]
  i1822.name = i1823[1]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1825 = data
  i1824.fixedDeltaTime = i1825[0]
  i1824.maximumDeltaTime = i1825[1]
  i1824.timeScale = i1825[2]
  i1824.maximumParticleTimestep = i1825[3]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1827 = data
  i1826.gravity = new pc.Vec3( i1827[0], i1827[1], i1827[2] )
  i1826.defaultSolverIterations = i1827[3]
  i1826.bounceThreshold = i1827[4]
  i1826.autoSyncTransforms = !!i1827[5]
  i1826.autoSimulation = !!i1827[6]
  var i1829 = i1827[7]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1829[i + 0]) );
  }
  i1826.collisionMatrix = i1828
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1833 = data
  i1832.enabled = !!i1833[0]
  i1832.layerId = i1833[1]
  i1832.otherLayerId = i1833[2]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1835 = data
  request.r(i1835[0], i1835[1], 0, i1834, 'material')
  i1834.gravity = new pc.Vec2( i1835[2], i1835[3] )
  i1834.positionIterations = i1835[4]
  i1834.velocityIterations = i1835[5]
  i1834.velocityThreshold = i1835[6]
  i1834.maxLinearCorrection = i1835[7]
  i1834.maxAngularCorrection = i1835[8]
  i1834.maxTranslationSpeed = i1835[9]
  i1834.maxRotationSpeed = i1835[10]
  i1834.timeToSleep = i1835[11]
  i1834.linearSleepTolerance = i1835[12]
  i1834.angularSleepTolerance = i1835[13]
  i1834.defaultContactOffset = i1835[14]
  i1834.autoSimulation = !!i1835[15]
  i1834.queriesHitTriggers = !!i1835[16]
  i1834.queriesStartInColliders = !!i1835[17]
  i1834.callbacksOnDisable = !!i1835[18]
  i1834.reuseCollisionCallbacks = !!i1835[19]
  i1834.autoSyncTransforms = !!i1835[20]
  var i1837 = i1835[21]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1837[i + 0]) );
  }
  i1834.collisionMatrix = i1836
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1841 = data
  i1840.enabled = !!i1841[0]
  i1840.layerId = i1841[1]
  i1840.otherLayerId = i1841[2]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1843 = data
  var i1845 = i1843[0]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1845[i + 0]) );
  }
  i1842.qualityLevels = i1844
  var i1847 = i1843[1]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( i1847[i + 0] );
  }
  i1842.names = i1846
  i1842.shadows = i1843[2]
  i1842.anisotropicFiltering = i1843[3]
  i1842.antiAliasing = i1843[4]
  i1842.lodBias = i1843[5]
  i1842.shadowCascades = i1843[6]
  i1842.shadowDistance = i1843[7]
  i1842.shadowmaskMode = i1843[8]
  i1842.shadowProjection = i1843[9]
  i1842.shadowResolution = i1843[10]
  i1842.softParticles = !!i1843[11]
  i1842.softVegetation = !!i1843[12]
  i1842.activeColorSpace = i1843[13]
  i1842.desiredColorSpace = i1843[14]
  i1842.masterTextureLimit = i1843[15]
  i1842.maxQueuedFrames = i1843[16]
  i1842.particleRaycastBudget = i1843[17]
  i1842.pixelLightCount = i1843[18]
  i1842.realtimeReflectionProbes = !!i1843[19]
  i1842.shadowCascade2Split = i1843[20]
  i1842.shadowCascade4Split = new pc.Vec3( i1843[21], i1843[22], i1843[23] )
  i1842.streamingMipmapsActive = !!i1843[24]
  i1842.vSyncCount = i1843[25]
  i1842.asyncUploadBufferSize = i1843[26]
  i1842.asyncUploadTimeSlice = i1843[27]
  i1842.billboardsFaceCameraPosition = !!i1843[28]
  i1842.shadowNearPlaneOffset = i1843[29]
  i1842.streamingMipmapsMemoryBudget = i1843[30]
  i1842.maximumLODLevel = i1843[31]
  i1842.streamingMipmapsAddAllCameras = !!i1843[32]
  i1842.streamingMipmapsMaxLevelReduction = i1843[33]
  i1842.streamingMipmapsRenderersPerFrame = i1843[34]
  i1842.resolutionScalingFixedDPIFactor = i1843[35]
  i1842.streamingMipmapsMaxFileIORequests = i1843[36]
  i1842.currentQualityLevel = i1843[37]
  return i1842
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1850 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1851 = data
  i1850.xPlacement = i1851[0]
  i1850.yPlacement = i1851[1]
  i1850.xAdvance = i1851[2]
  i1850.yAdvance = i1851[3]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1855 = data
  i1854.mode = i1855[0]
  i1854.parameter = i1855[1]
  i1854.threshold = i1855[2]
  return i1854
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[47],"48":[6],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[13],"58":[13],"59":[13],"60":[13],"61":[13],"62":[13],"63":[13],"64":[13],"65":[13],"66":[13],"67":[13],"68":[13],"69":[13],"70":[6],"71":[72],"73":[74],"75":[74],"23":[22],"76":[10],"77":[22],"78":[27,22],"26":[23],"28":[27,22],"79":[22],"25":[23],"80":[22],"81":[22],"82":[22],"83":[22],"84":[22],"85":[22],"86":[22],"87":[22],"88":[27,22],"89":[27,22],"90":[22],"91":[22],"92":[22],"93":[22],"30":[27,22],"94":[22],"95":[31],"96":[31],"32":[31],"97":[31],"98":[6],"99":[6],"100":[101],"102":[6],"103":[22],"104":[27,22],"105":[72],"106":[27,22],"107":[27,22],"108":[72,27,22],"18":[22,27],"109":[22]}

Deserializers.types = ["UnityEngine.Shader","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraMovement","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.CapsuleCollider2D","BirdMovement","UnityEngine.GameObject","BirdDeath","TMPro.TextMeshProUGUI","GameOver","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BirdTutorial","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.40f1";

Deserializers.productName = "FlappyBird";

Deserializers.lunaInitializationTime = "08/28/2022 16:26:06";

Deserializers.lunaDaysRunning = "1.2";

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

Deserializers.buildID = "67baf878-5cff-43cf-8ade-68669f6db4b2";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

