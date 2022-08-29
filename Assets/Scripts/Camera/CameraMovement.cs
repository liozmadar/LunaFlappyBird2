using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMovement : MonoBehaviour
{
    public Transform player;
    public float smoothing = 5f;
    public Vector3 offset;

    public Vector3 minPos;
    public Vector3 maxPos;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void FixedUpdate()
    {
        Vector3 targetCamPos = player.position + offset;

        Vector3 boundPositions = new Vector3(
            Mathf.Clamp(targetCamPos.x, minPos.x, maxPos.x),
            Mathf.Clamp(targetCamPos.y, minPos.y, maxPos.y),
            Mathf.Clamp(targetCamPos.z, minPos.z, maxPos.z));

        transform.position = Vector3.Lerp(transform.position, boundPositions, smoothing * Time.deltaTime);
    }
}
