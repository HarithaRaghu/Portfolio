"use strict";

exports.handler = function _callee(event) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Function invoked');
          data = JSON.parse(event.body);
          return _context.abrupt("return", {
            statusCode: 200,
            body: JSON.stringify({
              message: 'Form submitted successfully'
            })
          });

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            statusCode: 500,
            body: JSON.stringify({
              error: 'Form submission failed'
            })
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};