# Fixorphan Jquery Plugin
Ensure that your content never has an orphan word on the last line

## Sample Codepen demo
https://codepen.io/hdavtian/pen/ZJZqmW

###### The markup
```html
<p class="my-paragraph">Try resizing your browser window and see if you can get this paragraph to end with a single word on the very last line.</p>
```

###### The JS
```javascript
$('.my-paragraph').fixorphan({
    numLastWords: 3
});
```

###### The Css
```css
.nowrap {
    white-space: nowrap;
}
```

###### Generated result
```html
<p class="my-paragraph">
    Try resizing your browser window and
    see if you can get this paragraph to
    end with a single word on the 
        <span class="nowrap">
            very last line.
        </span>
</p>
```

## Getting Started
- Include fixorphan library after jquery
- Include fixorphan css (or include the classes in your own css)
- Target desired DOM element in your markup and call .fixorphan()
