import React from 'react';
import DashboardCardList from './DashboardCardList';
import LiItem from '../utils/LiItem';

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
                            dashboardCard.secundario.texto &&
                            <span>{dashboardCard.secundario.texto}</span>
                        }
                        {
                            dashboardCard.secundario.titulo &&
                            <label>{dashboardCard.secundario.titulo}</label>
                        }

                        <DashboardCardList lista={dashboardCard.secundario.lista} />
                    </li>
                }

                <li>
                    {
                        dashboardCard.primeiraSecao &&
                        (
                            <ul>
                                {
                                    dashboardCard.primeiraSecao.map((item) =>
                                        <LiItem item={item} />
                                    )
                                }
                                {
                                    dashboardCard.primeiraSecaoVertical &&
                                    <li className="vertical">
                                        <DashboardCardList lista={dashboardCard.primeiraSecaoVertical} />
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
