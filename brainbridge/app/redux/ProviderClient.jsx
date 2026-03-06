"use client";
import React from 'react';
import { Provider } from 'react-redux';
import store from './api/Features/store';

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
