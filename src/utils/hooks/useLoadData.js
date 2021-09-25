import { useState } from 'react';
import axios from 'axios';

const useLoadData = () => {

  const [data, setData] = useState([])

  const loadData = (route, id = null) => {
    axios.get(route)
    .then(res => {
      console.log(res.data.results)

      let items = []

      if (id && id !== 'all') {

        res.data.results.forEach(element => {
          element.genre_ids.forEach(el => {
            if (el === id) {
              items.push(element)
            }
          });
        });

        setData(items)
      } else {
        setData(res.data.results)
      }
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  return [data, loadData]
}

export default useLoadData;