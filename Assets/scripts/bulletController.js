#pragma strict

var explosion: GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
	Debug.Log("Hit something");
	if(other.gameObject.tag == "Ship"){
		Debug.Log("Hit ship");
		// Despawn ship
//		GameObject.Destroy(other.gameObject);
//		other.GetComponent(Rigidbody).useGravity = true;
		other.GetComponent(BoxCollider).enabled = false;
		other.GetComponent(shipController).hull.SetActive(false);
		other.GetComponent(shipController).debris.SetActive(true);
		Instantiate(explosion, other.gameObject.transform.position, Quaternion.identity); 
		Data.stageDirector.shipDestroyed();
//		other.gameObject.SendMessage("Shatter", transform.position, SendMessageOptions.DontRequireReceiver);
                           
	}
}