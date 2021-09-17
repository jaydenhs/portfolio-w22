// shadow password modal

import React, { useState } from 'react';
import { siteMetadata } from '@root/gatsby-config';
import AutoLink from '@components/auto-link';
import { setSessionPassword } from '@mkitio/gatsby-theme-password-protect/src/utils/utils';

const styles = {
  button: {
    width: '100%',
    height: '48px',
    background: 'rebeccapurple',
    color: '#fff',
    border: '1px solid rebeccapurple',
    borderRadius: '4px',
    marginTop: '16px',
    textTransform: 'uppercase',
  },
  buttonHover: {
    background: '#fff',
    color: '#000000',
  },
  link: {
    color: '#fff',
    fontFamily: 'sans-serif',
  },
  linkHover: {
    color: 'dodgerblue',
  },
};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);
  const [isThemeHovered, themeHover] = useState(false);
  const [isSiteHovered, siteHover] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div className="h-screen bg-gray-700 flex flex-col justify-center items-center text-white">
      <h4>Locked case study</h4>
      <h1 className="mb-4">Enter password</h1>

      <form onSubmit={onSubmit} style={{ width: '320px' }}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="pl-4 text-black w-full h-12 rounded-md"
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null),
          }}
          className="mb-4"
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          Enter
        </button>

        <p className="text-center text-opacity-90 whitespace-pre-line">
          Password is available on my resume,
          <br />
          or
          <AutoLink to={siteMetadata.social.email}> through email</AutoLink>
        </p>
      </form>
    </div>
  );
};

export default PasswordProtect;
