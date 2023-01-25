export const Filter = ({filter, onChange}) => {
  return (
    <>
    <label htmlFor="filter">
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label></>
  );
};
