import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";


class CV extends React.Component {
  render() {
    const { appProps } = this.props
    return (
      <BaseLayout>
        <h1>Hello CV</h1>
      </BaseLayout>
    ); 
  }
}

export default CV;
