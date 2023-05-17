import { useState } from "react";
function SearchHeader({search}) {

    const [value, setValue] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
        search(value);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return ( <div className="searchDiv">
        <form onSubmit={handleFormSubmit}>
            <label>Search anything from Unsplash</label>
            <input value={value} onChange={handleChange} placeholder="Please write content!"/>
        </form>
    </div> );
}

export default SearchHeader;