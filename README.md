# Form to CSS generator

Create your own CSS generator with the **form to css** generator plugin.

* * *

![](https://raw.githubusercontent.com/onigetoc/Form-To-CSS---jQuery-Plugin-form-to-CSS-generator/master/screenshot1.png)  

I find out that when a page come in view it add 

**Demo Video**

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
<input type="text" class="form-control input-md" name=".firstclass[font-size]:px" value="#cccccc" />
<input type="text" class="form-control input-md" name=".firstclass[color]" value="#cccccc" /> 
``` 

CSS Output:

```css
.firstclass {
    font-size: 15px;
    color: #cccccc;
}
```





* * *

You can fork and help for this project. I need a direct install script in PHP.

* * *

Markdown created with [Editconvert](http://editconvert.com/)
