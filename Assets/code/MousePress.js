var endTime : float;
var textMesh : TextMesh;
 
function Start()
{
    endTime = Time.time + 60;
    textMesh = GameObject.Find ("Timer").GetComponent(TextMesh);
    textMesh.text = "60";
}
 
function Update()
{
    var timeLeft : int = endTime - Time.time;
    if (timeLeft < 0) timeLeft = 0;
    textMesh.text = timeLeft.ToString();
}