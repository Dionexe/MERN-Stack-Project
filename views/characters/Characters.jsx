const React = require("react");
const Default = require("../Default");

function character() {
  return (
    <Default>
      <main>
        <h1>Choose Your Character</h1>
        <div>
          <img />
          <div className="form-group">
            <label htmlFor="Hero Search">Search For A Hero</label>
            <input className="form-control" id="search" name="search" />
          </div>
        </div>
        <a href="/characters">
          <button className="btn-primary">SEARCH</button>
        </a>
      </main>
    </Default>
  );
}

module.exports = character;
