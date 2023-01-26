import PropTypes from 'prop-types';

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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};