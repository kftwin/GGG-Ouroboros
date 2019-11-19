
function OnCollisionEnter(collision : Collision)
{
	if ((collision.gameObject.name == "ArrowPrefab(Clone)") || (collision.gameObject.name == "ArrowPrefab"))
	{
		//rigidbody.constraints = RigidbodyConstraints.FreezePositionZ |
							//	RigidbodyConstraints.FreezePositionY;
	}
	if (collision.gameObject.name == "spikeWall")
	{
		rigidbody.constraints = RigidbodyConstraints.FreezePositionZ |
								RigidbodyConstraints.FreezePositionY |
								RigidbodyConstraints.FreezePositionX;
	}
}