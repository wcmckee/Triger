function OnGUI () {

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (300,250,156,56), "Controls")) {
		Application.LoadLevel (8);
	}
	if (GUI.Button (Rect (300,306,156,56), "Return to current time")) {
		Application.LoadLevel (0);
	}
}