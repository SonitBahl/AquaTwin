using UnityEngine;
using System.IO;
using System.Collections;

public class WaterFlowController : MonoBehaviour
{
    [Header("Parent Objects for Water Particle Systems")]
    [SerializeField] private GameObject goodWaterParent;
    [SerializeField] private GameObject badWaterParent;

    private ParticleSystem[] goodWaterParticles;
    private ParticleSystem[] badWaterParticles;

    private string configPath;
    private WaterFlowConfig waterFlowConfig = new WaterFlowConfig(); 

    void Start()
    {
        configPath = Path.Combine(Application.dataPath, "Scripts", "config.json");

        if (goodWaterParent != null)
            goodWaterParticles = goodWaterParent.GetComponentsInChildren<ParticleSystem>();

        if (badWaterParent != null)
            badWaterParticles = badWaterParent.GetComponentsInChildren<ParticleSystem>();

        StartCoroutine(LoadConfigCoroutine());
    }

    void Update()
    {
        UpdateWaterFlowValues();
    }

    private IEnumerator LoadConfigCoroutine()
    {
        while (true)
        {
            LoadConfig();
            yield return new WaitForSeconds(1f); 
        }
    }

    private void LoadConfig()
    {
        if (File.Exists(configPath))
        {
            string json = File.ReadAllText(configPath);
            waterFlowConfig = JsonUtility.FromJson<WaterFlowConfig>(json);

            if (waterFlowConfig != null)
            {
                UpdateWaterFlowValues();
            }
        }
    }

    private void UpdateWaterFlowValues()
    {
        if (goodWaterParticles != null)
        {
            foreach (var ps in goodWaterParticles)
            {
                var emission = ps.emission;
                emission.rateOverTime = waterFlowConfig.goodWaterFlow;
            }
        }

        if (badWaterParticles != null)
        {
            foreach (var ps in badWaterParticles)
            {
                var emission = ps.emission;
                emission.rateOverTime = waterFlowConfig.badWaterFlow;
            }
        }
    }

    [System.Serializable]
    private class WaterFlowConfig
    {
        public float goodWaterFlow = 100f;
        public float badWaterFlow = 100f;
    }
}
