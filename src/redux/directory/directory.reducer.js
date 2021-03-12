const INITIAL_STATE = {
  sections: [
    {
      title: 'cleansers',
      imageUrl: 'https://i.ibb.co/wQ3jwGV/Cleanser.jpg',
      id: 1,
    },{
      title: 'Eyes & Lips',
      imageUrl: 'https://i.ibb.co/V952dKP/Lips.jpg',
      id: 2,
    },{
      title: 'Specialty',
      imageUrl: 'https://i.ibb.co/zhLQ8wf/Travel.jpg',
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
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default directoryReducer;
