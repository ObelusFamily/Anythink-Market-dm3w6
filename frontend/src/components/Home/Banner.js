import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import logo from '../../imgs/logo.png';
import { ITEM_FILTER_BY_TITLE } from '../../constants/actionTypes';
import agent from '../../agent';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setItemsByTitle: (payload) =>
    dispatch({ type: ITEM_FILTER_BY_TITLE, payload }),
});

const Banner = ({ setItemsByTitle }) => {
  const [canSearch, setCanSearch] = useState(false);
  const [searchWord, setSearchWord] = useState('');

  const handleChange = async (e) => {
    if (e.target.value.length > 2) {
      setCanSearch(true);
    }

    setSearchWord(e.target.value);
  };

  const setItems = async () => {
    if (canSearch) {
      const payload = await agent.Items.byTitle(searchWord);
      setItemsByTitle(payload);
    }
  };

  useEffect(() => {
    setItems();
  }, [canSearch, searchWord]);

  return (
    <div className='banner text-white'>
      <div className='container p-4 text-center'>
        <img src={logo} alt='banner' />
        <div>
          <span>A place to </span>
          <span id='get-part'>
            get{' '}
            <input
              id='search-box'
              type='text'
              placeholder='What is it that you truly desire?'
              onChange={handleChange}
            />
          </span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
