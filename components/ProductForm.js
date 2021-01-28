import { useState, useEffect } from "react";
import { useMutate } from "restful-react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";




const ProductForm = ({ onSubmit, initialData = {} }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { register, handleSubmit, setValue } = useForm({ defaultValues: initialData });

  useEffect(() => {
    register({ name: 'startDate' });
    register({ name: 'endDate' });
  }, [register])

  useEffect(() => {
    const { startDate, endDate } = initialData;
    if (startDate) { setStartDate(new Date(startDate)) }
    if (endDate) { setEndDate(new Date(endDate)) }

  }, [initialData])

  const handleDateChange = (dateType, setDate) => date => {
    setValue(dateType, date);
    setDate(date);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="stoneName">Stone Name</label>
        <input
          ref={register}
          name="stoneName"
          type="text"
          className="form-control"
          id="stoneName" />
      </div>

      <div className="form-group">
        <label htmlFor="stoneType">Stone Type</label>
        <input
          ref={register}
          name="stoneType"
          type="text"
          className="form-control"
          id="stoneType" />
      </div>

      <div className="form-group">
        <label htmlFor="origin">Origin</label>
        <input
          ref={register}
          name="origin"
          type="text"
          className="form-control"
          id="origin" />
      </div>

      <div className="form-group">
        <label htmlFor="stoneBrand">Stone Brand</label>
        <input
          ref={register}
          name="stoneBrand"
          type="text"
          className="form-control"
          id="stoneBrand" />
      </div>

      <div className="form-group">
        <label htmlFor="stoneCode">Stone Code</label>
        <input
          ref={register}
          name="stoneCode"
          type="text"
          className="form-control"
          id="stoneCode" />
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
        <label htmlFor="description">Description</label>
        <textarea
          ref={register}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description">
        </textarea>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange('startDate', setStartDate)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <div>
          <DatePicker
            disabled={!endDate}
            showYearDropdown
            selected={endDate}
            onChange={handleDateChange('endDate', setEndDate)}
          />
        </div>
      </div>
      <div className="form-group">
        {endDate &&
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDateChange('endDate', setEndDate)(null)}
          >
            No End Date
</button>
        }
        {!endDate &&
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleDateChange('endDate', setEndDate)(new Date(new Date().setHours(0, 0, 0, 0)))}
          >
            Set End Date
</button>
        }
      </div>
      <button
        type="submit"
        className="btn btn-primary">Create
  </button>

    </form>
  )
}

export default ProductForm;
