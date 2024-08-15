import React from 'react';

export default function Main() {
  const test = false;
  if (test) {
    throw new Error('Main Fail');
  } else {
    return <main className="content">Main</main>;
  }
}
