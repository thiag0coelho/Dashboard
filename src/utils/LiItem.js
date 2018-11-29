import React from 'react';

const LiItem = (props) => {
    const { item } = props;
    return <li key={item.id} className={item.classe}>
        <span>{item.titulo}</span>
        <label>{item.texto}</label>
    </li>;
}

export default LiItem;
