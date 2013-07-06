var box : GameObject;

    var readynow : boolean = true;
     
    function Update () {
     if(readynow){
      MakeBox();
     }
    }
     
    function MakeBox(){
     readynow=false;
     Instantiate(box, transform.position, transform.rotation);
     yield WaitForSeconds(2);
     readynow=true;
    }

