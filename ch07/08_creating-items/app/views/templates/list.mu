<ul>
  {{#shopping_list}}
  <li>
    <span>{{quantity}}x {{name}}</span>
    <button class='remove' data-name='{{name}}'>x</button>
  </li>
  {{/shopping_list}}
</ul>
<fieldset>
  <legend>Add Groceries</legend>
  <label for='form-name'>Name</label>
  <input id='form-name' class='name' placeholder='Example: Avocado' value='{{name}}' />
  <label for='form-quantity'>Quantity</label>
  <input id='form-quantity' class='quantity' type='number' placeholder='How many?' value='{{quantity}}' />
  <button class='add'>Add</button>
  {{#error}}
  <p>{{error}}</p>
  {{/error}}
</fieldset>
