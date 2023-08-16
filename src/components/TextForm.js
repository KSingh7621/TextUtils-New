import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpperClick = () => {
    console.log('Upper case was Clicked')
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to Uppercase', 'success')
    // Array.push(newText)
    // console.log(Array)
  }
  const handleLowerClick = () => {
    console.log('Lower case was Clicked')
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to Lowercase', 'success')
    // Array.push(newText)
    // console.log(Array)
  }
  const clearText = () => {
    setText('')
    props.showAlert('Text cleared', 'success')
  }
  const capitalize = () => {
    console.log('Capitalize was clicked')
    let string = []
    const myArray = text.split(/\s+/)
    for (let i = 0; i < myArray.length; i++) {
      let word = myArray[i]
      word = word.charAt(0).toUpperCase() + word.substring(1)
      string[i] = word
    }
    let result = string.join(' ')
    setText(result)
    props.showAlert('Text Capitalized', 'success')
    // Array.push(result)
    // console.log(Array)
  }
  const copyText = () => {
    navigator.clipboard.writeText(text)
    props.showAlert('Text copied to clipboard', 'success')
  }
  const extraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Extra spaces removed', 'success')
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState('')

  // let Array = []

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            type="text"
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your text"
            rows={8}
            style={{
              backgroundColor:
                props.mode === 'dark' ? 'rgb(59 80 98)' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
          />
        </div>
        <button
          className="btn btn-primary mx-2 my-1"
          type="submit"
          onClick={handleUpperClick}
          disabled={text.length === 0}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          type="submit"
          onClick={handleLowerClick}
          disabled={text.length === 0}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          type="submit"
          onClick={capitalize}
          disabled={text.length === 0}
        >
          Capitalize Each Word
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          type="submit"
          onClick={clearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          type="submit"
          onClick={copyText}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          type="submit"
          onClick={extraSpace}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>Text Summary</h1>
        <table className="table">
          <thead>
            <tr>
              <th
                scope="col"
                style={{
                  backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                  color: props.mode === 'dark' ? 'white' : 'black',
                }}
              >
                Words
              </th>
              <th
                scope="col"
                style={{
                  backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                  color: props.mode === 'dark' ? 'white' : 'black',
                }}
              >
                Characters
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                  color: props.mode === 'dark' ? 'white' : 'black',
                }}
              >
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0
                  }).length
                }
              </td>
              <td
                style={{
                  backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                  color: props.mode === 'dark' ? 'white' : 'black',
                }}
              >
                {text.length}
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Preview</h2>
        <p className="container">{text}</p>
      </div>
    </>
  )
}
