<ul>
  {{#shopping_list}}
  <li>
    <span>{{amount}}x {{name}}</span>
    <button class='remove' data-index='{{autoincrement}}'>x</button>
  </li>
  {{/shopping_list}}
</ul>
