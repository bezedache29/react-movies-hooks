import { useState } from 'react';
import axios from 'axios';

const useLoadData = () => {

  const [data, setData] = useState([])

  const loadData = (route) => {
    axios.get(route)
    .then(res => {
      console.log(res.data.results)
      setData(res.data.results)
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  return [data, loadData]
}

export default useLoadData;