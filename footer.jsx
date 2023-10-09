import { icon, logo } from './assets';
import { FaInstagram,FaFacebook,FaXTwitter,FaWhatsApp} from "react-icons/fa6";

const Footer = () => {
    const links = [
        [
            {label : 'Institucion' , key: 'header-1'},
            {label : '¿ Quiénes somos ?' , key: 'item-1-1'},
            {label : 'Sitio web' , key: 'item-1-2'},
            {label : 'Contacto' , key: 'item-1-3'},

        ],
        [
            {label : 'Soporte' , key: 'header-2'},
            {label : 'Centro de ayuda' , key: 'item-2-1'},
            {label : ' Política de Privacidad' , key: 'item-2-2'},
            {label : 'Estado del servicio' , key: 'item-2-3'},  
        ]
    ]
    return (
        <div className='footer'>
            <div className="footer-company-info">
             <div className="footer-img">
              <img src={icon} alt="" />
              <span>
                E.P.E.T. N° 20
              </span>
             </div>
             <div className='info'>
               <span>
                 Derechos de autor © 2023 E.P.E.T. N° 20.
               </span>
               <span>
                 Todos los derechos
                </span>
             </div>
             <div className="footer-icons">
               <FaInstagram/>
               <FaFacebook/>
               <FaWhatsApp/>

             </div>
            </div>
        </div>
    )
}