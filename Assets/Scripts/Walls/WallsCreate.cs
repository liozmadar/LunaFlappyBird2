using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class WallsCreate : MonoBehaviour
{
    public GameObject[] walls;
    public float firstWallsTimer = 0;
    public float newWallsTimer = 0;
    public float speed;

    public GameObject backGroundImage;
    public float backGroundImageTimer = 10;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.position += Vector3.right * speed * Time.deltaTime;

        firstWallsTimer -= Time.deltaTime;
        if (firstWallsTimer < 0)
        {
            WallsCreating();
            firstWallsTimer = newWallsTimer;
        }
        backGroundImageTimer -= Time.deltaTime;
        if (backGroundImageTimer < 0)
        {
            BackGroundImageCreating();
            backGroundImageTimer = 10;
        }
    }
    void WallsCreating()
    {
        int randomWall = Random.Range(0, 3);
        Instantiate(walls[randomWall], transform.position, Quaternion.identity);
    }
    void BackGroundImageCreating()
    {
        Vector3 backGroundPosition = new Vector3(transform.position.x + 20, 0, 0);
        Instantiate(backGroundImage, backGroundPosition, Quaternion.identity);
    }
}
