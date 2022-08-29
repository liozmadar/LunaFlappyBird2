"use strict";(self.webpackChunkluna=self.webpackChunkluna||[]).push([[12],{40:(e,t,i)=>{var s=i(26),a=i(10),n=i(2),r=(i(23),i(31)),o=i(1);const h=256,l=new Float32Array(h),d=new Float32Array(h),c=new Float32Array(h),u=new Float32Array(h),g=new Float32Array(h),p=new Float32Array(4),_=new Float32Array([4,0,0,0]),L=new Float32Array([0,0,0,0]),I=new Float32Array([0,0,0,0]),y=new Float32Array([0,0,0,0]),m=new Float32Array(16),E=new Float32Array([0,0,0,0]),T=new pc.Vec4,A=new pc.Vec4(-1,1,-1,-1),D=new o.g,P=[],C=[],R=[],v=[],f=new a.a,U=new a.a;let w=null;function S(e,t){return t?"hlslcc_mtx4x4"+e+"[0]":e}class x extends s.a{constructor(e,t,i){super(e,t,i),this.urpAsset=UnityEngine.Rendering.GraphicsSettings.renderPipelineAsset;const s=this.device.scope,a=UnityEngine.UnityVersion.IsOrNewer("2018.3");this.unityUrpIds={mainLightColor:s.resolve("_MainLightColor"),mainLightPosition:s.resolve("_MainLightPosition"),lightDirection:s.resolve("_LightDirection"),unityLightData:s.resolve("unity_LightData"),lightIndices:s.resolve("unity_LightIndices[0]"),additionalLightsCount:s.resolve("_AdditionalLightsCount"),occlusionProbes:s.resolve("unity_ProbesOcclusion"),glossyEnvironmentColor:s.resolve("_GlossyEnvironmentColor"),additionalLightsPosition:s.resolve("_AdditionalLightsPosition[0]"),additionalLightsColor:s.resolve("_AdditionalLightsColor[0]"),additionalLightsAttenuation:s.resolve("_AdditionalLightsAttenuation[0]"),additionalLightsSpotDir:s.resolve("_AdditionalLightsSpotDir[0]"),additionalLightsOcclusionProbe:s.resolve("_AdditionalLightsOcclusionProbes[0]"),cameraOpaqueTexture:s.resolve("_CameraOpaqueTexture"),scaledScreenParamsId:s.resolve("_ScaledScreenParams"),invCameraViewProj:s.resolve(S("_InvCameraViewProj",a))}}setCamera(e,t,i=!1){D.copy(e.invViewProjMat),this.unityUrpIds.invCameraViewProj.setValue(D.data),super.setCamera(e,t,i)}processClear(e){if(e.additionalCameraData.renderType===n.c.URP_CAMERA_RENDER_TYPE_BASE)this.device.clear(e.camera._clearOptions);else if(e.additionalCameraData.renderType===n.c.URP_CAMERA_RENDER_TYPE_OVERLAY&&e.additionalCameraData.clearDepth){const e={depth:1,flags:n.c.CLEARFLAG_DEPTH};this.device.clear(e)}}renderCameras(e){for(let t=0;t<e.length;t++){const i=e[t];this.renderCamera(i);const s=i.additionalCameraData;if(s&&s.cameraStack)for(const e of s.cameraStack._items)e&&this.renderCamera(e.handle)}}getCameras(){return this.scene._urpBaseCameras}renderMeshInstance(e,t,i,s,r){const o=this.device,h=s.material,l=(s._shaderDefs&n.c.SHADERDEF_LM)>0;if(!h||0===s.mesh.primitive.length||0===s.mesh.primitive[0].count)return;this.getPassesFromMaterial(h);const d=P.length>0,c=v.length>0,u=R.length>0;if(d||c||u){if(l&&s.configureLightmap(),this.updateScissor(),this.device.setVertexBuffer(s.morphInstance&&s.morphInstance._vertexBuffer?s.morphInstance._vertexBuffer:s.mesh.vertexBuffer,0),this.device.setIndexBuffer(s.mesh.indexBuffer[0]),this.setSkinning(this.device,s),this.setMaterial(this.device,s.material),this.pushUniforms(this.device,s.parameters),this.setDrawCall(this.device,s),o.setDepthRange((s._shaderDefs&n.c.SHADERDEF_RENDERTYPE_BACKGROUND)>0?1:0,1),e.merge(h.keywords),e.merge(f),l&&e.enableKeywordId(a.b.LIGHTMAP_ON),(s._shaderDefs&n.c.SHADERDEF_DIRLM)>0&&e.enableKeywordId(a.b.DIRLIGHTMAP_COMBINED),!u||d||c||this.renderMeshInstancePasses(R,e,s),!d&&!c)return this.popUniforms(this.device,s.parameters),void this.setDrawCall(this.device,null);d&&(C[0]=P[0],this.drawUrpForwardLitPass(C,s,r,e,l,t,i)),c&&this.renderMeshInstancePasses(v,e,s),this.restoreScissorTest(),this.popUniforms(o,s.parameters),this.setDrawCall(o,null)}}setupGlobalKeywordsForCamera(e,t){const i=this.urpAsset.AdditionalLightsRenderingMode;let s=!1,r=!1;for(let e=0;e<t.length;e++){if(t[e]._type===n.c.LIGHTTYPE_POINT||t[e]._type===n.c.LIGHTTYPE_DIRECTIONAL&&s){r=!0;break}t[e]._type===n.c.LIGHTTYPE_DIRECTIONAL&&(s=!0)}i!==UnityEngine.Rendering.Universal.LightRenderingMode.Disabled&&r&&(i===UnityEngine.Rendering.Universal.LightRenderingMode.PerPixel?f.enableKeywordId(a.b._ADDITIONAL_LIGHTS):i===UnityEngine.Rendering.Universal.LightRenderingMode.PerVertex&&f.enableKeywordId(a.b._ADDITIONAL_LIGHTS_VERTEX))}drawUrpForwardLitPass(e,t,i,s,o,h,l){r.a.getLightsData(t,i,this.lightData),U.copy(s);const d=this.setupLightProbe(o,h);this.setupGlossyEnvColor(),this.dispatchLightProbe(d,U,o),this.dispatchMainLightUrp(this.lightData.mainLight),this.dispatchLights(this.lightData),t._material._shader.isCreatedByShaderGraph&&!i.find((e=>e._type===n.c.LIGHTTYPE_POINT))&&i.filter((e=>e._type===n.c.LIGHTTYPE_DIRECTIONAL)).length<=1&&U.enableKeywordId(a.b._ADDITIONAL_LIGHTS_VERTEX),this.renderMeshInstancePasses(e,U,t)}dispatchLights(e){L[1]=e.pixelLights.length,L[2]=e.mainLight?1:0,this.unityUrpIds.unityLightData.setValue(L),this.unityUrpIds.occlusionProbes.setValue([1,1,1,1]),this.dispatchAdditionalLights(e)}dispatchMainLightUrp(e){null===e?(I[0]=0,I[1]=0,I[2]=0,I[3]=1,y[0]=0,y[1]=0,y[2]=-1,y[3]=0,m.set(pc.Mat4.IDENTITY.data)):(I.set(e._finalColor),y[0]=e._directionToLight.x,y[1]=e._directionToLight.y,y[2]=e._directionToLight.z,y[3]=0,m.set(e._worldToLightMatrix.data)),this.unityUrpIds.mainLightColor.setValue(I),this.unityUrpIds.mainLightPosition.setValue(y),this.unityUrpIds.lightDirection.setValue(y),this.lightIds.matrix.setValue(m)}dispatchAdditionalLights(e){const t=e.pixelLights,i=Math.min(t.length,UnityEngine.RenderSettings._pixelLightCount);for(let e=0;e<i;e++){const i=t[e];this.dispatchAdditionalLight(i,e)}this.unityUrpIds.additionalLightsPosition.setValue(l),this.unityUrpIds.additionalLightsColor.setValue(d),this.unityUrpIds.additionalLightsAttenuation.setValue(c),this.unityUrpIds.additionalLightsSpotDir.setValue(u),this.unityUrpIds.additionalLightsOcclusionProbe.setValue(g),_[0]=i,this.unityUrpIds.additionalLightsCount.setValue(_);for(let e=0;e<4;e++)p[e]=e;this.unityUrpIds.lightIndices.setValue(p)}dispatchAdditionalLight(e,t){const i=4*t,s=e._type===n.c.LIGHTTYPE_DIRECTIONAL?e._directionToLight:e._position;if(l[i+0]=s.x,l[i+1]=s.y,l[i+2]=s.z,l[i+3]=e._type===n.c.LIGHTTYPE_DIRECTIONAL?0:1,d[i+0]=e._finalColor[0],d[i+1]=e._finalColor[1],d[i+2]=e._finalColor[2],d[i+3]=e._finalColor[3],e._type===n.c.LIGHTTYPE_DIRECTIONAL)T.set(0,1,0,1);else{const t=e.range*e._attenuationEnd,i=-t/(.8*.8*t-t);T.set(1/Math.max(1e-4,e._attenuationEnd*e._attenuationEnd),i,0,1)}c[i+0]=T.x,c[i+1]=T.y,c[i+2]=T.z,c[i+3]=T.w,u[i+0]=0,u[i+1]=0,u[i+2]=1,u[i+3]=0;const a=A;a.x=0,a.y=1,g[i+0]=a.x,g[i+1]=a.y,g[i+2]=a.z,g[i+3]=a.w}setupGlossyEnvColor(){const e=UnityEngine.RenderSettings.ambientProbe,t=UnityEngine.RenderSettings._reflectionIntensity;E[0]=UnityEngine.Mathf.LinearToGammaSpace(e.data[0]*t),E[1]=UnityEngine.Mathf.LinearToGammaSpace(e.data[9]*t),E[2]=UnityEngine.Mathf.LinearToGammaSpace(e.data[18]*t),E[3]=0,this.unityUrpIds.glossyEnvironmentColor.setValue(E)}getPassesFromMaterial(e){e.getPass(n.c.SHADER_PASS_UNIVERSAL_FORWARD_LIT,P),e.getPass(n.c.SHADER_PASS_SRP_DEFAULT_UNLIT,v),e.getPass(n.c.SHADER_PASS_ALWAYS,R)}dispatchLightProbe(e,t,i){e.updateUniforms();for(let t=0;t<this.unityIds.lightProbeIds.length;t++)this.unityIds.lightProbeIds[t].setValue(e.uniforms[t]._data)}needToRenderDepth(){return this.urpAsset.RequireDepthTexture&&this.scene.hasVisibleDepthConsumers()}onOpaqueRendered(e){this.urpAsset.RequireOpaqueTexture&&this.drawCameraOpaqueTexture(e)}drawCameraOpaqueTexture(e){const t=this.device,i=e?e._screenParams:[this.device.width,this.device.height];null===w&&(w=this.createTexture(i[0],i[1]),w.name="_CameraOpaqueTexture"),t.setTexture(w,0),t.activeTexture(0),t.gl.copyTexSubImage2D(t.gl.TEXTURE_2D,0,0,0,0,0,w._width,w._height),this.unityUrpIds.cameraOpaqueTexture.setValue(w)}needToDrawSkybox(e,t){return e&&t.clearSkybox&&t._component.additionalCameraData.renderType===n.c.URP_CAMERA_RENDER_TYPE_BASE}}pc.ForwardRendererUrp=x}},e=>{e.O(0,[1],(()=>{return t=40,e(e.s=t);var t}));e.O()}]);