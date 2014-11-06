{{^editing}}
<span>{{quantity}}x {{name}}</span>
<button class='edit'>Edit</button>
<button class='remove'>x</button>
{{/editing}}
{{#editing}}
<span>{{name}}</span>
<input class='edit-quantity' value='{{quantity}}' type='number' />
<button class='cancel'>Cancel</button>
<button class='save'>Save</button>
{{/editing}}
{{#error}}
<span>{{error}}</span>
{{/error}}
