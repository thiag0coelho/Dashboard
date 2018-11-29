import React from 'react';

const DashboardCardIndicator = ({ dashboardCard }) => {
    return (
        <div className="indicadores">
            <ul>
                {
                    dashboardCard.destaque &&
                    <li className="destaque">
                        <span>{dashboardCard.destaque.titulo}</span>
                        <label>{dashboardCard.destaque.texto}</label>
                    </li>
                }

                {
                    dashboardCard.secundario &&
                    <li className="secundario">
                        {
                            dashboardCard.secundario.titulo &&
                            <label>{dashboardCard.secundario.titulo}</label>
                        }
                        {
                            dashboardCard.secundario.texto &&
                            <span>{dashboardCard.secundario.texto}</span>
                        }
                        {
                            dashboardCard.secundario.lista &&
                            (
                                <ul>
                                    {dashboardCard.secundario.lista.map((item) => (
                                        <li className={item.classe}>
                                            <span>{item.titulo}</span>
                                            <label>{item.texto}</label>
                                        </li>
                                    ))
                                    }
                                </ul>
                            )
                        }
                    </li>
                }

                <li>
                    {
                        dashboardCard.primeiraSecao &&
                        (
                            <ul>
                                {
                                    dashboardCard.primeiraSecao.map((item) => (
                                        <li className={item.classe}>
                                            <span>{item.titulo}</span>
                                            <label>{item.texto}</label>
                                        </li>
                                    ))
                                }
                                {
                                    dashboardCard.primeiraSecaoVertical &&
                                    <li className="vertical">
                                        <ul>
                                            {
                                                dashboardCard.primeiraSecaoVertical.map((item) => (
                                                    <li className={item.classe}>
                                                        <span>{item.titulo}</span>
                                                        <label>{item.texto}</label>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                }
                            </ul>
                        )
                    }
                </li>
            </ul>
            <div className="grafico"></div>
        </div>
    )
};

export default DashboardCardIndicator;
