export default function DisplayMockup({ products }) {
  // console.log(product);
  // const { category, name, price, stocked } = product;
  // console.log(category, name, price, stocked);
  // console.log(products);
  const [a, b, c, d, e, f] = products;
  // console.log(a, b, c, d, e, f);
  return (
    <div className="state-container">
      <input
        style={{ padding: "5px" }}
        type="text"
        name=""
        id="mockup-inp"
        placeholder="Search"
      />
      <div>
        <input type="checkbox" name="ShowProduct" id="ShowProduct" />
        <label htmlFor="ShowProduct">Only show products in stock</label>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      <table style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Fruits</th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <td>{a.name}</td>
            <td>{a.price}</td>
          </tr>
          <tr
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <td>{b.name}</td>
            <td>{b.price}</td>
          </tr>
          <tr
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <td>{c.name}</td>
            <td>{c.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
