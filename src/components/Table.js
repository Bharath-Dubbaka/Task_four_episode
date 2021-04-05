import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div>
      <table className="table_container">
        <tr>
          <th>
            <i class="fa fa-sort-up sort_btn"></i>
            <i class="fa fa-sort-down"></i> Episode Type
          </th>
          <th>
            <i class="fa fa-sort-up sort_btn"></i>
            <i class="fa fa-sort-down"></i> Body Part
          </th>
          <th>
            <i class="fa fa-sort-up sort_btn"></i>
            <i class="fa fa-sort-down"></i> Start Date
          </th>
          <th>
            <i class="fa fa-sort-up sort_btn"></i>
            <i class="fa fa-sort-down"></i> Episode Status
          </th>
          <th>No of Encounters</th>
          <th>Select</th>
        </tr>
        <tr>
          <td>Wound</td>
          <td>Hip</td>
          <td>24-05-2056</td>
          <td>Finished</td>
          <td>3</td>
          <td>
            <i class="fa fa-circle modus_color"></i>
          </td>
        </tr>
        <tr>
          <td>Industrial</td>
          <td>Hip</td>
          <td>34-19-2052</td>
          <td>Active</td>
          <td>1</td>
          <td>
            <i class="fa fa-circle modus_color"></i>
          </td>
        </tr>
        <tr>
          <td>Orthopedic</td>
          <td>Hip</td>
          <td>14-03-2092</td>
          <td>Active</td>
          <td>2</td>
          <td>
            <i class="fa fa-circle modus_color"></i>
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Table;
