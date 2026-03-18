const questions = [
"Você separa o lixo reciclável?",
"Quanto tempo dura seu banho?",
"Você evita desperdício?",
"Você apaga luzes?",
"Você usa transporte sustentável?"
];

const options = [
["Sempre","Às vezes","Nunca"],
["Até 5 min","6-10 min","Mais de 10"],
["Sempre","Às vezes","Nunca"],
["Sempre","Às vezes","Nunca"],
["Sempre","Às vezes","Nunca"]
];

let current = 0;
let score = 0;

function showQuestion(){
  document.getElementById("question").innerText = questions[current];
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  options[current].forEach((opt,index)=>{
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option");
    btn.onclick = ()=> selectOption(index);
    optionsDiv.appendChild(btn);
  });

  updateProgress();
}

function selectOption(index){
  score += (3 - index);
  current++;

  if(current < questions.length){
    showQuestion();
  } else {
    showResult();
  }
}

function updateProgress(){
  let percent = (current / questions.length) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
}

function showResult(){
  document.getElementById("question").innerText = "Resultado";
  document.getElementById("options").innerHTML = "";

  document.getElementById("result").innerText =
  "Pontuação: " + score;

  new Chart(document.getElementById("chart"),{
    type:"doughnut",
    data:{
      labels:["Pontuação","Restante"],
      datasets:[{
        data:[score,15-score]
      }]
    }
  });
}

showQuestion();