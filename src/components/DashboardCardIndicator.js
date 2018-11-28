import React from 'react';

const DashboardCardIndicator = ( { dashboardCard } ) => {
    return (
        <div className="indicadores">
            <ul>
                <li className="destaque">
                    <span>{dashboardCard.destaque.titulo}</span>
                    <label>{dashboardCard.destaque.texto}</label>
                </li>

                <li className="secundario">
                    <label>{dashboardCard.secundario.titulo}</label>
                    <span>{dashboardCard.secundario.texto}</span>
                </li>

                <li>
                    <ul>
                        <li>
                            <span>100</span>
                            <label>consultas débitos</label>
                        </li>
                        <li>
                            <span>50</span>
                            <label>emissões de 2ª via da fatura</label>
                        </li>
                        <li>
                            <span>100</span>
                            <label>solicitações</label>
                        </li>
                        <li>
                            <span>20</span>
                            <label>reclamações</label>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="grafico"></div>
        </div>
    )
};

export default DashboardCardIndicator;
