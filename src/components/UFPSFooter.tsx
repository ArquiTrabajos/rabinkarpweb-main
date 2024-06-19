import { Dropdown, Footer } from "flowbite-react";
import Desarrollador from "./Desarrollador";
import logoUFPS from '../assets/img/logoufps.png'

const UFPSFooter = () => {


    return (
        <>
            <Footer container className="bg-lightblue rounded-none p-3 h-fit fixed bottom-0 left-0">
                <Dropdown label="Equipo de Desarrollo" color={"blue"} size={"lg"}>
                    <Dropdown.Item>
                        <Desarrollador correo="jamarlesf@gmail.com" nombre="Jorge Marles" />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Desarrollador correo="jonnyedwardjs@ufps.edu.co" nombre="Jonny Jaimes" />
                    </Dropdown.Item>
                </Dropdown>

                <Footer.LinkGroup>

                    <Footer.Link href="https://ww2.ufps.edu.co/">
                        <div className="flex justify-between items-center text-white text-xl">
                            <img src={logoUFPS} width={"80px"} className="m-2" />
                            Universidad Francisco de Paula Santander
                        </div>
                    </Footer.Link>

                </Footer.LinkGroup>
            </Footer>
        </>
    )
}

export default UFPSFooter;