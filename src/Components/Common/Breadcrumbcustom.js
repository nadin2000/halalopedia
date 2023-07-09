import { Breadcrumb } from "react-bootstrap";

function Breadcrumbcustom({ pages }) {

  return (
    <div class="my-4 py-4 px-4 d-flex align-items-center rounded" style={{backgroundColor:"#EEF2F7"}}>
      <Breadcrumb >
        {pages.map(function (pages, i) {
          return <Breadcrumb.Item href={'/'+pages.replace(" ", "")}>{pages}</Breadcrumb.Item>
        })}
      </Breadcrumb>
    </div>
  );
}

export default Breadcrumbcustom;