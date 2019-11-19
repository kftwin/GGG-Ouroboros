
var body : GameObject;

function OnTriggerEnter(hit : Collider)
{
	if (hit.gameObject.name == "fireCollider")
	{ 
		Destroy(gameObject);
		
		var instance : GameObject = Instantiate(body, transform.position, body.transform.rotation);
		
		Debug.Log("died!!!!");
	}
}

function OnCollisionEnter(hit : Collision)
{
	if (hit.collider.gameObject.tag == "charred")
	{ 
		Destroy(gameObject);
		
		var instance : GameObject = Instantiate(body, transform.position, body.transform.rotation);
		
		Debug.Log("died!!!!");
	}
}