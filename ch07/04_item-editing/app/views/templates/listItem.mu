<li class='item'>
  {{^editing}}
  <span>{{amount}}x {{name}}</span>
  <button class='edit' data-name='{{name}}'>Edit</button>
  <button class='remove' data-name='{{name}}'>x</button>
  {{/editing}}
  {{#editing}}
  <input value='{{name}}' />
  <input value='{{amount}}' type='number' />
  <button class='cancel' data-name='{{name}}'>Cancel</button>
  <button class='edit' data-name='{{name}}'>Save</button>
  {{/editing}}
  {{#error}}
  <span>{{error}}</span>
  {{/error}}
</li>
