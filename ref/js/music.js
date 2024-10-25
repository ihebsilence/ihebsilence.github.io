document.addEventListener("DOMContentLoaded", function () {
    const volumeSlider = document.querySelector(".mantine-Slider-thumb");
    const volumeInput = document.querySelector("input[type='hidden']");
    const backgroundMusic = document.getElementById("backgroundMusic");

    // Initialize volume
    const initialVolume = 0.5; // Volume par défaut (0.0 à 1.0)
    backgroundMusic.volume = initialVolume;
    volumeInput.value = initialVolume * 100; // Convertir en pourcentage pour le slider
    volumeSlider.style.left = `${initialVolume * 100}%`; // Positionner le slider

    volumeSlider.addEventListener("mousedown", function (event) {
        document.addEventListener("mousemove", handleVolumeChange);
        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", handleVolumeChange);
        });
    });

    function handleVolumeChange(event) {
        const sliderRect = volumeSlider.parentElement.getBoundingClientRect();
        const sliderWidth = sliderRect.width;
        const offsetX = event.clientX - sliderRect.left;

        // Calculer le volume en fonction de la position du curseur
        let volume = Math.min(Math.max(offsetX / sliderWidth, 0), 1);
        backgroundMusic.volume = volume; // Appliquer le volume

        // Mettre à jour la position du slider
        volumeInput.value = volume * 100; // Convertir en pourcentage
        volumeSlider.style.left = `${volume * 100}%`; // Positionner le slider
    }
});
