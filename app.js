let val;

val = document;
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
// val = document.domain;
// val = document.URL;
val = document.contentType;

val = document.forms[0].id;
val = document.forms[0].textContent;
val = document.forms[0].method;
val = document.forms[0].actions;



val = document.links;
let valArr = Array.from(val);

valArr.forEach(link => {
  console.log(link);
});

console.log(val);