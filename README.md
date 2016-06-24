# Form to CSS generator | jQuery Plugin form to CSS generator

Create your own CSS generator with the **form to css** generator plugin.

* * *

![](https://raw.githubusercontent.com/onigetoc/Form-To-CSS---jQuery-Plugin-form-to-CSS-generator/master/screenshot1.png)  

# Why

I wanted to create my own CSS generator for a project with a form that update dynamically the css. I looked to some other project and i didn't liked the fact to write a lot of codes and i came up with a idea to create a form who automatically convert to CSS.

# Usage example

HTML form (input, textarea and select tags supported):  
Read the [jQuery.serializeJSON](https://github.com/marioizquierdo/jquery.serializeJSON) for more details.   

input name with body[background-color]
```html
<input type="text" name="body[background-color]" value="yellow">
```

CSS Output:

```css
body {
    background-color: yellow
}
```

input name with h3[font-size]:px
```html
<input type="text" name="h3[font-size]:px" value="15" />
```

CSS Output:

```css
h3 {
    font-size: 15px
}
```

For multiple class or ID since we use jQuery.serializeJSON, you can not separate selector with a comma, instead use | like the following example: input name with multiple selector .firstclass|secondClass[font-size]:px
```html
<input type="text" name=".firstclass|secondClass[font-size]:px" value="15" />
```

CSS Output:

```css
.firstclass, .secondClass {
    font-size: 15px
}
```


Multiple input with the same selector will build your CSS:
```html
<input type="number" name=".firstclass[font-size]:px" value="15" min="1" max="20" />
<input type="text" name=".firstclass[color]" value="#cccccc" /> 
``` 

CSS Output:

```css
.firstclass {
    font-size: 15px;
    color: #cccccc;
}
```

Since jQuery.serializeJSON do not take the : as a selector, we replace : by @ input name with #myID@hover[color]
It may change in the futur if i can implement CSS media queries.
```html
<input type="text" name="#myID@hover[color]" value="red" />
```

CSS Output:

```css
#myID:hover {
    color: red
}
```
user `:skip` or `anything:skip` to exclude input from being converted to CSS (from   [jQuery.serializeJSON](https://github.com/marioizquierdo/jquery.serializeJSON#parse-values-with-types)) 

# Adding units to value 

After the value, you can specify units to value

`[]:px` `[]:em` `[]:percent` `[]:important` 

```html
<input type="text" name=".myclass[padding]:em" value="2" />
```

percent for %

important for !important

# Using FormtoCSS function

Call the function this way. You can use a Class, ID or form

```javascript 
$(".formClass").formtoCSS();
```

### With all options:

Example call with all options:

```javascript
$(".formClass").formtoCSS({  
    beautify: false, // default true  
    prefix: false, // css3 -webkit, -moz: default true 
    target: '#targetDIV', // target effected selector, single or multiple selector(s)
    targetShow: true,  // show target selector in css output result ex: #mytargetdiv: default false
    addcss: '#addcss', // add more css from #addcss hidden textarea  
    output: 'pre,#result', // output CSS results, single or multiple selector(s)  
    header: false // add css to header in realtime: default true  
});
```

### Tricks:
Sometime you need to append something to your input and formtoCSS did not update your CSS.

try `.keyup():`

`$("#targetInput").val('#f43').keyup();`

You can use hidden input and do create CSS with the right name informations

## Dependency

Form to CSS need these javascript and jQuery plugins to work.

*   [jQuery.serializeJSON](https://github.com/marioizquierdo/jquery.serializeJSON)
*   [cssbeautify](https://github.com/senchalabs/cssbeautify)

The cssparser add css3 prefix like -moz | -webkit  
The [cssparser](https://github.com/onigetoc/Form-To-CSS---jQuery-Plugin-form-to-CSS-generator/blob/master/js/cssParser.js) need to be rewrite. I found it on the web and it's not perfect.

## Demo:

[https://jsfiddle.net/onigetoc/92fp0brf](https://jsfiddle.net/onigetoc/92fp0brf)

[Full page demo](https://rawgit.com/onigetoc/FormToCSS/master/example/demo.html)


You can fork and help for this project.  

* * *

Markdown created with [Editconvert](http://editconvert.com/)
