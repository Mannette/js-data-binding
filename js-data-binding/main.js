// ** globals ** //

var scope = {};
var classNamesArray = ['name', 'lastName', 'age'];

// ** functions ** //

// iterate through classNamesArray
  // grab dom elements associated w/ each class
  // return an array of dom elements

function getElements() {
  // logic
  var domEls = [];
  for (var i = 0; i < classNamesArray.length; i++) {
    domEls.push(document.getElementsByClassName(classNamesArray[i]));
  }
  return domEls;
}

function domBinding(elements) {
  /**
   * iterate through the dom elements
   * attach onkeyup event to each
   * perform 'some' sort of action to bind the two inputs
   */
  for (var index in elements) {
    elements[index].onkeyup = function() {
      for (var index in elements) {
        elements[index].value = this.value;
      }
    };
  }
}

function modelBinding(elements) {
  /**
   * iterate through classNamesArray
   * Object.defineproperty()
   * scope.name = 'something'
   */
  for (var i = 0; i < classNamesArray.length; i++) {
    Object.defineProperty(scope, classNamesArray[i], {
      set: function(newValue) {
        for (var index in elements) {
          elements[index].value = newValue;
        }
      }
    });
  }
}
var domElements = getElements();
domBinding(domElements[0]);
modelBinding(domElements[0]);
