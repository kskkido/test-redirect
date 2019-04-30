import React from 'react';

const {
  Provider,
  Consumer,
} = React.createContext({
  values: {},
  setFormValue: () => null,
})

export {
  Provider,
  Consumer
}