const questions = [
  {
    name: "Two sum",
    url: "https://leetcode.com/problems/two-sum/description/",
    companies: ["Google", "Microsoft", "Amazon"],
    solution: "https://leetcode.com/problems/two-sum/solutions/",
    tags: ["Array", "Hash Table"],
    difficulty: "Easy",
    solved: false,
  },
  {
    name: "Add Two Numbers",
    url: "https://leetcode.com/problems/add-two-numbers/description/",
    companies: ["Barklays", "Netflix", "LinkedIn"],
    solution: "https://leetcode.com/problems/add-two-numbers/solutions/",
    tags: ["Linked List", "Math", "Recursion"],
    difficulty: "Medium",
    solved: false,
  },
  {
    name: "Longest Substring Without Repeating Characters",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
    companies: ["Apple", "Facebook", "IBM", "Oracle"],
    solution:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/",
    tags: ["Hash Table", "String", "Sliding Window"],
    difficulty: "Easy",
    solved: false,
  },
  {
    name: "Median of Two Sorted Arrays",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
    companies: ["Intel", "Salesforce", "Adobe"],
    solution:
      "https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    difficulty: "Hard",
    solved: false,
  },
  {
    name: "Longest Palindromic Substring",
    url: "https://leetcode.com/problems/longest-palindromic-substring/description/",
    companies: ["Barklays", "Netflix", "LinkedIn"],
    solution:
      "https://leetcode.com/problems/longest-palindromic-substring/solutions/",
    tags: ["Two Pointers", "String", "Dynamic Programming"],
    difficulty: "Easy",
    solved: false,
  },
  {
    name: "Two sum",
    url: "https://leetcode.com/problems/two-sum/description/",
    companies: ["Dell", "Cisco", "HP", "SAP"],
    solution: "https://leetcode.com/problems/two-sum/solutions/",
    tags: ["Array", "Hash Table"],
    difficulty: "Easy",
    solved: false,
  },
  {
    name: "Add Two Numbers",
    url: "https://leetcode.com/problems/add-two-numbers/description/",
    companies: ["Accenture", "Infosys", "Wipro"],
    solution: "https://leetcode.com/problems/add-two-numbers/solutions/",
    tags: ["Linked List", "Math", "Recursion"],
    difficulty: "Medium",
    solved: false,
  },
  {
    name: "Longest Substring Without Repeating Characters",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
    companies: ["TCS", "HCL", "Capgemini", "Cognizant"],
    solution:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/",
    tags: ["Hash Table", "String", "Sliding Window"],
    difficulty: "Easy",
    solved: false,
  },
  {
    name: "Median of Two Sorted Arrays",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
    companies: ["Barklays", "Netflix", "LinkedIn"],
    solution:
      "https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    difficulty: "Hard",
    solved: false,
  },
  {
    name: "Longest Palindromic Substring",
    url: "https://leetcode.com/problems/longest-palindromic-substring/description/",
    companies: ["Barklays", "Netflix", "LinkedIn"],
    solution:
      "https://leetcode.com/problems/longest-palindromic-substring/solutions/",
    tags: ["Two Pointers", "String", "Dynamic Programming"],
    difficulty: "Easy",
    solved: false,
  },
  {
    name: "Two sum",
    url: "https://leetcode.com/problems/two-sum/description/",
    companies: ["Barklays", "Netflix", "LinkedIn"],
    solution: "https://leetcode.com/problems/two-sum/solutions/",
    tags: ["Array", "Hash Table"],
    difficulty: "Easy",
    solved: false,
  },
  {
    name: "Add Two Numbers",
    url: "https://leetcode.com/problems/add-two-numbers/description/",
    companies: ["Barklays", "Netflix", "LinkedIn"],
    solution: "https://leetcode.com/problems/add-two-numbers/solutions/",
    tags: ["Linked List", "Math", "Recursion"],
    difficulty: "Medium",
    solved: false,
  },
  {
    name: "Longest Substring Without Repeating Characters",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
    companies: ["Barklays", "Netflix", "LinkedIn"],
    solution:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/",
    tags: ["Hash Table", "String", "Sliding Window"],
    difficulty: "Easy",
    solved: false,
  },
  {
    name: "Median of Two Sorted Arrays",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
    companies: ["Barklays", "Netflix", "LinkedIn"],
    solution:
      "https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    difficulty: "Hard",
    solved: false,
  },
  {
    name: "Longest Palindromic Substring",
    url: "https://leetcode.com/problems/longest-palindromic-substring/description/",
    companies: ["Barklays", "Netflix", "LinkedIn"],
    solution:
      "https://leetcode.com/problems/longest-palindromic-substring/solutions/",
    tags: ["Two Pointers", "String", "Dynamic Programming"],
    difficulty: "Easy",
    solved: false,
  },
];

// Data for the donut chart
const data = {
  labels: ["Red", "White"],
  datasets: [
    {
      data: [0, 100], // Percentages or values
      backgroundColor: ["#FF0000", "#FFF"],
    },
  ],
};

const states = ["All", "All", "All", "All"];

const canvas = document.getElementById("donutChart");
const ctx = canvas.getContext("2d");
const queTable = document.querySelector(".questions-table tbody");
const companies = document.querySelector(".companies");
const tagsSelector = document.querySelector(".tagsSelector");
const checkboxSelector = document.querySelector(".checkboxSelector");
const diffSelector = document.querySelector(".difficultySelector");
const companiesSelector = document.querySelector(".companiesSelector");
const companiesList = document.querySelector(".companiesList");
const resetBtn = document.querySelector(".reset-btn");
const allTags = document.querySelector(".all-tags");
const pie = document.querySelector(".pie");

let totalQuestions = questions.length;
let easyQuestions = findQuestions("Easy");
let mediumQuestions = findQuestions("Medium");
let hardQuestions = findQuestions("Hard");
let easySolvedQuestions = 0;
let mediumSolvedQuestions = 0;
let hardSolvedQuestions = 0;

function findQuestions(type) {
  let count = 0;
  questions.forEach((que) => {
    if (type === que.difficulty) count++;
  });
  return count;
}

function findDistinctCompanies() {
  let list = [];
  questions.forEach((item, i) => {
    const temp = new Set([...item.companies, ...list]);
    list = [...temp];
  });
  return list.sort();
}

function findDistinctTags() {
  let list = [];
  questions.forEach((item, i) => {
    const temp = new Set([...item.tags, ...list]);
    list = [...temp];
  });
  return list.sort();
}

function solvedQuestionPercentage() {
  return Math.round(
    ((easySolvedQuestions + mediumSolvedQuestions + hardSolvedQuestions) /
      totalQuestions) *
      100
  );
}

// pie chart
function drawDonutChart(data) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const totalValue = data.datasets[0].data.reduce((a, b) => a + b, 0);
  let startAngle = -0.5 * Math.PI; // Start angle at the top of the circle

  const outerRadius = Math.min(canvas.width / 2, canvas.height / 2);
  const innerRadius = outerRadius * 0.9; // Increase this value to make the ring thinner

  data.datasets[0].data.forEach((value, index) => {
    const sliceAngle = (value / totalValue) * 2 * Math.PI;
    const endAngle = startAngle + sliceAngle;

    // Draw the outer slice
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      outerRadius,
      startAngle,
      endAngle
    );
    ctx.closePath();
    ctx.fillStyle = data.datasets[0].backgroundColor[index];
    ctx.fill();

    // Move to the next slice
    startAngle = endAngle;
  });

  // Draw the inner circle to create the donut hole
  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    innerRadius, // Increased inner radius to make the ring thinner
    0,
    2 * Math.PI
  );
  ctx.closePath();
  ctx.fillStyle = "#cbd5e1"; // Same color as the canvas background or adjust as needed
  ctx.fill();
}

// progress bars
function updateProgressBar1(percentage) {
  const progressBar = document.getElementById("progressBar1");
  progressBar.style.width = percentage + "%";
}
function updateProgressBar2(percentage) {
  const progressBar = document.getElementById("progressBar2");
  progressBar.style.width = percentage + "%";
}
function updateProgressBar3(percentage) {
  const progressBar = document.getElementById("progressBar3");
  progressBar.style.width = percentage + "%";
}

// **********************************************
// Right section [TABLE]
// **********************************************

function spanList(i, arr, n) {
  let list = "";
  let j = 0;
  while (j < n) {
    list += `<span class="inline-block px-2 rounded  m-1 bg-[#64748b] text-white">${arr[j]}</span>`;
    j++;
  }
  return list;
}

function isTagPresent(tgs, tagList) {
  let flag = 0;
  tagList.forEach((tag) => {
    if (tag.split(" ").join("") === tgs) {
      flag = 1;
    }
  });
  return flag;
}

function showingQuestions([checked, tgs, diff, com]) {
  questions.forEach((que, i) => {
    let temp = false;
    if (checked == "Solved") {
      temp = true;
    }
    if (
      (checked === "All" || temp === que.solved) &&
      (tgs === "All" || isTagPresent(tgs, que.tags)) &&
      (diff === "All" || diff === que.difficulty) &&
      (com === "All" || que.companies.includes(com))
    ) {
      queTable.insertAdjacentHTML(
        "beforeend",

        `<tr class="odd:bg-gray-100 overflow-auto h-20">
        <td class="text-left pl-2 h-9">
        <input type="checkbox" name="checkbox-${i + 1}" id="checkbox-${
          i + 1
        }" ${que.solved ? "checked" : ""}/>
        </td>
        <td class="h-9">${que.name}</td>
          <td class="h-9">
            <a href=${que.solution} target="_blank">
              <img src="visit.svg" class="h-6 w-6 mx-auto"/>
            </a>
          </td>
          <td class="h-9">
            ${spanList(i, questions[i].tags, questions[i].tags.length)}
          </td>
          <td class="h-9">${que.difficulty}</td>
          <td class="h-9">${spanList(
            i,
            questions[i].companies,
            questions[i].companies.length
          )}</td>
        </tr>`
      );
    }
  });
}

function addCopanies() {
  const companiesList = findDistinctCompanies();

  companiesList.forEach((company) => {
    companiesSelector.insertAdjacentHTML(
      "beforeend",
      `<option value=${company}>
    ${company}
    </option>`
    );
  });
}

function addTags() {
  const tagsList = findDistinctTags();

  tagsList.forEach((tag) => {
    tagsSelector.insertAdjacentHTML(
      "beforeend",
      `<option value=${tag.split(" ").join("")}>
    ${tag}
    </option>`
    );
  });
}

// *******************************
// displaying all the tags on left box

function displayAllTags() {
  const list = findDistinctTags();
  list.forEach((tag) => {
    allTags.insertAdjacentHTML(
      "beforeend",
      `<div class="px-2 rounded  m-1 bg-[#64748b] " >${tag}</div>`
    );
  });
}

// *********************
// RESET BUTTON

function resetValues() {
  if (!window.confirm("Do you really want to reset all the history!")) return;
  tagsSelector.value = "All";
  diffSelector.value = "All";
  companiesSelector.value = "All";
  checkboxSelector.value = "All";
  questions.forEach((que) => {
    que.solved = false;
  });
  states[0] = "All";
  states[1] = "All";
  states[2] = "All";
  states[3] = "All";
  (easySolvedQuestions = 0),
    (mediumSolvedQuestions = 0),
    (hardSolvedQuestions = 0);
  companiesList.innerHTML = "";
  showingQuestions(states);
  updateProgressBar1((easySolvedQuestions / easyQuestions) * 100);
  updateProgressBar2((mediumSolvedQuestions / mediumQuestions) * 100);
  updateProgressBar3((hardSolvedQuestions / hardQuestions) * 100);
  data.datasets[0].data[0] = solvedQuestionPercentage();
  data.datasets[0].data[1] = 100 - solvedQuestionPercentage();
  drawDonutChart(data);
  let per = `${
    easySolvedQuestions + mediumSolvedQuestions + hardSolvedQuestions
  }/${totalQuestions}`;
  pie.style.setProperty("--after-content", `'${per}'`);
}

// compulsory function calls
showingQuestions(states);
addCopanies();
addTags();
displayAllTags();
drawDonutChart(data);
pie.classList.add(`after:text-xl`);
pie.classList.add(`after:absolute`);
pie.classList.add(`after:top-1/2`);
pie.classList.add(`after:left-1/2`);
pie.classList.add(`after:-translate-x-1/2`);
pie.classList.add(`after:-translate-y-1/2`);
pie.style.setProperty("--after-content", `'0/${totalQuestions}'`);

checkboxSelector.addEventListener("change", function () {
  companiesList.innerHTML = "";
  states[0] = checkboxSelector.value;
  showingQuestions(states);
});

tagsSelector.addEventListener("change", function () {
  companiesList.innerHTML = "";
  states[1] = tagsSelector.value;
  showingQuestions(states);
});

diffSelector.addEventListener("change", function () {
  companiesList.innerHTML = "";
  states[2] = diffSelector.value;
  showingQuestions(states);
});

companiesSelector.addEventListener("change", function () {
  companiesList.innerHTML = "";
  states[3] = companiesSelector.value;
  showingQuestions(states);
});

companiesList.addEventListener("click", (e) => {
  // using optional chaning to check weather the e.getAttribute is valid or not (?)
  if (e.target.getAttribute("id")?.startsWith("checkbox")) {
    const index = Number(e.target.getAttribute("id").slice(9));
    if (questions[index - 1].solved) {
      if (questions[index - 1].difficulty === "Easy") easySolvedQuestions--;
      else if (questions[index - 1].difficulty === "Medium")
        mediumSolvedQuestions--;
      else hardSolvedQuestions--;
    } else {
      if (questions[index - 1].difficulty === "Easy") easySolvedQuestions++;
      else if (questions[index - 1].difficulty === "Medium")
        mediumSolvedQuestions++;
      else hardSolvedQuestions++;
    }

    questions[index - 1].solved = !questions[index - 1].solved;
    updateProgressBar1((easySolvedQuestions / easyQuestions) * 100);
    updateProgressBar2((mediumSolvedQuestions / mediumQuestions) * 100);
    updateProgressBar3((hardSolvedQuestions / hardQuestions) * 100);
    data.datasets[0].data[0] = solvedQuestionPercentage();
    data.datasets[0].data[1] = 100 - solvedQuestionPercentage();
    drawDonutChart(data);

    let per = `${
      easySolvedQuestions + mediumSolvedQuestions + hardSolvedQuestions
    }/${totalQuestions}`;
    console.log(per);
    pie.style.setProperty("--after-content", `'${per}'`);
  }
});

resetBtn.addEventListener("click", resetValues);
