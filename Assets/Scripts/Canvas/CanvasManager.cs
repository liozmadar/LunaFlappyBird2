using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class CanvasManager : MonoBehaviour
{
    public static CanvasManager instance;

    public TextMeshProUGUI scoreNumber;
    public TextMeshProUGUI bestScoreNumber;


    // Start is called before the first frame update
    void Start()
    {
        instance = this;
    }

    // Update is called once per frame
    void Update()
    {
        CheckTheBestScoreNumber();
        ScoreNumber();
    }
    void ScoreNumber()
    {
        scoreNumber.text = BirdDeath.instance.scoreNumber.ToString();
    }
    void BestScoreNumber()
    {
        PlayerPrefs.SetInt("Check", BirdDeath.instance.scoreNumber);
        bestScoreNumber.text = PlayerPrefs.GetInt("Check").ToString();
    }
    public void CheckTheBestScoreNumber()
    {
        if (BirdDeath.instance.scoreNumber > PlayerPrefs.GetInt("Check"))
        {
            BestScoreNumber();
        }
        else
        {
            bestScoreNumber.text = PlayerPrefs.GetInt("Check").ToString();
        }
    }
    void DeleteBestNumber()
    {
        PlayerPrefs.DeleteKey("Check");
    }
}
