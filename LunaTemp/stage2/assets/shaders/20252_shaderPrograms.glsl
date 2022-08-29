["#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _Color;\nuniform \tvec4 _MainTex_ST;\nattribute highp vec4 in_POSITION0;\nattribute highp vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0 = in_COLOR0 * _Color;\n    vs_COLOR0 = u_xlat0;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_TEXCOORD1 = in_POSITION0;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _TextureSampleAdd;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\n#define SV_Target0 gl_FragData[0]\nvec4 u_xlat0;\nlowp vec4 u_xlat10_0;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat0 = u_xlat10_0 + _TextureSampleAdd;\n    u_xlat0 = u_xlat0 * vs_COLOR0;\n    SV_Target0 = u_xlat0;\n    return;\n}\n\n","#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _Color;\nuniform \tvec4 _MainTex_ST;\nattribute highp vec4 in_POSITION0;\nattribute highp vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0 = in_COLOR0 * _Color;\n    vs_COLOR0 = u_xlat0;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_TEXCOORD1 = in_POSITION0;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _TextureSampleAdd;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\n#define SV_Target0 gl_FragData[0]\nvec4 u_xlat0;\nlowp vec4 u_xlat10_0;\nbool u_xlatb0;\nmediump float u_xlat16_1;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat0 = u_xlat10_0 + _TextureSampleAdd;\n    u_xlat16_1 = u_xlat0.w * vs_COLOR0.w + -0.00100000005;\n    u_xlat0 = u_xlat0 * vs_COLOR0;\n    SV_Target0 = u_xlat0;\n    u_xlatb0 = u_xlat16_1<0.0;\n    if(u_xlatb0){discard;}\n    return;\n}\n\n","#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _Color;\nuniform \tvec4 _MainTex_ST;\nattribute highp vec4 in_POSITION0;\nattribute highp vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0 = in_COLOR0 * _Color;\n    vs_COLOR0 = u_xlat0;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_TEXCOORD1 = in_POSITION0;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _TextureSampleAdd;\nuniform \tvec4 _ClipRect;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\n#define SV_Target0 gl_FragData[0]\nfloat u_xlat0;\nbvec2 u_xlatb0;\nvec4 u_xlat1;\nlowp vec4 u_xlat10_1;\nbvec2 u_xlatb2;\nvoid main()\n{\n    u_xlatb0.xy = lessThan(_ClipRect.xyxx, vs_TEXCOORD1.xyxx).xy;\n    u_xlatb0.x = u_xlatb0.y && u_xlatb0.x;\n    u_xlatb2.xy = lessThan(vs_TEXCOORD1.xyxx, _ClipRect.zwzz).xy;\n    u_xlatb0.x = u_xlatb2.x && u_xlatb0.x;\n    u_xlatb0.x = u_xlatb2.y && u_xlatb0.x;\n    u_xlat0 = u_xlatb0.x ? 1.0 : float(0.0);\n    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat1 = u_xlat10_1 + _TextureSampleAdd;\n    u_xlat1 = u_xlat1 * vs_COLOR0;\n    u_xlat1.w = u_xlat0 * u_xlat1.w;\n    SV_Target0 = u_xlat1;\n    return;\n}\n\n","#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tmediump vec4 _Color;\nuniform \tvec4 _MainTex_ST;\nattribute highp vec4 in_POSITION0;\nattribute highp vec4 in_COLOR0;\nattribute highp vec2 in_TEXCOORD0;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0 = in_COLOR0 * _Color;\n    vs_COLOR0 = u_xlat0;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_TEXCOORD1 = in_POSITION0;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _TextureSampleAdd;\nuniform \tvec4 _ClipRect;\nuniform lowp sampler2D _MainTex;\nvarying mediump vec4 vs_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\n#define SV_Target0 gl_FragData[0]\nfloat u_xlat0;\nbvec2 u_xlatb0;\nvec4 u_xlat1;\nlowp vec4 u_xlat10_1;\nmediump float u_xlat16_2;\nbvec2 u_xlatb3;\nvoid main()\n{\n    u_xlatb0.xy = lessThan(_ClipRect.xyxx, vs_TEXCOORD1.xyxx).xy;\n    u_xlatb0.x = u_xlatb0.y && u_xlatb0.x;\n    u_xlatb3.xy = lessThan(vs_TEXCOORD1.xyxx, _ClipRect.zwzz).xy;\n    u_xlatb0.x = u_xlatb3.x && u_xlatb0.x;\n    u_xlatb0.x = u_xlatb3.y && u_xlatb0.x;\n    u_xlat0 = u_xlatb0.x ? 1.0 : float(0.0);\n    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat1 = u_xlat10_1 + _TextureSampleAdd;\n    u_xlat1 = u_xlat1 * vs_COLOR0;\n    u_xlat16_2 = u_xlat1.w * u_xlat0 + -0.00100000005;\n    u_xlat1.w = u_xlat0 * u_xlat1.w;\n    SV_Target0 = u_xlat1;\n    u_xlatb0.x = u_xlat16_2<0.0;\n    if(u_xlatb0.x){discard;}\n    return;\n}\n\n"]