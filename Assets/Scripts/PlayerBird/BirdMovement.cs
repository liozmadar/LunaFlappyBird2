using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BirdMovement : MonoBehaviour
{
    //[LunaPlaygroundField("name", 1, "title")]
    //private string myName;

    public float jumpForce;

    public float speed;

    private Rigidbody2D rb;
    public bool birdDeath;

    public GameObject tutorialBird;
    private bool firstTutorialClick;
    private float firstTutorialClickTimer = 10;
    private bool firstTutorialClickOneJump = true;
    private bool firstTutorialClickAlreadyClicked = true;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        BirdMoveForward();
        firstTutorialClickTimer -= Time.deltaTime;
        if (firstTutorialClickTimer < 0)
        {
            firstTutorialClick = true;
            rb.gravityScale = 1;
            tutorialBird.SetActive(false);

            if (firstTutorialClickOneJump && firstTutorialClickAlreadyClicked)
            {
                rb.velocity = new Vector2(0f, jumpForce);
                firstTutorialClickOneJump = false;
            }
        }
    }
    public void BirdMoveForward()
    {
        if (firstTutorialClick)
        {
            transform.position += Vector3.right * speed * Time.deltaTime;
        }
    }
    public void ClickToFly()
    {
        firstTutorialClickAlreadyClicked = false;
        firstTutorialClick = true;
        rb.gravityScale = 1;
        tutorialBird.SetActive(false);
        if (!birdDeath)
        {
            rb.velocity = new Vector2(0f, jumpForce);
        }
    }
}
