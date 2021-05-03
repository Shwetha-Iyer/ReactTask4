import {Link} from "react-router-dom";
export default function Products(props){
    return <>
    <h1>Car Product for id : {props.match.params.id}</h1>

    <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Model</th>
                  <th>Availability</th>
                  <th>Action</th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <td>Nixon</td>
                  <td>Black</td>
                  <td>XS</td>
                  <td>Yes</td>
                  <td><Link to="/productsedit/1">Edit item</Link></td>
                </tr>
                <tr>
                  <td>Suzuki</td>
                  <td>Blue</td>
                  <td>XL</td>
                  <td>No</td>
                  <td><Link to="/productsedit/2">Edit item</Link></td>
                </tr>
                <tr>
                  <td>Hyundai</td>
                  <td>Red</td>
                  <td>XM</td>
                  <td>Yes</td>
                  <td><Link to="/productsedit/3">Edit item</Link></td>
                </tr>
                <tr>
                  <td>Kia</td>
                  <td>Silver</td>
                  <td>XL</td>
                  <td>Yes</td>
                  <td><Link to="/productsedit/4">Edit item</Link></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>
    </>
}