// التحقق من العمر
function checkAge() {
  let age = Number(document.getElementById("age").value);

  if (age < 18) {
    document.getElementById("age-warning").innerText =
      "Sorry! You must be 18 or older.";

    document.getElementById("calculator").style.display = "none";
  } else {
    document.getElementById("age-warning").innerText = "";
    document.getElementById("calculator").style.display = "block";
  }
}


// حساب BMI
function calculateBMI() {
  let height = Number(document.getElementById("height").value);
  let weight = Number(document.getElementById("weight").value);
  let unit = document.querySelector('input[name="unit"]:checked').value;

  let bmi;

  if (unit === "metric") {
    bmi = weight / ((height / 100) * (height / 100));
  } else {
    bmi = (weight / (height * height)) * 703;
  }

  bmi = Number(bmi.toFixed(1));

  document.getElementById("bmi-result").innerText = "Your BMI: " + bmi;

  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "purple";
  } else if (bmi < 25) {
    category = "Normal";
    color = "green";
  } else if (bmi < 30) {
    category = "Overweight";
    color = "orange";
  } else {
    category = "Obese";
    color = "red";
  }

  let box = document.getElementById("bmi-category");
  box.innerText = category;
  box.style.backgroundColor = color;

  // حفظ البيانات
  localStorage.setItem("lastBMI", bmi);
  localStorage.setItem("lastCategory", category);
}


// تحميل آخر نتيجة
window.onload = function () {
  let savedBMI = localStorage.getItem("lastBMI");
  let savedCategory = localStorage.getItem("lastCategory");

  if (savedBMI) {
    document.getElementById("saved-result").innerText =
      "Last Result: " + savedBMI + " — " + savedCategory;
  }
};