var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i200 = root || request.c( 'UnityEngine.JointSpring' )
  var i201 = data
  i200.spring = i201[0]
  i200.damper = i201[1]
  i200.targetPosition = i201[2]
  return i200
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i202 = root || request.c( 'UnityEngine.JointMotor' )
  var i203 = data
  i202.m_TargetVelocity = i203[0]
  i202.m_Force = i203[1]
  i202.m_FreeSpin = i203[2]
  return i202
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i204 = root || request.c( 'UnityEngine.JointLimits' )
  var i205 = data
  i204.m_Min = i205[0]
  i204.m_Max = i205[1]
  i204.m_Bounciness = i205[2]
  i204.m_BounceMinVelocity = i205[3]
  i204.m_ContactDistance = i205[4]
  i204.minBounce = i205[5]
  i204.maxBounce = i205[6]
  return i204
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i206 = root || request.c( 'UnityEngine.JointDrive' )
  var i207 = data
  i206.m_PositionSpring = i207[0]
  i206.m_PositionDamper = i207[1]
  i206.m_MaximumForce = i207[2]
  return i206
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i208 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i209 = data
  i208.m_Spring = i209[0]
  i208.m_Damper = i209[1]
  return i208
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i210 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i211 = data
  i210.m_Limit = i211[0]
  i210.m_Bounciness = i211[1]
  i210.m_ContactDistance = i211[2]
  return i210
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i212 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i213 = data
  i212.m_ExtremumSlip = i213[0]
  i212.m_ExtremumValue = i213[1]
  i212.m_AsymptoteSlip = i213[2]
  i212.m_AsymptoteValue = i213[3]
  i212.m_Stiffness = i213[4]
  return i212
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i214 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i215 = data
  i214.m_LowerAngle = i215[0]
  i214.m_UpperAngle = i215[1]
  return i214
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i216 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i217 = data
  i216.m_MotorSpeed = i217[0]
  i216.m_MaximumMotorTorque = i217[1]
  return i216
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i218 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i219 = data
  i218.m_DampingRatio = i219[0]
  i218.m_Frequency = i219[1]
  i218.m_Angle = i219[2]
  return i218
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i220 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i221 = data
  i220.m_LowerTranslation = i221[0]
  i220.m_UpperTranslation = i221[1]
  return i220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i222 = root || new pc.UnityMaterial()
  var i223 = data
  i222.name = i223[0]
  request.r(i223[1], i223[2], 0, i222, 'shader')
  i222.renderQueue = i223[3]
  i222.enableInstancing = !!i223[4]
  var i225 = i223[5]
  var i224 = []
  for(var i = 0; i < i225.length; i += 1) {
    i224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i225[i + 0]) );
  }
  i222.floatParameters = i224
  var i227 = i223[6]
  var i226 = []
  for(var i = 0; i < i227.length; i += 1) {
    i226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i227[i + 0]) );
  }
  i222.colorParameters = i226
  var i229 = i223[7]
  var i228 = []
  for(var i = 0; i < i229.length; i += 1) {
    i228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i229[i + 0]) );
  }
  i222.vectorParameters = i228
  var i231 = i223[8]
  var i230 = []
  for(var i = 0; i < i231.length; i += 1) {
    i230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i231[i + 0]) );
  }
  i222.textureParameters = i230
  var i233 = i223[9]
  var i232 = []
  for(var i = 0; i < i233.length; i += 1) {
    i232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i233[i + 0]) );
  }
  i222.materialFlags = i232
  return i222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i237 = data
  i236.name = i237[0]
  i236.value = i237[1]
  return i236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i241 = data
  i240.name = i241[0]
  i240.value = new pc.Color(i241[1], i241[2], i241[3], i241[4])
  return i240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i245 = data
  i244.name = i245[0]
  i244.value = new pc.Vec4( i245[1], i245[2], i245[3], i245[4] )
  return i244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i249 = data
  i248.name = i249[0]
  request.r(i249[1], i249[2], 0, i248, 'value')
  return i248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i253 = data
  i252.name = i253[0]
  i252.enabled = !!i253[1]
  return i252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i255 = data
  i254.name = i255[0]
  i254.width = i255[1]
  i254.height = i255[2]
  i254.mipmapCount = i255[3]
  i254.anisoLevel = i255[4]
  i254.filterMode = i255[5]
  i254.hdr = !!i255[6]
  i254.format = i255[7]
  i254.wrapMode = i255[8]
  i254.alphaIsTransparency = !!i255[9]
  i254.alphaSource = i255[10]
  return i254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i257 = data
  i256.name = i257[0]
  i256.atlasId = i257[1]
  i256.mipmapCount = i257[2]
  i256.hdr = !!i257[3]
  i256.size = i257[4]
  i256.anisoLevel = i257[5]
  i256.filterMode = i257[6]
  i256.wrapMode = i257[7]
  var i259 = i257[8]
  var i258 = []
  for(var i = 0; i < i259.length; i += 4) {
    i258.push( UnityEngine.Rect.MinMaxRect(i259[i + 0], i259[i + 1], i259[i + 2], i259[i + 3]) );
  }
  i256.rects = i258
  return i256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i263 = data
  i262.name = i263[0]
  i262.index = i263[1]
  i262.startup = !!i263[2]
  return i262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i265 = data
  i264.position = new pc.Vec3( i265[0], i265[1], i265[2] )
  i264.scale = new pc.Vec3( i265[3], i265[4], i265[5] )
  i264.rotation = new pc.Quat(i265[6], i265[7], i265[8], i265[9])
  return i264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i267 = data
  i266.enabled = !!i267[0]
  i266.aspect = i267[1]
  i266.orthographic = !!i267[2]
  i266.orthographicSize = i267[3]
  i266.backgroundColor = new pc.Color(i267[4], i267[5], i267[6], i267[7])
  i266.nearClipPlane = i267[8]
  i266.farClipPlane = i267[9]
  i266.fieldOfView = i267[10]
  i266.depth = i267[11]
  i266.clearFlags = i267[12]
  i266.cullingMask = i267[13]
  i266.rect = i267[14]
  request.r(i267[15], i267[16], 0, i266, 'targetTexture')
  return i266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i269 = data
  i268.name = i269[0]
  i268.tag = i269[1]
  i268.enabled = !!i269[2]
  i268.isStatic = !!i269[3]
  i268.layer = i269[4]
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i271 = data
  i270.enabled = !!i271[0]
  request.r(i271[1], i271[2], 0, i270, 'sharedMaterial')
  var i273 = i271[3]
  var i272 = []
  for(var i = 0; i < i273.length; i += 2) {
  request.r(i273[i + 0], i273[i + 1], 2, i272, '')
  }
  i270.sharedMaterials = i272
  i270.receiveShadows = !!i271[4]
  i270.shadowCastingMode = i271[5]
  i270.sortingLayerID = i271[6]
  i270.sortingOrder = i271[7]
  i270.lightmapIndex = i271[8]
  i270.lightmapSceneIndex = i271[9]
  i270.lightmapScaleOffset = new pc.Vec4( i271[10], i271[11], i271[12], i271[13] )
  i270.lightProbeUsage = i271[14]
  i270.reflectionProbeUsage = i271[15]
  i270.color = new pc.Color(i271[16], i271[17], i271[18], i271[19])
  request.r(i271[20], i271[21], 0, i270, 'sprite')
  i270.flipX = !!i271[22]
  i270.flipY = !!i271[23]
  i270.drawMode = i271[24]
  i270.size = new pc.Vec2( i271[25], i271[26] )
  i270.tileMode = i271[27]
  i270.adaptiveModeThreshold = i271[28]
  i270.maskInteraction = i271[29]
  i270.spriteSortPoint = i271[30]
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i277 = data
  i276.ambientIntensity = i277[0]
  i276.reflectionIntensity = i277[1]
  i276.ambientMode = i277[2]
  i276.ambientLight = new pc.Color(i277[3], i277[4], i277[5], i277[6])
  i276.ambientSkyColor = new pc.Color(i277[7], i277[8], i277[9], i277[10])
  i276.ambientGroundColor = new pc.Color(i277[11], i277[12], i277[13], i277[14])
  i276.ambientEquatorColor = new pc.Color(i277[15], i277[16], i277[17], i277[18])
  i276.fogColor = new pc.Color(i277[19], i277[20], i277[21], i277[22])
  i276.fogEndDistance = i277[23]
  i276.fogStartDistance = i277[24]
  i276.fogDensity = i277[25]
  i276.fog = !!i277[26]
  request.r(i277[27], i277[28], 0, i276, 'skybox')
  i276.fogMode = i277[29]
  var i279 = i277[30]
  var i278 = []
  for(var i = 0; i < i279.length; i += 1) {
    i278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i279[i + 0]) );
  }
  i276.lightmaps = i278
  i276.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i277[31], i276.lightProbes)
  i276.lightmapsMode = i277[32]
  i276.environmentLightingMode = i277[33]
  i276.ambientProbe = new pc.SphericalHarmonicsL2(i277[34])
  request.r(i277[35], i277[36], 0, i276, 'customReflection')
  request.r(i277[37], i277[38], 0, i276, 'defaultReflection')
  i276.defaultReflectionMode = i277[39]
  i276.defaultReflectionResolution = i277[40]
  i276.sunLightObjectId = i277[41]
  i276.pixelLightCount = i277[42]
  i276.defaultReflectionHDR = !!i277[43]
  i276.hasLightDataAsset = !!i277[44]
  i276.hasManualGenerate = !!i277[45]
  return i276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i283 = data
  request.r(i283[0], i283[1], 0, i282, 'lightmapColor')
  request.r(i283[2], i283[3], 0, i282, 'lightmapDirection')
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i284 = root || new UnityEngine.LightProbes()
  var i285 = data
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i293 = data
  var i295 = i293[0]
  var i294 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i295.length; i += 1) {
    i294.add(i295[i + 0]);
  }
  i292.invalidShaderVariants = i294
  i292.name = i293[1]
  i292.guid = i293[2]
  var i297 = i293[3]
  var i296 = []
  for(var i = 0; i < i297.length; i += 1) {
    i296.push( i297[i + 0] );
  }
  i292.shaderDefinedKeywords = i296
  var i299 = i293[4]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i299[i + 0]) );
  }
  i292.passes = i298
  var i301 = i293[5]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i301[i + 0]) );
  }
  i292.usePasses = i300
  var i303 = i293[6]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i303[i + 0]) );
  }
  i292.defaultParameterValues = i302
  request.r(i293[7], i293[8], 0, i292, 'unityFallbackShader')
  i292.readDepth = !!i293[9]
  i292.isCreatedByShaderGraph = !!i293[10]
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i310 = root || new pc.UnityShaderPass()
  var i311 = data
  i310.id = i311[0]
  i310.subShaderIndex = i311[1]
  i310.name = i311[2]
  i310.passType = i311[3]
  i310.usePass = !!i311[4]
  i310.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[5], i310.zTest)
  i310.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[6], i310.zWrite)
  i310.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[7], i310.culling)
  i310.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i311[8], i310.blending)
  i310.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i311[9], i310.alphaBlending)
  i310.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[10], i310.colorWriteMask)
  i310.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[11], i310.offsetUnits)
  i310.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[12], i310.offsetFactor)
  i310.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[13], i310.stencilRef)
  i310.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[14], i310.stencilReadMask)
  i310.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i311[15], i310.stencilWriteMask)
  i310.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i311[16], i310.stencilOp)
  i310.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i311[17], i310.stencilOpFront)
  i310.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i311[18], i310.stencilOpBack)
  var i313 = i311[19]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i313[i + 0]) );
  }
  i310.tags = i312
  var i315 = i311[20]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( i315[i + 0] );
  }
  i310.passDefinedKeywords = i314
  var i317 = i311[21]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i317[i + 0]) );
  }
  i310.variants = i316
  var i319 = i311[22]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i319[i + 0]) );
  }
  i310.excludedVariants = i318
  i310.hasDepthReader = !!i311[23]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i321 = data
  i320.val = i321[0]
  i320.name = i321[1]
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i323 = data
  i322.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i323[0], i322.src)
  i322.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i323[1], i322.dst)
  i322.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i323[2], i322.op)
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i325 = data
  i324.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[0], i324.pass)
  i324.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[1], i324.fail)
  i324.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[2], i324.zFail)
  i324.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i325[3], i324.comp)
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i329 = data
  i328.name = i329[0]
  i328.value = i329[1]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i333 = data
  i332.passId = i333[0]
  i332.subShaderIndex = i333[1]
  var i335 = i333[2]
  var i334 = []
  for(var i = 0; i < i335.length; i += 1) {
    i334.push( i335[i + 0] );
  }
  i332.keywords = i334
  i332.vertexProgram = i333[3]
  i332.fragmentProgram = i333[4]
  i332.readDepth = !!i333[5]
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i339 = data
  request.r(i339[0], i339[1], 0, i338, 'shader')
  i338.pass = i339[2]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i343 = data
  i342.name = i343[0]
  i342.type = i343[1]
  i342.value = new pc.Vec4( i343[2], i343[3], i343[4], i343[5] )
  i342.textureValue = i343[6]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i345 = data
  i344.name = i345[0]
  request.r(i345[1], i345[2], 0, i344, 'texture')
  i344.aabb = i345[3]
  i344.vertices = i345[4]
  i344.triangles = i345[5]
  i344.textureRect = UnityEngine.Rect.MinMaxRect(i345[6], i345[7], i345[8], i345[9])
  i344.packedRect = UnityEngine.Rect.MinMaxRect(i345[10], i345[11], i345[12], i345[13])
  i344.border = new pc.Vec4( i345[14], i345[15], i345[16], i345[17] )
  i344.transparency = i345[18]
  i344.bounds = i345[19]
  i344.pixelsPerUnit = i345[20]
  i344.textureWidth = i345[21]
  i344.textureHeight = i345[22]
  i344.nativeSize = new pc.Vec2( i345[23], i345[24] )
  i344.pivot = new pc.Vec2( i345[25], i345[26] )
  i344.textureRectOffset = new pc.Vec2( i345[27], i345[28] )
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i347 = data
  var i349 = i347[0]
  var i348 = []
  for(var i = 0; i < i349.length; i += 1) {
    i348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i349[i + 0]) );
  }
  i346.files = i348
  i346.componentToPrefabIds = i347[1]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i353 = data
  i352.path = i353[0]
  request.r(i353[1], i353[2], 0, i352, 'unityObject')
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i355 = data
  var i357 = i355[0]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i357[i + 0]) );
  }
  i354.scriptsExecutionOrder = i356
  var i359 = i355[1]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i359[i + 0]) );
  }
  i354.sortingLayers = i358
  var i361 = i355[2]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i361[i + 0]) );
  }
  i354.cullingLayers = i360
  i354.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i355[3], i354.timeSettings)
  i354.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i355[4], i354.physicsSettings)
  i354.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i355[5], i354.physics2DSettings)
  i354.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i355[6], i354.qualitySettings)
  i354.removeShadows = !!i355[7]
  i354.autoInstantiatePrefabs = !!i355[8]
  i354.enableAutoInstancing = !!i355[9]
  i354.lightmapEncodingQuality = i355[10]
  i354.desiredColorSpace = i355[11]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i365 = data
  i364.name = i365[0]
  i364.value = i365[1]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i369 = data
  i368.id = i369[0]
  i368.name = i369[1]
  i368.value = i369[2]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i373 = data
  i372.id = i373[0]
  i372.name = i373[1]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i375 = data
  i374.fixedDeltaTime = i375[0]
  i374.maximumDeltaTime = i375[1]
  i374.timeScale = i375[2]
  i374.maximumParticleTimestep = i375[3]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i377 = data
  i376.gravity = new pc.Vec3( i377[0], i377[1], i377[2] )
  i376.defaultSolverIterations = i377[3]
  i376.bounceThreshold = i377[4]
  i376.autoSyncTransforms = !!i377[5]
  i376.autoSimulation = !!i377[6]
  var i379 = i377[7]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i379[i + 0]) );
  }
  i376.collisionMatrix = i378
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i383 = data
  i382.enabled = !!i383[0]
  i382.layerId = i383[1]
  i382.otherLayerId = i383[2]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i385 = data
  request.r(i385[0], i385[1], 0, i384, 'material')
  i384.gravity = new pc.Vec2( i385[2], i385[3] )
  i384.positionIterations = i385[4]
  i384.velocityIterations = i385[5]
  i384.velocityThreshold = i385[6]
  i384.maxLinearCorrection = i385[7]
  i384.maxAngularCorrection = i385[8]
  i384.maxTranslationSpeed = i385[9]
  i384.maxRotationSpeed = i385[10]
  i384.timeToSleep = i385[11]
  i384.linearSleepTolerance = i385[12]
  i384.angularSleepTolerance = i385[13]
  i384.defaultContactOffset = i385[14]
  i384.autoSimulation = !!i385[15]
  i384.queriesHitTriggers = !!i385[16]
  i384.queriesStartInColliders = !!i385[17]
  i384.callbacksOnDisable = !!i385[18]
  i384.reuseCollisionCallbacks = !!i385[19]
  i384.autoSyncTransforms = !!i385[20]
  var i387 = i385[21]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i387[i + 0]) );
  }
  i384.collisionMatrix = i386
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i391 = data
  i390.enabled = !!i391[0]
  i390.layerId = i391[1]
  i390.otherLayerId = i391[2]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i393 = data
  var i395 = i393[0]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i395[i + 0]) );
  }
  i392.qualityLevels = i394
  var i397 = i393[1]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( i397[i + 0] );
  }
  i392.names = i396
  i392.shadows = i393[2]
  i392.anisotropicFiltering = i393[3]
  i392.antiAliasing = i393[4]
  i392.lodBias = i393[5]
  i392.shadowCascades = i393[6]
  i392.shadowDistance = i393[7]
  i392.shadowmaskMode = i393[8]
  i392.shadowProjection = i393[9]
  i392.shadowResolution = i393[10]
  i392.softParticles = !!i393[11]
  i392.softVegetation = !!i393[12]
  i392.activeColorSpace = i393[13]
  i392.desiredColorSpace = i393[14]
  i392.masterTextureLimit = i393[15]
  i392.maxQueuedFrames = i393[16]
  i392.particleRaycastBudget = i393[17]
  i392.pixelLightCount = i393[18]
  i392.realtimeReflectionProbes = !!i393[19]
  i392.shadowCascade2Split = i393[20]
  i392.shadowCascade4Split = new pc.Vec3( i393[21], i393[22], i393[23] )
  i392.streamingMipmapsActive = !!i393[24]
  i392.vSyncCount = i393[25]
  i392.asyncUploadBufferSize = i393[26]
  i392.asyncUploadTimeSlice = i393[27]
  i392.billboardsFaceCameraPosition = !!i393[28]
  i392.shadowNearPlaneOffset = i393[29]
  i392.streamingMipmapsMemoryBudget = i393[30]
  i392.maximumLODLevel = i393[31]
  i392.streamingMipmapsAddAllCameras = !!i393[32]
  i392.streamingMipmapsMaxLevelReduction = i393[33]
  i392.streamingMipmapsRenderersPerFrame = i393[34]
  i392.resolutionScalingFixedDPIFactor = i393[35]
  i392.streamingMipmapsMaxFileIORequests = i393[36]
  i392.currentQualityLevel = i393[37]
  return i392
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"9":[10],"11":[10],"12":[10],"13":[10],"14":[10],"15":[10],"16":[17],"18":[2],"19":[20],"21":[20],"22":[20],"23":[20],"24":[20],"25":[20],"26":[20],"27":[28],"29":[28],"30":[28],"31":[28],"32":[28],"33":[28],"34":[28],"35":[28],"36":[28],"37":[28],"38":[28],"39":[28],"40":[28],"41":[2],"42":[43],"44":[45],"46":[45],"47":[48],"49":[4],"50":[48],"51":[52,48],"53":[47],"54":[52,48],"55":[48],"56":[47],"57":[48],"58":[48],"59":[48],"60":[48],"61":[48],"62":[48],"63":[48],"64":[48],"65":[52,48],"66":[52,48],"67":[48],"68":[48],"69":[48],"70":[48],"71":[52,48],"72":[48],"73":[74],"75":[74],"76":[74],"77":[74],"78":[2],"79":[2],"80":[81],"82":[2],"83":[48],"84":[52,48],"85":[43],"86":[52,48],"87":[52,48],"88":[43,52,48],"89":[48,52],"90":[48]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.CanvasRenderer","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.40f1";

Deserializers.productName = "FlappyBird";

Deserializers.lunaInitializationTime = "08/28/2022 16:26:06";

Deserializers.lunaDaysRunning = "0.0";

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

Deserializers.buildID = "454a36b3-b9c4-4353-bfce-aaafbe1c908b";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

