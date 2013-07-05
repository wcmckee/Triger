function OnGUI () {

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (320,250,156,56), "Right Trigger")) {
		Application.LoadLevel (4);
	}

}