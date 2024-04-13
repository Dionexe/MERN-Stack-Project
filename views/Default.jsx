const React = require("react");

const Default = (html) => {
  return (
    <html>
      <head>
        <title> Rate A Character </title>
        <link rel='stylesheet' href='/css/style.css' />
      </head>
      <body>
      <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/characters'>Characters</a>
                        </li>
                        <li>
                            <a href='/characters/ratings'>Ratings</a>
                        </li>
                    </ul>
                </nav>
       <h1> Placeholder_Text </h1> 
      </body>
    </html>
  );
};

module.exports = Default