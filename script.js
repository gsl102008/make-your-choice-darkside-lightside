

let storyIndex = 0;

const storyData = [
    {
        title: "MAY THE FORCE BE WITH YOU...",
        text: "After traveling though space for several weeks you come across a planet. You decide to land your Starfighter. What do you do next?",
        choices: ["Explore the Planet", "Take a Nap"]
    },
    {
        text: "While exploring, you come across a cave. Enter the cave?",
        choices: ["Enter the cave", "Keep exploring the forest"]
    },
    {
        title: "Cave Adventure",
        text: "Inside the cave, you find a treasure chest. Open it?",
        choices: ["Open the chest", "Leave the cave"]
    },
    // Add more story segments as needed
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
    // Update story index based on user's choice
    if (storyIndex < storyData.length - 1) {
        storyIndex++;
        updateStory();
    } else {
        alert("Congratulations! You reached the end of the story.");
    }
}

// Initial story update
updateStory();
