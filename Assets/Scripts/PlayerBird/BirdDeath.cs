using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using Luna.Unity;
using UnityEngine.SceneManagement;

public class BirdDeath : MonoBehaviour
{
    private Sprite birdSprite;
    public Sprite birdDeathSprite;
    private Animator anim;

    public TextMeshProUGUI scoreTextNumber;
    public TextMeshProUGUI gameOverText;
    public GameObject RetryText;
    public bool gameOverBool;

    private int scoreNumber;

    public BirdMovement birdMovement;

    public SpriteRenderer SP;
    public Sprite emote1;
    public Sprite emote2;
    public Sprite emote3;
    public Sprite emoteDead;
    private float emoteTimer = 1;
    private bool emoteBool;

    [LunaPlaygroundField("Bird Chances (For EndCard)", 2, "Game tries")]
    public int birdChances;

    private GameManager gameManager;
    private bool isDead;

    // Start is called before the first frame update
    void Start()
    {
        birdMovement = GetComponent<BirdMovement>();
        anim = GetComponentInChildren<Animator>();

        gameManager = FindObjectOfType<GameManager>();
    }

    // Update is called once per frame
    void Update()
    {
        if (gameOverBool)
        {
            gameOverText.gameObject.SetActive(true);
            RetryText.SetActive(true);
            gameOverText.fontSize++;
            if (gameOverText.fontSize > 130)
            {
                gameOverBool = false;
            }
        }
        if (emoteBool == true)
        {
            SP.gameObject.SetActive(true);
            emoteTimer -= Time.deltaTime;
            if (emoteTimer < 0)
            {
                emoteBool = false;
                emoteTimer = 1;
                if (SP.sprite == emoteDead)
                {
                    SP.gameObject.SetActive(true);
                }
                else SP.gameObject.SetActive(false);
            }
        }
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "Object" && !isDead)
        {
            emoteBool = true;
            SP.sprite = emoteDead;

            anim.enabled = false;
            isDead = true;

            birdMovement.speed = 0;
            birdMovement.birdDeath = true;


            birdSprite = GetComponentInChildren<SpriteRenderer>().sprite = birdDeathSprite;

            //how many chances befor the EndCard appears
            gameManager.birdEndCard++;
            if (gameManager.birdEndCard == birdChances)
            {
                gameOverBool = true;
            }
            else Invoke("Retry", 2);
        }
    }
    void Retry()
    {
        SceneManager.LoadScene(0);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "BirdPassThrough")
        {
            scoreNumber++;
            scoreTextNumber.text = scoreNumber.ToString();

            emoteBool = true;
            float random = Random.Range(1, 4);
            if (random == 1)
            {
                SP.sprite = emote1;
            }
            if (random == 2)
            {
                SP.sprite = emote2;
            }
            if (random == 3)
            {
                SP.sprite = emote3;
            }
        }
    }
}
