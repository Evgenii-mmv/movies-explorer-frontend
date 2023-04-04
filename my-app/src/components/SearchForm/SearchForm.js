import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {

  return (
    <section className='search'>
      <form className="search__form" onSubmit={props.onSubmit}>
        <input
          className='search__input'
          name="query"
          placeholder="Фильм"
          type="search"
          defaultValue={props.filter.query}
        />
        <button className='search__button button' type="submit">Найти</button>
        <FilterCheckbox filter={props.filter} />
      </form>
      <p className="search__error">{props.error}</p>
    </section>
    )
}

export default SearchForm;