import Modal from './modal';

const SideMenu = (props) => {

const { categories } = props
let modal = null
  return (
    <div>
      <Modal 
      ref={ele => modal = ele}
      hasSubmit={false}>
        </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
      {categories.map(c => 
        <a 
        key={c.id}
        href="#" 
        className="list-group-item">{c.name}</a>
      )
      }
      </div>
    </div>

  )
}

export default SideMenu;
