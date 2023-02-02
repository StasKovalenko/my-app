import React from "react";

class SearchFormPure extends React.PureComponent {
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

export default SearchFormPure;