function startQuiz() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("aboutUs").classList.add("hidden");
    document.getElementById("quizPage").classList.remove("hidden");
    document.getElementById("offersPage").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: 'auto' });
    loadLevel();
}

function offers() {
    document.getElementById("aboutUs").classList.add("hidden");
    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("offersPage").classList.remove("hidden");
     window.scrollTo({ top: 0, behavior: 'auto' });
}

function showHome() {
    document.getElementById("aboutUs").classList.add("hidden");
    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("homePage").classList.remove("hidden");
    document.getElementById("offersPage").classList.add("hidden");

     window.scrollTo({ top: 0, behavior: 'auto' });
}
function aboutUs() {
    document.getElementById("quizPage").classList.add("hidden");
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("aboutUs").classList.remove("hidden");
    document.getElementById("offersPage").classList.add("hidden");
   window.scrollTo({ top: 0, behavior: 'auto' });
}

const levels = [ "Pre", "A1", "A2", "B1", "B2"];
let currentLevel = 0;
let scores = {}; 
const passThreshold = 4; 

const questions = {
    "Pre": [
    { q: "What the color of this?", img: "photos/orange.png", options: ["Green", "Yellow", "Orange"], answer: "Orange" },
    { q: "", img: "photos/sarah.jpg", options:["She name is Sarah", "Her name is Sarah.", "His name is Sarah."], answer: "Her name is Sarah." },
    { q: "The apple's color is......<br>The grape's color is.......<br>These are.........", img: "photos/fru.png", options: ["Red, purple , vegetables", "Orange, purple , fruits", "Red, purple , fruits."], answer: "Red, purple , fruits." },
    { q: "This is a.....",img: "photos/hospital.png", options: ["Hospital", "School", "House"], answer: "Hospital" },
    { q: "The meaning of this word is:", img: "photos/teacher.JPG", options: ["The person who teaches people.", "The person who heal people", "The person who cook for people"], answer: "The person who teaches people." }
],
"A1": [
    { q: "What is the date", img: "photos/17may.png", options: ["May seventeenth", "Seventeen May", "May seventeen"], answer: "May seventeenth" },
    { q: "What's the right answer to this question? <br>What do you do?", img: "", options: ["I am fine thank you", "I am a doctor", "It is a big car"], answer: "I am a doctor" },
    { q: "Put the right word to complete the sentence.<br>I like him, he always Says yes to his mum, he is a............ Boy.", img: "", options: ["Naughty", "Beautiful", "Good"], answer: "Good" },
    { q: "She is.......",img:"photos/hungery.PNG" ,options: ["Hungry", "Angry", "Food"], answer: "Hungry" },
    { q: "Sam Always............. In the park at this time of the day.", img:"photos/walking.png" , options: ["Walking", "Walks", "Walk"], answer: "Walks" }
],
"A2": [
    { q: "Dear John.What a day!!!It's started with me feeling a bit sick, but yet I went to work, but I found out I got fired from my work, I went back home and there's no food in my fridge, so here I'm sitting in my couch trying to understand My day.From. Ema.<br>How was Ema's day?", options: ["Outstanding", "Horrible", "Lovely"], answer: "Horrible" },
    { q: "Which sentence is correct", options: ["ema spent last vacation in London", "Ema spend last vacation in London", "Ema spent last vacation in London"], answer: "Ema spent last vacation in London" },
    { q: "While you are standing next to the school, across from Jim's house, someone asks you how to get to Shop Road.Which of the following directions would be correct to guide them there?", img:"photos/map2.jpg", imgClass:"map-img", options: ["Take Flower Road north until you get to Plant Road, then turn left. Shop Road is straight ahead after the bus stop.", "Go up Park Street until you reach Market Road, then turn left. Shop Road will be on your right.", "Walk along School Road until you reach the playground, keep going straight past the playground until you face the Shops Road."], answer: "Walk along School Road until you reach the playground, keep going straight past the playground until you face the Shops Road." },
    { q: "Watch out! The car......", audio: "", options: ["Came", " Come", "Is coming"], answer: "Is coming" },
    { q: "Why she doesn't like frozen meals?", audio: "photos/A2.mp3", options: ["Not very healthy", "Because it is a pre-made food", "The taste is not really fresh"], answer: "The taste is not really fresh" }
],
"B1": [
    { q: "How can you describe William's personality?", audio: "photos/B1-1.mp3", options: ["Reliable and obliging", "courageous and stingy", "Self-centered"], answer: "Reliable and obliging" },
    { q: "There's a lot of work yesterday, my team couldn't handle it, we've tried so hard but we just wasted our energy and our time, so the other team offered to help us, that was so nice of them, so we collaborated together and finally the work is done before the deadline.<br>What's the meaning of collaboration?", options: ["Having both time and energy.", "Asking for help from others", "Working together to do something."], answer: "Working together to do something." },
    { q: "She.......... In Paris before.", options: ["Has been", "Was", "Had been"], answer: "Has been" },
    { q: "Why doesn't she like the idea of the 'Yankees' being more popular?",  audio: "photos/B1-2.mp3",options: ["Because she's not a fan", "Because teams play at different stadium", "Because her family are  Mets fans"], answer: "Because her family are  Mets fans" },
    { q: "I...........  be there at 07:00 , I planned this.", options: ["Will", "am going to", "May"], answer: "am going to" }
],
"B2": [
    { q: "How does he feel about where he grew up now?", audio: "photos/B2-1.mp3", options: ["Enthusiasm", "Boredom", "Frustration"], answer: "Frustration" },
    { q: "She felt like she was unstable, that she was lost and very sad, insomnia was making her nights sleepless, and days wasn't better , she spent her day and night over thinking everything , recently her thoughts had become more gloomy and she thought that she should ask for help. From whom should she ask for help?", options: ["Vet", "psychologist", "Neurologist"], answer: "psychologist" },
    { q: "Many companies today are becoming more cognizant of the environmental impact of their operations. This awareness has led to more sustainable practices and greener policies.What does the word 'cognizant' mean in the context of the passage?",  options: ["Indifferent", "Aware", "Negligent"], answer: "Aware" },
    { q: "What's the meaning of self - conscious?", audio: "photos/B2-2.mp3", options: ["Feeling awkward and shy", "Being confident", "It's part of your mind that's controls actions"], answer: "Feeling awkward and shy" },
    { q: "Sarah has always had a passion for the arts. She spends her weekends visiting galleries and attending live performances. Her friends often describe her as someone with a keen aesthetic sense.<br>What can we infer about Sarah’s personality?", options: ["She is uninterested in creative activities.", "She prefers outdoor sports over cultural events.", "She has an appreciation for aesthetics and culture."], answer: "She has an appreciation for aesthetics and culture." }
],};
const messgLevelel = {
    "Pre": ["في هذه المرحلة انتِ تعرفين كلمات قليلة جدًا. وصعب تكوين جملة كاملة. ولكن كل رحلة لها بداية لنتقدم."],
    "A1": ["مبهر انتِ هنا الان تقدري تعرفي بنفسك وتستخدمي جمل بسيطة لكن تخذلك قلة المصطلحات في تكوين الجمل بسرعة."],
    "A2": ["الان نحن نتطور جيدا  هنا تقدري  تتكلمي عن حياتك اليومية أو السفر ، لكن التعبير ما زال محدودًا وصعب التعامل مع المواقف المعقدة."],
    "B1": ["نحن نتقدم بشكل ممتاز  تحكي عن تجاربك وآراؤك بوضوح أكبر، وتفهمي تتحدثي. تقدري تتكلمي عن حياتك اليومية، لكن يجب ان نتطور مصطلحاتك"],
    "B2": ["وصلتي لهنا كم انتِ مذهلة ومثابرة 💕مستواك أقوى تفهمين تتحدثين أطول ونصوص عميقة، وتتكلمين بطلاقة جيدة، لكن تحتاجين كلمات أدق وثقة أكبر في المواقف الرسمية."]
};

function loadLevel() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = `<h2> ${levels[currentLevel]} Level</h2>
    <p>${messgLevelel[levels[currentLevel]][0]}</p>`;

    questions[levels[currentLevel]].forEach((item, index) => {
        let html = `<div class="question-card">`;
        html += `<div class="question-text">${index + 1}. ${item.q || ""}</div>`;
        if(item.img) html += `<img src="${item.img}" alt="" class="${item.imgClass || ''}">`;
        if(item.audio) html += `<audio controls src="${item.audio}"></audio>`;
        item.options.forEach(opt => {
            html += `<label class="option"><input type="radio" name="q${index}" value="${opt}" onchange="checkAnswer(${index}, '${opt}')"> ${opt}</label>`;
        });
        html += `<div class="feedback" id="feedback${index}" style="margin-top:5px;font-weight:bold;"></div>`;
        html += `</div>`;
        quizDiv.innerHTML += html;
    });

    document.getElementById("nextBtn").classList.remove("hidden");
}

function checkAnswer(index, selected) {
    const item = questions[levels[currentLevel]][index];
    const feedback = document.getElementById(`feedback${index}`);

    if(selected === item.answer) {
        scores[levels[currentLevel]] = scores[levels[currentLevel]] || 0;

        if(!feedback.dataset.correct) {
            scores[levels[currentLevel]]++;
            feedback.dataset.correct = "true";
        }
    }

    const allAnswered = questions[levels[currentLevel]].every((_, i) => {
        const f = document.getElementById(`feedback${i}`);
        return f.textContent !== "";
    });
}
let finalLevel = "Pre"; 
function nextLevel() {
  const levelName = levels[currentLevel];
  const correctAnswers = scores[levelName] || 0;

  if (correctAnswers >= passThreshold) {  
      finalLevel = levelName;
  }

  currentLevel++;

  const nextBtn = document.getElementById("nextBtn");

  if (currentLevel < levels.length) {
      loadLevel();

      // لو باقي لفل، يظل اسمه Next Level
      nextBtn.textContent = "Next Level";
      nextBtn.onclick = nextLevel;

  } else {
      // هنا خلصنا كل الليفلات → يتغير الزر لعرض النتيجة
      nextBtn.textContent = "Show Result";
      nextBtn.onclick = function() {
          showFinalResult(finalLevel);
      };
  }
}


const levelInfo = {
"Pre": { 
    img: "photos/ema2.PNG", 
    msg: "رائع! لقد تجاوزت البداية. 🌱", 
    next:"A1", 
    msg1:"سيُعطيك الثقة لتتحدث عن نفسك والآخرين بجمل بسيطة وواضحة. في <span dir='ltr'>A1</span> ستتعلم القواعد مثل <span dir='ltr'>Present Simple</span>، لتكتب وتتحدث بسهولة عن حياتك. كلمات جديدة سترافقك مثل: <span dir='ltr'>Awesome – Explore – Important</span>. ⏳ في 5 أسابيع ستشعر أنك حقًا تتكلم الإنجليزية… استعدي لتجربة مختلفة معنا." 
},
"A1": { 
    img: "photos/ema2.PNG", 
    msg: "ممتاز 👌 لقد وضعت الأساسيات جيدًا، لكن هنا تبدأ التحديات الحقيقية.", 
    next:"A2", 
    msg1:"في <span dir='ltr'>A2</span> ستستطيع التحدث عن يومك وقصصك الماضية بثقة أكبر. ستتعلم <span dir='ltr'>Past Simple</span> لتروي أحداثك بطلاقة. كلمات جديدة ستفتح لك المعنى مثل: <span dir='ltr'>Journey – Experience – Delicious</span>. ⏳ بعد 6 أسابيع ستدرك أن الإنجليزية لم تعد فقط للتعريف بنفسك… بل للتعبير عن حياتك." 
},
"A2": { 
    img: "photos/ema2.PNG", 
    msg: "جيد جدًا 🎯 لقد قطعت شوطًا مهمًا… لكن الآن عليك أن تنتقل من الكلام البسيط إلى النقاش والتخطيط.", 
    next:"B1", 
    msg1:"في <span dir='ltr'>B1</span> ستدخل في محادثات أعمق: اهتماماتك، خططك، أهدافك. في القواعد ستتقن <span dir='ltr'>Future Tense</span> لتتحدث عن المستقبل بثقة. كلمات مثل: <span dir='ltr'>Opportunity – Challenge – Confident</span> ستصبح جزءًا من قاموسك. ⏳ خلال 8 أسابيع ستشعر أن الإنجليزية صارت لغة تفكيرك، وليست مجرد درس." 
},
"B1": { 
    img: "photos/ema2.PNG", 
    msg: "رائع جدًا 👏 أنت الآن في مستوى يُمكّنك من التواصل بسهولة… لكن دعني أخبرك: هذا ليس كافيًا بعد!", 
    next:"B2", 
    msg1:"في <span dir='ltr'>B2</span> ستتحدث وتكتب بطلاقة في مواضيع معقدة: أكاديمية، عملية، حياتية. ستتعلم <span dir='ltr'>Conditional Sentences</span> لتُعبّر عن الاحتمالات والأفكار المتقدمة. كلمات قوية سترافقك مثل: <span dir='ltr'>Achievement – Influence – Critical thinking</span>. ⏳ خلال 10 أسابيع ستتفاجأ بقدرتك على النقاش والتأثير… وهذا ما ينتظرك في B2." 
},
"B2": { 
    img: "photos/ema2.PNG", 
    msg: "مبهر! 🌟 أنت بالفعل تتحدث الإنجليزية بطلاقة جيدة، لكن تذكّر: اللغة بحر لا ينتهي.", 
    next:"C1", 
    msg1:"في <span dir='ltr'>C1</span> ستتعلم كيف تفكر وتكتب بالإنجليزية كأنها لغتك الأم. ستستخدم تراكيب معقدة بسهولة، وتضيف لحديثك كلمات مثل: <span dir='ltr'>Sophisticated – Empower – Innovation</span>. السر في هذه المرحلة ليس في ما تعرفه فقط… بل في الممارسة المستمرة وصقل مهاراتك. ⏳ رحلتك نحو الاحتراف تبدأ الآن… ونحن هنا لنضمن أنك لا تتوقف عند هذا الحد." 
}
};


async function showFinalResult(finalLevel = "Pre0") {
document.getElementById("nextBtn").classList.add("hidden");
const quizDiv = document.getElementById("quiz");
quizDiv.innerHTML = "";

const messageDiv = document.getElementById("message");
messageDiv.classList.remove("hidden");

 window.scrollTo({ top: 0, behavior: 'auto' });

const info = levelInfo[finalLevel];
let html = `
<div class="result-box">
  <h1 class="congrats-msg">🎉 اكملتِ الإختبار! أنا حقًا فخورة بك 👏</h1>
  <h2>Your Level Now: <span class="level-now">${finalLevel}</span> level</h2>
  <img src="${info.img}" alt="${finalLevel}" class="result-img">
  <p class="level-msg">${info.msg}</p>
  
 
  
  <!-- الرسالة الطويلة مخفية -->
  <div id="extraInfo" class="extra-info hidden">
   <h3 class="next-level"> Next Level: <strong>${info.next}</strong> level </h3>
    <p>${info.msg1}</p>
  </div>

  <!-- زر المزيد -->
  <button id="moreBtn" class="more-btn" onclick="toggleMore()">المزيد</button>
</div>
`;
messageDiv.innerHTML = html; }

document.querySelectorAll('.read-more-btn').forEach(button => {
button.addEventListener('click', () => {
    const wrapper = button.parentElement;
    wrapper.classList.toggle('expanded');
    button.textContent = wrapper.classList.contains('expanded') ? 'Read Less' : 'Read More';
});
});
const tips = [
    "اهتمي ببيئة وأدوات الدراسة، كيف ستستمرين ببيئة مشتتة",
    "للنجاح ضعي هدف بعيد المدى اتقان اللغة و هدف قصير المدى اكمال راوند",
    "عاهدي نفسك بأن هذه المرة ستصلين لمرادك وانك ستكونين انتِ عقبة الظروف وليس العكس  بعد التسجيل ستجدين عقد التعهد الخاص بك في WhatsApp ",
    "و لتغذي عقلك بالمعلومات المهمه في اللغه تابعي صفحة الإنستقرام فيها كل ما يفيدك لكي تتقدمي ",
    "حاولي ان تجدي رفيقة لهذا الدرب"
  ];
  let index =0;
  function showTip() {
  const box = document.getElementById("tipBox");

  if (index < tips.length) {
    box.innerText = tips[index];
    index++;
  } else {
    box.innerText = "شكرا";
  }
}
  
  function returnToStart() {
    const box = document.getElementById("tipBox");
    const button = document.getElementById("tipButton");
  

    box.innerHTML = '<img src="photos/ad8.png" alt="photo" id="remember">';
  
    button.innerText = "Click me";
    index = 0;
  }
  function scrollBoard(boardId, amount) {
    const board = document.getElementById(boardId);
    board.scrollBy({
        top: amount,
        behavior: 'smooth'
    });
}
function scrollBoard(boardId, amount) {
    const board = document.getElementById(boardId);
    board.scrollBy({
      top: amount,
      behavior: "smooth",
    });
  }
  let current = 0;
let spun = false; 

function spin(){
  if (spun) return; 
  spun = true; 

  const wheel = document.getElementById('wheel');
  const rand = Math.floor(Math.random() * 7);
  const slice = 360 / 7;
  const safeMargin = slice * 0.25; 
  const offset = slice / 2 + (Math.random() * (slice - safeMargin * 2) + safeMargin);
  const stopAngle = 360 - (rand * slice + offset);
  const turns = 5;
  current += turns * 360 + stopAngle;
  wheel.style.transform = `rotate(${current}deg)`;
}
document.querySelectorAll(".boxes .box1").forEach(box1 => {
    box1.addEventListener("click", function () {
      this.parentElement.classList.toggle("active");
    });
  });

  function toggleMore() {
    const extraInfo = document.getElementById("extraInfo");
    const moreBtn = document.getElementById("moreBtn");
  
    extraInfo.classList.toggle("hidden");
  
    if (extraInfo.classList.contains("hidden")) {
      moreBtn.textContent = "المزيد";
    } else {
      moreBtn.textContent = "إخفاء";
    }
  }



const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

if (bookingForm) {
    bookingForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const submitButton = bookingForm.querySelector(
            'button[type="submit"]'
        );

        const name = document.getElementById("studentName").value.trim();
        const phone = document.getElementById("studentPhone").value.trim();
        const level = document.getElementById("studentLevel").value;

        const bookingData = {
            name: name,
            phone: phone,
            level: level
        };

        bookingMessage.textContent = "جاري إرسال طلبك...";
        submitButton.disabled = true;

        try {
            const response = await fetch(
                "http://127.0.0.1:5001/booking",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bookingData)
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Request failed");
            }

            bookingMessage.textContent =
                "تم إرسال طلبك بنجاح! سنتواصل معك قريبًا 💗";

            bookingMessage.style.color = "green";

            bookingForm.reset();

        } catch (error) {
            console.error("Booking error:", error);

            bookingMessage.textContent =
                "تعذر إرسال الطلب. حاولي مرة أخرى.";

            bookingMessage.style.color = "red";

        } finally {
            submitButton.disabled = false;
        }
    });
}

