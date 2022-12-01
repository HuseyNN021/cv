import React from "react";

const Price = () => {
  return (
    <>
      <div className="Table">
        <h3>Product Price</h3>
        <table border="1px">
          <thead>
            <tr>
              <td>ProductName</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cola</td>
              <td>1.50 azn</td>
            </tr>
            <tr>
              <td>Bread</td>
              <td>0.70 azn</td>
            </tr>
            <tr>
              <td>Meat</td>
              <td>15 azn</td>
            </tr>
            <tr>
              <td>Solt</td>
              <td>1.66 aznn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Price;
