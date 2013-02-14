# jQuery Mutually Exclusive CheckBox Plugin

MutuallyExclusiveCheckBox is an jQuery Plugin that can be attached to any HTML CheckBox control. By adding a number of checkboxes to the same "Key", only one checkbox with the specified key can be checked at a time. This plugin is useful when a number of choices are available but only one can be chosen, similar to a radio button. The use of checkboxes however allows you to choose to uncheck a value which is not possible normally with radio buttons.

## Demo

[http://wdove.github.com/mutuallyExclusiveCheckBox/](http://wdove.github.com/mutuallyExclusiveCheckBox/)

## Usage

```html
<input type="checkbox" id="cb1" />
<label for="cb1">CheckBox 1</label>
<br/>
<input type="checkbox" id="cb2" />
<label for="cb2">CheckBox 2</label>
<br/>
<input type="checkbox" id="cb3" />
<label for="cb3">CheckBox 3</label>
<br/>

<script src="jquery.js"></script>
<script src="mutuallyExclusiveCheckBox.js"></script>
<script>
$(function() {
  $(":checkbox").mutuallyExclusiveCheckBox({ Key: "abc" });
});
</script>
```

## License
Copyright (c) 2012 Licensed under the MIT license.mutuallyExclusiveCheckBox
=========================
