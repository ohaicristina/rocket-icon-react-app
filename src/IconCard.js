import React from 'react';

export function IconCard({
  iconName,
  isBrandCategory,
  iconDescription,
  isDeprecated,
  url
})

{
  return (
    <li className="icon-container">
      <i className={`fa${isBrandCategory ? 'b' : 's'} fa-${iconName}`} />
      <h4>{iconName}</h4>
      <p>{iconDescription}</p>
      {isDeprecated &&
        <div className="deprecated-label">Deprecated icon</div>
      }
      { url.split(".").pop() === "mp4" &&
        <video loop autoPlay muted>
          <source src={ url } type="video/mp4"/>
        </video>
      }
      { url.split(".").pop() !== "mp4" &&
        <img src={url} />
      }
    </li>
  )
}
