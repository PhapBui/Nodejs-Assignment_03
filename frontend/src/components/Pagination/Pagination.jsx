import Pagination from "react-bootstrap/Pagination";

function PaginationRoot() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationRoot;
