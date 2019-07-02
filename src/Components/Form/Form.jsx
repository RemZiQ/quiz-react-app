import React, { Fragment, useState } from 'react';

const Form = ({ onSubmitForm, asnwerVariantsProp }) => {
  const [answer, setAnswer] = useState(null);

  const handleSetAnswerToState = (e) => {
    setAnswer(e.target.value);
  };

  const handlerOnSubmitForm = (e) => {
    e.preventDefault();
    onSubmitForm(answer);
    setAnswer(null);
    e.target.reset();
  };
  const answerVariants = asnwerVariantsProp.map((elem, index) => {
    // have always static answers, so can use key=index
    return (
      <label htmlFor={index} key={index}>
        <input
          onClick={handleSetAnswerToState}
          type="radio"
          id={index}
          value={elem}
          name="answer"
        />
        {elem}
      </label>
    );
  });

  return (
    <Fragment>
      <form className="question-form" onSubmit={handlerOnSubmitForm}>
        {answerVariants}
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};


export default Form;
