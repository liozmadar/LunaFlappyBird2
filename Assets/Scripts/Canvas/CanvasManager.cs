using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class CanvasManager : MonoBehaviour
{
    public static CanvasManager instance;

    public TextMeshProUGUI scoreNumber;
    public TextMeshProUGUI bestScoreNumber;

    private static int BestScoreNumberStatic;
    // Start is called before the first frame update
    void Start()
    {
        instance = this;
        Debug.Log(BestScoreNumberStatic);
    }

    // Update is called once per frame
    void Update()
    {
        scoreNumber.text = BirdDeath.instance.scoreNumber.ToString();
        BestScoreNumber();
        CheckTheBestScoreNumber();
    }
    public void BestScoreNumber()
    {
        BestScoreNumberStatic = BirdDeath.instance.scoreNumber;
    }
    public void CheckTheBestScoreNumber()
    {
        if (BirdDeath.instance.scoreNumber > BestScoreNumberStatic)
        {
            BestScoreNumberStatic = BirdDeath.instance.scoreNumber;
        }
    }
}
