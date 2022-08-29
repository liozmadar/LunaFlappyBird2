using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BirdTutorial : MonoBehaviour
{
    public float jumpForce;

    private Rigidbody2D rb;

    private float timer = 0;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        timer -= Time.deltaTime;
        if (timer < 0)
        {
            BirdTutorialFly();
            timer = 1f;
        }
    }
    public void BirdTutorialFly()
    {
        rb.velocity = new Vector2(0f, jumpForce);
    }
}
