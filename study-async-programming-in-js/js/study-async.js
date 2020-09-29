/*
     1. Async Programming -> Long running functions
     2. Event Triggered Programming
     3. Functional Programming: function => param: function
                                  ClickEvent -> Event Queue -> Exec Thread -> Call-back Method
     Web Browser (UI)-> js -> js engine -> 1 Execution Thread, Many IO Thread
     How to write async function:
       i. Promise
      ii. async/await -> Syntactic Sugar for Promise
     iii. Generators -> yield, iterator, generator function
 */
 let btn = document.querySelector("#btn");
 let callback1 = function(){}
 let event1 = 'click'
 btn.addEventListener(event1, callback1); // event1 -> callback1


