using System.Collections.Generic;
using UnityEngine;

public class WaypointContainer : MonoBehaviour
{
    public List<Transform> waypoints;

    void Awake()
    {
        waypoints.Clear();
        foreach (Transform child in transform)
        {
            waypoints.Add(child);
        }

        if (waypoints.Contains(transform))
        {
            waypoints.Remove(transform);
        }
    }
}
