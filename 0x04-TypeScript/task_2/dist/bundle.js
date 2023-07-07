/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Director: () => (/* binding */ Director),
/* harmony export */   Teacher: () => (/* binding */ Teacher),
/* harmony export */   createEmployee: () => (/* binding */ createEmployee),
/* harmony export */   executeWork: () => (/* binding */ executeWork),
/* harmony export */   isDirector: () => (/* binding */ isDirector),
/* harmony export */   teachClass: () => (/* binding */ teachClass)
/* harmony export */ });
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getToWork = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());

var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return "Cannot work from home"; };
        this.getCoffeeBreak = function () { return "Cannot have a break"; };
        this.workTeacherTasks = function () { return "Getting to work"; };
    }
    return Teacher;
}());

function createEmployee(salary) {
    if (typeof (salary) === 'number' && salary < 500)
        return new Teacher();
    else
        (typeof (salary) === 'number' && salary >= 500);
    return new Director();
}
function isDirector(employee) {
    return employee instanceof (Director);
}
function executeWork(employee) {
    if (employee instanceof (Director))
        console.log(employee.workDirectorTasks());
    else
        console.log(employee.workTeacherTasks());
}
function teachClass(todayClass) {
    if (todayClass === "Math")
        return "Teaching Math";
    return "Teaching History";
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(isDirector(createEmployee(100)));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
console.log(teachClass('Math'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTtJQUFBO0lBWUEsQ0FBQztJQVhDLCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtRQUNFLGlCQUFZLEdBQUcsY0FBTSw4QkFBdUIsRUFBdkIsQ0FBdUIsQ0FBQztRQUM3QyxtQkFBYyxHQUFHLGNBQU0sNEJBQXFCLEVBQXJCLENBQXFCLENBQUM7UUFDN0MscUJBQWdCLEdBQUcsY0FBTSx3QkFBaUIsRUFBakIsQ0FBaUIsQ0FBQztJQUM3QyxDQUFDO0lBQUQsY0FBQztBQUFELENBQUM7O0FBRU0sU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFDcEQsSUFBSSxPQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHO1FBQzdDLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQzs7UUFDbEIsQ0FBQyxPQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sSUFBSSxHQUFHLENBQUM7SUFDakQsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxRQUE4QjtJQUN2RCxPQUFPLFFBQVEsWUFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFTSxTQUFTLFdBQVcsQ0FBQyxRQUE4QjtJQUN4RCxJQUFJLFFBQVEsWUFBVyxDQUFDLFFBQVEsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFFLFFBQXFCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDOztRQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFFLFFBQW9CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFHTSxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUM3QyxJQUFJLFVBQVUsS0FBSyxNQUFNO1FBQ3ZCLE9BQU8sZUFBZSxDQUFDO0lBQ3pCLE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOnN0cmluZztcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCkge1xuICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRUb1dvcmsoKSB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiO1xuICB9XG5cbiAgd29ya0RpcmVjdG9yVGFza3MoKSB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSA9ICgpID0+IFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gIGdldENvZmZlZUJyZWFrID0gKCkgPT4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCI7XG4gIHdvcmtUZWFjaGVyVGFza3MgPSAoKSA9PiBcIkdldHRpbmcgdG8gd29ya1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiAoRGlyZWN0b3IgfCBUZWFjaGVyKSB7XG4gIGlmICh0eXBlb2Yoc2FsYXJ5KSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKVxuICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICBlbHNlICh0eXBlb2Yoc2FsYXJ5KSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5ID49IDUwMClcbiAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiAoRGlyZWN0b3IgfCBUZWFjaGVyKSkge1xuICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZihEaXJlY3Rvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogKERpcmVjdG9yIHwgVGVhY2hlcikpIHtcbiAgaWYgKGVtcGxveWVlIGluc3RhbmNlb2YoRGlyZWN0b3IpKVxuICAgIGNvbnNvbGUubG9nKChlbXBsb3llZSBhcyBEaXJlY3Rvcikud29ya0RpcmVjdG9yVGFza3MoKSk7XG4gIGVsc2VcbiAgICAgY29uc29sZS5sb2coKGVtcGxveWVlIGFzIFRlYWNoZXIpLndvcmtUZWFjaGVyVGFza3MoKSk7XG59XG5leHBvcnQgdHlwZSBTdWJqZWN0cyA9ICggXCJNYXRoXCIgfCBcIkhpc3RvcnlcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKSB7XG4gIGlmICh0b2RheUNsYXNzID09PSBcIk1hdGhcIilcbiAgICByZXR1cm4gXCJUZWFjaGluZyBNYXRoXCI7XG4gIHJldHVybiBcIlRlYWNoaW5nIEhpc3RvcnlcIjtcbn1cbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpO1xuY29uc29sZS5sb2coaXNEaXJlY3RvcihjcmVhdGVFbXBsb3llZSgxMDApKSk7XG5leGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKTtcbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKTtcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=