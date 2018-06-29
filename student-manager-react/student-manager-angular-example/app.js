angular.module("app", []);

angular.module("app")
  .controller("HelloController", function() {
    var vm = this;
    vm.name = "Darius";
  });
