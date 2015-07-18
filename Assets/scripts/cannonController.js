#pragma strict

var turret: Transform;
var target: Transform;
var bullet: GameObject;
var muzzle: Transform;

function Start () {

}

function Update () {
	// on click start following cursor
	
	target.position = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	target.position.z = 0f;
	turret.LookAt(target);
	
	// on release shoot bullet
	
	if(Input.GetMouseButtonUp(0)){
		Debug.Log("Mouse Up");
		// spawn bullet
		
		var bulletInstance: GameObject = Instantiate(bullet, muzzle.position, Quaternion.identity);
		bulletInstance.transform.LookAt(target);
		
		bulletInstance.GetComponent(Rigidbody).AddForce(bulletInstance.transform.forward * 30000f);
	}	
	
}