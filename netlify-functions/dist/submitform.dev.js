"use strict";

exports.handler = function _callee(event) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Function invoked');
          return _context.abrupt("return", {
            statusCode: 200,
            body: JSON.stringify({
              message: 'Form submitted successfully'
            })
          });

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.error('Error:', _context.t0);
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
  }, null, null, [[0, 5]]);
};