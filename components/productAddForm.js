import { useState } from 'react';




const ProductAddForm = (props) => {

  const [form, setForm] = useState({
    stoneName: '',
    stoneName: '',
    origin: '',
    description: '',
    image: '',
    cover: '',
    stoneCode: '',
    price: '',
    longDesc: ''
  })
  
  const handleChange = (event) => {
const target = event.target
const name = target.name

setForm({
  ...form,
  [name]: target.value
})
  }



  const handleGenreChange = (event) => {
    const {options} = event.target
    const optionsLength = options.length
    let value = []

    for (let i = 0; i < optionsLength; i++){
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setForm({
      ...form,
      genre: value.toString()
    })

  }
  
  const submitForm = () => {
  props.handleFormSubmit({...form})
  }

  return (
    <form>

      <div className="form-group">
        <label htmlFor="name">Stone Name</label>
        <input 
        onChange={handleChange}
        value={form.stoneName}
        name="stoneName"
        type="text" 
        className="form-control" 
        id="stoneName" 
        aria-describedby="emailHelp" 
        placeholder="Name of the stone" />
      </div>
     {/* <div className="form-group">
        <label htmlFor="name">Stone Type</label>
        <input 
        onChange={handleChange}
        value={form.stoneType}
        name="stoneType" 
        type="text" 
        className="form-control" 
        id="stoneType" 
        aria-describedby="emailHelp" 
        placeholder="Type of the stone" />
      </div>*/}
      <div className="form-group">
        <label htmlFor="name">Origin</label>
        <input 
        onChange={handleChange}
        value={form.origin}
        name="origin" 
        type="text" 
        className="form-control" 
        id="origin" 
        aria-describedby="emailHelp" 
        placeholder="where is it from?" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input 
        onChange={handleChange}
        value={form.description}
        name="description" 
        type="text" 
        className="form-control" 
        id="description" 
        placeholder="Somewhere in Middle-earth..." />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input 
        onChange={handleChange}
        value={form.image}  
        name="image"    
        type="text" 
        className="form-control" 
        id="image" 
        placeholder="http://....." />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input 
        onChange={handleChange}
        value={form.cover}
        name="cover" 
        type="text" 
        className="form-control" 
        id="cover" 
        placeholder="http://......" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Stone Code</label>
        <input 
        onChange={handleChange}
        value={form.stoneCode}
        name="stoneCode" 
        type="number" 
        className="form-control" 
        id="stoneCode" 
        placeholder="stone code" />
        <small id="emailHelp" className="htmlForm-text text-muted"></small>
      </div>
      <div className="form-group">
        <label htmlFor="description">Price</label>
        <input 
        onChange={handleChange}
        value={form.price}
        name="price" 
        type="number" 
        className="form-control" 
        id="price" 
        placeholder="price" />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>


      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea 
        onChange={handleChange}
        value={form.longDescription}
        name="longDesc" 
        className="form-control" 
        id="longDesc" 
        rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Stone Types</label>
        <select 
        onChange={handleGenreChange}
        multiple 
        className="form-control" 
        id="genre">
          <option>Granite</option>
          <option>Marble</option>
          <option>Quartz</option>
          <option>Other</option>
          <option>Special</option>
        </select>
      </div>
      <button onClick={submitForm} type="button" className="btn btn-primary">Create</button>

    </form>

  )
}


export default ProductAddForm;
