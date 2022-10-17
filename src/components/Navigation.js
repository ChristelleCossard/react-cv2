import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className='sidebar'>
        <div className='id'>
            <div className='idContent'>
                <img src="./media/christellecossard.jpg" alt="profil-pic"/>
                <h3>Christelle Cossard</h3>
                <p>essai!</p>

                <div className="navigation">
                    <ul>
                        <li>
                        <NavLink exact to="/" activClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/competences" activClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/portfolio" activClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink exact to="/contact" activClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ChristelleCossard" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-codepen"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="signature">
                        <p>Christelle Cossard - 2022</p>
                    </div>
                
                </div>

            </div>
        </div>

    </div>
    );
};

export default Navigation;