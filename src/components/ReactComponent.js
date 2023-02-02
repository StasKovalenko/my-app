import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="form">
          <input type={'search'} placeholder={'Input text ...'} className="search_input"/>
          <button type="button">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;