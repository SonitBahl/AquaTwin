using UnityEngine;

public class Waterflow : MonoBehaviour
{
    public WaypointContainer waypointContainer;
    public float speed = 5f;
    public float rotationSpeed = 2f;
    public GameObject waterPrefab;  

    private int currentWaypointIndex = 0;
    private bool spawnedNext = false; 

    void Start()
    {
        if (waypointContainer == null || waypointContainer.waypoints.Count == 0)
        {
            Debug.LogError("WaypointContainer not assigned or empty!");
            enabled = false;
            return;
        }
    }

    void Update()
    {
        FollowWaypoints();
    }

    void FollowWaypoints()
    {
        if (waypointContainer.waypoints.Count == 0) return;

        Vector3 targetWaypoint = waypointContainer.waypoints[currentWaypointIndex].position;
        Vector3 direction = (targetWaypoint - transform.position).normalized;

        Quaternion targetRotation = Quaternion.LookRotation(direction);
        transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);

        transform.Translate(Vector3.forward * speed * Time.deltaTime);

        if (!spawnedNext && Vector3.Distance(transform.position, waypointContainer.waypoints[0].position) > 2f)
        {
            spawnedNext = true;
            SpawnNewWater();
        }

        if (Vector3.Distance(transform.position, targetWaypoint) < 1f)
        {
            currentWaypointIndex++;

            if (currentWaypointIndex >= waypointContainer.waypoints.Count)
            {
                Destroy(gameObject);
            }
        }
    }

    void SpawnNewWater()
    {
        Instantiate(waterPrefab, waypointContainer.waypoints[0].position, Quaternion.identity);
    }
}
