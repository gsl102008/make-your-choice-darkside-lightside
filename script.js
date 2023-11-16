let storyIndex = 0;
const storyData = [
    {
        title: "MAY THE FORCE BE WITH YOU...",
        text: "After traveling though space for several weeks you come across a planet. You decide to land your Starfighter. What do you do next?",
        choices: ["Explore the Planet", "Take a Nap"]
    },
    {
        text: "While exploring, you meet a small creature who urges you to go with him. He seems jittery and asks you to go with him into a cave. Do you go into the cave?",
        choices: ["Enter the cave", "Keep exploring the planet"]
    },
    {
        text: "Inside the cave, you see a flash of light and realize you are face to face with Darth Sidious. Do you stay and fight?",
        choices: ["Yes, your lightsaber is ready", "No, you run away"]
    },
    {
        text: "You pull out your lightsaber and begin the battle. You are suprised that he seems to be slow and possibly already hurt. Then out of no where, Anakin Skywalker appears and Darth Sidious surrenders. What's your next choice?",
        choices: ["The Light Side, let him live", "The Dark Side, end him"]
    },
  
  
];

function updateStory() {
    const storyTitleElement = document.getElementById("story-title");
    const storyTextElement = document.getElementById("story-text");
    const choicesContainer = document.getElementById("choices-container");

    const currentStory = storyData[storyIndex];

    storyTitleElement.textContent = currentStory.title;
    storyTextElement.textContent = currentStory.text;

    choicesContainer.innerHTML = "";
    currentStory.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => makeChoice(index + 1);
        choicesContainer.appendChild(button);
    });
}

function makeChoice(choiceIndex) {
    // Update story based on choice
    if (storyIndex < storyData.length - 1) {
        storyIndex++;
        updateStory();
    } else {
        alert("Suddenly, you wake up and realize it was all a dream. The End.");
    }
  
  // If the second choice is made, end the game
    if (storyIndex === 2 && choiceIndex === 2) {
        alert("Game Over. You woke up.");
    }
}
// Initial story update
updateStory();