import * as React from 'react';

let name = 'Alexa';
//Use of double exclamation mark
//In the code above we are casting the string "Alexa" to a boolean value.
let boolName = !!name;

console.log(typeof name);
console.log(typeof boolName);

const App = () => {
  return (
    <div>
      <h2> What's the double exclamation mark for in JavaScript? :)</h2>

      <code>let name = 'Alexa'</code>
      <p style={{ color: 'green', lineHeight: -3 }}>
        //Use of double exclamation mark
      </p>
      <p style={{ color: 'green', lineHeight: 0 }}>
        //In the code above we are casting the string "Alexa" to a boolean
        value.
      </p>
      <code>let boolName = !!name;</code>
    </div>
  );
};
export default App;
