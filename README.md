# Form to CSS generator

Create your own CSS generator with the **form to css** generator plugin.

* * *

![](https://raw.githubusercontent.com/onigetoc/Form-To-CSS---jQuery-Plugin-form-to-CSS-generator/master/screenshot1.png)  

# Usage example

HTML form (input, textarea and select tags supported):  
Read the jQuery.serializeJSON for more details.  

```<input type="text"name="body[background-color]" value="yellow">```

input name with body[background-color]
```<input type="text" name="body[background-color]" value="yellow">```

CSS Output:

```css
body {
    background-color: yellow
}
```

input name with h3[font-size]:px
```<input type="text" class="form-control input-md" name="h3[font-size]:px" value="15" />```

CSS Output:

```css
h3 {
    font-size: 15px
}
```

For multiple class or ID since we use jQuery.serializeJSON, you can not separate selector with a comma, instead use | like the following example: input name with multiple selector .firstclass|secondClass[font-size]:px
```<input type="text" class="form-control input-md" name=".firstclass|secondClass[font-size]:px" value="15" />```

CSS Output:

```css
.firstclass, .secondClass {
    font-size: 15px
}
```


Multiple input with the same selector will build your CSS:
```
<input type="text" class="form-control input-md" name=".firstclass[font-size]:px" value="#15" />
<input type="text" class="form-control input-md" name=".firstclass[color]" value="#cccccc" /> 
``` 

CSS Output:

```css
.firstclass {
    font-size: 15px;
    color: #cccccc;
}
```
## Dependency

Form to CSS need these javascript and jQuery plugins to work.

*   [jQuery.serializeJSON](https://github.com/marioizquierdo/jquery.serializeJSON)
*   [cssbeautify](https://github.com/senchalabs/cssbeautify)

The cssparser add css3 prefix like -moz | -webkit  
The [cssparser](https://github.com/onigetoc/Form-To-CSS---jQuery-Plugin-form-to-CSS-generator/blob/master/js/cssParser.js) need to be rewrite. I found it on the web and it's not perfect.

Demo: [https://jsfiddle.net/onigetoc/92fp0brf](https://jsfiddle.net/onigetoc/92fp0brf)[](https://jsfiddle.net/onigetoc/92fp0brf)

You can fork and help for this project.  

* * *

Markdown created with [Editconvert](http://editconvert.com/)
