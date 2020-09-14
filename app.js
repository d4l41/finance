// Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

// Санхүүтэй ажилах контроллер
var financeController = (function () {})();

// Програмын холбогч контроллер
var appController = (function (uiController, financeController) {
  ctrlAddItem = function () {};
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
    //1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    // 2. олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3.Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
    // Төсвийг тооцоолно.
    // 5.Эцсийн үлдэгдэл тооцоог дэлгэцэнд  гаргана.
  });

  document.addEventListener("keypress", function (event) {
    if (event.code === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
