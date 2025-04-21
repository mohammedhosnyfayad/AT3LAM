let scPhoto = document.querySelector(".sc-photo");
let count = 0;
let photos = ["photo2.jpg", "photo3.jpg", "photo4.jpg", "at3lm4.jpg"];

if (scPhoto) {
  let loop = setInterval(function () {
    scPhoto.classList.add("class");
    scPhoto.style.backgroundImage = `url(${photos[count]})`;
    count++;
    if (count >= photos.length) {
      count = 0;
    }
  }, 3000);
}

let nav = document.querySelector(".nav");
let fabars = document.querySelector(".fa-bars");

if (fabars && nav) {
  fabars.onclick = function () {
    nav.classList.toggle("tr");
  };
}

let icTop = document.querySelectorAll(".fa-caret-up");
icTop.forEach(function (e) {
  e.addEventListener("click", function () {
    let one = e.closest(".box-eltatbek").querySelector(".content-card");
  });
});

// let htm = document.querySelector(".htm");
// let css = document.querySelector(".css");
// htm.style.display = "none";

let learning = document.querySelectorAll(".learning");

learning.forEach(function (e) {
  e.addEventListener("click", function () {
    let BigItem = e.closest(".learning");
    let h3 = BigItem.querySelector("h3").textContent;
    let p = BigItem.querySelector("p").textContent;

    // حفظ البيانات في sessionStorage بدلاً من localStorage
    sessionStorage.setItem("name-title", h3);
    sessionStorage.setItem("parg-title", p);

    window.open("at3lm.html", "_blank");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let getNmae = sessionStorage.getItem("name-title");
  let getParg = sessionStorage.getItem("parg-title");

  if (getNmae) {
    document.getElementById("name-title").textContent = getNmae;
    document.getElementById("parg-title").textContent = getParg;

    if (getNmae === "التعلم") {
      document.querySelector(".eltatbek").remove();
      document.querySelector(".Test").remove();
      document.querySelector(".help").remove();
      document.querySelector(".t3lam").style.display = "block";
    } else if (getNmae === "التطبيق") {
      document.querySelector(".t3lam").remove();
      document.querySelector(".Test").remove();
      document.querySelector(".help").remove();
      document.querySelector(".eltatbek").style.display = "block";
    } else if (getNmae === "الاختبارت") {
      document.querySelector(".t3lam").remove();
      document.querySelector(".eltatbek").remove();
      document.querySelector(".help").remove();
    } else if (getNmae === "المساعده") {
      document.querySelector(".t3lam").remove();
      document.querySelector(".eltatbek").remove();
      document.querySelector(".Test").remove();
    }
  }
});

let icRight = document.querySelectorAll(".fa-caret-right");
let One = document.querySelector(".One");
let Two = document.querySelector(".Two");
let Thecount = 0;
icRight.forEach(function (e) {
  e.addEventListener("click", function () {
    Thecount++;
    if (Thecount === 1) {
      One.classList.add("num");
      One.classList.remove("zero");
      Two.classList.add("zero");
      Two.classList.remove("num");
    } else if (Thecount === 2) {
      One.classList.remove("num");
      Two.classList.remove("zero");
      One.classList.add("zero");
      Two.classList.add("num");
      Thecount = 0;
    }
  });
});

let Aribc = document.querySelector(".Aribc");
let icClose = document.querySelectorAll(".fa-circle-xmark");
let btn = document.querySelectorAll(".showtecther");
// btn.onclick = function () {
//   Aribc.classList.toggle("right");
// };
// icClose.onclick = function () {
//   Aribc.classList.remove("right");
// };
btn.forEach(function (e) {
  e.onclick = function () {
    let one = e.closest(".box-lang").querySelectorAll(".Aribc");
    one.forEach(function (s) {
      s.classList.add("right");
    });
  };
});
icClose.forEach(function (e) {
  e.addEventListener("click", function () {
    let two = e.closest(".box-lang").querySelector(".Aribc");
    two.classList.remove("right");
  });
});

let math = document.querySelectorAll(".mm");
let LangOne = document.querySelector(".lang-one");
let LangTwo = document.querySelector(".lang-two");
let LangThree = document.querySelector(".lang-three");
let LangFour = document.querySelector(".lang-four");
let LangFive = document.querySelector(".lang-five");
let LangSex = document.querySelector(".lang-sex");
LangOne.style.display = "none";
LangTwo.style.display = "none";
LangThree.style.display = "none";
LangFour.style.display = "none";
LangFive.style.display = "none";
LangSex.style.display = "none";
math.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.textContent === "رياضيات") {
      LangOne.style.display = "block";
      LangTwo.style.display = "none";
      LangThree.style.display = "none";
      LangFour.style.display = "none";
      LangFive.style.display = "none";
    } else if (e.textContent === "اللغه العربيه") {
      LangOne.style.display = "none";
      LangTwo.style.display = "block";
      LangThree.style.display = "none";
      LangFour.style.display = "none";
      LangFive.style.display = "none";
    } else if (e.textContent === "الفيزياء") {
      LangThree.style.display = "block";
      LangOne.style.display = "none";
      LangTwo.style.display = "none";
      LangFour.style.display = "none";
      LangFive.style.display = "none";
    } else if (e.textContent === "اللغه الانجليزيه") {
      LangFour.style.display = "block";
      LangOne.style.display = "none";
      LangTwo.style.display = "none";
      LangThree.style.display = "none";
      LangFive.style.display = "none";
    } else if (e.textContent === "الاحصاء") {
      LangOne.style.display = "none";
      LangFive.style.display = "block";
      LangTwo.style.display = "none";
      LangThree.style.display = "none";
      LangFour.style.display = "none";
    } else if (e.textContent === "التخاطب") {
      LangOne.style.display = "none";
    }
  });
});
let select = document.querySelector("select");
let qute = document.querySelector(".qutes-aribc");
let quteMath = document.querySelector(".qutes-math");
let quteEng = document.querySelector(".qute-eng");
let qutePhysique = document.querySelector(".qute-physique");
let quteCom = document.querySelector(".qute-com");

select.addEventListener("change", function () {
  if (select.value === "aribc") {
    qute.style.display = "block";
    quteMath.style.display = "none";
    quteEng.style.display = "none";
    qutePhysique.style.display = "none";
    quteCom.style.display = "none";
  } else if (select.value === "math") {
    quteMath.style.display = "block";
    qute.style.display = "none";
    quteEng.style.display = "none";
    quteCom.style.display = "none";
    qutePhysique.style.display = "none";
  } else if (select.value === "English") {
    qute.style.display = "none";
    quteMath.style.display = "none";
    qutePhysique.style.display = "none";
    quteCom.style.display = "none";
    quteEng.style.display = "block";
  } else if (select.value === "physics") {
    qute.style.display = "none";
    qutePhysique.style.display = "block";
    qute.style.display = "none";
    quteCom.style.display = "none";
    quteMath.style.display = "none";
    quteEng.style.display = "none";
  } else if (select.value === "Communication") {
    qute.style.display = "none";
    qutePhysique.style.display = "none";
    qute.style.display = "none";
    quteCom.style.display = "block";
    quteMath.style.display = "none";
    quteEng.style.display = "none";
  }
});

let qutes = document.querySelectorAll(".qutes p");
let qutesImg = document.querySelector(".box-qute");
qutes.forEach(function (e) {
  e.addEventListener("click", function () {
    let one = e.closest(".box-qute");
    console.log(one);

    if (
      e.textContent === "أ) الطفل" ||
      e.textContent === "ب) اسمية" ||
      e.textContent === "ج) التفاحة" ||
      e.textContent === "ب) نكرة" ||
      e.textContent === "ب) هؤلاء" ||
      e.textContent === "ج) وأحمد" ||
      e.textContent === "أ) كيف" ||
      e.textContent === "أ) العلم" ||
      e.textContent === "ج) يقرأ الطالب الكتاب" ||
      e.textContent === "ب) الاسم الذي يأتي بعد أحد حروف الجر" ||
      // math
      e.textContent === "ب) 30" ||
      e.textContent === "ج) 17" ||
      e.textContent === "أ) 5" ||
      e.textContent === "ج) مربع" ||
      e.textContent === "ب) 3" ||
      e.textContent === "ب) 0.5" ||
      e.textContent === "ب) 180 درجة" ||
      e.textContent === "أ) 30°" ||
      e.textContent === "ج) الضرب" ||
      e.textContent === "ب) 0" ||
      // eng
      e.textContent === "C) Joyful" ||
      e.textContent === "C) Went" ||
      e.textContent === "C) She doesn’t like coffee." ||
      e.textContent === "B) An" ||
      e.textContent === "B) Simple" ||
      e.textContent === "C) He" ||
      e.textContent === "B) Happiness" ||
      e.textContent === "B) Children" ||
      e.textContent === "A) She is reading a book." ||
      e.textContent === "C) To" ||
      //physique
      e.textContent === "C) نيوتن" ||
      e.textContent === "A) 300,000 كم/ث" ||
      e.textContent === "B) الجليد" ||
      e.textContent === "C) قطع ناقص" ||
      e.textContent === "B) شخص يدفع الحائط والحائط يدفعه بنفس القوة" ||
      e.textContent === "A) الطاقة لا تفنى ولا تستحدث من العدم" ||
      e.textContent === "D) الفولت" ||
      e.textContent === "C) التسارع" ||
      e.textContent === "B) الضغط" ||
      e.textContent === "A) الكتلة × التسارع" ||
      //other
      e.textContent === "B) 15" ||
      e.textContent === "C) الوسط الحسابي" ||
      e.textContent === "D) 18" ||
      e.textContent === "B) 6" ||
      e.textContent === "C) نصف القيم أقل من 12 والنصف الآخر أكبر" ||
      e.textContent === "C) 25" ||
      e.textContent === "A) يقيس مدى تشتت القيم حول الوسط الحسابي" ||
      e.textContent === "B) أحدهما يزداد والآخر ينقص" ||
      e.textContent === "A) العلاقة خطية ومثالية" ||
      e.textContent === "B) 1"
    ) {
      let erorrelement = document.createElement("img");
      erorrelement.src = "checked.png";
      erorrelement.className = "img-erorr";
      one.appendChild(erorrelement);
      one.classList.add("border");
      e.style.border = "5px solid #32BA7C";
    } else {
      let erorrelement = document.createElement("img");
      erorrelement.src = "cross.png";
      erorrelement.className = "img-erorr";
      one.appendChild(erorrelement);
      one.classList.add("animation");
      setTimeout(function () {
        erorrelement.style.display = "none";
        one.classList.remove("animation");
      }, 800);
    }
  });
});
