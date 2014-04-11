<ul>
  {{#shopping_list}}
  <li>
    <span>{{amount}}x {{name}}</span>
    <button class='remove' data-index='{{index}}'>x</button>
  </li>
  {{/shopping_list}}
</ul>
