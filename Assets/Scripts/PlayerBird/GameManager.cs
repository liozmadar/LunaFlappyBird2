using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    [HideInInspector]public int birdEndCard;

    private static bool isNew;
    private void Awake()
    {
        if (!isNew)
        {
            DontDestroyOnLoad(this.gameObject);
            isNew = true;
        }
    }
}
