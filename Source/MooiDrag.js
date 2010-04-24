/*
---
description: MooiDrag - Drag&Drop implementation for Safari Mobile (iPhone-like devices)

license: MIT-style

authors:
- Sergio Panagia (http://panaghia.it)

requires:
- Element.Event
- Element.Style
- Element.Dimenstions
- String

provides: [MooiDrag]

...
*/


var MooiDrag = new Class({
	Implements: [Options, Events],
        options: {
       	el : "" //the element
        },
        initialize: function(options){
                this.setOptions(options);
                this.ini();          
        },
        ini: function()
        {
        	if(this.options.el==null)
				alert('MooiDrag error, no element declared');
        },
        makeDraggable: function()
        {
        	var node = this.options.el;
        	node.ontouchmove = function(e)
			{
				
				if(e.touches.length == 1)
				{
					e.preventDefault();
					var touch = e.touches[0];
					var node = touch.target; // Find the node the drag started from
					node.style.position = "absolute"
					
					var divWidth = node.getSize().x;
					var divHeight = node.getSize().y;
					
					var left = touch.pageX;
					var top = touch.pageY;
					left-=divWidth/2;
					top-=divHeight/2;
					node.style.left = left + "px";
					node.style.top = top + "px";
				}
			}

        
        
        }
});
