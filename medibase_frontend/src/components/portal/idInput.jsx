import React from 'react';

const IdInput = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const txtInp = event.target.elements.inputId.value;
    console.log(txtInp);
    // You can perform further actions with the txtInp value here
  };

  return (
    <div className='container md-5'>
      <form onSubmit={handleSubmit}>
        <div className="container my-5 md-5 mb-3" style={{ width: 500 }}>
          <label htmlFor="inputId" className="form-label">Unique Identification Number</label>
          <input
            type="text"
            className="form-control"
            id="inputId"
            name="inputId" // added name attribute for better accessibility
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">The one which is holding all your MEDICAL RECORDS</div>
          <button type="submit" className="btn btn-primary" style={{ marginLeft: "auto" }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default IdInput;
