<p>Hello {{name}}, your order #{{orderId}} is now shipping. Your order includes:</p>
<ul>
  {{#items}}
  <li>{{.}}</li>
  {{/items}}
</ul>
