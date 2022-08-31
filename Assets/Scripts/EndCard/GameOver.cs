using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using Luna.Unity;

public class GameOver : MonoBehaviour
{
    GameManager gameManager;
    // Start is called before the first frame update
    void Start()
    {
        gameManager = FindObjectOfType<GameManager>();
    }
    public void RetryButton()
    {
        SceneManager.LoadScene(0);
        gameManager.birdEndCard = 0;
        Luna.Unity.Playable.InstallFullGame();
    }

}
