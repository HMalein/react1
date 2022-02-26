import { Link } from "react-router-dom";


function Main() {
    return (<div className="Main-link">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Snowboarder_in_flight_%28Tannheim%2C_Austria%29.jpg" alt=""></img>
                  <p className="Main-text">Tekst siin</p>
                  <hr className="Rectangle"></hr>
        <div className="Main-link-list">
          <Link to="/">
            <button><img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2019/09/photoshop.jpg?w=690&ssl=1" alt=""></img></button>
          </Link>
          <Link to="/Courses">
            <button><img src="https://api.delfi.ee/media-api-image-cropper/v1/59ed6d30-b8ac-11eb-83d5-4777ed92cc3d.jpg?w=1200&h=800&ch=0.8442&cw=1&cx=0&cy=0" alt=""></img></button> 
          </Link>
          <Link to="/Hobbies">
            <button><img src="https://api.delfi.ee/media-api-image-cropper/v1/59ed6d30-b8ac-11eb-83d5-4777ed92cc3d.jpg?w=1200&h=800&ch=0.8442&cw=1&cx=0&cy=0" alt=""></img></button> 
          </Link>
        </div>
        </div>
    );
};

export default Main;