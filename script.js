//your JS code here. If required.
let student={
	name:'swetha'
};
Object.prototype.getKeys = function() {
  return Object.keys(this);
};
console.log(student.getKeys());
