#pragma strict
#pragma implicit
#pragma downcast
var height = 0.0;
private var speed = 1.0;
private var originalY = 0.0;
private var rb : Rigidbody;

function Awake(){
	rb = rigidbody;
}

function OnEnable(){
	originalY = transform.position.y;
}

//function Update ()
//{
//	var pos = transform.position;
//	if(rb.isKinematic){
//		pos.y = Mathf.PingPong(Time.time * speed, height) + originalY;
//		transform.position = pos;
//	}else{
//		if(pos.z != 0.0){
//			pos.z = 0.0;
//			transform.position = pos;
//		}
//	}
//}
function FixedUpdate()
{
	var rPos = rb.position;
	if(rb.isKinematic){
		rPos.y = Mathf.Lerp(0.0, height, Mathf.Sin(Time.time * speed)*0.5 + 0.5) + originalY;//Mathf.PingPong(Time.time * speed, height) + originalY;
		rb.MovePosition(rPos);
	}else{
		if(rPos.z != 0.0){
			rPos.z = 0.0;
			rb.MovePosition(rPos);
		}
	}
}