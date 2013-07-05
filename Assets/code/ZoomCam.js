function FixedUpdate () {
      for (var i = 0; i < Input.touchCount; ++i) {
            if (Input.GetTouch(i).phase == TouchPhase.Began) {
		camera.fieldOfView = 10;
		}
	}
}
