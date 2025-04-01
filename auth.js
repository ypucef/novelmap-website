// تهيئة Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyABCD...",
  authDomain: "mywebsiteauth.firebaseapp.com",
  projectId: "mywebsiteauth",
  storageBucket: "mywebsiteauth.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd1234..."
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// تسجيل الدخول
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert(" You have successfully logged in. !");
      window.location.href = "welcome.html"; // انتقل إلى صفحة أخرى بعد التسجيل
    })
    .catch(error => {
      alert("error: " + error.message);
    });
});
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // هنا يمكنك إضافة اتصال بـ Firebase أو أي خدمة تسجيل دخول
    console.log("تم إدخال:", email, password);
    
    // عرض رسالة نجاح (مؤقتة)
    alert("تم تسجيل الدخول بنجاح! سيتم توجيهك إلى الصفحة الرئيسية.");
    window.location.href = "index.html";
});
