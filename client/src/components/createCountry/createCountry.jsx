import { useState } from "react";

const CreateCountry = () => {
  // Estado local para mantener los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    capital: "",
    img: "",
    area: "",
    languages: "",
    subregion: "",
    currencies: "",
  });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar formData a través de una solicitud HTTP (por ejemplo, POST a un endpoint de API)
    console.log("Datos del formulario:", formData);
    // Puedes hacer la solicitud HTTP aquí usando fetch, axios u otra biblioteca
    // fetch('url', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create country</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name country:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="region" className="form-label">
            Region:
          </label>
          <input
            type="text"
            className="form-control"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>
            Capital:
            <input
              type="text"
              className="form-control"
              name="capital"
              value={formData.capital}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            URL image:
            <input
              type="text"
              className="form-control"
              name="img"
              value={formData.img}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            Area:
            <input
              type="text"
              className="form-control"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
          Languages:
            <input
              type="text"
              className="form-control"
              name="languages"
              value={formData.languages}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
          Subregion:
            <input
              type="text"
              className="form-control"
              name="subregion"
              value={formData.subregion}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
          Currencies:
            <input
              type="text"
              className="form-control"
              name="currencies"
              value={formData.currencies}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateCountry;
