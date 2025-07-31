using UnityEngine;

public class WaterFlowEffect : MonoBehaviour
{
    public float scaleSpeed = 2f;  
    public float scaleMagnitude = 0.3f;  
    private Vector3 originalScale;
    private float randomOffset;

    void Start()
    {
        originalScale = transform.localScale;
        randomOffset = Random.Range(0f, 100f);  
    }

    void Update()
    {
        float scaleFactor = 1 + Mathf.Sin(Time.time * scaleSpeed + randomOffset) * scaleMagnitude;
        transform.localScale = new Vector3(originalScale.x, originalScale.y * scaleFactor, originalScale.z);
    }
}
