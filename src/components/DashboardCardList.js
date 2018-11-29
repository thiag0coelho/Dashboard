import React from 'react';
import LiItem from '../utils/LiItem';

const DashboardCardList = (props) => {
    const { lista } = props;
    return (
        lista ? (
            <ul>
                {lista.map((item) => <LiItem key={item.id} item={item} />)}
            </ul >
        )
            : null
    )
}

export default DashboardCardList;