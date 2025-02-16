function checkAirQuality() {
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;

    if (!latitude && !longitude) {
        alert("Please enter both latitude and longitude!");
        document.body.style.backgroundColor = "#ffcccb"; // Light red for invalid input
        return;
    }

    if (!latitude) {
        alert("Please enter the latitude!");
        document.body.style.backgroundColor = "#ffcccb"; // Light red for invalid input
        return;
    }

    if (!longitude) {
        alert("Please enter the longitude!");
        document.body.style.backgroundColor = "#ffcccb"; // Light red for invalid input
        return;
    }

    // Simulate "air quality levels" by generating a random level from 1 to 15
    const airQualityLevel = Math.floor(Math.random() * 15) + 1;

    let qualityMessage = "";
    let bgColor = "";

    switch (airQualityLevel) {
        case 1:
            qualityMessage = "Excellent Air Quality 🌱";
            bgColor = "#00FF7F";
            break;
        case 2:
            qualityMessage = "Good Air Quality 🌤️";
            bgColor = "#7FFFD4";
            break;
        case 3:
            qualityMessage = "Moderate Air Quality 🌅";
            bgColor = "#FFD700";
            break;
        case 4:
            qualityMessage = "Unhealthy for Sensitive Groups 😷";
            bgColor = "#FF8C00";
            break;
        case 5:
            qualityMessage = "Unhealthy Air Quality ⚠️";
            bgColor = "#FF6347";
            break;
        case 6:
            qualityMessage = "Very Unhealthy Air Quality 💀";
            bgColor = "#8B0000";
            break;
        case 7:
            qualityMessage = "Hazardous Air Quality ☠️";
            bgColor = "#4B0082";
            break;
        case 8:
            qualityMessage = "Severe Pollution 🌋";
            bgColor = "#DC143C";
            break;
        case 9:
            qualityMessage = "Moderate Pollution 🌁";
            bgColor = "#FFA500";
            break;
        case 10:
            qualityMessage = "Mild Air Pollution 🌄";
            bgColor = "#D2B48C";
            break;
        case 11:
            qualityMessage = "Good Visibility, Slight Smog 🌇";
            bgColor = "#DAA520";
            break;
        case 12:
            qualityMessage = "Very Poor Air 🌫️";
            bgColor = "#B22222";
            break;
        case 13:
            qualityMessage = "Extreme Pollution 🏭";
            bgColor = "#A52A2A";
            break;
        case 14:
            qualityMessage = "Toxic Air Levels 🚫";
            bgColor = "#800000";
            break;
        case 15:
            qualityMessage = "Critical Air Quality 🚨";
            bgColor = "#FF0000";
            break;
    }

    // Display the quality message and change the background color
    alert(`Latitude: ${latitude}, Longitude: ${longitude}\n${qualityMessage}`);
    document.body.style.backgroundColor = bgColor;
}
