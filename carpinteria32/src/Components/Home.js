import React from "react"
import { Card } from "react-bootstrap"
import images1 from './img/imagen3.webp'


export default function Home() {
    return (
        <div>
            <h2>Carpintería 32</h2>
            <Card>
              
                <Card.Body>
                    <Card.Text>
                               
           
            <p>
                Conformada por dos profesionales con más de 10 años de experiencia en el rubro, surgió a finales del 2021, Carpintería 32. </p>
            <p> Una marca dedicada  al diseño y fabricación de muebles para los hogares de hoy. </p>
               
            <p>  Siempre acorde a las últimas tendencias en moda y diseño, Carpintería 32 es una propuesta diferente y digna de conocer. </p>
        
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={images1} height={700}/>
            </Card>
        </div>
    )
}