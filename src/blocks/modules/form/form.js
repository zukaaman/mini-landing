// for tel-mask
window.addEventListener("DOMContentLoaded", function() {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  };

  function mask(event) {
    var matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
  };

  var input = document.querySelector("input[type=tel]");
      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
});

// for form
function mailform() {
  var msg = jQuery('.form-form').serialize();
  jQuery.ajax({
    method: 'POST',
    url: 'php/mail.php',
    data: msg,
    cache: false,
    success: function success(html) {
      $(".modal").addClass("modal--active");
      $(".modal-overlay").addClass("modal-overlay--active");
      setTimeout(function () {
        $(".modal").removeClass("modal--active");
        $(".modal-overlay").removeClass("modal-overlay--active");
        $(".form-form")[0].reset();
      }, 3000);
    }
  });
}
