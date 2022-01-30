import "./about.css";
import engineer from "../../img/engineer3.png";
import Award from "../../img/teach.jpg"

export const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                    src={engineer}
                    alt="" 
                    className="a-img">
                    </img>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">
                SUPERVISIÓN Y VIVIGILANCIA DE OBRA LINEAL |MINISTERIO DE TRANSPORTES MOVILIDAD Y AGENDA URBANA
                </p>
                <p>
                “Adenda II (enlace orbital): ampliación de capacidad de la autopista AP-9. tramo: Santiago Norte -
                Santiago Sur. Conexión de la Autopista del Atlántico AP-9 con la Autovía A-54 (Santiago - Lugo). Fase A”
                Supervisión de ejecución de obra y control de calidad de la misma. Redacción de informes, control
                de mediciones y certificaciones. Supervisión de los trabajos de ejecución de estructuras (pasos
                superiores e inferiores), drenajes, firmes, explanaciones, excavaciones, desmontes, terraplenes, etc.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-text">
                        <h4 className="a-award-title">Ingeniero de Obras públicas</h4>
                        <p className= "a-award-desc">
                            Ingeniero de Obras Públicas, especialista en supervisión de obras. Desarrollo de estudios, informes,
                            certificaciones, mediciones y planos para la correcta ejecución de las obras.
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}
