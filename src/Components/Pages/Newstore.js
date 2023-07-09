import React from 'react';
import Breadcrumbcustom from '../Common/Breadcrumbcustom';

function Newstore() {
    return (
        <div class="container">
            <Breadcrumbcustom pages={['Home', 'New store']} />
            <ul class="nav mb-5">
                <li class="nav-item me-4">
                    <a class="nav-link active p-2 me-5  fs-5" style={{ color: "#D40A3A", borderBottom: "1px solid #D40A3A" }} aria-current="page" href="#">1. Store Details</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link disabled  p-2 me-5 fs-5" href="#">2. Location/s</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link disabled  p-2 me-5 fs-5" href="#">3. Menu/Images</a>
                </li>
            </ul>

            <form class="p-2  my-2">
                <div class="row g-3 align-items-center mb-3">
                    <div class="col-2">
                        <label for="storetype" class="col-form-label fs-5">Store Type</label>
                    </div>
                    <div class="col-10">
                        <input id="storetype" class="form-control" aria-describedby="" />
                    </div>
                </div>

                <div class="row g-3 align-items-center mb-3">
                    <div class="col-2">
                        <label for="storename" class="col-form-label fs-5">Store Name</label>
                    </div>
                    <div class="col-10">
                        <input id="storename" class="form-control" aria-describedby="" />
                    </div>
                </div>

                <div class="row g-3 align-items-center mb-3">
                    <div class="col-2">
                        <label for="categories" class="col-form-label fs-5">Categories</label>
                    </div>
                    <div class="col-10">
                        <input id="categories" class="form-control" aria-describedby="" />
                    </div>
                </div>

                <div class="row g-3 align-items-center mb-3">
                    <div class="col-2">
                        <label for="tags" class="col-form-label fs-5">Tags</label>
                    </div>
                    <div class="col-10">
                        <input id="tags" class="form-control" aria-describedby="" />
                    </div>
                </div>

                <div class="row g-3 align-items-center mb-3">
                    <div class="col-2">
                        <label for="tags" class="col-form-label fs-5">Website</label>
                    </div>
                    <div class="col-10">
                        <input id="tags" class="form-control" aria-describedby="" />
                    </div>
                </div>

                <div class="row g-3 align-items-center mb-3">
                    <div class="col-2">
                        <label for="tags" class="col-form-label fs-5">Facebook</label>
                    </div>
                    <div class="col-10">
                        <input id="tags" class="form-control" aria-describedby="" />
                    </div>
                </div>

                <div class="row g-3 align-items-center mb-3">
                    <div class="col-2">
                        <label for="tags" class="col-form-label fs-5">Instagram</label>
                    </div>
                    <div class="col-10">
                        <input id="tags" class="form-control" aria-describedby="" />
                    </div>
                </div>
                <div class="mt-5 d-flex w-100 justify-content-end">
                <button type="submit" class="btn btn-primary px-5 py-2 disabled">Next</button>
                </div>
            </form>
        </div>
    )
}
export default Newstore;