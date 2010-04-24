MooiDrag
===========

Simple implementation of Drag&Drop on Safari Mobile (iPhone-like devices)


How to use
----------

Declare an instance of MooiDrag class passing the element to be set as draggable, then run 'makeDraggable' method.

Example usage:

window.addEvent('domready', function() {
	var iDrag = new MooiDrag(
	{
	    el: $('item')	            
	});
	iDrag.makeDraggable();
});

Screenshots
-----------


![Screenshot 1](http://panaghia.it/imgs/mooidrag.jpg)



