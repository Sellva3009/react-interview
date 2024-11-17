import React, {useState} from 'react';

const Form = () => {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSumbit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`you said ${message} to ${to}`);
        }, 5000);
    }

  return (
    <form onSubmit={handleSumbit}>
        <label htmlFor="to">To: </label>
        <select name="name" id="to" value={to} onChange={(e) => (setTo(e.target.value))}>
            <option value="Bob">Bob</option>
            <option value="Alice">Alice</option>
        </select>
        <br />
        <textarea name="hello" id="hello" value={message} onChange={e => {setMessage(e.target.value)}}></textarea>
        <button>Submit</button>        
    </form>
  )
}

export default Form