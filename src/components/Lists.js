const Lists = ({ list }) => {
  return (
    list && (
      <span>
        {" "}
        {list.map((genre) => {
          return `${genre.name}, `;
        })}
      </span>
    )
  );
};

export default Lists;
