function FixedUpdate () {
    if(Input.GetMouseButtonDown(0))
		 light.range += 2.0 * Time.deltaTime;
	else if(Input.GetMouseButtonUp(0))
		light.range -= 2.0 * Time.deltaTime;
}