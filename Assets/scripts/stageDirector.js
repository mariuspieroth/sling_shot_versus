#pragma strict

var shipPrefab: GameObject;
var position: Vector3;
var shipRotationReference: Transform;
var shipsDestroyed: int;
var shipsDestroyedText: UnityEngine.UI.Text;

function Start () {
	Data.stageDirector = this;
	StartCoroutine(spawnShip());
}

function Update () {

}

function spawnShip(){
	while(true){
		yield WaitForSeconds(3f);
		// Init position
		var y = Random.value * 230f + 20f;
		var x = 600f;
		position = Vector3(x, y, 0f);
		var shipInstance: GameObject = Instantiate(shipPrefab, position, Quaternion.identity);
		shipInstance.transform.rotation = shipRotationReference.rotation;
		var speed = Random.value * 3f * 100f;
		shipInstance.GetComponent(shipController).speed = speed;
		

	}
}

function shipDestroyed(){
	shipsDestroyed++;
	shipsDestroyedText.text = "" + shipsDestroyed;
}