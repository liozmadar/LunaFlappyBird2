using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WallsCreate : MonoBehaviour
{
    public GameObject[] walls;
    public float firstWallsTimer = 0;
    public float newWallsTimer = 0;
    public float speed;
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
    }
    void WallsCreating()
    {
        int randomWall = Random.Range(0, 3);
        Instantiate(walls[randomWall], transform.position, Quaternion.identity);
    }
}
