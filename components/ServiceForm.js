import { useForm } from "react-hook-form";




const ServiceForm = ({ onSubmit, initialData = {} }) => {
  const { register, handleSubmit } = useForm({ defaultValues: initialData });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="serviceName">Service Name</label>
        <input
          ref={register}
          name="serviceName"
          type="text"
          className="form-control"
          id="serviceName" />
      </div>

      <div className="form-group">
        <label htmlFor="serviceType">Service Type</label>
        <input
          ref={register}
          name="serviceType"
          type="text"
          className="form-control"
          id="serviceType" />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          ref={register}
          name="price"
          type="number"
          className="form-control"
          id="price" />
      </div>

      <div className="form-group">
        <label htmlFor="serviceCode">Service Code</label>
        <input
          ref={register}
          name="serviceCode"
          type="text"
          className="form-control"
          id="serviceCode" />
      </div>

      <div className="form-group">
        <label htmlFor="content">Description</label>
        <textarea
          ref={register}
          name="content"
          rows="5"
          type="text"
          className="form-control"
          id="content">
        </textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary">Create
  </button>

    </form>
  )
}

export default ServiceForm;
