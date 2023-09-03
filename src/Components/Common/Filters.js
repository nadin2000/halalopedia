import { Breadcrumb } from "react-bootstrap";

function Filters(props) {

  if (props.division === "restaurants"){
    return (
      <div className="container my-4">
        <div className="row w-100">
          <div className="col w-100">
            <div class="btn-group w-100" role="group">
              <button type="button" class="btn btn-custom-border py-3 fs-6 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                Filter By City
              </button>
              <ul class="dropdown-menu w-100" aria-labelledby="btnGroupDrop1">
                <li> <button class="dropdown-item" type="button">Milton</button></li>
              </ul>
            </div>
          </div>
          <div className="col w-100">
            <div class="btn-group w-100" role="group">
              <button type="button" class="btn btn-custom-border py-3 fs-6  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Filter By Category
              </button>
              <ul class="dropdown-menu w-100" aria-labelledby="btnGroupDrop2">
                <li><button class="dropdown-item" type="button">Indian</button></li>
                <li><button class="dropdown-item" type="button">Chinese</button></li>
                <li><button class="dropdown-item" type="button">Desserts</button></li>
                <li><button class="dropdown-item" type="button">Mexican</button></li>
                <li><button class="dropdown-item" type="button">Indian</button></li>
                <li><button class="dropdown-item" type="button">Middle Eastern</button></li>
                <li><button class="dropdown-item" type="button">Fast Food</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    );
  }

  if (props.division === "groceries"){
    return (
      <div className="container my-4">
        <div className="row w-100">
          <div className="col w-100">
            <div class="btn-group w-100" role="group">
              <button type="button" class="btn btn-custom-border py-3 fs-6 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                Filter By City
              </button>
              <ul class="dropdown-menu w-100" aria-labelledby="btnGroupDrop3">
                <li> <button class="dropdown-item" type="button">Milton</button></li>
              </ul>
            </div>
          </div>
          <div className="col w-100">
            <div class="btn-group w-100" role="group">
              <button type="button" class="btn btn-custom-border py-3 fs-6  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Filter By Category
              </button>
              <ul class="dropdown-menu w-100" aria-labelledby="btnGroupDrop4">
                <li><button class="dropdown-item" type="button">Meat</button></li>
                <li><button class="dropdown-item" type="button">Bakery</button></li>
                <li><button class="dropdown-item" type="button">Pantry</button></li>
                <li><button class="dropdown-item" type="button">Fruits&Vegetables</button></li>
                <li><button class="dropdown-item" type="button">Seafood</button></li>
                <li><button class="dropdown-item" type="button">Snacks</button></li>
                <li><button class="dropdown-item" type="button">Fast Food</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    );
  }

}

export default Filters;