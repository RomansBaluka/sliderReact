import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './SliderData';
//import {Item} from './imageItem.js';

function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;
