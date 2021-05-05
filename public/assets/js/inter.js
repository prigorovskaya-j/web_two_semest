(function() {
  var hobbies, hobbies_link;

  hobbies_link = function(id, title) {
    document.writeln('<a href ="#' + id + '">' + title + '</a><br>');
  };

  hobbies = function(id, title, text, ...img) {
    var i, j, len;
    //Модифицирование страницы Мои интересы
    document.writeln('<p class="text_link"><a id = "' + id + '">' + title + '</a></p><p class="main_text">' + text + '</p><p class="hobby_img img">');
    for (j = 0, len = img.length; j < len; j++) {
      i = img[j];
      document.writeln('<img src="' + i + '" width="200" height="200" alt="Ошибка загрузки изображения!">');
      document.writeln('</p>');
    }
  };

}).call(this);
