
var body : GameObject;

function OnCollisionEnter(hit : Collision)
{
	if (hit.gameObject.name == "spikeWallCollider")
	{
		Destroy(gameObject);
		var instance : GameObject = Instantiate(body, transform.position, transform.rotation);
		
		Debug.Log("died!!!!");
	}
}