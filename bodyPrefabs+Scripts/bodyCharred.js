var jumpEnabled = false;
var power 	: float = 500.00;
var floatBody : GameObject;
function Start()
{
	rigidbody.AddForce(Vector3(20, 0, 0));
}

function Update() 
{
	if ((Input.GetKeyDown("up")) && (jumpEnabled == true))
	{
    	jumpEnabled = false;
		rigidbody.AddForce(Vector3(0, power, 0));

		
		Debug.Log("hit up");
	}
	else if (Input.GetKey("left"))
	{
		rigidbody.AddForce(Vector3(-10, 0, 0));
		Debug.Log("hit left");
	}
	else if (Input.GetKey("right"))
	{
		rigidbody.AddForce(Vector3(10, 0, 0));
		Debug.Log("hit right");
	}
	
	Destroy(gameObject, 10);

}

function OnCollisionEnter(collision : Collision)
{


  if (collision.collider.gameObject.name == "hitbox")
    {
    Destroy(gameObject);
   // var position: Vector3 = Vector3(transform.position.x,transform.position.y + 4.3f, transform.position.z);
    //floatBody.rigidBody.isKinematic = true;
    instance = Instantiate(floatBody, transform.position , floatBody.transform.rotation);
    }
	if (collision.gameObject.name == "spikeFloorCollider")
	{
		rigidbody.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY;
	}
	else if (collision.gameObject.name == "spikeWallCollider")
	{
		rigidbody.constraints = RigidbodyConstraints.FreezeAll;

		Debug.Log("hit spikeWall!!!!");
	}
  if ((collision.collider.tag == "floor") || (collision.collider.tag == "player"))
	{
		jumpEnabled = true;
	}
}

