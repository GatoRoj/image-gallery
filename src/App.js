import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Card';
import {imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9} from './assets'
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
	    <Header title="Galeria de Imagenes con React" />
      <div className='imagesContainer'>
        <Card url={imagen2} scale={2} title="Perfume narciso" description="Un perfume sobre unas revistas"/>
        <Card url={imagen1} title="Tiempo aesthetic" description="Haciendo corazones una tarde soleada"/>
        <Card url={imagen3} scale={2} title="Copas de vidrio" description="El reflejo de una sombre sobre copas"/>
        <Card url={imagen4} title="Florero" description="Folero con una ramita seca"/>
        <Card url={imagen5} title="Adolescente" description="Chica en una tarde de abril"/>
        <Card url={imagen8} scale={2} title="Pintura" description="Arte abstracto, parece desierto"/>
        <Card url={imagen6} title="Pintura" description="Pintura aestethic"/>
        <Card url={imagen9} scale={2} title="Cafe con dibujo" description="Cafe, necesito un cafe"/>
        <Card url={imagen7} title="Arbol" description="El cielo en verdad es morado"/>
      </div>
      <Footer text="© 2023 Copyright: ImageGallery.aest"/>
    </div>
  );
}

export default App;
