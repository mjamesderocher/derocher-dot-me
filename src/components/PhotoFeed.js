import React from 'react'

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }
  componentDidMount(){
      fetch('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3750b8e3422c52bacb13e942def52e1e&photoset_id=72157694648316701&user_id=52265438%40N05&extras=url_m%2Cdescription&per_page=8&media=&format=json&nojsoncallback=1')
      .then((response) =>{
        return response.json();
      })
      .then((myJson) => {
        this.setState({photos: myJson.photoset.photo});
      });
  }
  render() {
    function PhotosList(props) {
      const photos = props.photos;
      const listItems = photos.map((photo, index) =>
        <li key={index}>
          <img src={photo.url_m} />
          {photo.description._content}
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }
    return (
      <div>
        <PhotosList photos={this.state.photos}/>
      </div>
    )
  }
}

export default PhotoFeed