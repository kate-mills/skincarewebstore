import React from 'react'
import MenuItem from "../menu-item/menu-item.component"
import './directory.styles.scss'


class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [{
          title: 'cleansers',
          imageUrl: 'https://i.ibb.co/wQ3jwGV/Cleanser.jpg',
          id: 1,
        },{
          title: 'toners',
          imageUrl: 'https://i.ibb.co/cTkWLxc/Tone.jpg',
          id: 2,
        },{
          title: 'travel',
          imageUrl: 'https://i.ibb.co/9g7xSR6/Travel.jpg',
          id: 3,
        },{
          title: 'moisturizers',
          size: 'large',
          imageUrl: 'https://i.ibb.co/MCvbsT0/Moisture.jpg',
          id: 4,
        },{
          title: 'serums',
          size: 'large',
          imageUrl: 'https://i.ibb.co/zHhT7sp/Serum.jpg',
          id: 5,
        }
      ]
    }
  }

  render(){
    return(
      <div className='directory-menu'>
        {
          this.state.sections.map(({title, imageUrl, size, id})=>{
            return(
              <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            )
          })
        }
      </div>
    )
  }
}
export default Directory
