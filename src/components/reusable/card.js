import React from 'react';
  
function Card({data}) {

  const cardLinks = data.links.length ? (
    data.links.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>)
    ) : '';

  return(
    <section>
        {
          data.image.url ? (
            <img src="" alt="missing"/>
          ) : ''
        }   
        <div>
          <header>
            {data.title ? (<h3>{data.title}</h3>) : ''}
          </header>
          {data.description ? (<p>{data.description}</p>) : ''}
        </div>
        {
          cardLinks.length ? (
            <div>
              {cardLinks}
            </div>
          ) : ''
        }
    </section>
  )
}

export default Card;
