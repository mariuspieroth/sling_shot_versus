#pragma strict

var duration: int;

function Start () {
	yield WaitForSeconds(duration);
	GameObject.Destroy(gameObject);
}

function Update () {

}