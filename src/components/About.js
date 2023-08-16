import React from 'react'

export default function About(props) {
  return (
    <div
      className="container my-3"
      style={{
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
      }}
    >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Creator
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
              }}
            >
              <strong>Hello, this is Krishna :).</strong> It is my first React
              project that i have been working on since 3 days with the guidance
              of a great creator/mentor codewithharry.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              About the Application
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                color: props.mode === 'dark' ? 'white' : 'black',
              }}
            >
              <strong>TextUtils</strong> is an Utility created for the
              manipulation of text. This application is created with the help of
              bootstrap and React.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
