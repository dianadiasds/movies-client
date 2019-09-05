import React from 'react'

export default function CreateComment(props) {
    return (
        <div className='formClass'>
            <form onSubmit={props.onSubmit}>
                <p>
                    <label>Comment </label>
                    <input
                        type='text'
                        value={props.comment}
                        name='comment'
                        placeholder='Your comment'
                        onChange={props.onChange}/>
                </p>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}
