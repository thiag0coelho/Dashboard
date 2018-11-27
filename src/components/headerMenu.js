import React, { Component } from 'react';

export default ({ children }) => (
    <div>
        <div id="cabecalho">
            <div className="container">
                <div id="marca"><img src="../static/imagens/marca.png" alt="Logomarca" /></div>
                <div id="box_usuario" className="menu">
                    <div id="nome">Nome do usuário</div>
                    <ul>
                        <li>
                            <a href="#">
                                <img src="../static/imagens/menu_usuario_button.png" /></a>
                            <div className="dropdown_pequeno">
                                <div className="coluna largura100">
                                    <div className="submenu">OPÇÕES DO USUÁRIO</div>
                                    <ul>
                                        <li><a href="#">Opção 1</a></li>
                                        <li><a href="#">Opção 2</a></li>
                                        <li><a href="index.php">Sair</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="busca">
                    <input type="text" />
                </div>
                <div className="clearfloat" />
            </div>
        </div>
    </div>
)