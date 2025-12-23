 function buttonhandle() {
    displayRandomText(); // Call the first function
    showbox();      // Call the second function
    // You can add as many functions here as you need
}
    const textOptions = [
    "I started coding in 2024. I started with C# Unity",
    "I struggle to use the logical side of my brain, but I force myself to learn programming",
    "I tried making music, but turns out I'm worse at that than programming",
    "I've been playing drums since 2023, but I'd say I'm very under experienced",
    "I usually go by He/Him but I still question myself"
];
    function showbox() {
    document.getElementById("myBox").style.display = "block";
    }
function displayRandomText() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    const selectedText = textOptions[randomIndex];
    const textDisplayElement = document.getElementById("text-display");
    textDisplayElement.textContent = selectedText;
}
function hideBox() {
    document.getElementById("myBox").style.display = "none";  
}