using UnityEngine;
using System.Collections;

[RequireComponent (typeof (MeshFilter))]
[RequireComponent (typeof (MeshRenderer))]
[RequireComponent (typeof (MeshCollider))]
public class PlatformGenerator : MonoBehaviour {
	static float depth = 5;
	//Parameters
	//Dimensions: These are in real world space
	//Length
	public float mLength;
	//Height
	public float mHeight;
	
	
	//Smoothness
	// 1 is for super smooth
	// 0 is for super jagged
	public float mSmoothness;
	//Variation
	// this is the height variation in the 
	public float mVariation;
	//frequency
	public float mFrequency;
	
	public void GeneratePlatform() {
		Debug.Log("Generate");
		MeshFilter mf = gameObject.GetComponent<MeshFilter>();
		if(!mf.sharedMesh) {
			Debug.Log("Create New Mesh");
			mf.sharedMesh = new Mesh();
		}
		MeshCollider mc = gameObject.GetComponent<MeshCollider>();
		if(!mc.sharedMesh) {
			Debug.Log("Add Shared Mesh To Mesh Collider");
			mc.sharedMesh = mf.sharedMesh;
		}
		Mesh mesh = mf.sharedMesh;
		//create a cube for now
		mesh.Clear();
		
		//Z is always plus/minus the depth
		Vector3[] vertices = {	new Vector3(0,0,depth),	//0
								new Vector3(0,0,-depth),//1
								new Vector3(0,1,depth),	//2
								new Vector3(0,1,-depth),//3
								new Vector3(1,0,depth),	//4
								new Vector3(1,0,-depth),//5
								new Vector3(1,1,depth),	//6
								new Vector3(1,1,-depth)};//7
		//negative depth is towards the cam
						//front
		int[] tris = {	1,3,5,
						3,7,5,
						//top
						3,2,7,
						2,6,7};
						
        mesh.vertices = vertices;
        //mesh.uv = newUV;
        mesh.triangles = tris;
		mesh.RecalculateNormals();
		mesh.RecalculateBounds();
	}
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
