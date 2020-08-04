import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/36767316?s=460&u=c02e97ee3225ebfc741c1ef7dec7655f2e5c425f&v=4" alt="Franciele Zanella"/>
            <div>
                <strong>Franciele Zanella</strong>
                <span>Informática</span>

            </div>
        </header>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="contato"/>
                Entrar em contato
            </button>
        </footer>
    </article>

    );
}

export default TeacherItem;