if ( TRACE ) { TRACE( JSON.parse( '["BirdDeath#init","BirdDeath#Start","BirdDeath#Update","BirdDeath#OnCollisionEnter2D","BirdDeath#OnTriggerEnter2D","BirdMovement#init","BirdMovement#Start","BirdMovement#Update","BirdMovement#BirdMoveForward","BirdMovement#ClickToFly","BirdTutorial#init","BirdTutorial#Start","BirdTutorial#Update","BirdTutorial#BirdTutorialFly","CameraMovement#init","CameraMovement#Start","CameraMovement#FixedUpdate","GameOver#Start","GameOver#Update","GameOver#RetryButton","HandTap#Start","HandTap#Update"]' ) ); }
/**
 * @version 1.0.8276.40279
 * @copyright anton
 * @compiler Bridge.NET 17.9.19-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BirdDeath start.*/
    Bridge.define("BirdDeath", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            birdSprite: null,
            birdDeathSprite: null,
            anim: null,
            scoreTextNumber: null,
            gameOverText: null,
            RetryText: null,
            gameOverBool: false,
            scoreNumber: 0,
            birdMovement: null,
            SP: null,
            emote1: null,
            emote2: null,
            emote3: null,
            emoteTimer: 0,
            emoteBool: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BirdDeath#init", this ); }

                this.emoteTimer = 1;
            }
        },
        methods: {
            /*BirdDeath.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BirdDeath#Start", this ); }

                this.birdMovement = this.GetComponent(BirdMovement);
                this.anim = this.GetComponentInChildren(UnityEngine.Animator);
            },
            /*BirdDeath.Start end.*/

            /*BirdDeath.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BirdDeath#Update", this ); }

                if (this.gameOverBool) {
                    this.gameOverText.gameObject.SetActive(true);
                    this.RetryText.SetActive(true);
                    this.gameOverText.fontSize++;
                    if (this.gameOverText.fontSize > 70) {
                        this.gameOverBool = false;
                    }
                }
                if (this.emoteBool === true) {
                    this.SP.gameObject.SetActive(true);
                    this.emoteTimer -= UnityEngine.Time.deltaTime;
                    if (this.emoteTimer < 0) {
                        this.emoteBool = false;
                        this.emoteTimer = 1;
                        this.SP.gameObject.SetActive(false);
                    }
                }
            },
            /*BirdDeath.Update end.*/

            /*BirdDeath.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "BirdDeath#OnCollisionEnter2D", this ); }

                if (Bridge.referenceEquals(collision.gameObject.tag, "Object")) {
                    this.anim.enabled = false;

                    this.birdMovement.speed = 0;
                    this.birdMovement.birdDeath = true;

                    this.birdSprite = (this.GetComponentInChildren(UnityEngine.SpriteRenderer).sprite = this.birdDeathSprite, this.birdDeathSprite);

                    this.gameOverBool = true;
                }
            },
            /*BirdDeath.OnCollisionEnter2D end.*/

            /*BirdDeath.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "BirdDeath#OnTriggerEnter2D", this ); }

                if (Bridge.referenceEquals(collision.gameObject.tag, "BirdPassThrough")) {
                    this.scoreNumber = (this.scoreNumber + 1) | 0;
                    this.scoreTextNumber.text = Bridge.toString(this.scoreNumber);

                    this.emoteBool = true;
                    var random = UnityEngine.Random.Range(1, 4);
                    if (random === 1) {
                        this.SP.sprite = this.emote1;
                    }
                    if (random === 2) {
                        this.SP.sprite = this.emote2;
                    }
                    if (random === 3) {
                        this.SP.sprite = this.emote3;
                    }
                }
            },
            /*BirdDeath.OnTriggerEnter2D end.*/


        }
    });
    /*BirdDeath end.*/

    /*BirdMovement start.*/
    Bridge.define("BirdMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            jumpForce: 0,
            speed: 0,
            rb: null,
            birdDeath: false,
            tutorialBird: null,
            firstTutorialClick: false,
            firstTutorialClickTimer: 0,
            firstTutorialClickOneJump: false,
            firstTutorialClickAlreadyClicked: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BirdMovement#init", this ); }

                this.firstTutorialClickTimer = 10;
                this.firstTutorialClickOneJump = true;
                this.firstTutorialClickAlreadyClicked = true;
            }
        },
        methods: {
            /*BirdMovement.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BirdMovement#Start", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody2D);
            },
            /*BirdMovement.Start end.*/

            /*BirdMovement.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BirdMovement#Update", this ); }

                this.BirdMoveForward();
                this.firstTutorialClickTimer -= UnityEngine.Time.deltaTime;
                if (this.firstTutorialClickTimer < 0) {
                    this.firstTutorialClick = true;
                    this.rb.gravityScale = 1;
                    this.tutorialBird.SetActive(false);

                    if (this.firstTutorialClickOneJump && this.firstTutorialClickAlreadyClicked) {
                        this.rb.velocity = new pc.Vec2( 0.0, this.jumpForce );
                        this.firstTutorialClickOneJump = false;
                    }
                }
            },
            /*BirdMovement.Update end.*/

            /*BirdMovement.BirdMoveForward start.*/
            BirdMoveForward: function () {
if ( TRACE ) { TRACE( "BirdMovement#BirdMoveForward", this ); }

                if (this.firstTutorialClick) {
                    this.transform.position = this.transform.position.$clone().add( pc.Vec3.RIGHT.clone().clone().scale( this.speed ).clone().scale( UnityEngine.Time.deltaTime ) );
                }
            },
            /*BirdMovement.BirdMoveForward end.*/

            /*BirdMovement.ClickToFly start.*/
            ClickToFly: function () {
if ( TRACE ) { TRACE( "BirdMovement#ClickToFly", this ); }

                this.firstTutorialClickAlreadyClicked = false;
                this.firstTutorialClick = true;
                this.rb.gravityScale = 1;
                this.tutorialBird.SetActive(false);
                if (!this.birdDeath) {
                    this.rb.velocity = new pc.Vec2( 0.0, this.jumpForce );
                }
            },
            /*BirdMovement.ClickToFly end.*/


        }
    });
    /*BirdMovement end.*/

    /*BirdTutorial start.*/
    Bridge.define("BirdTutorial", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            jumpForce: 0,
            rb: null,
            timer: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BirdTutorial#init", this ); }

                this.timer = 0;
            }
        },
        methods: {
            /*BirdTutorial.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BirdTutorial#Start", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody2D);
            },
            /*BirdTutorial.Start end.*/

            /*BirdTutorial.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BirdTutorial#Update", this ); }

                this.timer -= UnityEngine.Time.deltaTime;
                if (this.timer < 0) {
                    this.BirdTutorialFly();
                    this.timer = 1.0;
                }
            },
            /*BirdTutorial.Update end.*/

            /*BirdTutorial.BirdTutorialFly start.*/
            BirdTutorialFly: function () {
if ( TRACE ) { TRACE( "BirdTutorial#BirdTutorialFly", this ); }

                this.rb.velocity = new pc.Vec2( 0.0, this.jumpForce );
            },
            /*BirdTutorial.BirdTutorialFly end.*/


        }
    });
    /*BirdTutorial end.*/

    /*CameraMovement start.*/
    Bridge.define("CameraMovement", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            player: null,
            smoothing: 0,
            offset: null,
            minPos: null,
            maxPos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraMovement#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.minPos = new UnityEngine.Vector2();
                this.maxPos = new UnityEngine.Vector2();
                this.smoothing = 5.0;
            }
        },
        methods: {
            /*CameraMovement.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CameraMovement#Start", this ); }


            },
            /*CameraMovement.Start end.*/

            /*CameraMovement.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CameraMovement#FixedUpdate", this ); }

                var targetCamPos = this.player.position.$clone().add( this.offset );
                this.transform.position = new pc.Vec3().lerp( this.transform.position, targetCamPos, this.smoothing * UnityEngine.Time.deltaTime );
            },
            /*CameraMovement.FixedUpdate end.*/


        }
    });
    /*CameraMovement end.*/

    /*GameOver start.*/
    Bridge.define("GameOver", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*GameOver.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameOver#Start", this ); }


            },
            /*GameOver.Start end.*/

            /*GameOver.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameOver#Update", this ); }




            },
            /*GameOver.Update end.*/

            /*GameOver.RetryButton start.*/
            RetryButton: function () {
if ( TRACE ) { TRACE( "GameOver#RetryButton", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene(0);
            },
            /*GameOver.RetryButton end.*/


        }
    });
    /*GameOver end.*/

    /*HandTap start.*/
    Bridge.define("HandTap", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*HandTap.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "HandTap#Start", this ); }


            },
            /*HandTap.Start end.*/

            /*HandTap.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "HandTap#Update", this ); }


            },
            /*HandTap.Update end.*/


        }
    });
    /*HandTap end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LunaPlaygroundFieldAttribute start.*/
    Bridge.define("LunaPlaygroundFieldAttribute", {
        inherits: [System.Attribute]
    });
    /*LunaPlaygroundFieldAttribute end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","TMPro"];

    /*CameraMovement start.*/
    $m("CameraMovement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"maxPos","t":4,"rt":$n[1].Vector2,"sn":"maxPos"},{"a":2,"n":"minPos","t":4,"rt":$n[1].Vector2,"sn":"minPos"},{"a":2,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"a":2,"n":"player","t":4,"rt":$n[1].Transform,"sn":"player"},{"a":2,"n":"smoothing","t":4,"rt":$n[0].Single,"sn":"smoothing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CameraMovement end.*/

    /*GameOver start.*/
    $m("GameOver", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"RetryButton","t":8,"sn":"RetryButton","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*GameOver end.*/

    /*BirdDeath start.*/
    $m("BirdDeath", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"RetryText","t":4,"rt":$n[1].GameObject,"sn":"RetryText"},{"a":2,"n":"SP","t":4,"rt":$n[1].SpriteRenderer,"sn":"SP"},{"a":1,"n":"anim","t":4,"rt":$n[1].Animator,"sn":"anim"},{"a":2,"n":"birdDeathSprite","t":4,"rt":$n[1].Sprite,"sn":"birdDeathSprite"},{"a":2,"n":"birdMovement","t":4,"rt":BirdMovement,"sn":"birdMovement"},{"a":1,"n":"birdSprite","t":4,"rt":$n[1].Sprite,"sn":"birdSprite"},{"a":2,"n":"emote1","t":4,"rt":$n[1].Sprite,"sn":"emote1"},{"a":2,"n":"emote2","t":4,"rt":$n[1].Sprite,"sn":"emote2"},{"a":2,"n":"emote3","t":4,"rt":$n[1].Sprite,"sn":"emote3"},{"a":1,"n":"emoteBool","t":4,"rt":$n[0].Boolean,"sn":"emoteBool","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"emoteTimer","t":4,"rt":$n[0].Single,"sn":"emoteTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"gameOverBool","t":4,"rt":$n[0].Boolean,"sn":"gameOverBool","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"gameOverText","t":4,"rt":$n[2].TextMeshProUGUI,"sn":"gameOverText"},{"a":1,"n":"scoreNumber","t":4,"rt":$n[0].Int32,"sn":"scoreNumber","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"scoreTextNumber","t":4,"rt":$n[2].TextMeshProUGUI,"sn":"scoreTextNumber"}]}; }, $n);
    /*BirdDeath end.*/

    /*BirdMovement start.*/
    $m("BirdMovement", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BirdMoveForward","t":8,"sn":"BirdMoveForward","rt":$n[0].Void},{"a":2,"n":"ClickToFly","t":8,"sn":"ClickToFly","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"birdDeath","t":4,"rt":$n[0].Boolean,"sn":"birdDeath","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"firstTutorialClick","t":4,"rt":$n[0].Boolean,"sn":"firstTutorialClick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"firstTutorialClickAlreadyClicked","t":4,"rt":$n[0].Boolean,"sn":"firstTutorialClickAlreadyClicked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"firstTutorialClickOneJump","t":4,"rt":$n[0].Boolean,"sn":"firstTutorialClickOneJump","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"firstTutorialClickTimer","t":4,"rt":$n[0].Single,"sn":"firstTutorialClickTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new LunaPlaygroundFieldAttribute()],"a":2,"n":"jumpForce","t":4,"rt":$n[0].Single,"sn":"jumpForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tutorialBird","t":4,"rt":$n[1].GameObject,"sn":"tutorialBird"}]}; }, $n);
    /*BirdMovement end.*/

    /*LunaPlaygroundFieldAttribute start.*/
    $m("LunaPlaygroundFieldAttribute", function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*LunaPlaygroundFieldAttribute end.*/

    /*BirdTutorial start.*/
    $m("BirdTutorial", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BirdTutorialFly","t":8,"sn":"BirdTutorialFly","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"jumpForce","t":4,"rt":$n[0].Single,"sn":"jumpForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"rb"},{"a":1,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BirdTutorial end.*/

    /*HandTap start.*/
    $m("HandTap", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*HandTap end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

});
