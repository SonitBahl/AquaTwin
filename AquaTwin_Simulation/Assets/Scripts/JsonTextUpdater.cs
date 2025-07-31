using UnityEngine;
using TMPro;
using System.Collections.Generic;

[System.Serializable]
public class WaterData
{
    public float water_speed;
    public float temperature;
    public float dissolved_oxygen;
    public float pH;
    public float salinity;
    public float turbidity;
    public string flag;
}

public class JsonTextUpdater : MonoBehaviour
{
    public TextAsset jsonFile;

    [System.Serializable]
    public class TextElement
    {
        public string variableName;
        public TextMeshProUGUI textMesh;
    }

    public List<TextElement> textElements = new List<TextElement>();
    private WaterData waterData;

    void Start()
    {
        if (jsonFile != null)
        {
            waterData = JsonUtility.FromJson<WaterData>(jsonFile.text);
            UpdateText();
        }
        else
        {
            Debug.LogError("JSON file not assigned!");
        }
    }

    public void UpdateText()
    {
        if (waterData == null) return;

        foreach (var textElement in textElements)
        {
            if (textElement.textMesh != null)
            {
                var value = typeof(WaterData).GetField(textElement.variableName)?.GetValue(waterData);
                if (value != null)
                {
                    textElement.textMesh.text = value is float ? ((float)value).ToString("F2") : value.ToString();
                }
                else
                {
                    textElement.textMesh.text = "Variable not found!";
                }
            }
        }
    }
}
