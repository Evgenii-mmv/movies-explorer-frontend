import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {

  return (
    <section className='search'>
      <form className="search__form" action="" method="get">
        <input className='search__input' name="s" placeholder="Фильм" type="search"/>
        <button className='search__button' type="submit">Найти</button>
      </form>
      <FilterCheckbox/>
    </section>
    )
}

export default SearchForm;