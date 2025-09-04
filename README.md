# emergency-hotline
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=> getElementById take only one element by id. 

=> getElementsByClassName take many elements with same class. 

=> querySelector take first element match with CSS selector. 

=> querySelectorAll take all element match with CSS selector.

2.How do you create and insert a new element into the DOM?

=> We use document.createElement() to make new element. Then we put it inside DOM by appendChild, prepend, or insertBefore. Example: make new div and add it in body.

3.What is Event Bubbling and how does it work?

=> When we click on child element, event also go up to parent and grandparent. So child and parent both get click. This is bubbling.

4.What is Event Delegation in JavaScript? Why is it useful?

=> We don’t need add event on every child. We add event only on parent, then check which child is clicked. It is easy and fast, also work for new child added later.

5.What is the difference between preventDefault() and stopPropagation() methods?

=> preventDefault() stop browser normal action, like stop link open or stop form submit. stopPropagation() stop event go up to parent.
