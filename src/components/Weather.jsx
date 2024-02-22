import React from "react";

function Weather(props) {
  console.log(props);

  let {city} = props

  if (!city || !city.name) {
    return (
    <h5>Lütfen Şehir Giriniz</h5>
    )
  }

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{city.name}</h5>
              <p class="card-text">
                {city.main.temp}
              </p>
              <h4>{city.weather[0].description}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
