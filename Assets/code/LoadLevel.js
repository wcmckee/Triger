function OnGUI () {
	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (150,200,156,56), "Trigger Zero")) {
		Application.LoadLevel(Random.Range(0, 9));
	}
}