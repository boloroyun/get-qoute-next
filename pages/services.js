import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";

const Services =() => {

        const { data, loading } = useGetUser();

    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>Hello Services</h1>
        </BasePage>
      </BaseLayout>
    );
  }


export default Services;
