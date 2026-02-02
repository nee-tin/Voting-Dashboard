
// Voting options
const options = [
  { name: "Candidate A", votes: 0 },
  { name: "Candidate B", votes: 0 },
  { name: "Candidate C", votes: 0 },
];

const optionsList = document.getElementById("optionsList");
const resetBtn = document.getElementById("resetBtn");

// Render voting options
function renderOptions() {
  optionsList.innerHTML = "";

  const totalVotes = options.reduce((sum, o) => sum + o.votes, 0);

  options.forEach(option => {
    const li = document.createElement("li");

    // Name + vote count
    const text = document.createElement("span");
    text.textContent = `${option.name}: ${option.votes} votes`;
    li.appendChild(text);

    // Vote button
    const voteBtn = document.createElement("button");
    voteBtn.textContent = "Vote";
    voteBtn.onclick = () => {
      option.votes++;
      renderOptions();
    };
    li.appendChild(voteBtn);

    // Vote bar
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.width = totalVotes ? `${(option.votes / totalVotes) * 100}%` : "0%";
    li.appendChild(bar);

    optionsList.appendChild(li);
  });
}

// Reset votes
resetBtn.onclick = () => {
  options.forEach(o => o.votes = 0);
  renderOptions();
};

// Initial render
renderOptions();
