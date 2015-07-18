#pragma strict

var rb: Rigidbody;
var hull: GameObject;
var debris: GameObject;
var speed: float;

function Start () {
}

function Update () {
	// Move left;
	
//	transform.position.x -= (100f * Time.deltaTime);
	rb.MovePosition(transform.position + transform.forward * speed * Time.deltaTime);

}

function OnDestroy(){

}