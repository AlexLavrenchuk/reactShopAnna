import React from "react";
import { connect } from "react-redux";

import styleHome from "./_home.module.scss";

const Home = props => {
  return (
    <div className={styleHome.container}>
      <h2 className={styleHome.title}>Home</h2>
      <h1>Image Fill</h1>
      <div className={styleHome.wrapper_img}>
        <svg
          id="image-fill"
          // xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="300"
          // xmlnsHlink="http://www.w3.org/1999/xlink"
          >
          <defs>
            <pattern
              id="image-bg"
              x="0"
              y="0"
              height="300"
              width="310"
              patternUnits="userSpaceOnUse"
              >
              <image
                width="300"
                height="300"
                xlinkHref="http://placekitten.com/306/306"
                />
            </pattern>
          </defs>

          <polygon
            className={styleHome.hex}
            points="300,150 225,280 75,280 0,150 75,20 225,20"
            fill="url('#image-bg')"
            />
        </svg>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
