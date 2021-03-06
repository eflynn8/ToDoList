todoApp.controllers = {
    "menuPage": function(page) {
      function bindPage(buttonId, target) {
          document.getElementById(buttonId).onclick = function() {
              var content = document.getElementById('content');
              var menu = document.getElementById('menu');
              content.load(target).then(menu.close.bind(menu));
          };
      }

      bindPage('menu-main', 'html/main.html');
      bindPage('menu-history', 'html/history.html');
    },

    "mainPage": function(page) {

      page.querySelector('#btn-splitter-toggle').onclick = function() {
        document.querySelector('#app-splitter').left.toggle();
      };

      page.querySelector('#btn-create-todo').onclick = function() {
          ons.notification.prompt({message: 'New Todo'})
              .then(function(value) {
                  todoApp.models.todo.add(value);
                  if (value == "Cereal" || value == "cereal") {
                          ons.notification.confirm({message: 'Would you like to add "Milk" to your list?'}).then(function(value){
                             if (value == 1) {
                                todoApp.models.todo.add("Milk");
                                todoApp.views.mainPage(page);
                                var home = new Audio();
                                home.src = "../static/milk.wav";
                                home.play();
                              }
                          });
                  }
                  else if (value == "Peanut butter" || value == "peanut butter") {
                          ons.notification.confirm({message: 'Would you like to add "Jelly" to your list?'}).then(function(value){
                             if (value == 1) {
                                todoApp.models.todo.add("Jelly");
                                todoApp.views.mainPage(page);
                              }
                          });
                  }
                  else if (value == "Broccoli" || value == "broccoli") {
                          ons.notification.confirm({message: 'Would you like to add "Ice cream" to your list?'}).then(function(value){
                             if (value == 1) {
                                todoApp.models.todo.add("Ice cream");
                                todoApp.views.mainPage(page);
                              }
                          });
                  }
                  else if (value == "Sugar" || value == "sugar") {
                          ons.notification.confirm({message: 'Would you like to add "Eggs" to your list?'}).then(function(value){
                             if (value == 1) {
                                todoApp.models.todo.add("Eggs");
                                todoApp.views.mainPage(page);
                              }
                          });
                  }
                  else if (value == "Homework" || value == "homework") {
                          ons.notification.confirm({message: 'Would you like to add "Procrastinate" to your list?'}).then(function(value){
                             if (value == 1) {
                                todoApp.models.todo.add("Procrastinate");
                                todoApp.views.mainPage(page);
                              }
                          });
                  }
                  todoApp.views.mainPage(page);
              });

          var bleep = new Audio();
          bleep.src = "../static/oy.wav";
          bleep.play();
      };

      todoApp.views.mainPage(page);

    },

    "historyPage": function(page) {
        page.querySelector('#btn-splitter-toggle').onclick = function() {
            document.querySelector('#app-splitter').left.toggle();
        };
         todoApp.views.historyPage(page);
         var hisSon = new Audio();
         home.src = "../static/adding.wav";
         home.play();
    },

    "createPage": function(page) {

    }

};
