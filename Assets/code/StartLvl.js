function OnGUI () {
	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (-20,100,156,56), "Start")) {
		Application.LoadLevel (0);
	}

	// Make the second button.
	if (GUI.Button (Rect (-20,156,156,56), "Concept Art")) {
		Application.LoadLevel (1);
	}
		
	if(GUI.Button (Rect (-20,212,156,56), "Quit")) {
		Application.Quit();
	}
}