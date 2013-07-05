function OnGUI () {
	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (150,200,156,56), "Right Triger")) {
		Application.LoadLevel (0);
	}

	// Make the second button.
	if (GUI.Button (Rect (150,256,156,56), "Quit")) {
		Application.Quit();
	}
}