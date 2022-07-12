import Slider from './Slider'
import CarouselBoot from './CarouselBoot'
export default function Galeria(){

    const mockImagenes = [
        'https://www.elmueble.com/medio/2021/05/11/dsc3556_157dd3e4_2000x1335.jpg',
        'https://d2qc4bb64nav1a.cloudfront.net/cdn/13/images/curso-a-distancia-restauracion-muebles_amp_primaria_1_1560503054.jpg',
        'https://i1.wp.com/legnomuebles.com/wp-content/uploads/2022/04/Residencial-1opt-1-340x420.jpg',
        'https://www.vanguardia.com/binrepository/673x559/-43c83/716d477/none/12204/FVAY/img5_5340885_20210209160208.jpg',
    ]
    return(
        <div>
            <Slider imagenes={mockImagenes}></Slider>
        </div>
    )
}