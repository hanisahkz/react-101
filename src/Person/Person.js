import React from "react";

// ES6 syntax. Read: a constant variable called 'person' equals to some function whereby the parts are: i) argument, ii) arrow function, iii) function body
const person = props => {
  return (
    <div>
      <p>
        I'm {props.name} from {props.origin}.
      </p>
      <div>{props.children}</div>
    </div>
  );
};

export default person;
