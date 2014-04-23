<input class='input' placeholder='Enter some values here' value='{{raw}}' />
<p>Raw: "{{raw}}"</p>
<p>Binary: "{{binary}}"</p>
<p>
  {{#isLink}}
  <a href='{{raw}}' target='_blank'>Also works as a link</a>
  {{/isLink}}
  {{^isLink}}
  <span>Not a link!</span>
  {{/isLink}}
</p>
