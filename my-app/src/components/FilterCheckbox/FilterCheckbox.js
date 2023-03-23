function FilterCheckbox() {

  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__switch button">
        <input type="checkbox" />
        <span className="filter-checkbox__slider"></span>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </section>

    )
}

export default FilterCheckbox;