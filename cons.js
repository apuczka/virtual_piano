

document.addEventListener("keypress", function(event) {
    if(event.code === "KeyA") {
        let audio = document.createElement("Audio");
        audio.src = "white_keys/A.mp3";
        audio.play(audio);
        console.log("Press A");

    }
   else if(event.code === "KeyS") {
        let audio = document.createElement("Audio")
        audio.src = "white_keys/S.mp3";
        audio.play(audio);
        console.log("Press s");
    }
   else if(event.code === "KeyD") {
        let audio = document.createElement("Audio")
        audio.src = "white_keys/D.mp3";
        audio.play(audio);
        console.log("Press d");
    }
   else if(event.code === "KeyF") {
        let audio = document.createElement("Audio")
        audio.src = "white_keys/F.mp3";
        audio.play(audio);
        console.log("Press f");
    }
   else if(event.code === "KeyG") {
        let audio = document.createElement("Audio")
        audio.src = "white_keys/G.mp3";
        audio.play(audio);
        console.log("Press g");
    }
    else if(event.code === "KeyH") {
        let audio = document.createElement("Audio")
        audio.src = "white_keys/H.mp3";
        audio.play(audio);
        console.log("Press h");
    }
   else if(event.code === "KeyJ") {
        let audio = document.createElement("Audio")
        audio.src = "white_keys/J.mp3";
        audio.play(audio);
        console.log("Press j");
    }
    else if(event.code === "KeyW") {
        let audio = document.createElement("Audio")
        audio.src = "black_keys/W.mp3";
        audio.play(audio);
        console.log("Press w");
    }
    else if(event.code === "KeyE") {
        let audio = document.createElement("Audio")
        audio.src = "black_keys/E.mp3";
        audio.play(audio);
        console.log("Press e");
    }
    else if(event.code === "KeyT") {
        let audio = document.createElement("Audio")
        audio.src = "black_keys/T.mp3";
        audio.play(audio);
        console.log("Press t");
    }
    else if(event.code === "KeyY") {
        let audio = document.createElement("Audio")
        audio.src = "black_keys/Y.mp3";
        audio.play(audio);
        console.log("Press y");
    }
    else if(event.code === "KeyU") {
        let audio = document.createElement("Audio")
        audio.src = "black_keys/U.mp3";
        audio.play(audio);
        console.log("Press u");
    }
    else {
        console.log("Some other key was pressed.")
    }
});

