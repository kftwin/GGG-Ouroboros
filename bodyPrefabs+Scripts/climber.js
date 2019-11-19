
var climber 	: GameObject;
var up			= 0;
var down 		= 0;
var maxUp 		= 5;
var maxDown 	= 5;
var jumpSound 	= AudioClip;

function Update() 
{
	if (Input.GetKeyDown("w"))
	{
		Destroy(gameObject);
		var instance : GameObject = Instantiate(climber, transform.position, transform.rotation);
		up 	 = 0;
		down = 0;
		
		//audio.PlayOneShot(jumpSound);
	}
	else if ((Input.GetKey("up")) && (up <= maxUp))
	{
		rigidbody.transform.Translate(Vector3(0, .1, 0));
		up +=1;
		
		if (down > 0)
		{
			down -= 1;
		}
	}
	else if ((Input.GetKey("down")) && (down <= maxDown))
	{
		rigidbody.transform.Translate(Vector3(0, -.1, 0));
		down += 1;
		
		if (up > 0)
		{
			up -= 1;
		}
	}
}