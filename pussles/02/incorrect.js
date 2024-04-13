// Array of cities with their information
var cities = [
    {
        name: "Iram-Dhat-al-emad",
        description: "إرم ذات العمد هي مدينة أسطورة حقيقية ضائعة، مذكورة في القرآن. وغالبا ما يرتبط إسمها بالثروة والازدهار.",
        image: "iram.jpg"
    },
    {
        name: "Jinistan",
        description: "جينيستان هي أرض أسطورية يسكنها الجن في الفولكلور العربي. يقال أنه عالم السحر والغموض.",
        image: "jinistan.jpg"
    },
    {
        name: "Jabal-Qaf",
        description: "جبل قاف هو سلسلة جبال أسطورية تحيط بالعالم في الأساطير الفارسية. ويُعتقد أنه موطن طائر السيمورغ الأسطوري.",
        image: "jabal_qaf.jpg"
    },
    {
        name: "El-Dorado",
        description: "إلدورادو هي مدينة الذهب الأسطورية التي سعى إليها الغزاة الإسبان في أمريكا الجنوبية. إنها تمثل البحث عن الثروة والغنى.",
        image: "el_dorado.jpg"
    },
    {
        name: "Troy",
        description: "طروادة مدينة أسطورية في الأساطير اليونانية، اشتهرت بحرب طروادة. غالبًا ما يرتبط حصان طروادة وبالبطولة والمأساة.",
        image: "troy.jpg"
    },
    {
        name: "Atlantis",
        description: "Atlantis is a legendary island civilization described in Plato's works. It is said to have sunk into the sea, becoming a symbol of lost knowledge and power.",
        image: "atlantis.jpg"
    },
    {
        name: "Camelot",
        description: "كاميلوت هي القلعة الأسطورية ومحكمة الملك آرثر في أسطورة آرثر. ويرتبط بالفروسية والرومانسية والبحث عن الكأس المقدسة.",
        image: "camelot.jpg"
    }
];

// Function to return to the question page
function returnToQuestionPage() {
    // window.location.href = "puzzle1.html"; // Replace "question_page.html" with the actual filename of the question page
    history.back(); // Replace "question_page.html" with the actual filename of the question page
}

// Function to get URL parameter by name
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the city name from the URL
var cityName = getUrlParameter('city');

// Find the city object in the cities array
var chosenCity = cities.find(city => city.name === cityName);

// Display the translated city name on the page
document.getElementById('cityName').innerText = translateCityName(cityName);

// Display the city description and image
if (chosenCity) {
    document.getElementById('cityDescription').innerText = chosenCity.description;
    document.getElementById('cityImage').src = "images/" + chosenCity.image;

} else {
    document.getElementById('cityDescription').innerText = "Description not available.";
}



// Translate the city name
function translateCityName(cityName) {
    switch (cityName) {
        case "El-Dorado":
            return "الدورادو";
        case "Troy":
            return "طروادة";
        case "Atlantis":
            return "أطلانتس";
        case "Camelot":
            return "كاميلوت";
        case "Iram-Dhat-al-emad":
            return "إيرام ذات العماد";
        case "Jinistan":
            return "جينيستان";
        case "Jabal Qaf":
            return "جبل قاف";
        default:
            return cityName; // If the city name is not found, return the original name
    }
}