import React from 'react';

export function IconCard({
  iconName,
  isBrandCategory,
  iconDescription,
  isDeprecated,
  url
})

{

  const urlExtension = url.split(".").pop();

  return (
    <li className="icon-container">
      <div className="icon-container-heading">
        <i className={`fa${isBrandCategory ? 'b' : 's'} fa-${iconName}`} />
        <h4>{iconName}</h4>
      </div>
      <p>{iconDescription}</p>
      {isDeprecated &&
        <div className="deprecated-label">Deprecated icon</div>
      }
      { urlExtension === ("mp4" || "webm") &&
        <video loop autoPlay muted>
          <source src={ url } type="video/mp4"/>
        </video>
      }
      { urlExtension !== ("mp4" || "webm") &&
        <img src={url} />
      }
    </li>
  )
}
