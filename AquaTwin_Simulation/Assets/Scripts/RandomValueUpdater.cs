using TMPro;
using UnityEngine;
using System.Collections;
using System.IO;
using System;

public class RandomValueUpdater : MonoBehaviour
{
    public TextMeshProUGUI waterSpeedText;
    public TextMeshProUGUI temperatureText;
    public TextMeshProUGUI dissolvedOxygenText;
    public TextMeshProUGUI pHText;
    public TextMeshProUGUI salinityText;
    public TextMeshProUGUI turbidityText;
    public TextMeshProUGUI statusText;

    private string filePath;
    private ConfigData configData;
    private Coroutine simulationCoroutine;

    void Start()
    {
        filePath = Path.Combine("config.json");
        Debug.Log("Looking for config.json at: " + filePath);

        LoadFromJson();
        simulationCoroutine = StartCoroutine(UpdateValues());
        StartCoroutine(StopSimulationAfterTime(10f));
    }

    private IEnumerator UpdateValues()
    {
        while (true)
        {
            yield return new WaitForSeconds(2f);

            if (configData != null)
            {
                configData.water_speed += RandomChange();
                configData.temperature += RandomChange();
                configData.dissolved_oxygen += RandomChange();
                configData.pH += RandomChange();
                configData.salinity += RandomChange();
                configData.turbidity += RandomChange();

                UpdateUIText();
            }
        }
    }

    private float RandomChange()
    {
        float change = UnityEngine.Random.Range(0.01f, 0.12f);
        return (UnityEngine.Random.Range(0, 2) == 0) ? change : -change;
    }

    private void UpdateUIText()
    {
        waterSpeedText.text = configData.water_speed.ToString("F2");
        temperatureText.text = configData.temperature.ToString("F2");
        dissolvedOxygenText.text = configData.dissolved_oxygen.ToString("F2");
        pHText.text = configData.pH.ToString("F2");
        salinityText.text = configData.salinity.ToString("F2");
        turbidityText.text = configData.turbidity.ToString("F2");
    }

    private IEnumerator StopSimulationAfterTime(float duration)
    {
        yield return new WaitForSeconds(duration);

        if (simulationCoroutine != null)
        {
            StopCoroutine(simulationCoroutine);
        }

        SaveToJson();
        Debug.Log("Simulation stopped and data saved.");

        if (statusText != null)
        {
            statusText.text = "Complete";
        }
    }

    private void SaveToJson()
    {
        if (configData != null)
        {
            configData.flag = "TRUE";
            string json = JsonUtility.ToJson(configData, true);
            File.WriteAllText(filePath, json);
            Debug.Log("Saved to JSON with flag set to TRUE: " + json);
        }
    }

    private void LoadFromJson()
    {
        if (File.Exists(filePath))
        {
            string json = File.ReadAllText(filePath);
            configData = JsonUtility.FromJson<ConfigData>(json);
            UpdateUIText();
        }
        else
        {
            Debug.LogError("Config file not found: " + filePath);
        }
    }

    [System.Serializable]
    private class ConfigData
    {
        public float water_speed;
        public float temperature;
        public float dissolved_oxygen;
        public float pH;
        public float salinity;
        public float turbidity;
        public string flag;
    }
}
