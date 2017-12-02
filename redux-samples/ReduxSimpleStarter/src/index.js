import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDv9mjWf9rxiqPZWe2TAzi4_G4V63i3TQU';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data)
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
