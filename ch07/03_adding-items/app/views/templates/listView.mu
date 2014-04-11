<ul>
  {{#shopping_list}}
  <li>
    <span>{{amount}}x {{name}}</span>
    <button class='remove' data-index='{{autoincrement}}'>x</button>
  </li>
  {{/shopping_list}}
</ul>
<fieldset>
  <legend>Add Groceries</legend>
  <label for='form-name'>Name</label>
  <input id='form-name' class='name' placeholder='Example: Avocado'>
  <label for='form-amount'>Amount</label>
  <input id='form-amount' class='amount' type='number' placeholder='How many?'>
  <button class='add'>Add</button>
  {{#error}}
  <p>{{error}}</p>
  {{/error}}
</fieldset>
