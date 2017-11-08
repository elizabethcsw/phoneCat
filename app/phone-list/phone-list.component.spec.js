describe('phoneList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('phoneList'));

  // Test the controller
  describe('PhoneListController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {
     ctrl = $componentController('phoneList');
    }));

    it('should create a `phones` model with 3 phones', inject(function($componentController) {
      expect(ctrl.phones.length).toBe(3);
    }));

    it('should create know the user name', inject(function($componentController) {
      expect(ctrl.name).toBe('Elizabeth');
    }));

    it('should set a default value for the `orderProp` model', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
