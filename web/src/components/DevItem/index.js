import React from 'react';

import './styles.css';

function DevItem(props) {

  const { dev } = props;
  return (
    <li className="dev-item">
      <header>
        <img src="{dev.avatar_url}" alt=""/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
          <p>Descrição</p>
          <a href={`https://github.com/${dev.github_username}`}></a>
        </div>
      </header>
    </li>
  );
};

export default DevItem;