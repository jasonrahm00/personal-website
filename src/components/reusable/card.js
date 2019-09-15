import React from 'react';
  
function Card({data}) {

  const cardLinks = data.links.length ? (
    data.links.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>)
    ) : '';

  return(
    <section className="row">
      <div className="col s12 m7">
        {
          data.image.url ? (
            <div className="card-image">
              <img src="" alt="missing"/>
            </div>
          ) : ''
        }   
        <div className="card-content">
          <header>
            {data.title ? (<h3 className="card-title">{data.title}</h3>) : ''}
          </header>
          {data.description ? (<p>{data.description}</p>) : ''}
        </div>
        {
          cardLinks.length ? (
            <div className="card-action">
              {cardLinks}
            </div>
          ) : ''
        }
      </div>
    </section>
  )
}

export default Card;
