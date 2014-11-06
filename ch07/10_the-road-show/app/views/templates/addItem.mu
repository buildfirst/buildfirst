<fieldset class='create'>
  <legend>Add Groceries</legend>
  <p>
    <label for='form-name'>Name</label>
    <input id='form-name' class='name' placeholder='Example: Avocado' value='{{name}}'>
  </p>
  <p>
  <label for='form-quantity'>Quantity</label>
  <input id='form-quantity' class='quantity' type='number' placeholder='How many?' value='{{quantity}}'>
  </p>
  <p class='buttons'>
    <a href='#items' class='cancel'>Cancel</a>
    <button class='add'>Add</button>
  </p>
  {{#error}}
  <p>{{error}}</p>
  {{/error}}
</fieldset>
