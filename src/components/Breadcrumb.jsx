import Container from "react-bootstrap/Container";

function Breadcrumb({parentPage , childPage}) {
  return (
    <section className="py-5 bcrumb">
      <Container>
        <h2 className="m-0 mb-2 text-white fw-bold">{parentPage}</h2>
        <h6 className="m-0 text-white opacity-75">
          {childPage}
        </h6>
      </Container>
    </section>
  );
}

export default Breadcrumb;
