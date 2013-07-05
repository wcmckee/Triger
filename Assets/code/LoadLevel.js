function OnGUI () {
	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (150,200,156,56), "Trigger Zero")) {
		Application.LoadLevel (0);
	}

	// Make the second button.
	if (GUI.Button (Rect (150,256,156,56), "Trigger One")) {
		Application.LoadLevel (1);
	}
		
	if(GUI.Button (Rect (150,312,156,56), "Trigger Two")) {
		Application.LoadLevel (2);
	}
}