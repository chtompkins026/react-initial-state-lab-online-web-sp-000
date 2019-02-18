// your ImageSlider code here!

export default class ImageSlider extends Component {
  constructor(){
    super(); 
    
    this.state = {
      currentSlideIndex: 0
    };
  }
  
  render(){
    return( 
      <p> I am on the slide {this.state.currentSlideIndex} </p>
      )
  }
  
}