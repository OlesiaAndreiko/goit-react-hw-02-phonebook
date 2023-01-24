export const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <li key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};
